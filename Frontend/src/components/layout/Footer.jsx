import { useState, useEffect } from "react";
import { FiCompass, FiArrowUp } from "react-icons/fi";
import { COLORS, FONTS } from "../Theme";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 480);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const columns = [
    {
      title: "Product",
      links: ["Explore logs", "How it works", "Share a story"],
    },
    {
      title: "Community",
      links: ["Guidelines", "Top contributors", "Tips from travellers"],
    },
    {
      title: "Company",
      links: ["About", "Contact", "Privacy"],
    },
  ];

  return (
    <footer
      style={{
        background: COLORS.text,
        padding: "56px 24px 28px",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.4fr repeat(3, 1fr)",
          gap: 32,
        }}
        className="footer-grid"
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: 7,
                background: COLORS.accent,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FiCompass size={16} color="#1F2937" strokeWidth={1.75} />
            </div>
            <span
              style={{
                fontFamily: FONTS.display,
                fontSize: 18,
                fontWeight: 600,
                color: "#FFFDF8",
              }}
            >
              TravelLog
            </span>
          </div>
          <p
            style={{
              fontFamily: FONTS.body,
              fontSize: 13.5,
              color: "#9CA3AF",
              lineHeight: 1.6,
              marginTop: 14,
              maxWidth: 260,
            }}
          >
            A place for travellers to log the trip, keep the story, and leave a
            tip for whoever goes next.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <div
              style={{
                fontFamily: FONTS.mono,
                fontSize: 12,
                letterSpacing: 0.4,
                color: "#6B7280",
                marginBottom: 14,
              }}
            >
              {col.title.toUpperCase()}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {col.links.map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    fontFamily: FONTS.body,
                    fontSize: 13.5,
                    color: "#D1D5DB",
                    textDecoration: "none",
                  }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          maxWidth: 1120,
          margin: "40px auto 0",
          paddingTop: 20,
          borderTop: "1px solid #374151",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        <span
          style={{
            fontFamily: FONTS.body,
            fontSize: 12.5,
            color: "#6B7280",
          }}
        >
          © 2026 TravelLog. Made for people who keep coming back from somewhere.
        </span>
        <span
          style={{
            fontFamily: FONTS.mono,
            fontSize: 12,
            color: "#6B7280",
          }}
        >
          148 countries and counting
        </span>
      </div>

      {showTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          style={{
            position: "fixed",
            bottom: 28,
            right: 28,
            width: 42,
            height: 42,
            borderRadius: "50%",
            background: COLORS.accent,
            border: "none",
            color: "#FFFDF8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 6px 16px rgba(0,0,0,0.18)",
          }}
        >
          <FiArrowUp size={18} />
        </button>
      )}
    </footer>
  );
};

export default Footer;
