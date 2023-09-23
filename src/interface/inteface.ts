export interface ProjectData {
  name: string;
  shortName: string;
  slug: string;
  images?: Image[];
  description?: Description[];
}

export interface Image {
  fileUrl: string;
  fileName: string;
  fileType: string;
  title: string;
}

export interface Description {
  value: string[];
}

export interface ProjectsList {
  projects: ProjectData[];
}
