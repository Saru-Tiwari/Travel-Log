import { FiChevronRight } from "react-icons/fi";
import { COLORS, FONTS } from "../Theme";
import LogCard from "../pages/LogCard";

const SkeletonCard = () => {
  return (
    <div
      style={{
        background: COLORS.bg,
        border: `1px solid ${COLORS.border}`,
        borderRadius: 14,
        padding: 20,
      }}
    >
      <div style={{ display: "flex", gap: 6, marginBottom: 14 }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              aspectRatio: "1 / 1",
              borderRadius: 6,
              background: COLORS.surface,
            }}
          />
        ))}
      </div>
      <div
        style={{
          width: "50%",
          height: 12,
          borderRadius: 4,
          background: COLORS.surface,
          marginBottom: 10,
        }}
      />
      <div
        style={{
          width: "85%",
          height: 18,
          borderRadius: 4,
          background: COLORS.surface,
          marginBottom: 10,
        }}
      />
      <div
        style={{
          width: "100%",
          height: 12,
          borderRadius: 4,
          background: COLORS.surface,
          marginBottom: 6,
        }}
      />
      <div
        style={{
          width: "70%",
          height: 12,
          borderRadius: 4,
          background: COLORS.surface,
        }}
      />
    </div>
  );
};

const StoriesSection = ({ logs, loading }) => {
  return (
    <section style={{ background: COLORS.bg, padding: "80px 24px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 40,
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div>
            <span
              style={{
                fontFamily: FONTS.mono,
                fontSize: 12.5,
                color: COLORS.primary,
                letterSpacing: 0.4,
              }}
            >
              RECENTLY LOGGED
            </span>
            <h2
              style={{
                fontFamily: FONTS.display,
                fontSize: 32,
                fontWeight: 600,
                color: COLORS.text,
                margin: "10px 0 0",
              }}
            >
              Fresh off the plane
            </h2>
          </div>
          <a
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              fontFamily: FONTS.body,
              fontSize: 14.5,
              color: COLORS.primary,
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            View all logs
            <FiChevronRight size={16} />
          </a>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {loading
            ? Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)
            : logs.map((log) => <LogCard key={log.title} log={log} />)}
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
