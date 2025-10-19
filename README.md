# Task Manager App – React + Tailwind CSS

## Overview
This project is a Task Manager web application built using **React** and **Tailwind CSS**.  
It demonstrates component architecture, state management with hooks, API integration (simulated), and responsive design.

## Features
- Add, edit, and delete tasks
- Mark tasks as completed
- Filter tasks (All, Active, Completed)
- Responsive design for mobile, tablet, and desktop
- Light/dark theme support

## Setup Instructions

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd task-manager-app
2. Install dependencies
bash
Copy code
npm install
3. Start the development server
bash
Copy code
npm run dev
The app will be available at: http://localhost:5173/

Project Structure
css
Copy code
task-manager-app/
├── node_modules/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── TaskManager.jsx
│   │   ├── Button.jsx
│   │   └── ...other components
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── package-lock.json
└── README.md
Components
TaskManager.jsx – Main component for handling tasks

Button.jsx – Reusable button component

App.jsx – Renders TaskManager inside main app

index.css – Global styles and Tailwind integration

Usage
Add a task by typing in the input field and clicking "Add"

Mark tasks as complete by clicking the checkbox

Delete tasks by clicking the delete button

Filter tasks using "All", "Active", or "Completed" buttons

Toggle light/dark mode using the theme switcher (if implemented)

Notes
This project uses in-memory state; tasks are not persisted after page reload.

Tailwind CSS is used for styling and responsiveness.

The project is ready to be submitted to GitHub Classroom or zipped for submission.

Screenshots
(Add screenshots of your app here to demonstrate UI)

Author
Biruktawit Tesfaye

vbnet
Copy code

