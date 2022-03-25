import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { singleSkill, SkillJobs } from '../../generatedTypes/singleSkill';
import { fetchSingleSkillJobs } from '../../redux/actions/jobsActions';
import axios from 'axios';
import SkillJobsList from '../../components/skills/SkillJobsList';
import RelatedSkills from '../../components/skills/RelatedSkills';
import './skill.css';
import '../../App.css';

// interface State {
//   jobs: SkillJobs[];
// }

type LocationState = {
  state: {
    skillName: string;
  };
};

const Skill = () => {
  const { skillId } = useParams();
  const params = useLocation();
  const { state } = params as LocationState;

  const dispatch = useDispatch();
  const [jobs, setJobs] = useState<SkillJobs[]>([]);
  const [relatedSkills, setRelatedSkills] = useState<SkillJobs[]>([]);
  // FIXME:replace useState with useSelector
  // const jobs = useSelector((state: State) => state.jobs);

  // fetch job related skills
  const fetchSingleSkillJobsData = async () => {
    try {
      const res = await axios.get<singleSkill>(
        `https://skills-api-zeta.vercel.app/skill/${skillId}`
      );

      if (res?.data) {
        const skillData: singleSkill = res?.data;
        const jobs: SkillJobs[] = skillData?.data?.skill.relationships?.jobs!;
        const relatedSkills: SkillJobs[] =
          skillData?.data?.skill.relationships?.skills!;
        setJobs(jobs);
        setRelatedSkills(relatedSkills);
        dispatch(fetchSingleSkillJobs(jobs));
      }
      return res?.data;
    } catch (error) {
      console.log('fetchSingleJobSkills error', error);
    }
  };

  useEffect(() => {
    fetchSingleSkillJobsData();
  }, [skillId]);

  return (
    <div className='skill-main'>
      <h1 className='skill-main-title'>{state?.skillName}</h1>

      <div className='skill-wrapper'>
        <div className='skill-details'>
          <h3 className='skill-description'>Description :</h3>
          {/* FIXME:replace with skill description */}
          <p className='skill-description-content'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
            numquam sit voluptatem quo praesentium vitae voluptates, in eius
            aperiam ea quae architecto veritatis sint doloribus. Dolorum,
            perspiciatis. Porro, natus beatae?
          </p>

          <h3 className='related-jobs'>Related Jobs :</h3>

          {/* full list of skill jobs */}
          {jobs && jobs?.length > 0 ? (
            jobs?.map((job, i) => <SkillJobsList key={i} job={job} />)
          ) : (
            <div className='loader'></div>
          )}
        </div>
        <div className='related-skills-wrapper'>
          <h3 className='related-skills-title'>Related Skills:</h3>

          {relatedSkills && relatedSkills?.length > 0 ? (
            relatedSkills?.map((skills, i) => (
              <RelatedSkills key={i} skills={skills} />
            ))
          ) : (
            <div className='loader'></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skill;
