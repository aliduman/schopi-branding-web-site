"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function PricingRevamp({ dict }: any) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const packages = [
    {
      key: "package1",
      title: dict.subscribeSection.package1.title,
      subtitle: dict.subscribeSection.package1.subtitle,
      price: dict.subscribeSection.package1.discountPrice,
      originalPrice: dict.subscribeSection.package1.realPrice,
      features: dict.subscribeSection.package1.features,
      popular: false,
      cta: dict.subscribeSection.package1.comingSoonButtonText,
    },
    {
      key: "package2",
      title: dict.subscribeSection.package2.title,
      subtitle: dict.subscribeSection.package2.subtitle,
      price: dict.subscribeSection.package2.discountPrice,
      originalPrice: dict.subscribeSection.package2.realPrice,
      features: dict.subscribeSection.package2.features,
      popular: true,
      badge: dict.subscribeSection.package2.bestChoiceLabel,
      discount: dict.subscribeSection.package2.discountLabel,
      cta: dict.subscribeSection.package2.comingSoonButtonText,
    },
    {
      key: "package3",
      title: dict.subscribeSection.package3.title,
      subtitle: dict.subscribeSection.package3.subtitle,
      price: dict.subscribeSection.package3.discountPrice,
      originalPrice: dict.subscribeSection.package3.realPrice,
      features: dict.subscribeSection.package3.features,
      popular: false,
      cta: dict.subscribeSection.package3.comingSoonButtonText,
    },
  ];

  return (
    <section className="py-24 px-6 bg-gray-50 dark:bg-[#0A0A0A]" id="pricing">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#F84B18] text-sm font-semibold tracking-widest uppercase mb-3 block">
            {dict.subscribeSection.title}
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {dict.subscribeSection.description}
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6 items-start"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.key}
              className={`relative rounded-3xl p-6 flex flex-col ${
                pkg.popular
                  ? "bg-gradient-to-b from-[#F84B18]/15 to-[#F84B18]/5 border-2 border-[#F84B18]/40 dark:from-[#F84B18]/20 dark:to-[#F84B18]/5"
                  : "glass-card"
              }`}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              {pkg.popular && pkg.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#F84B18] text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                    {pkg.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-gray-900 dark:text-white font-bold text-xl">{pkg.title}</h3>
                  {pkg.discount && (
                    <span className="text-xs text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-400/10 border border-green-200 dark:border-green-400/20 px-2 py-1 rounded-full font-medium">
                      {pkg.discount}
                    </span>
                  )}
                </div>
                <p className="text-gray-400 dark:text-white/40 text-sm mb-4">{pkg.subtitle}</p>
                <div className="flex items-baseline gap-2">
                  <span className={`text-4xl font-bold ${pkg.popular ? "text-[#F84B18]" : "text-gray-900 dark:text-white"}`}>
                    {pkg.price}
                  </span>
                  <span className="text-gray-300 dark:text-white/30 line-through text-sm">{pkg.originalPrice}</span>
                </div>
              </div>

              <div className="space-y-3 mb-8 flex-1">
                {pkg.features.map((feature: string, j: number) => (
                  <div key={j} className="flex items-center gap-2.5">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${pkg.popular ? "bg-[#F84B18]/20" : "bg-gray-100 dark:bg-white/8"}`}>
                      <svg className={`w-2.5 h-2.5 ${pkg.popular ? "text-[#F84B18]" : "text-gray-400 dark:text-white/50"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-500 dark:text-white/60 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="group relative">
                <button
                  className={`w-full py-3.5 rounded-2xl font-semibold text-base transition-all duration-200 cursor-not-allowed opacity-70 ${
                    pkg.popular
                      ? "bg-[#F84B18] text-white dark:bg-[#F84B18]/25 dark:text-[#ffb59c] dark:border dark:border-[#F84B18]/35"
                      : "bg-gray-100 dark:bg-slate-900/70 text-gray-500 dark:text-white/55 border border-gray-200 dark:border-slate-700/70"
                  }`}
                  disabled
                >
                  {pkg.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
