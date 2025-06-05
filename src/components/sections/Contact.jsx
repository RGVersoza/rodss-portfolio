// src/components/sections/Contact.jsx
const Contact = () => (
  <section
    id="contact"
    className="min-h-screen bg-gradient-to-b from-[#1e293b] to-[#0f172a] text-white flex flex-col justify-center items-center px-4 py-12"
  >
    <h2 className="text-3xl font-bold">Contact</h2>
    <div className="mt-6 w-full max-w-md text-center text-lg text-gray-700">
      <p className="text-white drop-shadow">Feel free to reach out to me at:</p>
      <p className="mt-2 font-semibold text-white drop-shadow">your.email@example.com</p>
      <p className="mt-4 text-white drop-shadow">Or connect with me on LinkedIn and GitHub!</p>
    </div>
  </section>
);

export default Contact;
