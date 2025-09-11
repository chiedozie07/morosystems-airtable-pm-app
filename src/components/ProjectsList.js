// src/ProjectsList.jsx

import React from "react";

// Function to determine the color based on status
const getStatusColor = (status) => {
  switch (status) {
    case "Blocked":
      return "bg-red-500";
    case "Done":
      return "bg-green-500";
    case "In Progress":
      return "bg-yellow-500";
    case "Not Started":
      return "bg-gray-500";
    default:
      return "bg-blue-500";
  }
};

// Reusable component to display the list of projects
const ProjectsList = ({ projects }) => {
  return (
    <section>
      <h2 className="text-xl font-bold text-gray-800 mb-4">All Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 ${getStatusColor(
              project["Project Status"]
            )}`}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white text-lg font-semibold">
                {project["Project Name"]}
              </h3>
              <span className="text-sm font-medium text-white px-2 py-1 rounded-full bg-black bg-opacity-30">
                {project["Project Status"]}
              </span>
            </div>
            <div className="text-white text-opacity-80 space-y-2">
              <p>
                <strong>Assignee:</strong> {project["Assignee Full Name"]}
              </p>
              <p>
                <strong>Start Date:</strong> {project["Start Date"]}
              </p>
              <p>
                <strong>End Date:</strong> {project["End Date"]}
              </p>
              <p>
                <strong>Reporter:</strong> {project["Reporter Full Name"]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsList;
