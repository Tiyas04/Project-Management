import { useState } from "react";
import { User, Lock, Eye, EyeOff, Sparkles, ArrowRight } from "lucide-react";
import axios from "axios";

function SignIn() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/user/login`, formData);
      console.log("✅ Login successful");
      alert("Login successful!");
    } catch (error) {
      console.error("❌ Login failed:", error);
      alert("Invalid username or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen max-w-screen bg-linear-to-bl from-purple-400 via-pink-400 to-rose-400 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-fuchsia-500 opacity-20 rounded-full blur-3xl top-20 left-20 animate-pulse"></div>
        <div
          className="absolute w-96 h-96 bg-rose-500 opacity-20 rounded-full blur-3xl bottom-20 right-20 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="max-w-md w-full relative z-10">
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden backdrop-blur-xl bg-opacity-95">
          {/* Header Section */}
          <div className="bg-linear-to-br from-purple-600 via-pink-600 to-rose-600 p-8 text-white text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
              <Sparkles className="w-8 h-8 text-gray-400" />
            </div>
            <h2 className="text-3xl font-bold mb-2">Projectro</h2>
            <p className="text-white opacity-90">
              Maintain your projects with Projectro today.
            </p>
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmit} className="p-8 space-y-5">
            {/* Username Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 block">
                Username
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="John_Doe123"
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-gray-400 focus:outline-none transition-colors"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 block">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-gray-400 focus:outline-none transition-colors"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full font-semibold py-4 rounded-xl flex items-center justify-center gap-2 group cursor-pointer transition-all duration-300 ${
                loading
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-linear-to-br from-purple-600 via-pink-600 to-rose-600 text-white hover:shadow-lg transform hover:scale-105"
              }`}
            >
              {loading ? (
                <>
                  <span className="animate-pulse">Signing In...</span>
                </>
              ) : (
                <>
                  Sign In
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

            {/* Sign Up Link */}
            <p className="text-center text-sm text-gray-600">
              New to Projectro?{" "}
              <a
                href="/signup"
                className="text-pink-700 font-semibold hover:text-pink-800"
              >
                Create Account
              </a>
            </p>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-5 text-center text-white text-sm">
        <p className="opacity-90">
          Made by{" "}
          <a
            className="text-rose-900 font-semibold transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            href="https://tiyas.vercel.app"
          >
            Tiyas
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
