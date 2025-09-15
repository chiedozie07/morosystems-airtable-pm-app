import { useEffect, useState } from 'react';
import './App.css';
import { getProjects } from './AirtableApi';
import Header from './components/Header';
import ProjectsList from './components/ProjectsList';

const App = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // define the counts for each status
  const statusCounts = projects.reduce((acc, project) => {
    const status = project['Project Status'] || 'Unknown';
    acc[status] = (acc[status] || 0) + 1;
    return acc;
  }, {});

  const statusCards = [
    { title: 'Total Projects', count: projects.length, color: 'text-gray-700' },
    { title: 'Not Started', count: statusCounts['Not Started'] || 0, color: 'text-gray-500' },
    { title: 'In Progress', count: statusCounts['In Progress'] || 0, color: 'text-yellow-500' },
    { title: 'Done', count: statusCounts['Done'] || 0, color: 'text-green-500' },
    { title: 'Blocked', count: statusCounts['Blocked'] || 0, color: 'text-red-500' }
  ];

  // fetch projects from Airtable on component mount and poll for updates
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectData = await getProjects();
      // update the state with the fetched data only update if the data is different
        if (projectData) {
          setProjects(projectData);
        }
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        // hidden loading screen after the initial fetch, regardless of success.
        setLoading(false);
      }
    };
    fetchProjects(); // initial fetch
    const intervalId = setInterval(fetchProjects, 15000);
    return () => clearInterval(intervalId)
  }, []); 

  // show loading state only on initial render
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h2 className="text-2xl font-semibold text-gray-500 animate-pulse">Loading Projects...</h2>
      </div>
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <Header />
      <main className="container mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold text-gray-700 mb-2">Project Management Dashboard</h2>
        <p className="text-gray-600 mb-6">A quick overview and summary of all projects and statuses.</p>
        
        {/* summary cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 mb-8 mt-6">
          {statusCards.map((card) => (
            <div key={card.title} className="bg-[#f9f9f9] p-6 rounded-lg shadow-md text-center">
              <h3 className="text-gray-600 font-medium">{card.title}</h3>
              <p className={`text-3xl font-bold ${card.color}`}>{card.count}</p>
            </div>
          ))}
        </div>
        {!projects || projects.length === 0 ? (
          <div className="flex items-center justify-center min-h-24 text-gray-500">
            <p className="text-xl font-medium">No projects found.</p>
          </div>
        ) : (
          <ProjectsList projects={projects} />
        )}
      </main>
    </div>
  );
}

export default App;