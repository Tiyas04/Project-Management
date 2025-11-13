import { Home, Briefcase, Settings, ChevronRight, UserRoundPenIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function SideBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isExpanded, setIsExpanded] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  const items = [
    { name: "Dashboard", icon: Home, path: "/dashboard" },
    { name: "Projects", icon: Briefcase, path: "/projects" },
    {name:"Profile", icon: UserRoundPenIcon, path:"/profile" }
  ];

  // ✅ Sync sidebar with the current route
  useEffect(() => {
    const current = items.find((item) => item.path === location.pathname);
    if (current) setActiveItem(current.name);
  }, [location.pathname]);

  return (
    <div
      className={`h-screen bg-linear-to-br from-emerald-400 via-teal-500 to-cyan-600 text-white transition-all duration-300 flex flex-col justify-between ${
        isExpanded ? "w-64 z-30" : "w-20"
      }`}
    >
      <div className="flex flex-col gap-6 p-4">
        {/* Logo */}
        <div className="flex items-center justify-between">
          <h1
            className={`text-2xl font-bold transition-all duration-300 overflow-hidden ${
              isExpanded ? "opacity-100 w-auto" : "opacity-0 w-0"
            }`}
          >
            Projectro
          </h1>

          <button
            onClick={() => setIsExpanded((prev) => !prev)}
            className="p-2 rounded-lg hover:bg-white/10 transition"
          >
            <ChevronRight
              className={`w-5 h-5 transition-transform duration-300 ${
                isExpanded ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2 mt-4">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.name;

            return (
              <button
                key={item.name}
                onClick={() => navigate(item.path)}
                className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-white/20 text-white font-semibold"
                    : "hover:bg-white/10 text-white/80"
                }`}
              >
                <Icon className="w-5 h-5 shrink-0" />
                {isExpanded && <span className="truncate">{item.name}</span>}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

export default SideBar;
