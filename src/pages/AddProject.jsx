import axios from "axios";
import { useState } from "react";
import SideBar from "../components/SideBar";
import { ChevronDown } from "lucide-react";

function AddProject() {
  const [open, setOpen] = useState(false);
  const options = [
    { label: "Ongoing", color: "bg-blue-100 text-blue-700" },
    { label: "Completed", color: "bg-green-100 text-green-700" },
  ];

  const [data, setData] = useState({
    name: "",
    description: "",
    repositoryLink: "",
    techstack: "",
    websiteLink: "",
    status: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/user/project/create`,
        data
      );
      alert("✅ Project created successfully!");
      setData({
        name: "",
        description: "",
        repositoryLink: "",
        techstack: "",
        websiteLink: "",
        status: "",
      });
    } catch (error) {
      console.error("❌ Error creating project:", error);
      alert("Error creating project");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold bg-linear-to-r from-emerald-500 to-cyan-600 bg-clip-text text-transparent">
            Add New Project
          </h1>
        </header>

        {/* Add Project Form */}
        <div className="bg-white rounded-2xl shadow-md p-8 max-w-3xl mx-auto border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Project Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Project Name
              </label>
              <input
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
                placeholder="Enter project name"
                className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-400 outline-none"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                value={data.description}
                onChange={handleChange}
                placeholder="Brief description about your project"
                className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-400 outline-none h-24"
                required
              ></textarea>
            </div>

            {/* Repository Link */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Repository Link
              </label>
              <input
                type="url"
                name="repositoryLink"
                value={data.repositoryLink}
                onChange={handleChange}
                placeholder="https://github.com/username/repository"
                className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-400 outline-none"
              />
            </div>

            {/* Tech Stack */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tech Stack
              </label>
              <input
                type="text"
                name="techstack"
                value={data.techstack}
                onChange={handleChange}
                placeholder="React, Node.js, MongoDB..."
                className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-400 outline-none"
              />
            </div>

            {/* Website Link */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Website Link
              </label>
              <input
                type="url"
                name="websiteLink"
                value={data.websiteLink}
                onChange={handleChange}
                placeholder="https://yourproject.com"
                className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-emerald-400 outline-none"
              />
            </div>

            {/* Status Dropdown */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Status
              </label>

              {/* Selected display */}
              <button
                type="button"
                onClick={() => setOpen(!open)}
                className="w-full flex justify-between items-center px-4 py-2 rounded-xl border border-gray-200 
                          bg-white text-gray-700 focus:ring-2 focus:ring-emerald-400 
                          outline-none shadow-sm transition-all duration-200"
              >
                {data.status ? (
                  <span
                    className={`px-3 py-1 text-sm rounded-full font-medium ${
                      data.status === "Ongoing"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {data.status}
                  </span>
                ) : (
                  <span className="text-gray-400">Select Status</span>
                )}
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown options */}
              {open && (
                <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-20">
                  {options.map((opt) => (
                    <div
                      key={opt.label}
                      onClick={() => {
                        setData((prev) => ({ ...prev, status: opt.label }));
                        setOpen(false);
                      }}
                      className={`px-4 py-2 text-sm font-medium cursor-pointer hover:bg-gray-50 transition-all ${opt.color}`}
                    >
                      {opt.label}
                    </div>
                  ))}
                </div>
              )}

              <p className="text-xs text-gray-400 mt-1">
                Choose current project status
              </p>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className={`px-6 py-2 rounded-lg text-white font-semibold transition 
                ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-emerald-500 hover:bg-emerald-600"
                }`}
              >
                {loading ? "Submitting..." : "Create Project"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProject;
