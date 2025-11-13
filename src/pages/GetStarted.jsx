import { ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from "react-router-dom";

function GetStarted() {
const navigate = useNavigate()

  return (
    <div className="min-h-screen w-screen bg-linear-to-br from-emerald-400 via-teal-500 to-cyan-600 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-white opacity-10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-white opacity-10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center relative z-10">
        {/* Left side - Hero content */}
        <div className="text-white space-y-6 p-8">
          <div className="inline-block">
            <div className="flex items-center gap-2 bg-white/50 bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Welcome to Projectro</span>
            </div>
          </div>
          <h1 className="text-6xl font-bold leading-tight">
            Projectro
            <span className="block bg-linear-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent text-3xl">
                 Your Ultimate Project Management App
            </span>
          </h1>
          <p className="text-xl text-white opacity-90 leading-relaxed">
            Join today and revolutionize the way you manage projects. Collaborate seamlessly, track progress in real-time, and achieve your goals with Projectro.
          </p>
        </div>

        {/* Right side - CTA Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 backdrop-blur-xl bg-opacity-95">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Get Started</h2>
              <p className="text-gray-600">Create your account in seconds</p>
            </div>

            <button className="w-full bg-linear-to-r from-emerald-500 to-teal-600 text-white font-semibold py-4 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer" onClick={() => navigate("/signup")}>
              Continue with Email
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
           <p className="text-center text-sm text-gray-600">
              Already have an account?{' '}
              <a href="/signin" className="text-emerald-600 font-semibold hover:text-emerald-700">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 text-white text-sm opacity-70">
        Made by {" "}<a  className="text-teal-900 font-semibold transition-colors" target="_blank" rel="noopener noreferrer" href="https://tiyas.vercel.app">Tiyas</a>
      </div>
    </div>
  );
}

export default GetStarted;