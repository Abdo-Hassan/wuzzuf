export interface IAllJobsData {
  data: IJobsData;
}

export interface IJobsData {
  jobs: IJobs[];
  meta: IMeta;
}
export interface IAllJobData {
  data: IJobData;
}
export interface IJobData {
  job: IJobs;
}

export interface IJobs {
  id?: string;
  type?: string;
  attributes?: IJobsAttributes;
  relationships?: IJobsSkills[];
}

export interface IJobsSkills {
  id?: string;
}

export interface IJobsAttributes {
  title?: string;
}

export interface IMeta {
  next: string;
  count: string;
}

export interface IAllSkillsData {
  data: ISkillsData;
}

export interface ISkillsData {
  jobs: IJobs[];
  meta: IMeta;
}

export interface ISkillsAttributes {
  name?: string;
  type?: string;
  importance?: string;
  level?: string;
}

export interface ISkills {
  id?: string;
  type?: string;
  attributes?: IJobsAttributes;
  relationships?: ISkillsRelationships;
}

export interface ISkillsRelationships {
  jobs: ISkillsJobs[];
  skills: ISkillsRelatedSkills[];
}

interface ISkillsJobs {
  id?: string;
}

interface ISkillsRelatedSkills {
  id?: string;
}
