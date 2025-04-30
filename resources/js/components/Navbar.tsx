import { Link } from '@inertiajs/react';

export default function Navbar() {
    return (
        <header className="w-full fixed top-0 left-0 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur border-b border-gray-200 dark:border-gray-700 z-50">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold">My Portfolio</h1>
                <ul className="flex space-x-6 text-sm font-medium">
                    <li><a href="#home" className="hover:underline">Home</a></li>
                    <li><a href="#about" className="hover:underline">About</a></li>
                    <li><a href="#projects" className="hover:underline">Projects</a></li>
                    <li><a href="#contact" className="hover:underline">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}
