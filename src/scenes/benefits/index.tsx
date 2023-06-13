import HText from "@/shared/HText";
import { BenefitType, Props, SelectedPage } from "@/shared/types";
import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";


// type Props = {
//     setSelectedPage: (value: SelectedPage) => void
// };

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.5}
    }
}

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description: "Experience the pinnacle of fitness at our gym with cutting-edge facilities. From advanced equipment to innovative training spaces, we provide everything you need to elevate your workouts and achieve your fitness goals."
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "Various Diverse Classes",
        description: "Discover a gym with an array of diverse classes tailored to your interests. From energizing spin sessions to calming yoga flows and high-intensity interval training, our classes offer something for everyone, ensuring you'll find the perfect fit for your fitness journey."
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro trainers",
        description: "Train with the best at our gym, where expert and pro trainers are dedicated to helping you reach your full potential. With their guidance and expertise, you'll receive personalized workouts, valuable insights, and the motivation you need to achieve your fitness goals."
    }
]

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section 
    id="benefits" 
    className="mx-auto min-h-full w-5/6 py-20">
     <motion.div
         onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
     >
         <motion.div 
            className="md:my-5 md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 1.0, duration: 2.0 }}
            variants={{ 
                hidden: { opacity: 0, x: -50},
                visible: { opacity: 1, x: 0}
            }}>
            <HText>
                 MORE THAN JUST A GYM...
            </HText> 
                 <p className="my-5 text-sm">
                 Get fit, strong, and healthy with XYZ Gym. Visit our website for state-of-the-art facilities, expert trainers, and diverse fitness programs. Start your fitness journey today!
                 </p>
            
         </motion.div>

         <motion.div 
            className="md:flex items-center justify-between gap-8 mt-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5}}
            variants={container}
            >
            {benefits.map((benefit: BenefitType) => (
                <Benefit 
                    key={benefit.title}
                    icon={benefit.icon}
                    title={benefit.title}
                    description={benefit.description}
                    setSelectedPage={setSelectedPage}
                    />
            ))}
         </motion.div>
     </motion.div>
    </section> 
  )

}

export default Benefits;