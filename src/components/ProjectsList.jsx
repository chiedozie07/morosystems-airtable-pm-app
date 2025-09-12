import React from "react";

// function to determine the color based on status
// const getStatusColor = (status) => {
//   const normalizedStatus = (status || "").toLowerCase().trim();

//   switch (normalizedStatus) {
//     case "blocked":
//       return "#FFD4E0";
//     case "done":
//       return "#CFF5D1"; 
//     case "in progress":
//       return "#FFEAB6";
//     case "not started":
//       return "#E5E9F0";
//     default:
//       return "#E5E9F0"; // 'bg-blue-500'
//   }
// };
const getStatusColor = (status) => {
  switch (status) {
    case 'Blocked':
      return 'bg-red-500';
    case 'Done':
      return 'bg-green-500';
    case 'In Progress':
      return 'bg-yellow-500';
    case 'Not Started':
      return 'bg-gray-500';
    default:
      return 'bg-blue-500';
  }
};

// Reusable component to display the list of projects
const ProjectsList = ({ projects }) => {
  if (!projects || projects.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-24 text-gray-500">
        <p className="text-xl font-medium">No projects found.</p>
      </div>
    );
  }

  return (
    <section>
      <h2 className="text-xl font-bold text-gray-800 mb-4">All Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 ${getStatusColor(project['Project Status'])}`}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white text-lg font-semibold">{project['Project Name']}</h3>
              <span className="text-sm font-medium text-white px-2 py-1 rounded-full bg-black bg-opacity-30">
                {project['Project Status']}
              </span>
            </div>
            <div className="text-white text-opacity-80 space-y-2">
              <p><strong>Assignee:</strong> {project['Full Name (from Assignee)']}</p>
              <p><strong>Start Date:</strong> {project['Start Date']}</p>
              <p><strong>End Date:</strong> {project['End Date']}</p>
              <p><strong>Reporter:</strong> {project['Full Name (from Reporter)']}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsList;