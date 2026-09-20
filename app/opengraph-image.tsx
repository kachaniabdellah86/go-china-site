import { ImageResponse } from "next/og";

export const alt = "Yalla China — Étudier en Chine avec un accompagnement sérieux";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Satori has no bold face by default, which makes the card read thin.
// A failed fetch must never fail the build, so fall back to the default font.
async function loadMontserrat(weight: number) {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=Montserrat:wght@${weight}`,
      { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" } },
    ).then((response) => response.text());

    const url = css.match(/src:\s*url\((https:\/\/[^)]+)\)/)?.[1];
    if (!url) return null;

    const data = await fetch(url).then((response) => response.arrayBuffer());
    return { name: "Montserrat", data, weight: weight as 700, style: "normal" as const };
  } catch {
    return null;
  }
}

export default async function OpenGraphImage() {
  const fonts = (await Promise.all([loadMontserrat(800), loadMontserrat(500)])).filter(
    (font): font is NonNullable<typeof font> => font !== null,
  );
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "radial-gradient(circle at 18% 18%, rgba(237,184,11,0.22), transparent 40%), radial-gradient(circle at 85% 85%, rgba(119,3,4,0.55), transparent 45%), #050202",
          color: "#ffffff",
          fontFamily: fonts.length ? "Montserrat" : "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 32,
              background: "#EDB80B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#050202",
              fontSize: 34,
              fontWeight: 900,
            }}
          >
            YC
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 28, fontWeight: 900, letterSpacing: 6 }}>
              <span>YALLA&nbsp;</span>
              <span style={{ color: "#EDB80B" }}>CHINA</span>
            </div>
            <div style={{ fontSize: 16, letterSpacing: 5, color: "rgba(255,255,255,0.55)" }}>
              DREAM. TRUST. ACHIEVE.
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 900,
              lineHeight: 1.02,
              letterSpacing: -2,
              maxWidth: 980,
            }}
          >
            Étudier en Chine avec un accompagnement qui rassure toute la famille.
          </div>
          <div style={{ display: "flex", gap: 14 }}>
            {["Orientation", "Admission", "Visa", "Arrivée"].map((step) => (
              <div
                key={step}
                style={{
                  padding: "12px 22px",
                  borderRadius: 999,
                  border: "1px solid rgba(237,184,11,0.5)",
                  color: "#EDB80B",
                  fontSize: 22,
                  fontWeight: 700,
                }}
              >
                {step}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: fonts.length ? fonts : undefined },
  );
}
