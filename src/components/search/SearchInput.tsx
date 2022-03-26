import axios from 'axios';
import { ChangeEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchIcon from '../../assets/search.png';
import { allJobs, Job } from '../../generatedTypes/jobsTypes';
import { fetchJobs, fetchSearchJobs } from '../../redux/actions/jobsActions';
import './search.css';

interface State {
  search: string;
}

const SearchInput = () => {
  const dispatch = useDispatch();
  const search = useSelector((state: State) => state.search);

  // fetch all jobs
  const fetchJobsData = async () => {
    try {
      const res = await axios.get<allJobs>(
        `https://skills-api-zeta.vercel.app/jobs/search?query=${search}`
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

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;
    dispatch(fetchSearchJobs(search));
    if (search?.length > 3) {
      fetchJobsData();
    }
  };

  return (
    <div className='input-wrapper'>
      <input
        placeholder='search keyword'
        className='input'
        onChange={handleSearch}
        value={search}
      />
      <img className='search' src={SearchIcon} alt='search' />
    </div>
  );
};

export default SearchInput;
