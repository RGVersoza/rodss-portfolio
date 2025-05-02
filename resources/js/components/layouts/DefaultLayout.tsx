import Head from '../Head';

export default function DefaultLayout() {
    return (
        <>
            <Head title="My Portfolio" />
            <div className="default-layout bg-white text-gray-900 dark:bg-[#0a0a0a] dark:text-white">
                <section id="home" className="flex min-h-screen items-center justify-center p-8">
                    <div className="text-center">
                        <h1 className="mb-4 text-4xl font-bold">Hi, I'm John Doe</h1>
                        <p className="text-lg">Full-Stack Developer | Laravel + React Enthusiast</p>
                    </div>
                </section>

                <section id="about" className="flex min-h-screen items-center justify-center bg-gray-100 p-8 dark:bg-[#161615]">
                    <div className="max-w-2xl">
                        <h2 className="mb-4 text-3xl font-semibold">About Me</h2>
                        <p className="text-base leading-relaxed">
                            I’m a web developer with experience in Laravel, React, and Tailwind. I enjoy building fast, responsive websites and
                            applications.
                        </p>
                    </div>
                </section>

                <section id="projects" className="flex min-h-screen items-center justify-center p-8">
                    <div className="w-full max-w-4xl">
                        <h2 className="mb-4 text-3xl font-semibold">Projects</h2>
                        {/* Project items go here */}
                    </div>
                </section>

                <section id="contact" className="flex min-h-screen items-center justify-center bg-gray-100 p-8 dark:bg-[#161615]">
                    <div className="w-full max-w-xl">
                        <h2 className="mb-4 text-3xl font-semibold">Contact Me</h2>
                        <p>Email: you@example.com</p>
                    </div>
                </section>
            </div>
        </>
    );
}
