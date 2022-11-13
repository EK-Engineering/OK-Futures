import React from 'react';
import ReactDOM from 'react-dom/client';
import 'flowbite';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode >
    <App className="w-full p-3 rounded border-gray-200 dark:bg-gray-800 dark:border-gray-700"/>
    <script src="../path/to/flowbite/dist/flowbite.js" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
