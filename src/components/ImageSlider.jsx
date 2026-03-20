import { useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9",
  "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7"
];

export default function ImageSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slider">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          className={i === index ? "active" : ""}
        />
      ))}
    </div>
  );
}