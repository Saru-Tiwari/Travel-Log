import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMail, FiLock, FiEye, FiEyeOff, FiCompass } from "react-icons/fi";
import { COLORS, FONTS } from "../Theme";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
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
    setLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Here you would make your actual API call
    console.log("Login data:", formData);

    setLoading(false);
    // Navigate to home after successful login
    navigate("/");
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
          Welcome back
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
          Sign in to continue your travel journey
        </p>

        <form onSubmit={handleSubmit}>
          {/* Email */}
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
                placeholder="Enter your password"
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

          {/* Remember me & Forgot password */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 28,
            }}
          >
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontFamily: FONTS.body,
                fontSize: 14,
                color: COLORS.textMuted,
                cursor: "pointer",
              }}
            >
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                style={{
                  width: 16,
                  height: 16,
                  accentColor: COLORS.primary,
                  cursor: "pointer",
                }}
              />
              Remember me
            </label>
            <Link
              to="/forgot-password"
              style={{
                fontFamily: FONTS.body,
                fontSize: 14,
                color: COLORS.primary,
                textDecoration: "none",
              }}
            >
              Forgot password?
            </Link>
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
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {/* Sign up link */}
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
          Don't have an account?{" "}
          <Link
            to="/register"
            style={{
              color: COLORS.primary,
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
