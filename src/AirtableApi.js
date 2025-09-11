/* A set up the Airtable connection and a function to fetch my data. Replace the placeholders with my actual API key and base ID.
*/

import Airtable from 'airtable';

// Initialize Airtable with  API key and base ID
const base = new Airtable({ apiKey: import.meta.env.VITE_AIRTABLE_ACCESS_TOKEN }).base(import.meta.env.VITE_AIRTABLE_BASE_ID);

// Function to fetch all records from the Projects table  
export const getProjects = async () => {
  const records = await base('Projects').select({
    view: "Grid view" // Use "Grid view" or a specific view name
  }).all();

  return records.map(record => ({
    id: record.id,
    ...record.fields,
  }));
};
