export interface Education {
  id?: number;
  userId?: number;
  name: string;
  school: string;
  finishDate: Date;
  type: EducationType;
  level: EducationTraining | EducationUniversity;
}

export enum EducationType {
  TRAINING = 'Certificate Higher Education',
  UNIVERSITY = 'University Education',
}

export enum EducationTraining {
  HNC = 'Certificate of Higher Education',
  VET = 'Vocational Education and Training',
}

export enum EducationUniversity {
  BACHELOR = 'Bachelor’s Degree (3 years)',
  GRADUATE1 = 'University Degree (4 years)',
  GRADUATE2 = 'University Degree (5 years)',
  ENGINEER = 'Engineer’s Degree',
  MASTER = 'Master Degree',
  PHD = 'Doctorate (PhD)',
}
