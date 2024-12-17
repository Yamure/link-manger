import { useState, useEffect } from "react";
import { Coffee, ChaoticGood, Pilot, Plants, MechanicalLove } from "@assets";

const illustrations = [
  { src: Coffee, alt: "Coffee illustration" },
  { src: ChaoticGood, alt: "Chaotic Good illustration" },
  { src: Pilot, alt: "Pilot illustration" },
  { src: Plants, alt: "Plants illustration" },
  { src: MechanicalLove, alt: "Mechanical Love illustration" },
];

const MobileIllustration = () => {
  const [currentImage, setCurrentImage] = useState(() => {
    const hour = new Date().getHours();
    return illustrations[hour % illustrations.length];
  });

  useEffect(() => {
    const updateImage = () => {
      const hour = new Date().getHours();
      setCurrentImage(illustrations[hour % illustrations.length]);
    };

    const interval = setInterval(updateImage, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="md:hidden fixed inset-0 z-0 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="w-24 h-24 opacity-50"
        />
      </div>
    </div>
  );
};

export default MobileIllustration;