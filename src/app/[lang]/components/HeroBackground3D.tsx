"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useTheme } from "next-themes";
import * as THREE from "three";

const PRODUCT_IMAGES = [
  "/img/example_product_images/apple-green_wnzdmd.png",
  "/img/example_product_images/chicken_hanw4h.png",
  "/img/example_product_images/emmental_cpd8v2.png",
  "/img/example_product_images/fig_dtmlln.png",
  "/img/example_product_images/grape-black_cjksue.png",
  "/img/example_product_images/ice-coffee_ihf8o9.png",
  "/img/example_product_images/olive-oil_snwbwm.png",
  "/img/example_product_images/pumpkin_v7uqqg.png",
  "/img/example_product_images/raspberry_fskdeu.png",
  "/img/example_product_images/turkish-tea_tepxlc.png",
  "/img/example_product_images/peas_s34jmy.png",
  "/img/example_product_images/plum_o4shce.png",
];

const Z_FAR = -12;
const Z_NEAR = 2.5;

/* ── Single floating icon sprite with depth (z-loop) ── */
function FloatingIcon({
  imagePath,
  position,
  speed,
  zOffset,
  isDark,
}: {
  imagePath: string;
  position: [number, number, number];
  speed: number;
  zOffset: number;
  isDark: boolean;
}) {
  const ref = useRef<THREE.Sprite>(null!);
  const texture = useLoader(THREE.TextureLoader, imagePath);

  // z goes from FAR → NEAR then wraps
  const range = Z_NEAR - Z_FAR;

  useFrame((_, delta) => {
    const sp = ref.current;
    sp.position.z += delta * speed * 1.8;
    if (sp.position.z > Z_NEAR) sp.position.z = Z_FAR;

    // Scale grows as it approaches camera (perspective illusion)
    const t = (sp.position.z - Z_FAR) / range; // 0 = far, 1 = near
    const s = 0.18 + t * 0.32; // 0.18 → 0.50
    sp.scale.set(s, s, s);

    // Fade in early, fade out as it gets very close
    const maxOpacity = isDark ? 0.65 : 0.9;
    sp.material.opacity = t < 0.08
      ? t / 0.08 * maxOpacity
      : t > 0.85
      ? (1 - (t - 0.85) / 0.15) * maxOpacity
      : maxOpacity;
  });

  const startZ = Z_FAR + ((zOffset % 1) * range);

  return (
    <sprite ref={ref} position={[position[0], position[1], startZ]} scale={[0.18, 0.18, 0.18]}>
      <spriteMaterial map={texture} transparent opacity={0} depthWrite={false} />
    </sprite>
  );
}

/* ── Icon field ── */
function IconField({ isDark }: { isDark: boolean }) {
  const icons = useMemo(() => {
    return PRODUCT_IMAGES.map((imagePath, i) => {
      const angle = (i / PRODUCT_IMAGES.length) * Math.PI * 2;
      const radius = 2.8 + (i % 3) * 1.4;
      return {
        imagePath,
        position: [
          Math.cos(angle) * radius,
          -1.6 + (i % 4) * 1.1,
          0,
        ] as [number, number, number],
        speed: 0.5 + (i % 4) * 0.15,
        zOffset: i / PRODUCT_IMAGES.length,
      };
    });
  }, []);

  return (
    <>
      {icons.map((icon, i) => (
        <FloatingIcon key={i} {...icon} isDark={isDark} />
      ))}
    </>
  );
}

/* ── Particle field ── */
function Particles({ isDark }: { isDark: boolean }) {
  const ref = useRef<THREE.Points>(null!);
  const count = 140;

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const a = new THREE.Color(isDark ? "#F84B18" : "#fb923c");
    const b = new THREE.Color(isDark ? "#7a2408" : "#f97316");
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 22;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8 - 3;
      const c = Math.random() > 0.5 ? a : b;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    return { positions, colors };
  }, [isDark]);

  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.014;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.042} vertexColors sizeAttenuation transparent opacity={isDark ? 0.55 : 0.4} />
    </points>
  );
}

/* ── Scene ── */
function Scene({ isDark }: { isDark: boolean }) {
  return (
    <>
      <ambientLight intensity={isDark ? 0.2 : 0.75} />
      <hemisphereLight args={[isDark ? "#1a1a1a" : "#fff7ed", isDark ? "#050505" : "#e2e8f0", isDark ? 0.08 : 0.35]} />
      <pointLight position={[2, 4, 3]} color="#F84B18" intensity={isDark ? 3 : 1.05} distance={14} />
      <Particles isDark={isDark} />
      <IconField isDark={isDark} />
    </>
  );
}

export default function HeroBackground3D() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== "light";

  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 52 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Scene isDark={isDark} />
      </Canvas>
    </div>
  );
}
