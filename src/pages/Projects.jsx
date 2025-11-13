import SideBar from "../components/SideBar";

function Projects() {
  const projects = [
    {
      name: "Project Alpha",
      description: "Redesign marketing website UI",
      status: "Completed",
    },
    {
      name: "Project Beta",
      description: "Develop project management dashboard",
      status: "In Progress",
    },
    {
      name: "Project Gamma",
      description: "API integration & backend testing",
      status: "Pending",
    },
    {
      name: "Project Delta",
      description: "Mobile app redesign and UX overhaul",
      status: "In Progress",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold bg-linear-to-r from-emerald-500 to-cyan-600 bg-clip-text text-transparent">
            All Projects
          </h1>

          <button className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition cursor-pointer">
            + Create Project
          </button>
        </header>

        {/* Project Cards */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition cursor-pointer"
            >
              <h2 className="text-lg font-semibold text-gray-800">
                {project.name}
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                {project.description}
              </p>

              {/* Status Badge */}
              <span
                className={`inline-block mt-4 text-xs px-2 py-1 rounded-full font-semibold
                  ${
                    project.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : project.status === "In Progress"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-yellow-100 text-yellow-700"
                  }
                `}
              >
                {project.status}
              </span>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Projects;
