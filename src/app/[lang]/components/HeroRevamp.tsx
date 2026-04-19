"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import IPhoneMockup from "./IPhoneMockup";

const HeroBackground3D = dynamic(() => import("./HeroBackground3D"), { ssr: false });


/* ─── Floating badge ─── */
function FloatingBadge({
  icon,
  label,
  sub,
  color,
  className,
}: {
  icon: React.ReactNode;
  label: string;
  sub: string;
  color: string;
  className?: string;
}) {
  return (
    <motion.div
      className={`absolute z-30 flex items-center gap-2.5 bg-white/90 dark:bg-black/80 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-2xl px-3 py-2.5 shadow-[0_8px_24px_rgba(15,23,42,0.14)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.4)] ${className}`}
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className={`w-8 h-8 rounded-xl ${color} flex items-center justify-center flex-shrink-0`}>
        {icon}
      </div>
      <div>
        <p className="text-slate-900 dark:text-white text-xs font-semibold leading-tight">{label}</p>
        <p className="text-slate-500 dark:text-white/40 text-[10px] leading-tight">{sub}</p>
      </div>
    </motion.div>
  );
}

/* ─── Animated blob ─── */
function Blob({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={style}
      animate={{ scale: [1, 1.15, 1], x: [0, 20, 0], y: [0, -15, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

/* ─── Phone cluster ─── */
function PhoneCluster() {
  return (
    <div className="relative flex items-end justify-center gap-3 lg:gap-5 flex-shrink-0 pb-10">
      {/* Orange glow behind center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(248,75,24,0.28) 0%, transparent 70%)", filter: "blur(50px)" }}
      />

      {/* ── Left phone ── */}
      <motion.div
        className="z-10 hidden sm:flex flex-col items-center"
        style={{ rotate: -10, translateY: 40 }}
        animate={{ y: [40, 30, 40] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      >
        <div style={{ boxShadow: "0 0 50px rgba(248,75,24,0.15)" }} className="rounded-[45px]">
          <IPhoneMockup width={202} shadow={false}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/screenshots/anlik-paylasim.png" alt="Schopi anlık paylaşım" className="w-full h-full object-cover object-top" />
          </IPhoneMockup>
        </div>
        <div className="mt-3 flex items-center gap-2 bg-white/90 dark:bg-black/80 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-2xl px-3 py-2 whitespace-nowrap shadow-[0_8px_24px_rgba(15,23,42,0.14)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
          <div className="w-6 h-6 rounded-lg bg-green-400/15 flex items-center justify-center flex-shrink-0">
            <svg className="w-3.5 h-3.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <p className="text-slate-900 dark:text-white text-[11px] font-semibold leading-tight">Anlık Paylaşım</p>
            <p className="text-slate-500 dark:text-white/40 text-[9px] leading-tight">3 kişi düzenliyor</p>
          </div>
        </div>
      </motion.div>

      {/* ── Center phone — video ── */}
      <motion.div
        className="z-20 flex flex-col items-center gap-4"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div style={{ boxShadow: "0 0 80px rgba(248,75,24,0.35)" }} className="rounded-[50px]">
          <IPhoneMockup width={286} shadow={true}>
            <video
              className="w-full h-full object-cover"
              src="/schopi-demo.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </IPhoneMockup>
        </div>

        {/* Badge — centered, overlapping bottom of phone */}
        <div
          className="-mt-10 flex items-center gap-2 bg-white/90 dark:bg-black/80 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-2xl px-3 py-2 whitespace-nowrap shadow-[0_8px_24px_rgba(15,23,42,0.14)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
        >
          <div className="w-7 h-7 rounded-xl bg-blue-400/15 flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="text-slate-900 dark:text-white text-xs font-semibold leading-tight">Ürün Eklendi!</p>
            <p className="text-slate-500 dark:text-white/40 text-[10px] leading-tight">White Bread • 0.5 ct</p>
          </div>
        </div>
      </motion.div>

      {/* ── Right phone ── */}
      <motion.div
        className="z-10 hidden sm:flex flex-col items-center"
        style={{ rotate: 10, translateY: 40 }}
        animate={{ y: [40, 32, 40] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
      >
        <div style={{ boxShadow: "0 0 50px rgba(248,75,24,0.15)" }} className="rounded-[45px]">
          <IPhoneMockup width={202} shadow={false}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/screenshots/hatirlatici.png" alt="Schopi liste hatırlatıcı" className="w-full h-full object-cover object-top" />
          </IPhoneMockup>
        </div>
        <div className="mt-3 flex items-center gap-2 bg-white/90 dark:bg-black/80 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-2xl px-3 py-2 whitespace-nowrap shadow-[0_8px_24px_rgba(15,23,42,0.14)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
          <div className="w-6 h-6 rounded-lg bg-[#F84B18]/15 flex items-center justify-center flex-shrink-0">
            <svg className="w-3.5 h-3.5 text-[#F84B18]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
          <div>
            <p className="text-slate-900 dark:text-white text-[11px] font-semibold leading-tight">Liste Hatırlatıcı</p>
            <p className="text-slate-500 dark:text-white/40 text-[9px] leading-tight">Alışveriş zamanı yaklaşıyor</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ─── Hero ─── */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay } },
});

interface HeroRevampProps {
  dict: any;
  socialProofAvatars?: string[];
}

export default function HeroRevamp({ dict, socialProofAvatars = [] }: HeroRevampProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#f8fafc] dark:bg-[#080808]">
      {/* 3D animated background */}
      <HeroBackground3D />

      {/* Subtle grid overlay on top of 3D */}
      <div className="absolute inset-0 grid-pattern opacity-35 dark:opacity-20 pointer-events-none" style={{ zIndex: 1 }} />

      <div className="relative z-10 container mx-auto px-6 xl:px-12 pt-24 pb-12">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-6">

          {/* ── Left: Text ── */}
          <div className="flex-1 max-w-xl">

            <motion.div
              variants={fadeUp(0)}
              initial="hidden"
              animate="visible"
            >
              <span className="inline-flex items-center gap-2 bg-white/90 dark:bg-slate-900/85 border border-slate-200 dark:border-slate-700/70 text-slate-700 dark:text-slate-200 text-sm px-4 py-1.5 rounded-full mb-6 shadow-sm dark:shadow-[0_8px_24px_rgba(0,0,0,0.28)]">
                <motion.span
                  className="w-2 h-2 bg-green-400 rounded-full"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                {dict.heroSection.badgeText}
              </span>
            </motion.div>

            <motion.h1
              className="text-[3.2rem] lg:text-[4rem] xl:text-[4.5rem] font-bold text-slate-900 dark:text-white leading-[1.1] mb-6"
              variants={fadeUp(0.1)}
              initial="hidden"
              animate="visible"
            >
              Alışveriş Listelerinizi{" "}
              <span className="text-[#F84B18]" style={{ textShadow: "0 0 40px rgba(248,75,24,0.4)" }}>
                Kolaylaştırın
              </span>
              : Schopi ile Tanışın!
            </motion.h1>

            <motion.p
              className="text-lg text-slate-600 dark:text-white/55 leading-relaxed mb-8"
              variants={fadeUp(0.2)}
              initial="hidden"
              animate="visible"
            >
              Liste oluşturmayı ve paylaşmayı hiç bu kadar kolay hale getiren bir uygulama görmediniz.
            </motion.p>

            {/* Feature tags */}
            <motion.div
              className="flex flex-wrap gap-2 mb-10"
              variants={fadeUp(0.3)}
              initial="hidden"
              animate="visible"
            >
              {[
                "⚡ Anlık senkronizasyon",
                "₺ Bütçe takibi",
                "🌐 Web & iOS",
                "🏷️ Kategori bazlı liste",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-slate-600 dark:text-white/50 bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-3 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-10"
              variants={fadeUp(0.4)}
              initial="hidden"
              animate="visible"
            >
              <a
                href="https://app.schopi.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 bg-[#F84B18] text-white px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-200 cursor-pointer"
                style={{ boxShadow: "0 0 0 rgba(248,75,24,0)" }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 40px rgba(248,75,24,0.45)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 0 rgba(248,75,24,0)")}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {dict.heroSection.useWebApp}
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              <div className="group relative">
                <button
                  disabled
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/85 dark:bg-slate-900/70 text-slate-700 dark:text-white/60 px-8 py-4 rounded-2xl font-semibold text-base border border-slate-200 dark:border-slate-700/65 cursor-not-allowed"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  {dict.heroSection.appleStoreDownload}
                </button>
                <span className="absolute -top-9 left-1/2 -translate-x-1/2 bg-slate-900 border border-slate-700 dark:border-white/10 text-white/80 text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  Yakında App Store'da!
                </span>
              </div>
            </motion.div>

            {/* Social proof */}
            <motion.div
              className="flex items-center gap-5"
              variants={fadeUp(0.5)}
              initial="hidden"
              animate="visible"
            >
              <div className="flex -space-x-2.5">
                {[
                  { initials: "AS", gradient: "from-blue-500 to-blue-600", name: "Ayşe", avatarUrl: socialProofAvatars[0] },
                  { initials: "MK", gradient: "from-pink-500 to-rose-600", name: "Mehmet", avatarUrl: socialProofAvatars[1] },
                  { initials: "ZY", gradient: "from-amber-500 to-orange-600", name: "Zeynep", avatarUrl: socialProofAvatars[2] },
                  { initials: "EK", gradient: "from-emerald-500 to-teal-600", name: "Eren", avatarUrl: socialProofAvatars[3] },
                  { initials: "NP", gradient: "from-purple-500 to-indigo-600", name: "Nurcan", avatarUrl: socialProofAvatars[4] },
                ].map((user, i) => (
                  <div
                    key={i}
                    title={user.name}
                    className={`relative w-8 h-8 rounded-full overflow-hidden border-2 border-[#f8fafc] dark:border-[#080808] flex items-center justify-center text-white text-xs font-bold cursor-help ${user.avatarUrl ? "bg-slate-200 dark:bg-slate-800" : `bg-gradient-to-br ${user.gradient}`}`}
                  >
                    {user.avatarUrl ? (
                      <Image
                        src={user.avatarUrl}
                        alt={`${user.name} avatar`}
                        fill
                        sizes="32px"
                        className="object-cover"
                      />
                    ) : (
                      user.initials
                    )}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5 mb-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 dark:text-white/40 text-xs">Binlerce mutlu kullanıcı</p>
              </div>
            </motion.div>
          </div>

          {/* ── Right: Phones ── */}
          <motion.div
            className="flex-shrink-0 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          >
            <PhoneCluster />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#f8fafc] dark:from-[#080808] to-transparent pointer-events-none" />
    </section>
  );
}
