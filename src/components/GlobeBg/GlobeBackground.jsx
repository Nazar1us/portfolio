import { Suspense, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
// import { useRef } from "react";
import Earth from "../Earth/Earth.jsx";

const Globe = () => {
  const [rotationY, setRotationY] = useState(0);

  useFrame(({ clock }) => {
    setRotationY(clock.elapsedTime / 10); // Adjust speed as needed
  });

  return (
    <Suspense fallback={null}>
      <Earth rotation={[0, rotationY, 0]} />
    </Suspense>
  );
};

const GlobeBackground = () => {
  // const [error, setError] = useState(null);

  // const handleError = (err) => {
  //   console.error("Error loading texture:", err);
  //   setError("There was an error loading the texture.");
  // };
  // const [rotationY, setRotationY] = useState(0);

  // useFrame(({ clock }) => {
  //   setRotationY(clock.elapsedTime / 5);
  // });

  return (
    <div
      style={{
        // position: "absolute",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Canvas>
        <ambientLight intensity={0.5} />
        <OrbitControls enableZoom={false} autoRotate={false} />
        {/* <Suspense fallback={null}>
          <Earth rotation={[0, rotationY, 0]} />
        </Suspense> */}
        <Globe />
        <Environment preset="sunset" />
      </Canvas>
      <div></div>
      {/* 
      {error && (
        <div style={{ color: "red", textAlign: "center" }}>{error}</div>
      )} */}
    </div>
  );
};

export default GlobeBackground;
