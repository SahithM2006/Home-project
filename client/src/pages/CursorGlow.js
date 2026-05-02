import { useEffect, useRef } from "react";

function CursorGlow() {

  const glowRef = useRef(null);

  useEffect(() => {
    const moveGlow = (e) => {
      if (glowRef.current) {
        glowRef.current.style.left = e.clientX + "px";
        glowRef.current.style.top = e.clientY + "px";
      }
    };

    window.addEventListener("mousemove", moveGlow);

    return () => {
      window.removeEventListener("mousemove", moveGlow);
    };
  }, []);

  return <div ref={glowRef} className="cursor-glow"></div>;
}

export default CursorGlow;