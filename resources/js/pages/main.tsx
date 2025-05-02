// export default function Main() {
//     // State to control layout toggle
//     const [isCompactLayout, setIsCompactLayout] = useState(false);

//     // Function to toggle layout
//     const toggleLayout = () => {
//         setIsCompactLayout(!isCompactLayout);
//     };

//     return (
//         <>
//             <Head title="My Portfolio" />
//             <div className={`${isCompactLayout ? 'compact-layout' : 'default-layout'} bg-white text-gray-900 dark:bg-[#0a0a0a] dark:text-white`}>
//                 {/* Navigation with Layout Toggle Button */}
//                 <Navbar toggleLayout={toggleLayout} />

//                 {/* Sections */}
//                 <section id="home" className="flex min-h-screen items-center justify-center p-8">
//                     <div className="text-center">
//                         <h1 className="mb-4 text-4xl font-bold">Hi, I'm John Doe</h1>
//                         <p className="text-lg">Full-Stack Developer | Laravel + React Enthusiast</p>
//                     </div>
//                 </section>

//                 <section id="about" className="flex min-h-screen items-center justify-center bg-gray-100 p-8 dark:bg-[#161615]">
//                     <div className="max-w-2xl">
//                         <h2 className="mb-4 text-3xl font-semibold">About Me</h2>
//                         <p className="text-base leading-relaxed">
//                             I’m a web developer with experience in Laravel, React, and Tailwind. I enjoy building fast, responsive websites and
//                             applications.
//                         </p>
//                     </div>
//                 </section>

//                 {/* Other Sections */}
//                 <section id="projects" className="flex min-h-screen items-center justify-center p-8">
//                     <div className="w-full max-w-4xl">
//                         <h2 className="mb-4 text-3xl font-semibold">Projects</h2>
//                         {/* Project items go here */}
//                     </div>
//                 </section>

//                 <section id="contact" className="flex min-h-screen items-center justify-center bg-gray-100 p-8 dark:bg-[#161615]">
//                     <div className="w-full max-w-xl">
//                         <h2 className="mb-4 text-3xl font-semibold">Contact Me</h2>
//                         <p>Email: you@example.com</p>
//                     </div>
//                 </section>

//                 {/* Footer */}
//                 <Footer />
//             </div>
//         </>
//     );
// }

import { useState } from 'react';
import AltLayout from '../components/layouts/AltLayout';
import DefaultLayout from '../components/layouts/DefaultLayout';
import SharedLayout from '../components/layouts/SharedLayout';

export default function Main() {
    const [isAltLayout, setIsAltLayout] = useState(false);

    return (
        <SharedLayout isAltLayout={isAltLayout} toggleLayout={() => setIsAltLayout(!isAltLayout)}>
            {isAltLayout ? <AltLayout /> : <DefaultLayout />}
        </SharedLayout>
    );
}
