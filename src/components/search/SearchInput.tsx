import { ChangeEvent, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import SearchIcon from '../../assets/search.png';
import { allJobs, Job } from '../../generatedTypes/jobsTypes';
import { fetchJobs, fetchSearchJobs } from '../../redux/actions/jobsActions';
import debounce from 'lodash.debounce';
import axios from 'axios';
import './search.css';

const SearchInput = () => {
  const dispatch = useDispatch();

  // fetch all jobs
  const fetchJobsData = async (search: string) => {
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

    if (search?.length > 3) {
      fetchJobsData(search.toLowerCase());
      dispatch(fetchSearchJobs(search));
    } else {
      dispatch(fetchSearchJobs(''));
    }
  };

  // debounce search results
  const debouncedChangeHandler = useCallback(debounce(handleSearch, 1000), []);

  return (
    <div className='input-wrapper' data-testid='input-test-wrapper'>
      <input
        placeholder='search keyword'
        className='input'
        data-testid='input-test-box'
        type='text'
        onChange={debouncedChangeHandler}
      />
      <img
        className='search'
        src={SearchIcon}
        alt='search'
        data-testid='input-test-icon'
      />
    </div>
  );
};

export default SearchInput;
