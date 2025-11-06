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

            {/* <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">Or continue with</span>
              </div>
            </div> */}

            {/* <div className="grid gap-4">
              <button className="border-2 border-gray-200 rounded-xl py-3 font-medium text-gray-700 hover:border-emerald-500 hover:text-emerald-600 transition-all duration-300 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </button>
            </div> */}

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