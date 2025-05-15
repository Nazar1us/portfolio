import { Suspense, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
// import { useRef } from "react";
import Earth from "../Earth/Earth.jsx";
import styles from "./GlobeBackground.module.css";

const Globe = () => {
  const [rotationY, setRotationY] = useState(0);

  useFrame(({ clock }) => {
    setRotationY(clock.elapsedTime / 7);
  });

  return (
    <Suspense fallback={null}>
      <Earth rotation={[0, rotationY, 0]} className={styles.globe} />
    </Suspense>
  );
};

const GlobeBackground = () => {
  return (
    <div className={styles.canvasContainer}>
      <Canvas>
        <ambientLight intensity={0.7} />
        <OrbitControls enableZoom={false} autoRotate={false} />
        <Globe />
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
};

export default GlobeBackground;
