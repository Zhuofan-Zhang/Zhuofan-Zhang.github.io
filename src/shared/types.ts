export enum SelectedPage {
  Home = "home",
  Experiences = "experiences",
  Portfolios = "portfolios",
  Blogs = "blogs",
  Contacts = "contacts"
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}

export const educationExperience = [
  {
    title: 'Univerisity of Maryland',
    description: 'Aug 2019 - Dec 2020',
  },
  {
    title: 'University of California, Los Angeles',
    description: 'Aug - Sep 2017',
  },
  {
    title: 'East China Normal University',
    description: 'Sep 2015 - Jun 2019',
  }
];

export const workExperience = [
  {
    title: 'Thoughtworks',
    position: 'Software Developer',
    description: 'Aug 2019 - Dec 2020',
  },
  {
    title: 'Tencent',
    position: 'Data Analysis Intern',
    description: 'Aug - Sep 2017',
  }
];
