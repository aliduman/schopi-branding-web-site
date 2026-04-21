"use client";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

function LiveShareDemo({ demo }: { demo: any }) {
  const users = [
    { color: "bg-blue-500", initial: demo.liveShareNames[0][0] },
    { color: "bg-pink-500", initial: demo.liveShareNames[1][0] },
    { color: "bg-amber-500", initial: demo.liveShareNames[2][0] },
  ];
  return (
    <div className="space-y-2">
      {users.map((u, i) => (
        <motion.div
          key={i}
          className="flex items-center gap-2.5 bg-black/5 dark:bg-white/5 rounded-xl p-2.5"
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.2 + 0.5 }}
        >
          <div className={`w-7 h-7 rounded-full ${u.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
            {u.initial}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-gray-800 dark:text-white/80 text-xs font-medium">{demo.liveShareNames[i]}</p>
            <p className="text-gray-400 dark:text-white/40 text-xs truncate">{demo.liveShareActions[i]}</p>
          </div>
          <span className="text-gray-400 dark:text-white/30 text-xs flex-shrink-0">{demo.liveShareTimes[i]}</span>
        </motion.div>
      ))}
      <div className="flex items-center gap-2 pt-1">
        <motion.div
          className="w-2 h-2 bg-green-500 rounded-full"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
        <span className="text-green-600 dark:text-green-400 text-xs">{demo.liveShareActiveText}</span>
      </div>
    </div>
  );
}

function BudgetDemo({ demo }: { demo: any }) {
  const colors = ["bg-[#F84B18]", "bg-orange-400", "bg-amber-400"];
  const amounts = [180, 75, 120];
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-baseline">
        <span className="text-gray-500 dark:text-white/50 text-xs">{demo.budgetTotalLabel}</span>
        <span className="text-[#F84B18] font-bold text-lg">₺375</span>
      </div>
      <div className="w-full bg-black/10 dark:bg-white/10 rounded-full h-2">
        <motion.div
          className="bg-gradient-to-r from-[#F84B18] to-orange-400 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "75%" }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        />
      </div>
      <div className="space-y-2">
        {demo.budgetCategories.map((cat: string, i: number) => (
          <div key={i} className="flex items-center gap-2">
            <div className={`w-1.5 h-1.5 rounded-full ${colors[i]} flex-shrink-0`} />
            <span className="text-gray-500 dark:text-white/50 text-xs flex-1">{cat}</span>
            <span className="text-gray-700 dark:text-white/80 text-xs font-medium">₺{amounts[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PlatformDemo({ demo }: { demo: any }) {
  const platforms = [
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
      ),
      label: demo.platformIosLabel,
      status: demo.platformIosStatus,
      statusColor: "text-gray-400 dark:text-white/40",
      bg: "bg-black/5 dark:bg-white/5",
      badge: demo.platformIosBadge,
      badgeColor: "bg-black/10 dark:bg-white/10 text-gray-400 dark:text-white/40",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      label: demo.platformWebLabel,
      status: demo.platformWebStatus,
      statusColor: "text-purple-600 dark:text-purple-400",
      bg: "bg-purple-50 dark:bg-purple-500/10",
      badge: demo.platformWebBadge,
      badgeColor: "bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400",
    },
  ];
  return (
    <div className="flex flex-col gap-3">
      {platforms.map((p, i) => (
        <motion.div
          key={i}
          className={`flex items-center gap-3 ${p.bg} rounded-xl p-3`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.15 + 0.4 }}
        >
          <div className="text-gray-500 dark:text-white/70">{p.icon}</div>
          <div className="flex-1">
            <p className="text-gray-800 dark:text-white/80 text-sm font-medium">{p.label}</p>
            <p className={`text-xs ${p.statusColor}`}>{p.status}</p>
          </div>
          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${p.badgeColor}`}>{p.badge}</span>
        </motion.div>
      ))}
      <p className="text-gray-400 dark:text-white/30 text-xs text-center pt-1">{demo.allDevicesSynced}</p>
    </div>
  );
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function FeaturesRevamp({ dict }: any) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const d = dict.optionsSection;

  const features = [
    {
      icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      badge: d.badge1,
      title: d.features.feature1.title,
      description: d.features.feature1.description,
      demo: <LiveShareDemo demo={d.demo} />,
      color: "from-blue-500/10 to-blue-600/5 dark:from-blue-500/20 dark:to-blue-600/5",
      borderColor: "border-blue-200 dark:border-blue-500/20",
      iconColor: "text-blue-600 dark:text-blue-400",
      iconBg: "bg-blue-50 dark:bg-blue-500/10",
    },
    {
      icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.856-1.487M15 10a3 3 0 11-6 0 3 3 0 016 0zM15 20H9m6 0h.01" /></svg>,
      badge: d.badge2,
      title: d.features.feature2.title,
      description: d.features.feature2.description,
      demo: <BudgetDemo demo={d.demo} />,
      color: "from-[#F84B18]/10 to-[#F84B18]/5 dark:from-[#F84B18]/20 dark:to-[#F84B18]/5",
      borderColor: "border-orange-200 dark:border-[#F84B18]/20",
      iconColor: "text-[#F84B18]",
      iconBg: "bg-orange-50 dark:bg-[#F84B18]/10",
    },
    {
      icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 9h.01M7 9h.01M16 9h.01M15 9h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 4a3 3 0 110-6 3 3 0 010 6z" /></svg>,
      badge: d.badge3,
      title: d.features.feature3.title,
      description: d.features.feature3.description,
      demo: <PlatformDemo demo={d.demo} />,
      color: "from-purple-500/10 to-purple-600/5 dark:from-purple-500/20 dark:to-purple-600/5",
      borderColor: "border-purple-200 dark:border-purple-500/20",
      iconColor: "text-purple-600 dark:text-purple-400",
      iconBg: "bg-purple-50 dark:bg-purple-500/10",
    },
  ];

  return (
    <section className="py-24 px-6 bg-white dark:bg-[#080808]" id="features">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#F84B18] text-sm font-semibold tracking-widest uppercase mb-3 block">
            {dict.header.menu.features}
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {d.title}
          </h2>
          <p className="text-gray-500 dark:text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            {d.description}
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className={`relative rounded-3xl border ${feature.borderColor} bg-gradient-to-br ${feature.color} p-6 overflow-hidden group cursor-pointer`}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer rounded-3xl" />

              <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${feature.iconColor} bg-black/5 dark:bg-white/5 border ${feature.borderColor} px-3 py-1 rounded-full mb-4`}>
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                {feature.badge}
              </span>

              <div className={`w-12 h-12 rounded-2xl ${feature.iconBg} ${feature.iconColor} flex items-center justify-center mb-4`}>
                {feature.icon}
              </div>

              <h3 className="text-gray-900 dark:text-white font-bold text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-500 dark:text-white/50 text-sm leading-relaxed mb-6">{feature.description}</p>

              <div className="bg-black/5 dark:bg-black/30 rounded-2xl p-4 border border-black/5 dark:border-white/5">
                {feature.demo}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
