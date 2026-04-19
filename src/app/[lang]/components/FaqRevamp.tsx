"use client";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function FaqRevamp({ dict }: any) {
  const [open, setOpen] = useState<number | null>(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 px-6 bg-white dark:bg-[#080808]" id="faq">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#F84B18] text-sm font-semibold tracking-widest uppercase mb-3 block">
            {dict.faq.subtitle}
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {dict.faq.title}
          </h2>
          <p className="text-gray-500 dark:text-white/50 text-lg">{dict.faq.description}</p>
        </motion.div>

        <motion.div
          className="space-y-3"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {dict.faq.questions.map((q: any, i: number) => (
            <motion.div
              key={i}
              className={`rounded-2xl border transition-colors duration-200 overflow-hidden ${
                open === i
                  ? "border-[#F84B18]/30 bg-[#F84B18]/5"
                  : "border-gray-100 dark:border-white/8 bg-gray-50 dark:bg-white/5 hover:border-gray-200 dark:hover:border-white/15"
              }`}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className={`font-semibold text-base pr-4 ${open === i ? "text-gray-900 dark:text-white" : "text-gray-700 dark:text-white"}`}>
                  {q.question}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                    open === i ? "bg-[#F84B18]" : "bg-gray-100 dark:bg-white/8"
                  }`}
                >
                  <svg className={`w-3.5 h-3.5 ${open === i ? "text-white" : "text-gray-500 dark:text-[#F84B18]"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <p className="text-gray-500 dark:text-white/55 text-sm leading-relaxed px-5 pb-5">
                      {q.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
