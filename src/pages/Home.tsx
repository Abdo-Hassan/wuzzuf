import React, { useEffect, useState } from 'react';
import SearchInput from '../components/search/SearchInput';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobsAction } from '../redux/actions/jobsActions';
import { IAllJobsData, IJobs } from '../interfaces/interfaces';
import Jobs from '../components/jobs/Jobs';
import axios from 'axios';
import '../App.css';

const Home = () => {
  const [jobs, setJobs] = useState<IJobs[]>([]);
  const dispatch = useDispatch();
  // const jobs = useSelector((state) => state.jobs);

  // fetch all jobs
  const fetchJobs = async () => {
    try {
      const res = await axios.get<IAllJobsData>(
        'https://skills-api-zeta.vercel.app/?limit=32'
      );
      const data: IAllJobsData = res?.data;
      const jobs: IJobs[] = data?.data?.jobs;

      dispatch(fetchJobsAction(jobs));
      setJobs(jobs);
      return jobs;
    } catch (error) {
      console.log('fetchJobs error', error);
    }
  };

  useEffect(() => {
    fetchJobs();
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
