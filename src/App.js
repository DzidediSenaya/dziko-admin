import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Projects from './projects';
import Event from './events';
import News from './news';

export default function Dashboard() {
  return (
    <div className="flex flex-col h-screen">
      <nav className="bg-indigo-800 p-4">
        <ul className="flex justify-between">
          <li>
            <Link to="/projects" className="text-white hover:text-gray-300">Projects</Link>
          </li>
          <li>
            <Link to="/events" className="text-white hover:text-gray-300">Events</Link>
          </li>
          <li>
            <Link to="/news" className="text-white hover:text-gray-300">News</Link>
          </li>
        </ul>
      </nav>

      <div className="flex-grow">
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/events" element={<Event />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
    </div>
  );
}
