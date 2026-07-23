import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiUpload, FiX } from "react-icons/fi";
import { COLORS, FONTS } from "../Theme";

const ShareLog = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    destination: "",
    date: "",
    description: "",
    rating: 0,
    tags: [],
  });
  const [photos, setPhotos] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [hoverRating, setHoverRating] = useState(0);

  const availableTags = [
    "adventure",
    "budget",
    "family",
    "solo",
    "culture",
    "road trip",
    "beach",
    "mountain",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingClick = (rating) => {
    setFormData((prev) => ({ ...prev, rating }));
  };

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    const remainingSlots = 5 - photos.length;
    const newPhotos = files.slice(0, remainingSlots).map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setPhotos((prev) => [...prev, ...newPhotos]);
  };

  const removePhoto = (index) => {
    setPhotos((prev) => {
      const newPhotos = [...prev];
      URL.revokeObjectURL(newPhotos[index].preview);
      newPhotos.splice(index, 1);
      return newPhotos;
    });
  };

  const addTag = (tag) => {
    if (tag && !formData.tags.includes(tag) && formData.tags.length < 5) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, tag],
      }));
    }
    setTagInput("");
  };

  const removeTag = (tag) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((t) => t !== tag),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send the data to your backend
    console.log("Log data:", {
      ...formData,
      photos: photos.map((p) => p.file),
    });
    alert("Your log has been shared successfully! 🎉");
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div
      style={{
        background: COLORS.bg,
        minHeight: "100vh",
        padding: "40px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 800,
          margin: "0 auto",
          background: COLORS.surface,
          borderRadius: 16,
          padding: "40px 48px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          border: `1px solid ${COLORS.border}`,
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 32,
          }}
        >
          <button
            onClick={handleCancel}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "none",
              border: "none",
              color: COLORS.textMuted,
              cursor: "pointer",
              fontFamily: FONTS.body,
              fontSize: 14,
            }}
          >
            <FiArrowLeft size={18} />
            Cancel
          </button>
          <h2
            style={{
              fontFamily: FONTS.display,
              fontSize: 28,
              fontWeight: 600,
              color: COLORS.text,
              margin: 0,
            }}
          >
            Share Your Log
          </h2>
          <div style={{ width: 80 }} /> {/* Spacer */}
        </div>

        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div style={{ marginBottom: 24 }}>
            <label
              style={{
                fontFamily: FONTS.body,
                fontSize: 14,
                fontWeight: 500,
                color: COLORS.text,
                display: "block",
                marginBottom: 6,
              }}
            >
              Trip Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="e.g., Chasing fog through the rice terraces"
              required
              style={{
                width: "100%",
                padding: "12px 16px",
                border: `1px solid ${COLORS.border}`,
                borderRadius: 8,
                fontFamily: FONTS.body,
                fontSize: 15,
                background: COLORS.bg,
                color: COLORS.text,
                outline: "none",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => (e.target.style.borderColor = COLORS.primary)}
              onBlur={(e) => (e.target.style.borderColor = COLORS.border)}
            />
          </div>

          {/* Destination */}
          <div style={{ marginBottom: 24 }}>
            <label
              style={{
                fontFamily: FONTS.body,
                fontSize: 14,
                fontWeight: 500,
                color: COLORS.text,
                display: "block",
                marginBottom: 6,
              }}
            >
              Destination (City, Country) *
            </label>
            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleInputChange}
              placeholder="e.g., Ubud, Bali"
              required
              style={{
                width: "100%",
                padding: "12px 16px",
                border: `1px solid ${COLORS.border}`,
                borderRadius: 8,
                fontFamily: FONTS.body,
                fontSize: 15,
                background: COLORS.bg,
                color: COLORS.text,
                outline: "none",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => (e.target.style.borderColor = COLORS.primary)}
              onBlur={(e) => (e.target.style.borderColor = COLORS.border)}
            />
          </div>

          {/* Date */}
          <div style={{ marginBottom: 24 }}>
            <label
              style={{
                fontFamily: FONTS.body,
                fontSize: 14,
                fontWeight: 500,
                color: COLORS.text,
                display: "block",
                marginBottom: 6,
              }}
            >
              Date of Travel *
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
              style={{
                width: "100%",
                padding: "12px 16px",
                border: `1px solid ${COLORS.border}`,
                borderRadius: 8,
                fontFamily: FONTS.body,
                fontSize: 15,
                background: COLORS.bg,
                color: COLORS.text,
                outline: "none",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => (e.target.style.borderColor = COLORS.primary)}
              onBlur={(e) => (e.target.style.borderColor = COLORS.border)}
            />
          </div>

          {/* Description */}
          <div style={{ marginBottom: 24 }}>
            <label
              style={{
                fontFamily: FONTS.body,
                fontSize: 14,
                fontWeight: 500,
                color: COLORS.text,
                display: "block",
                marginBottom: 6,
              }}
            >
              Description / Story *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Share your experience, tips, and memories..."
              required
              rows={5}
              style={{
                width: "100%",
                padding: "12px 16px",
                border: `1px solid ${COLORS.border}`,
                borderRadius: 8,
                fontFamily: FONTS.body,
                fontSize: 15,
                background: COLORS.bg,
                color: COLORS.text,
                outline: "none",
                resize: "vertical",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => (e.target.style.borderColor = COLORS.primary)}
              onBlur={(e) => (e.target.style.borderColor = COLORS.border)}
            />
          </div>

          {/* Photos */}
          <div style={{ marginBottom: 24 }}>
            <label
              style={{
                fontFamily: FONTS.body,
                fontSize: 14,
                fontWeight: 500,
                color: COLORS.text,
                display: "block",
                marginBottom: 6,
              }}
            >
              Photos (max 5)
            </label>
            <div
              style={{
                border: `2px dashed ${COLORS.border}`,
                borderRadius: 8,
                padding: "20px",
                textAlign: "center",
                background: COLORS.bg,
                transition: "border-color 0.2s",
              }}
              onDragEnter={(e) => {
                e.preventDefault();
                e.currentTarget.style.borderColor = COLORS.primary;
              }}
              onDragLeave={(e) => {
                e.preventDefault();
                e.currentTarget.style.borderColor = COLORS.border;
              }}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                e.currentTarget.style.borderColor = COLORS.border;
                const files = Array.from(e.dataTransfer.files);
                const remainingSlots = 5 - photos.length;
                const newPhotos = files
                  .slice(0, remainingSlots)
                  .map((file) => ({
                    file,
                    preview: URL.createObjectURL(file),
                  }));
                setPhotos((prev) => [...prev, ...newPhotos]);
              }}
            >
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handlePhotoUpload}
                disabled={photos.length >= 5}
                style={{ display: "none" }}
                id="photo-upload"
              />
              <label
                htmlFor="photo-upload"
                style={{
                  cursor: photos.length >= 5 ? "not-allowed" : "pointer",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 8,
                  color: COLORS.textMuted,
                }}
              >
                <FiUpload size={32} />
                <span style={{ fontFamily: FONTS.body, fontSize: 14 }}>
                  {photos.length >= 5
                    ? "Maximum 5 photos reached"
                    : "Click or drag to upload photos"}
                </span>
              </label>
            </div>

            {/* Photo Previews */}
            {photos.length > 0 && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
                  gap: 12,
                  marginTop: 16,
                }}
              >
                {photos.map((photo, index) => (
                  <div
                    key={index}
                    style={{
                      position: "relative",
                      aspectRatio: "1",
                      borderRadius: 8,
                      overflow: "hidden",
                      border: `1px solid ${COLORS.border}`,
                    }}
                  >
                    <img
                      src={photo.preview}
                      alt={`Upload ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => removePhoto(index)}
                      style={{
                        position: "absolute",
                        top: 4,
                        right: 4,
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        background: "rgba(0,0,0,0.6)",
                        border: "none",
                        color: "white",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <FiX size={14} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Rating */}
          <div style={{ marginBottom: 24 }}>
            <label
              style={{
                fontFamily: FONTS.body,
                fontSize: 14,
                fontWeight: 500,
                color: COLORS.text,
                display: "block",
                marginBottom: 6,
              }}
            >
              Rating (1-5 stars)
            </label>
            <div style={{ display: "flex", gap: 8 }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleRatingClick(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: 32,
                    color:
                      star <= (hoverRating || formData.rating)
                        ? "#F59E0B"
                        : COLORS.border,
                    transition: "color 0.2s",
                    padding: 0,
                  }}
                >
                  ★
                </button>
              ))}
              {formData.rating > 0 && (
                <span
                  style={{
                    fontFamily: FONTS.body,
                    fontSize: 14,
                    color: COLORS.textMuted,
                    alignSelf: "center",
                    marginLeft: 8,
                  }}
                >
                  {formData.rating} / 5
                </span>
              )}
            </div>
          </div>

          {/* Tags */}
          <div style={{ marginBottom: 32 }}>
            <label
              style={{
                fontFamily: FONTS.body,
                fontSize: 14,
                fontWeight: 500,
                color: COLORS.text,
                display: "block",
                marginBottom: 6,
              }}
            >
              Tags (max 5)
            </label>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                padding: "8px",
                border: `1px solid ${COLORS.border}`,
                borderRadius: 8,
                background: COLORS.bg,
                minHeight: 48,
              }}
            >
              {formData.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    background: COLORS.primary + "20",
                    color: COLORS.primary,
                    padding: "4px 10px",
                    borderRadius: 999,
                    fontFamily: FONTS.body,
                    fontSize: 13,
                  }}
                >
                  #{tag}
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      display: "flex",
                      alignItems: "center",
                      color: COLORS.primary,
                    }}
                  >
                    <FiX size={14} />
                  </button>
                </span>
              ))}
              {formData.tags.length < 5 && (
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === ",") {
                      e.preventDefault();
                      addTag(tagInput.trim().toLowerCase());
                    }
                  }}
                  onBlur={() => {
                    if (tagInput.trim()) {
                      addTag(tagInput.trim().toLowerCase());
                    }
                  }}
                  placeholder="Add tags (press Enter or comma)"
                  style={{
                    flex: 1,
                    border: "none",
                    background: "transparent",
                    outline: "none",
                    fontFamily: FONTS.body,
                    fontSize: 14,
                    color: COLORS.text,
                    minWidth: 100,
                  }}
                />
              )}
            </div>
            <div
              style={{
                marginTop: 8,
                display: "flex",
                flexWrap: "wrap",
                gap: 6,
              }}
            >
              {availableTags
                .filter((tag) => !formData.tags.includes(tag))
                .slice(0, 6)
                .map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => addTag(tag)}
                    style={{
                      background: "transparent",
                      border: `1px solid ${COLORS.border}`,
                      borderRadius: 999,
                      padding: "2px 10px",
                      fontSize: 12,
                      color: COLORS.textMuted,
                      cursor: "pointer",
                      fontFamily: FONTS.body,
                    }}
                  >
                    #{tag}
                  </button>
                ))}
            </div>
          </div>

          {/* Actions */}
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "flex-end",
              paddingTop: 24,
              borderTop: `1px solid ${COLORS.border}`,
            }}
          >
            <button
              type="button"
              onClick={handleCancel}
              style={{
                padding: "12px 24px",
                border: `1px solid ${COLORS.border}`,
                borderRadius: 8,
                background: "transparent",
                color: COLORS.text,
                fontFamily: FONTS.body,
                fontSize: 15,
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.target.style.background = COLORS.border + "20")
              }
              onMouseLeave={(e) => (e.target.style.background = "transparent")}
            >
              Cancel
            </button>
            <button
              type="submit"
              style={{
                padding: "12px 32px",
                border: "none",
                borderRadius: 8,
                background: COLORS.primary,
                color: "#FFFDF8",
                fontFamily: FONTS.body,
                fontSize: 15,
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.opacity = 0.9)}
              onMouseLeave={(e) => (e.target.style.opacity = 1)}
            >
              Share Log ✨
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShareLog;
