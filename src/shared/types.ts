export enum SelectedPage {
    Home = "home",
    Benefits = "benefits",
    OurClasses = "ourclasses",
    ContactUs = "contactus"
  }
  
  
 export type Props = {
    setSelectedPage: (value: SelectedPage) => void
};