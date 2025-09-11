import { useEffect, useState } from 'react';
import './App.css';
import { getProjects } from './AirtableApi';
import Header from './components/Header';
import ProjectsList from './components/ProjectsList';


function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // define the counts for each status
  const statusCounts = projects.reduce((acc, project) => {
    const status = project['Project Status'] || 'Unknown';
    acc[status] = (acc[status] || 0) + 1;
    return acc;
  }, {});

  // fetch projects from Airtable on component mount
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectData = await getProjects();
        // Check if the fetched data is different from the current state
        if (JSON.stringify(projectData) !== JSON.stringify(projects)) {
          setProjects(projectData);
        }
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        // only set loading to false after the initial load
        if (loading) {
          setLoading(false);
        }
      }
    };

    fetchProjects(); // Initial fetch
    const intervalId = setInterval(fetchProjects, 15000); // poll every 15 seconds

    return () => clearInterval(intervalId); // cleanup on component unmount
  }, [projects, loading]); // added dependencies to re-run effect if projects or loading changes

  // show loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h2 className="text-2xl font-semibold text-gray-700 animate-pulse">Loading Projects...</h2>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <Header />
      <main className="container mx-auto py-8 px-4">
        {/* summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-gray-500 font-medium">Total Projects</h3>
            <p className="text-3xl font-bold text-gray-800">{projects.length}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-gray-500 font-medium">Done</h3>
            <p className="text-3xl font-bold text-green-500">{statusCounts['Done'] || 0}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-gray-500 font-medium">In Progress</h3>
            <p className="text-3xl font-bold text-yellow-500">{statusCounts['In Progress'] || 0}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-gray-500 font-medium">Blocked</h3>
            <p className="text-3xl font-bold text-red-500">{statusCounts['Blocked'] || 0}</p>
          </div>
        </div>

        {/* the new reusable component */}
        <ProjectsList projects={projects} />
      </main>
    </div>
  );
}

export default App;