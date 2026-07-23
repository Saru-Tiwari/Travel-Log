import { FiMapPin, FiCalendar, FiCamera, FiTag, FiBook } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { COLORS, FONTS } from "../Theme";

const LOG_FIELDS = [
  {
    icon: FiBook,
    label: "Title & story",
    copy: "Give the trip a name and tell it your way — the detour, the almost-missed train, the meal you still think about.",
  },
  {
    icon: FiMapPin,
    label: "Destination",
    copy: "Tag the city and country so other travellers can find your log when they're researching the same place.",
  },
  {
    icon: FiCalendar,
    label: "Date of travel",
    copy: "Log when you went. Seasons change everything — helpful context for anyone planning the same route.",
  },
  {
    icon: FiCamera,
    label: "Photos",
    copy: "Add up to 5 photos per log. Enough to set the scene, not so many it turns into a slideshow.",
  },
  {
    icon: FaStar,
    label: "Rating",
    copy: "Rate the trip 1 to 5 stars — a quick gut-check for anyone deciding if it's worth their own time.",
  },
  {
    icon: FiTag,
    label: "Tags",
    copy: "Label it adventure, budget, family, solo, or your own — tags are how people filter for logs like theirs.",
  },
];

const FieldsSection = () => {
  return (
    <section style={{ background: COLORS.surface, padding: "80px 24px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <div style={{ maxWidth: 560, marginBottom: 48 }}>
          <span
            style={{
              fontFamily: FONTS.mono,
              fontSize: 12.5,
              color: COLORS.primary,
              letterSpacing: 0.4,
            }}
          >
            WHAT GOES IN A LOG
          </span>
          <h2
            style={{
              fontFamily: FONTS.display,
              fontSize: 34,
              fontWeight: 600,
              color: COLORS.text,
              margin: "10px 0 0",
            }}
          >
            Six fields. Everything that matters, nothing that doesn't.
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {LOG_FIELDS.map(({ icon: Icon, label, copy }) => (
            <div
              key={label}
              style={{
                background: COLORS.bg,
                border: `1px solid ${COLORS.border}`,
                borderRadius: 12,
                padding: 22,
              }}
            >
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 8,
                  background: COLORS.primaryLight,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 14,
                }}
              >
                <Icon size={18} color={COLORS.primary} strokeWidth={1.75} />
              </div>
              <div
                style={{
                  fontFamily: FONTS.display,
                  fontSize: 17,
                  fontWeight: 600,
                  color: COLORS.text,
                  marginBottom: 6,
                }}
              >
                {label}
              </div>
              <p
                style={{
                  fontFamily: FONTS.body,
                  fontSize: 14,
                  lineHeight: 1.55,
                  color: COLORS.textMuted,
                  margin: 0,
                }}
              >
                {copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FieldsSection;
