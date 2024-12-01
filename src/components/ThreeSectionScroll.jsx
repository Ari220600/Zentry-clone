import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FloatingImage from "./FloatingImage";
import ZentLanding from "./ZentLanding";

gsap.registerPlugin(ScrollTrigger);

const ThreeSectionScroll = () => {
  const containerRef = useRef(null);
  const [divValue, setDivValue] = useState(1);
  const [bgColor, setBgColor] = useState("bg-black"); // State for background color
  const [txtColor, setTxtColor] = useState("text-violet-50"); // State for background color

  useEffect(() => {
    const container = containerRef.current;

    // GSAP ScrollTrigger setup
    gsap.to(container, {
      // Scrolls vertically across 3 sections
      scrollTrigger: {
        trigger: container,
        start: "top center",
        end: "+=150%", // Height of the container for 3 sections
        scrub: true,

        onUpdate: (self) => {
          // Determine which section we're in and update the background color and divValue
          const progress = self.progress;

          if (progress >= 0 && progress < 1 / 3) {
            setDivValue(1);
            setBgColor("bg-black");
            setTxtColor("text-violet-50"); // First section: black
          } else if (progress >= 1 / 3 && progress < 2 / 3) {
            setDivValue(2);
            setBgColor("bg-[#EDFF66]");
            setTxtColor("text-black"); // Second section: yellow
          }
        },
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className={`w-screen h-vdh overflow-hidden ${bgColor} ${txtColor}`}>
      <div
        ref={containerRef}
        className="flex flex-col h-vdh w-screen" // 3 times the screen height
      >
        {/* First Section */}
        <FloatingImage />

        {/* Second Section */}
        <ZentLanding />
      </div>

      {/* Div value display */}
    </div>
  );
};

export default ThreeSectionScroll;
