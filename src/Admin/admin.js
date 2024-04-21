import React from 'react';
import { BrowserRouter as Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Projects from '../Projects/projects';
import Event from '../Events/events';
import News from '../News/news';

export default function Dashboard() {
    return (
        <BrowserRouter>
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
                        <Route path="/projects">
                            <Projects />
                        </Route>
                        <Route path="/events">
                            <Event />
                        </Route>
                        <Route path="/news">
                            <News />
                        </Route>
                    </Routes>

                </div>
            </div>
        </BrowserRouter>
    );
}
