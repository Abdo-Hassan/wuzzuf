export interface singleSkill {
  data: Data;
}

export interface Data {
  skill: SkillProperty;
}

export interface SkillProperty {
  id?: string;
  type?: string;
  attributes?: Attributes;
  relationships?: Relationships;
}

export interface Attributes {
  name?: string;
  type?: string;
  importance?: string;
  level?: string;
}

export interface Relationships {
  jobs?: SkillJobs[];
  skills: SkillJobs[];
}

export interface SkillJobs {
  id?: string;
}
