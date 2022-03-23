export interface IAllData {
  data: IData;
}

export interface IData {
  jobs: IJobs[];
  meta: IMeta;
}

// jobs array
export interface IJobs {
  id?: string;
  type?: string;
  attributes?: IJobsAttributes;
  relationships?: IJobsSkills[];
}

// string array
interface IJobsSkills {
  id?: string;
}
// string array
interface IJobsAttributes {
  title?: string;
}

interface IMeta {
  next: string;
  count: string;
}
