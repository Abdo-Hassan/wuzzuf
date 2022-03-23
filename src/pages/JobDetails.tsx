import { useParams } from 'react-router-dom';

const JobDetails = () => {
  let { jobId } = useParams();
  console.log('~ jobId', jobId);

  return (
    <>
      <p>jobId: {jobId}</p>
    </>
  );
};

export default JobDetails;
