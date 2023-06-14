export enum SelectedPage {
    Home = "home",
    Benefits = "benefits",
    OurClasses = "ourclasses",
    ContactUs = "contactus"
  }
  
  
 export type Props = {
    setSelectedPage: (value: SelectedPage) => void
};

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  image: string;
  description?: string;
}