import Particles from "../Particles";
import DecryptedText from "../DecryptedText";

const Introduction = () => (
  <section
    id="introduction"
    className="relative min-h-screen flex items-center justify-center bg-[#0f172a] text-white overflow-hidden px-4"
  >
    {/* Particles background */}
    <div className="absolute inset-0 z-0">
      <Particles
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
    </div>

    {/* Animated Content */}
    <div className="relative z-10 text-center space-y-4">
      <DecryptedText
        text="Hi, I'm John Doe"
        animateOn="view"
        speed={40}
        maxIterations={12}
        characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
        className="text-4xl md:text-6xl font-bold"
        parentClassName="all-letters"
        encryptedClassName="encrypted"
      />
      <br />

      <DecryptedText
        text="Frontend Developer"
        animateOn="view"
        speed={40}
        maxIterations={12}
        characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
        className="text-lg md:text-2xl text-gray-300"
        parentClassName="all-letters"
        encryptedClassName="encrypted"
      />
    </div>
  </section>
);

export default Introduction;
