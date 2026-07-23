import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiUser,
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiCompass,
} from "react-icons/fi";
import { COLORS, FONTS } from "../Theme";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters long!");
      return;
    }

    if (!formData.agreeTerms) {
      alert("Please agree to the Terms of Service and Privacy Policy.");
      return;
    }

    setLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Here you would make your actual API call
    console.log("Registration data:", formData);

    setLoading(false);
    // Navigate to login after successful registration
    navigate("/login");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: COLORS.bg,
        padding: "24px",
      }}
    >
      <div
        style={{
          background: COLORS.surface,
          borderRadius: 16,
          padding: "48px 40px",
          maxWidth: 440,
          width: "100%",
          border: `1px solid ${COLORS.border}`,
          boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: COLORS.primary,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FiCompass size={22} color="#FFFDF8" strokeWidth={1.75} />
          </div>
          <span
            style={{
              fontFamily: FONTS.display,
              fontSize: 24,
              fontWeight: 600,
              color: COLORS.text,
            }}
          >
            TravelLog
          </span>
        </div>

        <h2
          style={{
            fontFamily: FONTS.display,
            fontSize: 28,
            fontWeight: 600,
            color: COLORS.text,
            textAlign: "center",
            margin: "0 0 8px",
          }}
        >
          Create an account
        </h2>
        <p
          style={{
            fontFamily: FONTS.body,
            fontSize: 15,
            color: COLORS.textMuted,
            textAlign: "center",
            margin: "0 0 32px",
          }}
        >
          Start logging your travel adventures
        </p>

        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div style={{ marginBottom: 18 }}>
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
              Username
            </label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                border: `1px solid ${COLORS.border}`,
                borderRadius: 8,
                background: COLORS.bg,
                padding: "0 14px",
                transition: "border-color 0.2s",
              }}
            >
              <FiUser size={18} color={COLORS.textMuted} />
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Choose a username"
                required
                style={{
                  width: "100%",
                  padding: "12px 12px",
                  border: "none",
                  background: "transparent",
                  outline: "none",
                  fontFamily: FONTS.body,
                  fontSize: 15,
                  color: COLORS.text,
                }}
              />
            </div>
          </div>

          {/* Email */}
          <div style={{ marginBottom: 18 }}>
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
              Email Address
            </label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                border: `1px solid ${COLORS.border}`,
                borderRadius: 8,
                background: COLORS.bg,
                padding: "0 14px",
                transition: "border-color 0.2s",
              }}
            >
              <FiMail size={18} color={COLORS.textMuted} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                style={{
                  width: "100%",
                  padding: "12px 12px",
                  border: "none",
                  background: "transparent",
                  outline: "none",
                  fontFamily: FONTS.body,
                  fontSize: 15,
                  color: COLORS.text,
                }}
              />
            </div>
          </div>

          {/* Password */}
          <div style={{ marginBottom: 18 }}>
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
              Password
            </label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                border: `1px solid ${COLORS.border}`,
                borderRadius: 8,
                background: COLORS.bg,
                padding: "0 14px",
                transition: "border-color 0.2s",
              }}
            >
              <FiLock size={18} color={COLORS.textMuted} />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Min 6 characters"
                required
                minLength={6}
                style={{
                  width: "100%",
                  padding: "12px 12px",
                  border: "none",
                  background: "transparent",
                  outline: "none",
                  fontFamily: FONTS.body,
                  fontSize: 15,
                  color: COLORS.text,
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: COLORS.textMuted,
                  padding: 0,
                }}
              >
                {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div style={{ marginBottom: 20 }}>
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
              Confirm Password
            </label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                border: `1px solid ${COLORS.border}`,
                borderRadius: 8,
                background: COLORS.bg,
                padding: "0 14px",
                transition: "border-color 0.2s",
              }}
            >
              <FiLock size={18} color={COLORS.textMuted} />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                required
                style={{
                  width: "100%",
                  padding: "12px 12px",
                  border: "none",
                  background: "transparent",
                  outline: "none",
                  fontFamily: FONTS.body,
                  fontSize: 15,
                  color: COLORS.text,
                }}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: COLORS.textMuted,
                  padding: 0,
                }}
              >
                {showConfirmPassword ? (
                  <FiEyeOff size={18} />
                ) : (
                  <FiEye size={18} />
                )}
              </button>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div style={{ marginBottom: 28 }}>
            <label
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
                fontFamily: FONTS.body,
                fontSize: 14,
                color: COLORS.textMuted,
                cursor: "pointer",
                lineHeight: 1.5,
              }}
            >
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                style={{
                  width: 18,
                  height: 18,
                  marginTop: 2,
                  accentColor: COLORS.primary,
                  cursor: "pointer",
                  flexShrink: 0,
                }}
                required
              />
              <span>
                I agree to the{" "}
                <Link
                  to="/terms"
                  style={{
                    color: COLORS.primary,
                    textDecoration: "none",
                  }}
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  to="/privacy"
                  style={{
                    color: COLORS.primary,
                    textDecoration: "none",
                  }}
                >
                  Privacy Policy
                </Link>
              </span>
            </label>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "14px",
              background: COLORS.primary,
              color: "#FFFDF8",
              border: "none",
              borderRadius: 8,
              fontFamily: FONTS.body,
              fontSize: 16,
              fontWeight: 500,
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.7 : 1,
              transition: "all 0.2s",
            }}
          >
            {loading ? "Creating account..." : "Create Account"}
          </button>
        </form>

        {/* Sign in link */}
        <p
          style={{
            fontFamily: FONTS.body,
            fontSize: 14,
            color: COLORS.textMuted,
            textAlign: "center",
            marginTop: 24,
            marginBottom: 0,
          }}
        >
          Already have an account?{" "}
          <Link
            to="/login"
            style={{
              color: COLORS.primary,
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
