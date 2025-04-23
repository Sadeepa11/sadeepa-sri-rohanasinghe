'use client';

import BlurText from "../blocks/Animations/TextAnimations/BlurText/BlurText";
import RotatingText from "../blocks/Animations/TextAnimations/RotatingText/RotatingText";
import Image from 'next/image';
import ContactDetails from "../Components/ContactDetails";
import LocationDisplay from '../Components/LocationDisplay';

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

function Me() {
  return (
    <div className="w-full px-4 flex flex-col items-center space-y-10">

      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8">

        {/* Left Side (Image Section) */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center space-y-10">
          <div className="border-8 border-cyan-300 rounded-full overflow-hidden w-[250px] h-[250px] sm:w-[300px] sm:h-[300px]">
            <Image
              src="/assets/me.jpg"
              alt="Sadeepa Sri Rohanasinghe"
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>

   
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3 text-center">
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">I am</span>
              <RotatingText
                texts={['Sadeepa', 'Web Developer', 'Freelancer', 'Positive Thinker', 'Quick Learner']}
                mainClassName="text-3xl sm:text-4xl md:text-5xl font-bold px-3 bg-cyan-300 text-black overflow-hidden py-1 rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>

          <div className="flex items-center justify-center text-white font-bold text-xl">
   
<LocationDisplay/>

          </div>
        </div>

        {/* Right Side (Rotating + ContactDetails Section) */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center px-4 space-y-8">

          

          {/* Contact Details — show second on small devices */}
          <div className="order-2 md:order-1 w-full max-w-xl">
            <ContactDetails />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Me;
