import React from "react";
import { Button } from "./Button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const avatars = [
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces&q=80",
];

export const Community: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full px-4 md:px-10 py-20 md:py-32 bg-soothe-bg">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Left Content */}
        <div className="flex-1 max-w-xl">
          <h2 className="font-serif text-5xl md:text-[4rem] leading-[1.1] text-soothe-text mb-12">
            Where wellness <br />
            meets <span className="italic font-normal">community</span>
          </h2>

          {/* Avatars */}
          <div className="flex items-center mb-8">
            {avatars.map((src, i) => (
              <div
                key={i}
                className={`
                  w-12 h-12 rounded-full border-2 border-soothe-bg overflow-hidden
                  ${i > 0 ? "-ml-4" : ""}
                `}
              >
                <img
                  src={src}
                  alt="Community member"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <p className="font-sans text-soothe-muted text-base leading-relaxed mb-10 max-w-md">
            Founded with a passion for creating a welcoming space where everyone
            can connect, grow, and thrive, we've become a vibrant community of
            individuals dedicated to improving their body, mind, and spirit.
          </p>

          <Button onClick={() => navigate("/contact")}>Contact</Button>
        </div>

        {/* Right Images */}
        <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
          {/* Main Large Video - Scales in smoothly */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="rounded-[2.5rem] overflow-hidden shadow-soft aspect-[4/5] w-full relative"
          >
            <video
              preload="auto"
              // @ts-expect-error - fetchPriority is not a valid prop for video
              fetchPriority="high"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              poster="https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/Soothemi/Screenshot%202025-12-27%20171001.webp"
            >
              <source
                src="https://69sfgmk1pv2omedb.public.blob.vercel-storage.com/new-templates/Soothemi/0_Yoga_Fitness_2160x3840.webm"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </motion.div>

          {/* Floating Inset Image - Scales in smoothly */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="absolute -top-12 -right-6 md:-right-12 w-32 h-32 md:w-48 md:h-48 rounded-[2rem] overflow-hidden shadow-lg border-4 border-soothe-bg hidden md:block"
          >
            <img
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=500&auto=format&fit=crop"
              alt="Hands in mudra"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
