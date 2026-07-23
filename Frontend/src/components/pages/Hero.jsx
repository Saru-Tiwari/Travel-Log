import { useNavigate } from "react-router-dom"; // Add this import
import { FiMapPin, FiArrowRight } from "react-icons/fi";
import { TbPlaneDeparture } from "react-icons/tb";
import { COLORS, FONTS } from "../Theme";
import { Stars, PassportStamp } from "../pages/LogCard";

// Import your images from the assets folder
import baliImage from "../../assets/josh-reid-meOFNlRbHmY-unsplash.jpg";
import icelandImage from "../../assets/darren-lawrence-hy_LY9Zyfxo-unsplash.jpg";

const Hero = ({ onShare }) => {
  const navigate = useNavigate(); // Add this hook

  // Add this function to handle navigation
  const handleShareClick = () => {
    navigate("/share");
    if (onShare) onShare();
  };

  return (
    <section style={{ background: COLORS.bg, overflow: "hidden" }}>
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "72px 24px 88px",
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: 48,
          alignItems: "center",
        }}
        className="hero-grid"
      >
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: COLORS.accentLight,
              color: "#8A4B0A",
              padding: "6px 12px",
              borderRadius: 999,
              fontFamily: FONTS.mono,
              fontSize: 12.5,
              letterSpacing: 0.3,
              marginBottom: 24,
            }}
          >
            <TbPlaneDeparture size={14} />
            Every trip deserves a page
          </div>

          <h1
            style={{
              fontFamily: FONTS.display,
              fontSize: 52,
              lineHeight: 1.08,
              fontWeight: 600,
              color: COLORS.text,
              margin: "0 0 20px",
              letterSpacing: "-0.01em",
            }}
          >
            Log the trip.
            <br />
            <span style={{ color: COLORS.primary }}>Keep the story.</span>
          </h1>

          <p
            style={{
              fontFamily: FONTS.body,
              fontSize: 17,
              lineHeight: 1.6,
              color: COLORS.textMuted,
              maxWidth: 440,
              margin: "0 0 32px",
            }}
          >
            TravelLog is where the story, the photos, and the practical tips
            from every trip live in one place — so the next traveller doesn't
            have to start from zero.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button
              onClick={handleShareClick} // Changed from onShare to handleShareClick
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: COLORS.primary,
                color: "#FFFDF8",
                border: "none",
                borderRadius: 8,
                padding: "13px 22px",
                fontFamily: FONTS.body,
                fontSize: 15,
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              Share your first log
              <FiArrowRight size={16} />
            </button>
            <button
              style={{
                background: "transparent",
                color: COLORS.text,
                border: `1px solid ${COLORS.border}`,
                borderRadius: 8,
                padding: "13px 22px",
                fontFamily: FONTS.body,
                fontSize: 15,
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              Browse logs
            </button>
          </div>

          <div
            style={{
              display: "flex",
              gap: 28,
              marginTop: 44,
              fontFamily: FONTS.mono,
            }}
          >
            {[
              ["12,400+", "logs shared"],
              ["148", "countries"],
              ["5", "photos per log"],
            ].map(([num, label]) => (
              <div key={label}>
                <div
                  style={{
                    fontSize: 20,
                    fontWeight: 500,
                    color: COLORS.text,
                  }}
                >
                  {num}
                </div>
                <div style={{ fontSize: 12, color: COLORS.textMuted }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: "relative", height: 380 }} className="hero-art">
          {/* Bali Card */}
          <div
            style={{
              position: "absolute",
              top: 10,
              left: 20,
              width: "78%",
              background: COLORS.surface,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 12,
              padding: 16,
              transform: "rotate(-4deg)",
              boxShadow: "0 12px 24px rgba(31,41,55,0.08)",
            }}
          >
            <div
              style={{
                height: 130,
                borderRadius: 8,
                overflow: "hidden",
                marginBottom: 10,
                background: "#7FA98A",
              }}
            >
              <img
                src={icelandImage}
                alt="Rice terraces in Ubud, Bali"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div
              style={{
                fontFamily: FONTS.display,
                fontSize: 15,
                fontWeight: 600,
                color: COLORS.text,
              }}
            >
              Chasing sunset through the swing
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                marginTop: 4,
                color: COLORS.textMuted,
                fontFamily: FONTS.body,
                fontSize: 12.5,
              }}
            >
              <FiMapPin size={12} /> Ubud, Bali
            </div>
          </div>

          {/* Iceland Card */}
          <div
            style={{
              position: "absolute",
              bottom: 6,
              right: 4,
              width: "68%",
              background: COLORS.bg,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 12,
              padding: 14,
              transform: "rotate(5deg)",
              boxShadow: "0 12px 24px rgba(31,41,55,0.08)",
            }}
          >
            <div
              style={{
                height: 100,
                borderRadius: 8,
                overflow: "hidden",
                marginBottom: 10,
                background: "#5B85A6",
              }}
            >
              <img
                src={baliImage}
                alt="Ring Road in Iceland"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <Stars rating={5} size={13} />
            <div
              style={{
                fontFamily: FONTS.body,
                fontSize: 12.5,
                color: COLORS.textMuted,
                marginTop: 4,
              }}
            >
              Ring Road, Iceland
            </div>
          </div>

          <PassportStamp rating={5} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
