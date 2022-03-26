import { useEffect } from 'react';
import SearchInput from '../components/search/SearchInput';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../redux/actions/jobsActions';
import { allJobs, Job } from '../generatedTypes/jobsTypes';
import Jobs from '../components/jobs/Jobs';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

interface State {
  jobs: Job[];
  search: string;
}

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jobs = useSelector((state: State) => state.jobs);
  const search = useSelector((state: State) => state.search);

  // fetch all jobs
  const fetchJobsData = async () => {
    try {
      const res = await axios.get<allJobs>(
        'https://skills-api-zeta.vercel.app/jobs'
      );
      if (res?.data) {
        const data: allJobs = res?.data;
        const jobs: Job[] = data?.data?.jobs;
        dispatch(fetchJobs(jobs));
      }
      return res?.data;
    } catch (error) {
      console.log('fetchJobs error', error);
    }
  };

  useEffect(() => {
    if (search?.length > 3) {
      navigate('/search');
    } else {
      navigate('/');
      fetchJobsData();
    }
  }, [search]);

  return (
    <>
      <SearchInput />
      {/* full list of jobs */}
      {jobs && jobs?.length > 0 ? (
        <Jobs jobs={jobs} />
      ) : (
        <div className='loader'></div>
      )}
    </>
  );
};

export default Home;
