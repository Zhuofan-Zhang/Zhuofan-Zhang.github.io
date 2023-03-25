export enum SelectedPage {
  Home = "home",
  Experiences = "experiences",
  Portfolios = "portfolios",
  Blogs = "blogs",
  Contacts = "contacts"
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
