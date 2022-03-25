export interface allJobs {
  data: Data;
}

export interface Data {
  jobs: Job[];
  meta: Meta;
}

export interface singleJob {
  data: singleData;
}

export interface singleData {
  job: Job;
}

export interface Job {
  id?: string;
  type?: Type;
  attributes?: JobAttributes;
  relationships?: Relationships;
}

export interface JobAttributes {
  title?: string;
}

export interface Relationships {
  skills: jobSkill[];
}

export interface jobSkill {
  id?: string;
}

export enum Type {
  Job = 'job',
}

export interface Meta {
  next: number;
  count: number;
}
