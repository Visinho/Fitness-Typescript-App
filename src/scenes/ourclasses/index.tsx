import { ClassType, SelectedPage } from '@/shared/types';
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from 'framer-motion';
import HText from '@/shared/HText';
import Class from "./Class";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const classes: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description: "Unleash your strength with our invigorating weight training classes. Led by experienced instructors, these dynamic sessions are designed to help you build muscle, improve endurance, and enhance overall fitness. Whether you're a beginner or an advanced lifter, our classes offer expert guidance, proper form instruction, and a supportive environment. Join us and take your strength training to new heights.",
        image: image1
    },
    {
        name: "Cardio Kickboxing Classes",
        description: "Get your heart pumping and unleash your inner warrior with our Cardio Kickboxing class. Led by experienced instructors, this high-energy workout combines martial arts-inspired movements with cardio exercises to boost endurance, burn calories, and improve overall fitness. Punch, kick, and sweat your way to a stronger body and increased self-confidence. Join us and experience the thrill of Cardio Kickboxing!",
        image: image2
    },
    {
        name: "Pilates Classes",
        description: "Discover the transformative power of Pilates in our dynamic and engaging classes. Led by skilled instructors, Pilates strengthens your core, improves flexibility, and enhances body awareness through precise movements. Experience the benefits of improved posture, increased muscle tone, and a balanced mind-body connection. Join our Pilates classes and embark on a journey of strength, alignment, and overall well-being.",
        image: image3
    },
    {
        name: "Spinning/Cycling Classes",
        description: "Pedal your way to fitness and exhilaration with our Spinning/Cycling classes. Led by motivating instructors, these high-energy indoor cycling sessions combine upbeat music, interval training, and simulated rides to challenge your cardiovascular endurance and strengthen your lower body. Join us for an adrenaline-pumping workout that burns calories, increases stamina, and leaves you feeling empowered. Get ready to ride your way to new levels of fitness!",
        image: image4
    },
    {
        name: "Zumba Classes",
        description: "Get ready to dance, sweat, and have a blast with our Zumba classes! Led by energetic instructors, Zumba combines Latin and international music with fun and easy-to-follow dance moves. Burn calories, improve coordination, and boost your mood as you move to the infectious rhythms. Join our Zumba classes for a workout that feels more like a party, and let the music move you to a healthier, happier you!",
        image: image5
    },
    {
        name: "Ignite your fitness potential with our High-Intensity Interval Training (HIIT) classes. Experience the power of short bursts of intense exercise followed by brief recovery periods, pushing your limits and maximizing calorie burn. With a mix of cardio and strength exercises, our HIIT classes are designed to boost metabolism, improve endurance, and sculpt your body. Join us for an exhilarating workout that delivers results in less time.",
        image: image6
    }
]

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id= "ourclasses" className='w-full bg-primary-100 py-40'>
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        >
            <motion.div
                className='mx-auto w-5/6'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 1.0, duration: 2.0 }}
                variants={{ 
                hidden: { opacity: 0, x: 50},
                visible: { opacity: 1, x: 0}
            }}
            >

                <div className='md:w-3/5'>
                    <HText>OUR CLASSES</HText>
                    <p className='py-5'>
                        Our gym offers a diverse range of exhilarating classes designed to ignite your passion for fitness. From high-intensity cardio workouts to strength-building sessions and mind-body practices like yoga, our expert-led classes cater to all fitness levels and interests. Join our energetic community, challenge yourself, and experience the transformative power of group fitness.
                    </p>
                </div>
            </motion.div>

            <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
                <ul className='w-[2800px] whitespace-nowrap'>
                    {classes.map((item: ClassType, index) => (
                        <Class 
                            key={`${item.name}-${index}`}
                            name={item.name}
                            description={item.description}
                            image={item.image}
                        />
                    ))}
                </ul>
            </div>

        </motion.div>
    </section>
  )
}

export default OurClasses;