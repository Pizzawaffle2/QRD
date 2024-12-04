@echo off

:: Step 1: Navigate to the src directory
cd src

:: Step 2: Create the required directories
mkdir components\ui pages

:: Step 3: Create the Button component
echo import React from 'react';> components\ui\button.tsx
echo.>> components\ui\button.tsx
echo type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;>> components\ui\button.tsx
echo.>> components\ui\button.tsx
echo export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {>> components\ui\button.tsx
echo   return (>> components\ui\button.tsx
echo     <button>> components\ui\button.tsx
echo       className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" >> components\ui\button.tsx
echo       {...props}>> components\ui\button.tsx
echo     >>> components\ui\button.tsx
echo       {children}>> components\ui\button.tsx
echo     </button> >> components\ui\button.tsx
echo   );>> components\ui\button.tsx
echo };>> components\ui\button.tsx

:: Step 4: Create the Header component
echo import React from 'react';> components\ui\header.tsx
echo import { Link } from 'react-router-dom';>> components\ui\header.tsx
echo.>> components\ui\header.tsx
echo export const Header = () => {>> components\ui\header.tsx
echo   return (>> components\ui\header.tsx
echo     <header className="bg-gray-800 text-white p-4">>> components\ui\header.tsx
echo       <nav className="container mx-auto flex justify-between">>> components\ui\header.tsx
echo         <h1 className="text-xl">QR Direct</h1> >> components\ui\header.tsx
echo         <div>> components\ui\header.tsx
echo           <Link to="/" className="mr-4">>> components\ui\header.tsx
echo             Home>> components\ui\header.tsx
echo           </Link>> components\ui\header.tsx
echo           <Link to="/dashboard">>> components\ui\header.tsx
echo             Dashboard>> components\ui\header.tsx
echo           </Link>> components\ui\header.tsx
echo         </div>> components\ui\header.tsx
echo       </nav>> components\ui\header.tsx
echo     </header>> components\ui\header.tsx
echo   );>> components\ui\header.tsx
echo };>> components\ui\header.tsx

:: Step 5: Install React Router
npm install react-router-dom

:: Step 6: Create routing pages
echo import React from 'react';> pages\Home.tsx
echo.>> pages\Home.tsx
echo const Home = () => {>> pages\Home.tsx
echo   return <div>Welcome to QR Direct!</div>;>> pages\Home.tsx
echo };>> pages\Home.tsx
echo.>> pages\Home.tsx
echo export default Home;>> pages\Home.tsx

echo import React from 'react';> pages\Dashboard.tsx
echo.>> pages\Dashboard.tsx
echo const Dashboard = () => {>> pages\Dashboard.tsx
echo   return <div>Your Dashboard!</div>;>> pages\Dashboard.tsx
echo };>> pages\Dashboard.tsx
echo.>> pages\Dashboard.tsx
echo export default Dashboard;>> pages\Dashboard.tsx

:: Step 7: Update App.tsx for routing
echo import React from 'react';> App.tsx
echo import { BrowserRouter, Routes, Route } from 'react-router-dom';>> App.tsx
echo import Home from './pages/Home';>> App.tsx
echo import Dashboard from './pages/Dashboard';>> App.tsx
echo import { Header } from './components/ui/header';>> App.tsx
echo.>> App.tsx
echo const App = () => {>> App.tsx
echo   return (>> App.tsx
echo     <BrowserRouter> >> App.tsx
echo       <Header /> >> App.tsx
echo       <Routes> >> App.tsx
echo         <Route path="/" element={<Home />} /> >> App.tsx
echo         <Route path="/dashboard" element={<Dashboard />} /> >> App.tsx
echo       </Routes> >> App.tsx
echo     </BrowserRouter> >> App.tsx
echo   ); >> App.tsx
echo }; >> App.tsx
echo.>> App.tsx
echo export default App; >> App.tsx

:: Step 8: Install React Chart.js
npm install react-chartjs-2 chart.js
npm install --save-dev @types/react-chartjs-2

:: Step 9: Create Analytics page
echo import React from 'react';> pages\Analytics.tsx
echo import { Bar } from 'react-chartjs-2';>> pages\Analytics.tsx
echo.>> pages\Analytics.tsx
echo const data = {>> pages\Analytics.tsx
echo   labels: ['January', 'February', 'March'],>> pages\Analytics.tsx
echo   datasets: [>> pages\Analytics.tsx
echo     {>> pages\Analytics.tsx
echo       label: 'QR Code Scans',>> pages\Analytics.tsx
echo       data: [10, 20, 30],>> pages\Analytics.tsx
echo       backgroundColor: 'rgba(75,192,192,1)',>> pages\Analytics.tsx
echo     },>> pages\Analytics.tsx
echo   ],>> pages\Analytics.tsx
echo };>> pages\Analytics.tsx
echo.>> pages\Analytics.tsx
echo const Analytics = () => {>> pages\Analytics.tsx
echo   return (>> pages\Analytics.tsx
echo     <div> >> pages\Analytics.tsx
echo       <h1>Analytics</h1> >> pages\Analytics.tsx
echo       <Bar data={data} /> >> pages\Analytics.tsx
echo     </div> >> pages\Analytics.tsx
echo   ); >> pages\Analytics.tsx
echo }; >> pages\Analytics.tsx
echo.>> pages\Analytics.tsx
echo export default Analytics; >> pages\Analytics.tsx

:: Step 10: Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

:: Step 11: Configure Tailwind
echo module.exports = { > tailwind.config.js
echo   content: ['./src/**/*.{js,jsx,ts,tsx}'], >> tailwind.config.js
echo   theme: { >> tailwind.config.js
echo     extend: {}, >> tailwind.config.js
echo   }, >> tailwind.config.js
echo   plugins: [], >> tailwind.config.js
echo }; >> tailwind.config.js

:: Step 12: Add Tailwind directives to src/index.css
echo @tailwind base; > index.css
echo @tailwind components; >> index.css
echo @tailwind utilities; >> index.css

:: Feedback to user
echo Setup complete! Start your project with "npm run dev".
