export interface Cv {
  companyName: string;
  from: Date;
  to?: Date;
  isCurrent?: boolean;
  positions: CvPosition[];
}

export interface CvPosition {
  name: string;
  from: Date;
  to?: Date;
  isCurrent?: boolean;
}
