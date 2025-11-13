import SideBar from "../components/SideBar";

function Profile() {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Product Manager",
    location: "San Francisco, CA",
    joined: "January 2024",
  };

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold bg-linear-to-r from-emerald-500 to-cyan-600 bg-clip-text text-transparent">
            Profile
          </h1>
          <a className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition cursor-pointer" href="/settings">
            Edit Profile
          </a>
        </header>

        {/* Profile Overview */}
        <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col md:flex-row items-center md:items-start gap-6 border border-gray-100">
          {/* Avatar */}
          <div className="w-32 h-32 rounded-full bg--to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-white text-3xl font-semibold">
            {user.name.charAt(0)}
          </div>

          {/* User Details */}
          <div className="flex-1 space-y-3">
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-gray-600">{user.role}</p>
            <p className="text-gray-500 text-sm">{user.email}</p>

            <div className="flex gap-4 mt-4 text-sm text-gray-500">
              <p>
                <span className="font-semibold text-gray-700">Joined:</span>{" "}
                {user.joined}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
