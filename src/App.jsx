import { useEffect, useState } from 'react';
import './App.css';
import { getProjects } from './AirtableApi';


function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch projects from Airtable on component mount
  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      const projectData = await getProjects();
      setProjects(projectData);
      setLoading(false);
    };

    fetchProjects(); // initial fetch
    const intervalId = setInterval(fetchProjects, 15000); // poll every 15 seconds
    return () => clearInterval(intervalId); // ceanup on component unmount
  }, []);

  // function to determine the color based on status
  const getStatusColor = (status) => {
    switch (status) {
      case 'Blocked':
        return 'bg-red-500';
      case 'Done':
        return 'bg-green-500';
      case 'In Progress':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  // show loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h2 className="text-2xl font-semibold text-gray-700 animate-pulse">Loading Projects...</h2>
      </div>
    );
  }


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Projects Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className={`p-6 rounded-lg shadow-md text-white ${getStatusColor(project['Project Status'])}`}>
            <h2 className="text-xl font-semibold">{project['Project Name']}</h2>
            <p>Status: {project['Project Status']}</p>
            <p>Assignee: {project['Assignee Full Name']}</p>
            {/* display all other fields */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App;
