import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
// import { useRef } from "react";
import Earth from "../Earth/Earth.jsx";

const GlobeBackground = ({ rotationY }) => {
  // const [error, setError] = useState(null);

  // const handleError = (err) => {
  //   console.error("Error loading texture:", err);
  //   setError("There was an error loading the texture.");
  // };

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
        <OrbitControls enableZoom={false} />
        <Suspense fallback={null}>
          <Earth rotation={rotationY} />
        </Suspense>
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
