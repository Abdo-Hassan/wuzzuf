import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { singleSkill, SkillJobs } from '../../generatedTypes/singleSkill';
import { singleJob, jobSkill } from '../../generatedTypes/jobsTypes';
import axios from 'axios';
import SkillOrJobsList from '../../components/skills/SkillOrJobsList';
import RelatedSkillsOrJob from '../../components/skills/RelatedSkillsOrJob';
import './skillOrJob.css';
import '../../App.css';

// interface State {
//   jobs: SkillJobs[];
// }

type LocationState = {
  state: {
    name: string;
  };
};

const SkillOrJob = () => {
  const { skillId, jobId } = useParams();
  const params = useLocation();
  const { state } = params as LocationState;
  const [relatedList, setRelatedList] = useState<SkillJobs[] | jobSkill[]>([]);
  const [relatedSideBar, setRelatedSideBar] = useState<SkillJobs[]>([]);

  // const dispatch = useDispatch();
  // FIXME:replace useState with useSelector
  // const jobs = useSelector((state: State) => state.jobs);

  // fetch Skill Data
  const fetchSkillData = async () => {
    try {
      const res = await axios.get<singleSkill>(
        `https://skills-api-zeta.vercel.app/skill/${skillId}`
      );

      if (res?.data) {
        const skillData: singleSkill = res?.data;
        const jobs: SkillJobs[] = skillData?.data?.skill.relationships?.jobs!;
        const relatedSkills: SkillJobs[] =
          skillData?.data?.skill.relationships?.skills!;
        setRelatedList(jobs);
        setRelatedSideBar(relatedSkills);
        //  dispatch(fetchSingleSkillJobs(jobs));
      }
      return res?.data;
    } catch (error) {
      console.log('fetchSingleJobSkills error', error);
    }
  };

  // fetch job Data
  const fetchJobData = async () => {
    try {
      const res = await axios.get<singleJob>(
        `https://skills-api-zeta.vercel.app/job/${jobId}`
      );

      if (res?.data) {
        const skillData: singleJob = res?.data;
        const skills: jobSkill[] = skillData?.data?.job.relationships?.skills!;
        setRelatedList(skills);
        //  dispatch(fetchSingleSkillJobs(jobs));
      }
      return res?.data;
    } catch (error) {
      console.log('fetchSingleJobSkills error', error);
    }
  };

  useEffect(() => {
    if (skillId) {
      fetchSkillData();
    } else {
      fetchJobData();
    }
  }, [skillId]);

  return (
    <div className='skill-or-job-main'>
      <h1 className='skill-or-job-main-title'>{state?.name!}</h1>

      <div className='skill-or-job-wrapper'>
        <div className='skill-or-job-details'>
          {skillId && (
            <>
              <h3 className='skill-or-job-description'>Description :</h3>
              {/* FIXME:replace with skill description if exist in the API */}
              <p className='skill-or-job-description-content'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
                numquam sit voluptatem quo praesentium vitae voluptates, in eius
                aperiam ea quae architecto veritatis sint doloribus. Dolorum,
                perspiciatis. Porro, natus beatae?
              </p>
            </>
          )}

          <h3 className='related-jobs'>
            {skillId ? 'Related Jobs :' : 'Related Skills :'}
          </h3>

          {/* full list */}
          {relatedList && relatedList?.length > 0 ? (
            relatedList?.map((relatedSingleList: SkillJobs | jobSkill, i) => (
              <SkillOrJobsList
                key={i}
                skillId={skillId!}
                relatedSingleList={relatedSingleList}
              />
            ))
          ) : (
            <div className='loader'></div>
          )}
        </div>

        {/* related list */}
        {/* FIXME:add related jobs if exist in the API */}
        {skillId && (
          <div className='related-skills-wrapper'>
            <h3 className='related-skills-title'>
              {skillId ? 'Related Skills :' : 'Related Jobs :'}
            </h3>

            {relatedSideBar && relatedSideBar?.length > 0 ? (
              relatedSideBar?.map(
                (relatedSideBarLink: SkillJobs | jobSkill, i) => (
                  <RelatedSkillsOrJob
                    key={i}
                    relatedSideBarLink={relatedSideBarLink}
                  />
                )
              )
            ) : (
              <div className='loader'></div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillOrJob;
