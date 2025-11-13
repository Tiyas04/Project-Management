import { useState } from "react";
import axios from "axios";
import {
  ArrowRight,
  Mail,
  Lock,
  User,
  BookUser,
  Eye,
  EyeOff,
  Sparkles,
} from "lucide-react";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    username: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/user/register`,
        formData
      );

      console.log("User registered successfully");
    } catch (error) {
      console.error("User registration failed", error);
    }
  };

  return (
    <div className="min-h-screen max-w-screen bg-linear-to-br from-emerald-400 via-teal-500 to-cyan-600 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-green-400 opacity-20 rounded-full blur-3xl top-20 left-20 animate-pulse"></div>
        <div
          className="absolute w-96 h-96 bg-blue-400 opacity-20 rounded-full blur-3xl bottom-20 right-20 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="max-w-md w-full relative z-10">
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden backdrop-blur-xl bg-opacity-95">
          {/* Header Section */}
          <div className="bg-linear-to-br from-emerald-600 via-teal-600 to-cyan-600 p-8 text-white text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
              <Sparkles className="w-8 h-8 text-gray-400" />
            </div>
            <h2 className="text-3xl font-bold mb-2">Projectro</h2>
            <p className="text-white opacity-90">
              Maintain your projects with Projectro today.
            </p>
          </div>

          {/* Form Section */}
          <div className="p-8 space-y-5">
            {/* Name Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 block">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-gray-400 focus:outline-none transition-colors"
                  required
                />
              </div>
            </div>

            {/*Username Input*/}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 block">
                Username
              </label>
              <div className="relative">
                <BookUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
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

            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 block">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
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

            <button
              className="w-full bg-linear-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white font-semibold py-4 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
              onClick={handleSubmit}
            >
              Create Account
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Sign In Link */}
            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <a
                href="/signin"
                className="text-teal-700 font-semibold hover:text-teal-800"
              >
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="absolute bottom-5 text-center text-white text-sm">
        <p className="opacity-90">
          Made by{" "}
          <a
            className="text-teal-900 font-semibold transition-colors"
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

export default SignUp;
