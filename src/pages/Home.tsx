import { useEffect, useState } from 'react';
import SearchInput from '../components/search/SearchInput';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs, fetchSearchJobs } from '../redux/actions/jobsActions';
import { allJobs, Job } from '../generatedTypes/jobsTypes';
import InfiniteScroll from 'react-infinite-scroll-component';
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
  const [page, setPage] = useState(12);
  const [loadingJobs, setLoadingJobs] = useState(true);
  const jobs = useSelector((state: State) => state.jobs);
  const search = useSelector((state: State) => state.search);

  // fetch all jobs
  const fetchJobsData = async () => {
    try {
      const res = await axios.get<allJobs>(
        `https://skills-api-zeta.vercel.app/jobs?limit=${page}`
      );
      if (res?.data) {
        const data: allJobs = res?.data;
        const jobs: Job[] = data?.data?.jobs;
        setLoadingJobs(false);
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
      navigate('/jobs');
      fetchJobsData();
    }
  }, [search]);

  useEffect(() => {
    fetchJobsData();
  }, [page]);

  useEffect(() => {
    dispatch(fetchSearchJobs(''));
  }, []);

  return (
    <>
      <SearchInput />

      {/* full list of jobs && search results*/}

      {search.length < 3 ? (
        !loadingJobs ? (
          <InfiniteScroll
            dataLength={jobs.length}
            next={() => setPage(page + 2)}
            hasMore={true}
            loader={
              search?.length > 3 ? <div></div> : <div className='loader'></div>
            }>
            <Jobs jobs={jobs} />
          </InfiniteScroll>
        ) : (
          <div className='loader'></div>
        )
      ) : (
        <Jobs jobs={jobs} />
      )}
    </>
  );
};

export default Home;
