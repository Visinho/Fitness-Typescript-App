import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer>
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img alt="logo" src={Logo} />
                <p className="my-5">
               "Transform your fitness journey with our premier gym offering state-of-the-art facilities and expert trainers."
                </p>
                <p>
                    "Copyright © 2023 VISINHO. All rights reserved. 
                </p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <p className="my-5">We go hard</p>
                <p className="my-5">doing hard things</p>
                <p>Ready to go... Greatness awaits you</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Contact Us</h4>
                <p className="my-5">ElvisVisinho</p>
                <p className="my-5">Website creation and maintenance. We do our best and leave the rest! What are you waiting for?</p>
                <p>+234 1234567890</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer;