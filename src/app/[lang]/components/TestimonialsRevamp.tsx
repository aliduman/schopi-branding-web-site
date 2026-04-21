"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} className={`w-4 h-4 ${i <= rating ? "text-amber-400" : "text-gray-200 dark:text-white/20"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function highlightText(text: string, highlight: string) {
  const parts = text.split(highlight);
  return (
    <>
      {parts[0]}
      <mark className="bg-[#F84B18]/15 text-[#F84B18] rounded px-0.5 not-italic">{highlight}</mark>
      {parts[1]}
    </>
  );
}

interface TestimonialsRevampProps {
  dict: any;
  avatarUrls?: string[];
}

export default function TestimonialsRevamp({ dict, avatarUrls = [] }: TestimonialsRevampProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const t = dict.testimonalSection.testimonials;
  const testimonials = [
    {
      name: t.testimonial1.name,
      role: t.testimonial1.job,
      avatar: t.testimonial1.name.split(" ").map((n: string) => n[0]).join(""),
      avatarUrl: avatarUrls[0],
      color: "bg-pink-500",
      rating: 5,
      comment: t.testimonial1.commentPlain,
      highlight: t.testimonial1.highlight,
    },
    {
      name: t.testimonial2.name,
      role: t.testimonial2.job,
      avatar: t.testimonial2.name.split(" ").map((n: string) => n[0]).join(""),
      avatarUrl: avatarUrls[1],
      color: "bg-blue-500",
      rating: 5,
      comment: t.testimonial2.commentPlain,
      highlight: t.testimonial2.highlight,
    },
    {
      name: t.testimonial3.name,
      role: t.testimonial3.job,
      avatar: t.testimonial3.name.split(" ").map((n: string) => n[0]).join(""),
      avatarUrl: avatarUrls[2],
      color: "bg-purple-500",
      rating: 5,
      comment: t.testimonial3.commentPlain,
      highlight: t.testimonial3.highlight,
    },
    {
      name: t.testimonial4.name,
      role: t.testimonial4.job,
      avatar: t.testimonial4.name.split(" ").map((n: string) => n[0]).join(""),
      avatarUrl: avatarUrls[3],
      color: "bg-emerald-500",
      rating: 5,
      comment: t.testimonial4.commentPlain,
      highlight: t.testimonial4.highlight,
    },
  ];

  return (
    <section className="py-24 px-6 bg-white dark:bg-[#080808]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#F84B18] text-sm font-semibold tracking-widest uppercase mb-3 block">
            {dict.testimonalSection.subTitle}
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {dict.testimonalSection.title}
          </h2>
          <p className="text-gray-500 dark:text-white/50 text-lg max-w-2xl mx-auto">
            {dict.testimonalSection.description}
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="relative glass-card rounded-3xl p-6 group hover:border-gray-200 dark:hover:border-white/15 transition-colors duration-300 cursor-default"
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="text-[#F84B18]/20 text-6xl font-serif leading-none mb-2 select-none">"</div>
              <StarRating rating={t.rating} />
              <p className="text-gray-600 dark:text-white/70 text-base leading-relaxed my-4">
                {highlightText(t.comment, t.highlight)}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-white/8">
                <div className={`relative w-10 h-10 rounded-full overflow-hidden flex items-center justify-center text-white text-sm font-bold flex-shrink-0 ${t.avatarUrl ? "bg-gray-100 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10" : t.color}`}>
                  {t.avatarUrl ? (
                    <Image
                      src={t.avatarUrl}
                      alt={`${t.name} avatar`}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  ) : (
                    t.avatar
                  )}
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-400 dark:text-white/40 text-xs">{t.role}</p>
                </div>
                <div className="ml-auto">
                  <div className="w-8 h-8 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#F84B18]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
