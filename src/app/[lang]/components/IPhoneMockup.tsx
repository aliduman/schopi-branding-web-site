"use client";

interface IPhoneMockupProps {
  children: React.ReactNode;
  width?: number;
  className?: string;
  shadow?: boolean;
}

/**
 * Realistic iPhone 16 Pro device frame.
 * Children are rendered as the screen content.
 * Width controls the overall device width; height scales proportionally (19.5:9 screen ratio + bezels).
 */
export default function IPhoneMockup({
  children,
  width = 260,
  className = "",
  shadow = true,
}: IPhoneMockupProps) {
  const frameRadius = Math.round(width * 0.175);        // outer titanium corner radius
  const screenRadius = Math.round(width * 0.14);        // inner screen corner radius
  const bezelH = Math.round(width * 0.038);             // top/bottom bezel thickness
  const sidesH = Math.round(width * 0.030);             // left/right bezel thickness
  const frameThick = Math.round(width * 0.042);         // titanium frame thickness
  const diW = Math.round(width * 0.36);                 // dynamic island width
  const diH = Math.round(width * 0.048);                // dynamic island height
  const screenW = width - sidesH * 2 - frameThick * 2; // actual screen pixel width
  // iPhone 16 Pro screen aspect: 2556 × 1179 → ~2.168 tall
  const screenH = Math.round(screenW * 2.168);
  const deviceH = screenH + bezelH * 2 + frameThick * 2;

  // side button dims
  const btnW = Math.round(width * 0.028);
  const actionH = Math.round(width * 0.095);
  const volH = Math.round(width * 0.14);
  const powerH = Math.round(width * 0.19);

  const titanium = "linear-gradient(160deg, #C8C8CE 0%, #8E8E96 18%, #AEAEB6 36%, #6C6C74 54%, #BEBEC6 72%, #929298 88%, #C2C2C8 100%)";
  const titaniumDark = "linear-gradient(160deg, #5A5A60 0%, #3C3C42 30%, #525258 60%, #3A3A40 100%)";

  return (
    <div
      className={`relative inline-block flex-shrink-0 ${className}`}
      style={{ width, height: deviceH }}
    >
      {/* ── Titanium outer frame ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: frameRadius,
          background: titanium,
          boxShadow: shadow
            ? [
                "inset 0 1px 0 rgba(255,255,255,0.35)",
                "inset 0 -1px 0 rgba(0,0,0,0.25)",
                "0 0 0 1px rgba(0,0,0,0.45)",
                "0 40px 80px rgba(0,0,0,0.55)",
                "0 8px 24px rgba(0,0,0,0.35)",
              ].join(", ")
            : undefined,
        }}
      />

      {/* ── Dark inner bezel (screen surround) ── */}
      <div
        style={{
          position: "absolute",
          top: frameThick,
          left: frameThick,
          right: frameThick,
          bottom: frameThick,
          borderRadius: screenRadius + 2,
          background: "#0F0F0F",
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)",
        }}
      />

      {/* ── Screen content ── */}
      <div
        style={{
          position: "absolute",
          top: frameThick + bezelH,
          left: frameThick + sidesH,
          right: frameThick + sidesH,
          bottom: frameThick + bezelH,
          borderRadius: screenRadius,
          overflow: "hidden",
          background: "#000",
        }}
      >
        {children}
      </div>

      {/* ── Left side: Action button ── */}
      <div
        style={{
          position: "absolute",
          left: -btnW + 1,
          top: Math.round(deviceH * 0.17),
          width: btnW,
          height: actionH,
          borderRadius: "3px 0 0 3px",
          background: titaniumDark,
          boxShadow: "-1px 0 2px rgba(0,0,0,0.4)",
        }}
      />

      {/* ── Left side: Volume Up ── */}
      <div
        style={{
          position: "absolute",
          left: -btnW + 1,
          top: Math.round(deviceH * 0.28),
          width: btnW,
          height: volH,
          borderRadius: "3px 0 0 3px",
          background: titaniumDark,
          boxShadow: "-1px 0 2px rgba(0,0,0,0.4)",
        }}
      />

      {/* ── Left side: Volume Down ── */}
      <div
        style={{
          position: "absolute",
          left: -btnW + 1,
          top: Math.round(deviceH * 0.41),
          width: btnW,
          height: volH,
          borderRadius: "3px 0 0 3px",
          background: titaniumDark,
          boxShadow: "-1px 0 2px rgba(0,0,0,0.4)",
        }}
      />

      {/* ── Right side: Power button ── */}
      <div
        style={{
          position: "absolute",
          right: -btnW + 1,
          top: Math.round(deviceH * 0.3),
          width: btnW,
          height: powerH,
          borderRadius: "0 3px 3px 0",
          background: titaniumDark,
          boxShadow: "1px 0 2px rgba(0,0,0,0.4)",
        }}
      />

      {/* ── Bottom: USB-C port ── */}
      <div
        style={{
          position: "absolute",
          bottom: Math.round(frameThick * 0.4),
          left: "50%",
          transform: "translateX(-50%)",
          width: Math.round(width * 0.12),
          height: Math.round(width * 0.018),
          borderRadius: 3,
          background: "rgba(0,0,0,0.5)",
        }}
      />

      {/* ── Bottom: Speaker grilles ── */}
      {[-1, 1].map((side) => (
        <div
          key={side}
          style={{
            position: "absolute",
            bottom: Math.round(frameThick * 0.35),
            left: `calc(50% + ${side * Math.round(width * 0.11)}px)`,
            transform: "translateX(-50%)",
            display: "flex",
            gap: 2,
          }}
        >
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              style={{
                width: Math.round(width * 0.012),
                height: Math.round(width * 0.012),
                borderRadius: "50%",
                background: "rgba(0,0,0,0.45)",
              }}
            />
          ))}
        </div>
      ))}

      {/* ── Screen edge highlight (glass effect) ── */}
      <div
        style={{
          position: "absolute",
          top: frameThick + bezelH,
          left: frameThick + sidesH,
          right: frameThick + sidesH,
          height: Math.round(screenH * 0.12),
          borderRadius: `${screenRadius}px ${screenRadius}px 0 0`,
          background: "linear-gradient(to bottom, rgba(255,255,255,0.06), transparent)",
          pointerEvents: "none",
          zIndex: 30,
        }}
      />
    </div>
  );
}
