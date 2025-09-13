# MoroSystems Project Management App
This is a custom React web application built for the MoroSystems for No Code/Low Code Workflow AI Automation Full-Stack Engineer technical assessment. The app is a front-end client designed to connect with an Airtable base, providing a dynamic and visual way to manage projects. It serves as a complementary interface to the Airtable backend, displaying key project data in an intuitive, color-coded dashboard.

## Features
1. Dynamic Data Display: The application fetches and displays project records directly from the Airtable "Projects" table.

2. Real-time Updates: The app automatically updates to reflect any changes made in the Airtable base, including new records, status changes, and data edits.

3. Color-Coded Status: Project cards are visually highlighted with a color that corresponds to their status (Not Started, In Progress, Blocked, Done), allowing for quick visual scanning.

4. Responsive Design: The layout is fully responsive and optimized for a seamless experience on both desktop and mobile devices.

## Airtable Setup
This application requires a connected Airtable base to function. The project is designed to integrate with the "Planning Base" configured as part of the technical assessment.

## Key Tables & Fields
The app specifically relies on data from the Projects table. Ensure the following fields are present and correctly configured in your Airtable base:

- Project Name

- Start Date

- End Date

- Project Status

- Assignee

- Reporter

## Getting Started
Follow these steps to set up and run the application locally.

### Prerequisites
- Node.js (v18 or higher)

- bnpm (v9 or higher)

- An Airtable account with a base set up according to the project assessment.

### Tech Stack
- Frontend Framework: Javascript/Typescript
- React.js + Vite
- Tailwind CSS
- Routing: react-router-dom
- Global State Management: React context API/Redux Toolkit

### 1. Clone the Repository
[Repository URL,](https://github.com/chiedozie07/morosystems-airtable-pm-app.git)
Clone the project from GitHub to your local machine, open your Terminal/Command Line and execute this command below:
```
git clone https://github.com/chiedozie07/morosystems-airtable-pm-app.git
```

### 2. Install Dependencies
Navigate into the project directory and install the necessary npm packages:

- cd morosystems-airtable-pm-app
```
npm install
```

### 3. Configure the Airtable API
The app connects to your Airtable base using a configuration file. You need to create a .env.local file in the root of your project with the following

### Environment Variables Setup:
```
VITE_AIRTABLE_API_KEY=YOUR_AIRTABLE_API_KEY
VITE_AIRTABLE_BASE_ID=YOUR_AIRTABLE_BASE_ID
VITE_AIRTABLE_TABLE_ID=YOUR_AIRTABLE_TABLE_ID

YOUR_AIRTABLE_API_KEY: Your personal API key from the Airtable Developer Hub.

YOUR_AIRTABLE_BASE_ID: The ID of your "Planning Base." You can find this in the URL when you are in your base.

YOUR_AIRTABLE_TABLE_ID: The ID of your "Projects" table.
```

### 4. 🚀 Deployment
To Run the Application,
start the development server with:
 ```
npm run dev
```

The application will now be running on http://localhost:5173 You can view the project dashboard and see your Airtable data loaded in real-time.

###  Want to become a Contributor?
1. Fork the repo
2. Create a feature branch (git checkout -b feature/...)
3. Commit your changes (git commit -m "...")
4. Push to your fork (git push origin feature/...)
5. Open a Pull Request
Please follow the established code style, include tests if applicable, and provide a clear or descriptive commit messages.

### License
This project is licensed under the MIT License. Feel free to use, modify, and distribute it.

### Developer
- #### 👨‍💻 This project was built and developed with ❤️ by *Chiedozie Ezidiegwu*, [LinkedIn Profile](https://www.linkedin.com/in/chiedozie-ezidiegwu-9859a5167/)
- #### This is a solution to the MoroSystems Technologies AI Automation Full-Stack Engineering Technical Assessment.
#### *Thanks for reading and happy coding.🎉*