import SideBar from "../components/SideBar";
import { useNavigate } from "react-router-dom";

function DashBoard() {
const navigate = useNavigate()

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex-1 p-6 z-0">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold bg-linear-to-r from-emerald-500 to-cyan-600 bg-clip-text text-transparent">
            Dashboard
          </h1>
          <button onClick={navigate("/addproject")} className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition cursor-pointer">
            New Project
          </button>
        </header>

        {/* Stats Section */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition">
            <h2 className="text-lg font-semibold mb-2 text-gray-700">
              Completed Projects
            </h2>
            <p className="text-3xl font-bold text-emerald-600">12</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition">
            <h2 className="text-lg font-semibold mb-2 text-gray-700">
              Ongoing Projects
            </h2>
            <p className="text-3xl font-bold text-teal-600">8</p>
          </div>

        </section>

        {/* Recent Projects */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Recent Projects</h2>
          <div className="bg-white rounded-2xl shadow-md p-5">
            <ul className="divide-y divide-gray-200">
              {["Project Alpha", "Project Beta", "Project Gamma"].map((project, idx) => (
                <li key={idx} className="py-3 flex justify-between items-center">
                  <span className="font-medium text-gray-700">{project}</span>
                  <span className="text-sm text-gray-500">Updated 2 days ago</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default DashBoard;