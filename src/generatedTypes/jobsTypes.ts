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
  meta: Meta;
}

export interface Job {
  id: string;
  type: Type;
  attributes: Attributes;
  relationships: Relationships;
}

export interface Attributes {
  title: string;
}

export interface Relationships {
  skills: Skill[];
}

export interface Skill {
  id?: string;
}

export enum Type {
  Job = 'job',
}

export interface Meta {
  next: number;
  count: number;
}
