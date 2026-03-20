import { useEffect, useState } from "react";

const images = ["/imggg.jpg", "/imagg2.jpg", "/imggg3.jpg"];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">

      <img src="/logo.png" alt="logo" className="logo fade-in" />

      <div className="rainbow-strip"></div>
      <div className="orb one"></div>
      <div className="orb two"></div>

      <div className="hero-content">

        {/* LEFT */}
        <div className="hero-left fade-up">

          <span className="badge fade-up delay-1">Coming Soon</span>

          <h1 className="fade-up delay-2">
            Find Your <span>Connection</span><br />
            Feel the <span>Belonging</span>
          </h1>

          <p className="fade-up delay-3">
            Discover people and experience a
            community where you truly belong.
          </p>
          <div className="notify-glass">
          <input type="email" placeholder="Enter your email" />
          <button>Notify Me</button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-right fade-right">
          <div className="card-stack">

            <div className="image-card back">
              <img src={images[index % 3]} alt="" />
            </div>

            <div className="image-card middle">
              <img src={images[(index + 1) % 3]} alt="" />
            </div>

            <div className="image-card front">
              <img src={images[(index + 2) % 3]} alt="" />
              <div className="glass-reflection"></div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;