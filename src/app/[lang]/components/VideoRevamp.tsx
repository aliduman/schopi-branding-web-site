"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

interface VideoRevampProps {
  dict: any;
  videoId: string;
}

export default function VideoRevamp({ dict, videoId }: VideoRevampProps) {
  const [playing, setPlaying] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isComingSoon = !videoId || videoId === "fZ0D0cnR88E";

  return (
    <section className="py-24 px-6 bg-gray-50 dark:bg-[#0A0A0A]">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#F84B18] text-sm font-semibold tracking-widest uppercase mb-3 block">
            {dict.videoSection.subtitle}
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {dict.videoSection.title}
          </h2>
          <p className="text-gray-500 dark:text-white/50 text-lg max-w-2xl mx-auto">
            {dict.videoSection.description}
          </p>
        </motion.div>

        <motion.div
          className="relative rounded-3xl overflow-hidden border border-gray-200 dark:border-white/8 aspect-video bg-gray-100 dark:bg-[#111] group cursor-pointer"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          onClick={() => !isComingSoon && setPlaying(true)}
          style={{ boxShadow: "0 0 80px rgba(248,75,24,0.08)" }}
        >
          {playing && !isComingSoon ? (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="Schopi Tanıtım Videosu"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-[#1a0a00] dark:to-gray-900" />
              <div className="absolute inset-0 grid-pattern opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-64 h-64 rounded-full opacity-10"
                  style={{ background: "radial-gradient(circle, #F84B18, transparent)" }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    className={`w-20 h-20 rounded-full bg-[#F84B18] flex items-center justify-center mx-auto mb-4 ${isComingSoon ? "opacity-50" : "group-hover:scale-110"} transition-transform duration-200`}
                    animate={isComingSoon ? {} : { boxShadow: ["0 0 0 0 rgba(248,75,24,0.4)", "0 0 0 20px rgba(248,75,24,0)", "0 0 0 0 rgba(248,75,24,0)"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </motion.div>
                  <p className="text-gray-800 dark:text-white font-semibold text-lg">
                    {isComingSoon ? dict.videoSection.comingSoonButtonText : dict.videoSection.playButtonText}
                  </p>
                  {isComingSoon && (
                    <p className="text-gray-400 dark:text-white/40 text-sm mt-1">Tanıtım videosu hazırlanıyor</p>
                  )}
                </div>
              </div>
              {!isComingSoon && (
                <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-2 py-1 rounded-lg">
                  2:30
                </div>
              )}
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
