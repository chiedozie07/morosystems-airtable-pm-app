import React from 'react';

// function to get the full Tailwind class for the status tag, including text and background color
const getStatusTagClasses = (status) => {
  const normalizedStatus = (status || "").toLowerCase().trim();
  let bgColor = '';
  let textColor = '';

  switch (normalizedStatus) {
    case 'blocked':
      bgColor = 'bg-red-200';
      textColor = 'text-red-700';
      break;
    case 'done':
      bgColor = 'bg-green-200';
      textColor = 'text-green-700';
      break;
    case 'in progress':
      bgColor = 'bg-yellow-200';
      textColor = 'text-yellow-700';
      break;
    case 'not started':
      bgColor = 'bg-gray-200';
      textColor = 'text-gray-700';
      break;
    default:
      bgColor = 'bg-blue-200';
      textColor = 'text-blue-700';
  }
  return `${bgColor} ${textColor}`;
};

// Reusable component to display the list of projects
const ProjectsList = ({ projects }) => {

  return (
    <section>
      <h2 className="text-xl font-bold text-gray-700 mb-4">All Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => {
          // Check for a valid project
          if (!project || !project.id) {
            console.error('Invalid project object:', project);
            return null;
          }

          // safely access fields, handling array values and fallbacks
          const projectStatus = project['Project Status']?.[0] || 'N/A';
          const assigneeName = project['Full Name (from Assignee)']?.[0] || 'N/A';
          const reporterName = project['Full Name (from Reporter)']?.[0] || 'N/A';
          // const description = project['Project Description'] || 'N/A';
          // const ownerName = project['Owner']?.[0] || 'N/A';

          return (
            <div
              key={project.id}
              className="p-6 bg-white rounded-lg shadow-md border border-gray-200 transition-all duration-300 
              ease-in-out transform hover:scale-105 hover:shadow-xl
              hover:bg-gradient-to-r from-blue-500 to-purple-500 hover:text-white"
            >
              <h3 className="text-gray-600 text-lg font-bold mb-2 hover:text-gray-100">
                {project['Project Name'] || 'N/A'}
              </h3>
              <div className="border-b border-gray-200 mb-4"></div>
              {/* <p className="text-gray-600 mb-4">
                <strong>Description:</strong> {description}
              </p> */}
              
              <div className="flex items-center mb-4">
                <span className={`text-sm font-medium px-2 py-1 rounded-full ${getStatusTagClasses(projectStatus)}`}>
                  {projectStatus || 'N/A'}
                </span>
              </div>

              <div className="text-gray-700 text-sm space-y-2 hover:text-white">
                {/* <p><strong>Owner:</strong> {ownerName}</p> */}
                <p><strong>Start Date:</strong> {project['Start Date'] || 'N/A'}</p>
                <p><strong>End Date:</strong> {project['End Date'] || 'N/A'}</p>
                <p><strong>Assignee:</strong> {assigneeName || 'N/A'}</p>
                <p><strong>Reporter:</strong> {reporterName || 'N/A'}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsList;