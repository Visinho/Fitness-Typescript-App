import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs = ({ setSelectedPage }: Props) => {

    const { register, trigger, formState: {errors} } = useForm();

    const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if(!isValid){
            e.preventDefault();
        }
    }

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
            <motion.div
                className="md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 1.0, duration: 2.0 }}
                variants={{ 
                    hidden: { opacity: 0, x: -50},
                    visible: { opacity: 1, x: 0}
                }}
            >
                <HText>
                    <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
                </HText>
                <p className="my-5">
                    Join now to get in shape and embark on a transformative fitness journey. Our program offers expert guidance, personalized workouts, and a supportive community that will empower you to achieve your fitness goals. Take the first step towards a healthier, stronger you. Don't wait, start your fitness transformation today!
                </p>
            </motion.div>
                <div className="mt-10 justify-between gap-8 md:flex">
                    <motion.div 
                        className="mt-10 basis-3/5 md:mt-10"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 1.0, duration: 2.0 }}
                        variants={{ 
                            hidden: { opacity: 0, y: 50},
                            visible: { opacity: 1, y: 0}
                        }}
                    >
                        <form
                            target="_blank"
                            onSubmit={onSubmit}
                            method="POST"
                            action="https://formsubmit.co/Elvisvisinho@rocketmail.com"
                        >
                            <input />
                        </form>
                    </motion.div>
                </div>
        </motion.div>
    </section>
  )
}

export default ContactUs