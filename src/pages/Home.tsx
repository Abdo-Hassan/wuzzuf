import React, { useEffect } from 'react';
import SearchInput from '../components/search/SearchInput';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobsAction } from '../redux/actions/jobsActions';
import { IAllData, IJobs } from '../interfaces/interfaces';

const Home = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs);

  // fetch all jobs
  const fetchJobs = async () => {
    try {
      const res = await axios.get<IAllData>(
        'https://skills-api-zeta.vercel.app/'
      );
      const data: IAllData = res?.data;
      const jobs: IJobs[] = data?.data?.jobs;

      dispatch(fetchJobsAction(jobs));
      return jobs;
    } catch (error) {
      console.log('fetchJobs error', error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  console.log('jobs', jobs);

  return (
    <div>
      <SearchInput />
    </div>
  );
};

export default Home;
