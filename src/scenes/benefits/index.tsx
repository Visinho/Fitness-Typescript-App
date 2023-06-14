import HText from "@/shared/HText";
import { BenefitType, Props, SelectedPage } from "@/shared/types";
import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";


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

         <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
            <img 
                className="mx-auto"
                alt="benefits-page-graphic"
                src={BenefitsPageGraphic}
            />

            <div>
                <div className="relative">
                    <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                        <motion.div
                             initial="hidden"
                             whileInView="visible"
                             viewport={{ once: true, amount: 0.5 }}
                             transition={{ delay: 1.0, duration: 2.0 }}
                             variants={{ 
                                 hidden: { opacity: 0, x: 50},
                                 visible: { opacity: 1, x: 0}
                             }}
                            >
                            <HText>MILLIONS OF HAPPY MEMBERS GETTING {" "}
                                <span className="text-primary-500">FIT</span>
                            </HText>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true, amount: 0.5 }}
                     transition={{ delay: 0.5, duration: 2.0 }}
                     variants={{ 
                         hidden: { opacity: 0, x: 50},
                         visible: { opacity: 1, x: 0}
                     }}
                >
                    <p className="my-5">
                        Unlock your fitness potential with our gym, trusted by millions of members worldwide. Our comprehensive online platform offers a multitude of workout options, from dynamic group classes to customizable training plans. Experience the convenience of on-demand fitness videos, live streaming sessions with top trainers, and interactive challenges that keep you motivated. With personalized progress tracking, nutrition guidance, and a supportive community, achieving your fitness goals has never been easier. Join our gym website today and join the millions who have transformed their lives, one workout at a time. Get fit, stay motivated, and thrive with us!
                    </p>
                    <p className="mb-5">
                        Elevate your fitness journey with our gym website, empowering millions of members worldwide to get fit and stay motivated. Enjoy unlimited access to a vast library of workout videos, expert-led classes, and personalized training plans. Track your progress, connect with a supportive community, and embrace a healthier lifestyle from the comfort of your own home. Join us today and unleash your full fitness potential.
                    </p>
                </motion.div>

                <div className="relative mt-16">
                    <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                        <ActionButton setSelectedPage={setSelectedPage}>JOIN NOW!</ActionButton>
                    </div>
                </div>

            </div>
         </div>

     </motion.div>
    </section> 
  )

}

export default Benefits;