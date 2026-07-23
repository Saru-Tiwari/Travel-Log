import { FaStar, FaRegStar } from "react-icons/fa";
import { FiMapPin, FiCamera } from "react-icons/fi";
import { COLORS, FONTS } from "../Theme";

const Stars = ({ rating, size = 14 }) => {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {[1, 2, 3, 4, 5].map((n) =>
        n <= rating ? (
          <FaStar key={n} size={size} color={COLORS.accent} />
        ) : (
          <FaRegStar key={n} size={size} color={COLORS.accent} />
        ),
      )}
    </div>
  );
};

const PassportStamp = ({ rating }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: -14,
        right: 18,
        width: 74,
        height: 74,
        borderRadius: "50%",
        border: `2px solid ${COLORS.primary}`,
        background: COLORS.bg,
        transform: "rotate(9deg)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 2px 4px rgba(0,0,0,0.06)",
        zIndex: 2,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 4,
          borderRadius: "50%",
          border: `1px dashed ${COLORS.primary}`,
        }}
      />
      <span
        style={{
          fontFamily: FONTS.mono,
          fontSize: 9,
          letterSpacing: 1,
          color: COLORS.primary,
          fontWeight: 500,
        }}
      >
        LOGGED
      </span>
      <span
        style={{
          fontFamily: FONTS.display,
          fontSize: 18,
          fontWeight: 600,
          color: COLORS.primary,
          lineHeight: 1,
        }}
      >
        {rating}.0
      </span>
    </div>
  );
};

const PhotoStrip = ({ count, hue, photos = [] }) => {
  const max = 5;
  const shown = Math.min(count, max);

  // If photos are provided, use them
  if (photos && photos.length > 0) {
    const displayPhotos = photos.slice(0, shown);
    return (
      <div style={{ display: "flex", gap: 6 }}>
        {displayPhotos.map((photo, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              aspectRatio: "1 / 1",
              borderRadius: 6,
              overflow: "hidden",
              border: `1px solid ${COLORS.border}`,
              background: hue,
            }}
          >
            <img
              src={photo}
              alt={`Log photo ${i + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>
    );
  }

  // Fallback to gradient if no photos provided
  return (
    <div style={{ display: "flex", gap: 6 }}>
      {Array.from({ length: shown }).map((_, i) => (
        <div
          key={i}
          style={{
            flex: 1,
            aspectRatio: "1 / 1",
            borderRadius: 6,
            background: `linear-gradient(160deg, ${hue}55, ${hue}bb)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: `1px solid ${COLORS.border}`,
          }}
        >
          <FiCamera size={14} color="#FFFDF8" strokeWidth={1.5} />
        </div>
      ))}
    </div>
  );
};

const LogCard = ({ log }) => {
  return (
    <div
      style={{
        position: "relative",
        background: COLORS.bg,
        border: `1px solid ${COLORS.border}`,
        borderRadius: 14,
        padding: 20,
        transition: "transform 0.2s, box-shadow 0.2s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <PassportStamp rating={log.rating} />
      <PhotoStrip
        count={log.photoCount}
        hue={log.hue}
        photos={log.photos || []}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          marginTop: 14,
          color: COLORS.primary,
          fontFamily: FONTS.mono,
          fontSize: 12,
        }}
      >
        <FiMapPin size={13} />
        {log.destination}
        <span style={{ color: COLORS.textMuted }}>· {log.date}</span>
      </div>

      <h3
        style={{
          fontFamily: FONTS.display,
          fontSize: 19,
          fontWeight: 600,
          color: COLORS.text,
          margin: "8px 0 8px",
          lineHeight: 1.25,
        }}
      >
        {log.title}
      </h3>

      <p
        style={{
          fontFamily: FONTS.body,
          fontSize: 14,
          lineHeight: 1.55,
          color: COLORS.textMuted,
          margin: "0 0 16px",
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {log.excerpt}
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {log.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: FONTS.body,
                fontSize: 12,
                color: "#8A4B0A",
                background: COLORS.accentLight,
                padding: "4px 10px",
                borderRadius: 999,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <Stars rating={log.rating} />
      </div>
    </div>
  );
};

export { Stars, PassportStamp, PhotoStrip };
export default LogCard;
