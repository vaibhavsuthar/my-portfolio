
'use client';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';


function My3DCube() {
  const texture = useTexture('/vs001.jpg');
  return (
    <mesh rotation={[0.5, 0.5, 0]}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial map={texture} attach="material-0" />
      <meshStandardMaterial map={texture} attach="material-1" />
      <meshStandardMaterial map={texture} attach="material-2" />
      <meshStandardMaterial map={texture} attach="material-3" />
      <meshStandardMaterial map={texture} attach="material-4" />
      <meshStandardMaterial map={texture} attach="material-5" />
    </mesh>
  );
}

export default function ThreeDBox() {
  return (
    <div style={{ width: '100%', height: '500px' }}>
      <Canvas camera={{ position: [0, 0, 7] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 0, 5]} />
        <My3DCube />
        <OrbitControls enableZoom={true} autoRotate={true} autoRotateSpeed={1.5} />
      </Canvas>
    </div>
  );
}

