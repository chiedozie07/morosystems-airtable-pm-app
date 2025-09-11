import React from "react";

// function to determine the color based on status
const getStatusColor = (status) => {
  switch (status) {
    case "Blocked":
      return "#E5E9F0";
    case "Done":
      return "#CFF5D1";
    case "In Progress":
      return "#FFEAB6";
    case "Not Started":
      return "#FFD4E0";
    default:
      return "bg-blue-500";
  }
};

// reusable component to display the list of projects
const ProjectsList = ({ projects }) => {
  // Bug Fix: Check if the projects array is empty or not provided
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
            className={`p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 ${getStatusColor(
              // Bug Fix: Safely access the 'Project Status' field
              project["Project Status"]
            )}`}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white text-lg font-semibold">
                {/* Bug Fix: Safely access 'Project Name' with a fallback */}
                {project["Project Name"] || "Untitled Project"}
              </h3>
              <span className="text-sm font-medium text-white px-2 py-1 rounded-full bg-black bg-opacity-30">
                {project["Project Status"] || "N/A"}
              </span>
            </div>
            <div className="text-white text-opacity-80 space-y-2">
              <p>
                <strong>Assignee:</strong>{" "}
                {/* Bug Fix: Safely access 'Assignee Full Name' with a fallback */}
                {project["Assignee Full Name"] || "Unassigned"}
              </p>
              <p>
                <strong>Start Date:</strong>{" "}
                {project["Start Date"] || "N/A"}
              </p>
              <p>
                <strong>End Date:</strong>{" "}
                {project["End Date"] || "N/A"}
              </p>
              <p>
                <strong>Reporter:</strong>{" "}
                {project["Reporter Full Name"] || "N/A"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsList;