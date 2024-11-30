import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "./Button";
const ZentLanding = () => {
  return (
    <div className="min-h-screen relative">
      {/* First Section - Yellow Background */}
      <div className="min-h-screen bg-[#EDFF66] p-8">
        {/* Header Section */}
        <header className="max-w-6xl mx-auto mb-32">
          <h1 className="text-6xl md:text-7xl font-black leading-tight tracking-tighter mb-8">
            THE UNIVERSE
            <br />
            POWERED BY ZENT
          </h1>

          <Button
            id="ENTER VAULT"
            title="ENTER VAULT"
            containerClass="bg-gray-950 flex-center gap-1 text-white"
          />
        </header>

        {/* Main Content Section */}
        <main className="max-w-6xl mx-auto">
          <div className="grid gap-8">
            {/* Section 01 */}
            <div className="border-t border-black pt-8">
              <div className="flex gap-8">
                <span className="text-sm font-mono opacity-50">01</span>
                <div
                  className={`transition-all duration-300 hover:font-bold opacity:50 hover:opacity:100`}
                >
                  <h2 className="text-2xl mb-4">Shaping Zentry Collectively</h2>
                  <p className="text-lg max-w-xl">
                    Participate in governance, influence key decisions in the
                    ever-growing Zentry Universe that is limited only by people
                    {"'"}s imaginations
                  </p>
                </div>
              </div>
            </div>

            {/* Section 02 */}
            <div className="border-t border-black pt-8">
              <div className="flex gap-8">
                <span className="text-sm font-mono opacity-50">02</span>
                <div
                  className={`transition-all duration-300 hover:font-bold opacity:50 hover:opacity:100`}
                >
                  <h2 className="text-2xl">Unlocking Economic Opportunity</h2>
                  <p className="text-lg max-w-xl">
                    Create value through innovative solutions and unlock new
                    economic opportunities in the Zentry ecosystem
                  </p>
                </div>
              </div>
            </div>

            {/* Section 03 */}
            <div className="border-t border-black pt-8 mb-40">
              <div className="flex gap-8">
                <span className="text-sm font-mono opacity-50">03</span>
                <div
                  className={`transition-all duration-300 hover:font-bold opacity:50 hover:opacity:100`}
                >
                  <h2 className="text-2xl">Sharing Value Accrued</h2>
                  <p className="text-lg max-w-xl">
                    Benefit from the collective growth as value is distributed
                    across the entire Zentry community
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Logo */}
        <div className="absolute bottom-12 right-20 w-24 h-24 md:scale-[3] hover:animate-[spin_2s_linear_infinite]">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <rect x="35" y="35" width="30" height="30" className="fill-black" />
            <polygon points="50,20 65,35 35,35" className="fill-black" />
            <polygon points="80,50 65,65 65,35" className="fill-black" />
            <polygon points="50,80 35,65 65,65" className="fill-black" />
            <polygon points="20,50 35,35 35,65" className="fill-black" />
          </svg>
        </div>
        <div className="absolute bottom-12 right-20 w-24 h-24 md:scale-[2] rotate-90 md:animate-[spin_2s_linear_infinite]">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon points="50,20 65,35 35,35" className="fill-[#EDFF66]" />
            <polygon points="80,50 65,65 65,35" className="fill-[#EDFF66]" />
            <polygon points="50,80 35,65 65,65" className="fill-[#EDFF66]" />
            <polygon points="20,50 35,35 35,65" className="fill-[#EDFF66]" />
          </svg>
        </div>
        <div className="absolute bottom-12 right-20 w-24 h-24  hover:animate-[spin_2s_reverse_infinite] ">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <rect x="35" y="35" width="12" height="12" className="fill-black" />
            <polygon points="50,20 65,35 35,35" className="fill-black" />
            <polygon points="80,50 65,65 65,35" className="fill-black" />
            <polygon points="50,80 35,65 65,65" className="fill-black" />
            <polygon points="20,50 35,35 35,65" className="fill-black" />
          </svg>
        </div>
      </div>

      {/* Next Component - Only shown when scrolled to bottom */}
    </div>
  );
};

export default ZentLanding;
