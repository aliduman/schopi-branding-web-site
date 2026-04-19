"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    label: "Liste Paylaşımı",
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C9.589 12.75 10.646 12.5 12 12.5c1.354 0 2.411.25 3.316.842M9 19H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-4l-6 2z" /></svg>,
    status: "Aktif",
  },
  {
    label: "Liste Hatırlatıcı",
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>,
    status: "Aktif",
  },
  {
    label: "Sesli Asistan",
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4" /></svg>,
    status: "Yakında",
    badge: true,
  },
  {
    label: "Bütçe Analizi",
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    status: "Yakında",
    badge: true,
  },
  {
    label: "Yakın Market",
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    status: "Yakında",
    badge: true,
  },
];

export default function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-[#0A0A0A] border-y border-gray-100 dark:border-white/5">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-5 gap-6"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-center group"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            >
              <div className="w-16 h-16 rounded-2xl bg-[#F84B18]/10 border border-[#F84B18]/20 flex items-center justify-center text-[#F84B18] mx-auto mb-4 group-hover:bg-[#F84B18]/20 group-hover:border-[#F84B18]/40 transition-colors duration-200">
                {feature.icon}
              </div>
              <p className="text-gray-800 dark:text-white/80 text-sm font-semibold mb-2">{feature.label}</p>
              <div className="flex items-center justify-center gap-1">
                {feature.badge ? (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 dark:bg-yellow-500/20 text-yellow-700 dark:text-yellow-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-600 dark:bg-yellow-400" />
                    {feature.status}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-600 dark:bg-green-400" />
                    {feature.status}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
