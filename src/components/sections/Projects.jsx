import React, { useState } from "react";

const projects = [
	{
		title: "Portfolio Website",
		description:
			"A personal website built with React and Tailwind CSS to showcase my work and skills.",
		images: [
			"/images/portfolio-main.jpg",
			"/images/portfolio-1.jpg",
			"/images/portfolio-2.jpg",
		],
	},
	{
		title: "Todo App",
		description:
			"A task management app using React and local storage with basic CRUD functionality.",
		images: [
			"/images/todo-main.jpg",
			"/images/todo-1.jpg",
			"/images/todo-2.jpg",
		],
	},
];

const Projects = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [activeProject, setActiveProject] = useState(null);

	const openModal = (project) => {
		setActiveProject(project);
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
		setActiveProject(null);
	};

	return (
		<section
			id="projects"
			className="min-h-screen bg-[#334155] text-white flex flex-col justify-center items-center px-4 py-12"
		>
			<h2 className="text-3xl font-bold">Projects</h2>
			<div className="mt-6 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
				{projects.map((project, idx) => (
					<div
						key={project.title}
						className="group relative rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-lg transition-all duration-300 p-0 overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/20 hover:-rotate-1"
					>
						<img
							src={project.images[0]}
							alt={project.title}
							className="w-full h-56 object-cover rounded-t-2xl transition-all duration-300 group-hover:blur-[1.5px] group-hover:brightness-90"
							onClick={() => openModal(project)}
							style={{ cursor: "pointer" }}
						/>
						<div className="p-6 flex flex-col gap-2">
							<h3 className="text-2xl font-bold text-white drop-shadow">
								{project.title}
							</h3>
							<p className="text-gray-200/80 text-base mb-4">
								{project.description}
							</p>
							<button
								className="mt-auto px-4 py-2 rounded-lg bg-cyan-500/80 text-white font-semibold shadow hover:bg-cyan-400/90 transition"
								onClick={() => openModal(project)}
							>
								View More
							</button>
						</div>
						{/* Optional: Glow effect on hover */}
						<div
							className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-60 transition duration-300"
							style={{
								boxShadow: "0 0 40px 10px rgba(34,211,238,0.3)",
							}}
						/>
					</div>
				))}
			</div>

			{/* Modal */}
			{modalOpen && activeProject && (
				<div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
					<div className="bg-white rounded-lg p-6 max-w-lg w-full relative">
						<button
							className="absolute top-2 right-2 text-gray-700 text-2xl"
							onClick={closeModal}
							aria-label="Close"
						>
							&times;
						</button>
						<h3 className="text-xl font-bold mb-2 text-gray-900">
							{activeProject.title}
						</h3>
						<div className="flex gap-2 overflow-x-auto">
							{activeProject.images.map((img, i) => (
								<img
									key={i}
									src={img}
									alt={`${activeProject.title} ${i + 1}`}
									className="w-32 h-32 object-cover rounded"
								/>
							))}
						</div>
					</div>
				</div>
			)}
		</section>
	);
};

export default Projects;
