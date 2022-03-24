import { useEffect } from 'react';
import SearchInput from '../components/search/SearchInput';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../redux/actions/jobsActions';
import { allJobs, Job } from '../generatedTypes/jobsTypes';
import Jobs from '../components/jobs/Jobs';
import axios from 'axios';
import '../App.css';

interface State {
  jobs: Job[];
}

const Home = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state: State) => state.jobs);

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
      return jobs;
    } catch (error) {
      console.log('fetchJobs error', error);
    }
  };

  useEffect(() => {
    fetchJobsData();
  }, []);

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
