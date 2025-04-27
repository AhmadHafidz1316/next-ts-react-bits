import Image from "next/image";
import Lanyard from "./components/Lanyard/Lanyard";
import Dither from "./components/Dither/Dither";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import Particles from "./components/Particles/Particles";
import Iridescence from "./components/Iridescence/Iridescence";
import SplashCursor from "./components/SplashCursor/SplashCursor";

export default function Home() {
  return (
    <div className="h-screen overflow-hidden flex items-center justify-center p-10">
      <SplashCursor />
      <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-screen overflow-hidden">
        <Iridescence
          color={[1, 1, 1]}
          mouseReact={false}
          amplitude={0.1}
          speed={1.0}
        />
      </div>
      <div className="w-full h-screen flex items-center justify-start">
        {/* Center content vertically and horizontally */}
        <div className="grid grid-cols-12 w-full">
          <div className="col-span-12 sm:col-span-6 flex flex-col justify-center items-center">
            <div className="h-full flex flex-col justify-center items-start">
              <div className="flex items-center gap-4">
                <AnimatedContent
                  distance={150}
                  direction="horizontal"
                  reverse={false}
                  config={{ tension: 80, friction: 20 }}
                  initialOpacity={0.2}
                  animateOpacity
                  scale={1.1}
                  threshold={0.2}
                >
                  <div className="flex items-center gap-5">
                    <div className="font-bold text-2xl text-black">
                      I am enthusiastic about
                    </div>
                    <RotatingText
                      texts={["Android", "Backend", "Frontend"]}
                      mainClassName="px-2 sm:px-2 md:px-3 bg-white text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg text-2xl font-bold inline-flex transition-all"
                      staggerFrom={"last"}
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-120%" }}
                      staggerDuration={0.025}
                      splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                      transition={{
                        type: "spring",
                        damping: 30,
                        stiffness: 400,
                      }}
                      rotationInterval={2000}
                    />
                  </div>
                </AnimatedContent>
              </div>
              <div className="flex flex-col items-start">
                <SplitText
                  text="I'm Ahmad Hafidz"
                  className="text-6xl font-semibold text-center"
                  delay={75}
                  animationFrom={{
                    opacity: 0,
                    transform: "translate3d(0,50px,0)",
                  }}
                  animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                  threshold={0.2}
                  rootMargin="-50px"
                />
                <SplitText
                  text="Mobile & Web Developer"
                  className="text-6xl font-semibold text-center"
                  delay={150}
                  animationFrom={{
                    opacity: 0,
                    transform: "translate3d(0,50px,0)",
                  }}
                  animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                  threshold={0.2}
                  rootMargin="-50px"
                />
              </div>
              <div>
                <BlurText
                  text="I’m Ahmad Hafidz Rino Putra, a developer currently studying at SMK Wikrama. I have a strong foundation in web and mobile app development, with hands-on experience as a Frontend Developer intern at PT 4Net Prima Solusi, where I worked with React.js to create dynamic web applications. I am dedicated to delivering quality results and making a meaningful impact through technology."
                  delay={75}
                  animateBy="words"
                  direction="top"
                  className="text-2xl mb-8 text-center"
                />
              </div>
            </div>
          </div>
          <div className="hidden xl:block col-span-6">
            <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
          </div>
        </div>
      </div>
    </div>
  );
}
