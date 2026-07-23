import { FiArrowRight } from "react-icons/fi";
import { COLORS, FONTS } from "../Theme";

const CTASection = ({ onShare }) => {
  return (
    <section
      style={{
        background: COLORS.primary,
        padding: "64px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 720,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: FONTS.display,
            fontSize: 30,
            fontWeight: 600,
            color: "#FFFDF8",
            margin: "0 0 12px",
          }}
        >
          Your last trip is still worth writing down
        </h2>
        <p
          style={{
            fontFamily: FONTS.body,
            fontSize: 15.5,
            color: "#DCEADF",
            margin: "0 0 28px",
          }}
        >
          Title, destination, a story, five photos, a rating, a few tags. Ten
          minutes, and it's logged for good.
        </p>
        <button
          onClick={onShare}
          style={{
            background: COLORS.accent,
            color: "#FFFDF8",
            border: "none",
            borderRadius: 8,
            padding: "13px 26px",
            fontFamily: FONTS.body,
            fontSize: 15,
            fontWeight: 500,
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          Start your log
          <FiArrowRight size={16} />
        </button>
      </div>
    </section>
  );
};

export default CTASection;
