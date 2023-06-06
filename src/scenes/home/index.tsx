import { SelectedPage } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    setSelectedPage: (value: SelectedPage) => void
};

const Home = (setSelectedPage: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section
        id="home"
        className='gap-16 bg-gray-20 py-10 md:h-full md:pb-10'
    >
        <div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'>
           <div className='z-10 mt-32 md:basis-3/5'>
                <div className='md:-mt-20'>
                    <div className='relative'>
                        <div className='before:absolute before:-top-20 md:before:content-evolvetext before:-left-20 before:z-[-1]'>
                            <img alt='home-page-text' src={HomePageText}/>
                        </div>
                    </div>
                       <p className='mt-8 text-sm'>
                       Unlock Your Potential with Our Gym Fitness Website!
                            Are you ready to transform your body, boost your energy levels, and achieve your fitness goals? Look no further! Welcome to our cutting-edge gym fitness website, where we provide you with everything you need to embark on your journey to a healthier, stronger, and more confident you.
                       </p>
                </div>
               <div className='mt-8 flex items-center gap-8'>
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Join Now
                    </ActionButton>
                    <AnchorLink
                        className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
                        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                        href={`#${SelectedPage.ContactUs }`}
                        > 
                            <p>Learn More</p>
                        </AnchorLink>
               </div> 
           </div>
           <div>
                <img alt='home-page-graphic' src={HomePageGraphic} />
           </div>
        </div>
        {isAboveMediumScreens && (
            <div>
                <div>
                   <div>
                        <img alt='redbull-sponsor' src={SponsorRedBull} />
                        <img alt='forbes-sponsor' src={SponsorForbes} />
                        <img alt='fortune-sponsor' src={SponsorFortune} />
                    </div> 
                </div>
            </div> 
        )}
    </section>
  )
}

export default Home;