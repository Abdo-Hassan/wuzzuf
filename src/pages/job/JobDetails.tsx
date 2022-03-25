import { useParams } from 'react-router-dom';

const JobDetails = () => {
  let { jobId } = useParams();

  return (
    <>
      <p>jobId: {jobId}</p>
    </>
  );
};

export default JobDetails;
