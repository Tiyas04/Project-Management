import { Moon } from "lucide-react";
import SideBar from "../components/SideBar";

function Settings() {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      <SideBar />

      <div className="flex-1 p-6">

        {/* -------- Header -------- */}
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold bg-linear-to-r from-emerald-500 to-cyan-600 bg-clip-text text-transparent">
              Settings
            </h1>
            <p className="text-gray-600 mt-1">
              Manage your account preferences and application settings.
            </p>
          </div>
        </header>

        {/* -------- Cards Section -------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* ----- Account Info Card ----- */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Account Information
            </h2>

            <div className="space-y-4">
              <div>
                <label className="text-gray-600 text-sm">Full Name</label>
                <input
                  type="text"
                  className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-200 
                  focus:ring-2 focus:ring-emerald-400 outline-none"
                  value="User Name"
                />
              </div>

              <div>
                <label className="text-gray-600 text-sm">Email Address</label>
                <input
                  type="email"
                  className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-200 
                  focus:ring-2 focus:ring-emerald-400 outline-none"
                  value="user@example.com"
                />
              </div>

              <button className="mt-2 px-4 py-2 bg-emerald-500 text-white rounded-lg 
              hover:bg-emerald-600 transition">
                Save Changes
              </button>
            </div>
          </div>

          {/* ----- Change Password Card ----- */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Change Password
            </h2>

            <div className="space-y-4">
              <div>
                <label className="text-gray-600 text-sm">Current Password</label>
                <input
                  type="password"
                  className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-200 
                  focus:ring-2 focus:ring-emerald-400 outline-none"
                  placeholder="••••••••"
                />
              </div>

              <div>
                <label className="text-gray-600 text-sm">New Password</label>
                <input
                  type="password"
                  className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-200 
                  focus:ring-2 focus:ring-emerald-400 outline-none"
                  placeholder="••••••••"
                />
              </div>

              <button className="mt-2 px-4 py-2 bg-emerald-500 text-white rounded-lg 
              hover:bg-emerald-600 transition">
                Update Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;

