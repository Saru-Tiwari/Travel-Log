import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiMenu, FiX, FiArrowRight, FiCompass } from "react-icons/fi";
import { COLORS, FONTS } from "../Theme";

const Header = ({ onShare }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Explore logs", "How it works", "Community"];

  const handleShareClick = () => {
    navigate("/share");
    if (onShare) onShare();
  };

  return (
    <header
      style={{
        background: COLORS.bg,
        borderBottom: `1px solid ${COLORS.border}`,
        position: "sticky",
        top: 0,
        zIndex: 40,
        boxShadow: scrolled ? "0 2px 10px rgba(31,41,55,0.06)" : "none",
        transition: "box-shadow 0.2s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: scrolled ? "12px 24px" : "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "padding 0.2s ease",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: 8,
              background: COLORS.primary,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <FiCompass size={19} color="#FFFDF8" strokeWidth={1.75} />
          </div>
          <span
            style={{
              fontFamily: FONTS.display,
              fontSize: 21,
              fontWeight: 600,
              color: COLORS.text,
            }}
          >
            TravelLog
          </span>
        </div>

        <nav
          className="hidden md:flex"
          style={{ display: "flex", gap: 32, alignItems: "center" }}
        >
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="hidden md:inline"
              style={{
                fontFamily: FONTS.body,
                fontSize: 14.5,
                color: COLORS.text,
                textDecoration: "none",
              }}
            >
              {item}
            </a>
          ))}
          <button
            onClick={handleShareClick}
            className="hidden md:flex"
            style={{
              alignItems: "center",
              gap: 6,
              background: COLORS.primary,
              color: "#FFFDF8",
              border: "none",
              borderRadius: 8,
              padding: "10px 18px",
              fontFamily: FONTS.body,
              fontSize: 14.5,
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Share your story
            <FiArrowRight size={15} />
          </button>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          style={{
            background: "none",
            border: "none",
            display: "none",
            cursor: "pointer",
          }}
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>

        {open && (
          <div
            className="md:hidden"
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              background: COLORS.bg,
              borderBottom: `1px solid ${COLORS.border}`,
              padding: "16px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontFamily: FONTS.body,
                  fontSize: 15,
                  color: COLORS.text,
                  textDecoration: "none",
                }}
              >
                {item}
              </a>
            ))}
            <button
              onClick={handleShareClick}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
                background: COLORS.primary,
                color: "#FFFDF8",
                border: "none",
                borderRadius: 8,
                padding: "10px 18px",
                fontFamily: FONTS.body,
                fontSize: 14.5,
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              Share your story
              <FiArrowRight size={15} />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
