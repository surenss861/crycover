"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial, Environment } from "@react-three/drei";
import { useMemo, useRef, useState, useEffect } from "react";
import * as THREE from "three";

/** Light blush/sage tint — hydrogel feel */
const VEIL_COLOR = "#d2c8be"; // rgba(210, 200, 190)
const VEIL_OPACITY_BASE = 0.22;
const VEIL_BREATH_AMP = 0.04;
const VEIL_SCALE_BREATH = 0.025;

function createNoiseTexture(size = 128): THREE.DataTexture {
  const data = new Uint8Array(size * size);
  for (let i = 0; i < data.length; i++) {
    data[i] = Math.floor(Math.random() * 36) + 200; // 200–235 for subtle alpha modulation
  }
  const tex = new THREE.DataTexture(data, size, size);
  tex.format = THREE.RedFormat;
  tex.needsUpdate = true;
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  return tex;
}

function Veil() {
  const ref = useRef<THREE.Mesh>(null);
  const noiseTex = useMemo(() => createNoiseTexture(128), []);

  useFrame((state) => {
    if (!ref.current?.material) return;
    const t = state.clock.getElapsedTime();
    const mat = ref.current.material as THREE.MeshStandardMaterial;
    // Breathing: opacity + subtle scale
    const breath = Math.sin(t * 0.28) * VEIL_BREATH_AMP;
    mat.opacity = VEIL_OPACITY_BASE + breath;
    const scaleBreath = 1 + Math.sin(t * 0.35) * VEIL_SCALE_BREATH;
    ref.current.scale.set(6 * scaleBreath, 3.5 * scaleBreath, 1);
    ref.current.rotation.z = t * 0.025;
  });

  return (
    <mesh ref={ref} position={[0, 0, -1]} scale={[6, 3.5, 1]}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <meshStandardMaterial
        transparent
        opacity={VEIL_OPACITY_BASE}
        color={VEIL_COLOR}
        roughness={0.92}
        metalness={0.02}
        alphaMap={noiseTex}
      />
    </mesh>
  );
}

/** Soft caustic-style highlight moving across the veil */
function VeilHighlight() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current?.material) return;
    const t = state.clock.getElapsedTime();
    const mat = ref.current.material as THREE.MeshBasicMaterial;
    mat.opacity = 0.06 + Math.sin(t * 0.2) * 0.02;
    ref.current.position.x = Math.sin(t * 0.15) * 1.2;
    ref.current.position.y = Math.cos(t * 0.12) * 0.4;
  });

  return (
    <mesh ref={ref} position={[0, 0, -0.95]} scale={[3, 1.8, 1]}>
      <planeGeometry args={[1, 1, 16, 16]} />
      <meshBasicMaterial
        transparent
        opacity={0.06}
        color="#fffef8"
        depthWrite={false}
      />
    </mesh>
  );
}

function Patch() {
  const ref = useRef<THREE.Mesh>(null);

  const geom = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(-1.2, 0);
    shape.quadraticCurveTo(0, 0.35, 1.2, 0);
    shape.quadraticCurveTo(0, -0.35, -1.2, 0);
    const extrude = new THREE.ExtrudeGeometry(shape, {
      depth: 0.08,
      bevelEnabled: true,
      bevelThickness: 0.03,
      bevelSize: 0.06,
      bevelSegments: 3,
      steps: 1,
    });
    extrude.center();
    return extrude;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.15;
    ref.current.rotation.x = Math.sin(t * 0.35) * 0.08;
    ref.current.position.y = Math.sin(t * 0.5) * 0.06;
  });

  return (
    <mesh ref={ref} geometry={geom} position={[0.35, 0.05, 0]} scale={[1.4, 1.4, 1.4]}>
      <MeshTransmissionMaterial
        thickness={0.48}
        roughness={0.12}
        transmission={1}
        ior={1.3}
        chromaticAberration={0.01}
        anisotropy={0.15}
        distortion={0.12}
        distortionScale={0.25}
        temporalDistortion={0.05}
      />
    </mesh>
  );
}

function HeroScene() {
  return (
    <>
      <ambientLight intensity={0.65} />
      {/* Key light — brighter, product-style */}
      <directionalLight position={[4, 3, 3]} intensity={1.7} color="#fffef5" />
      {/* Fill — soft */}
      <directionalLight position={[-2.5, 1, 2]} intensity={0.45} />
      {/* Warm spec highlight so patch doesn’t blend into beige */}
      <pointLight position={[1.2, 0.8, 1.5]} intensity={0.35} color="#fff0e0" distance={5} />
      <Veil />
      <VeilHighlight />
      <Patch />
      <Environment preset="studio" />
    </>
  );
}

function HeroFallback() {
  return (
    <div
      className="absolute inset-0 -z-10 bg-gradient-to-b from-sand/30 via-cream/20 to-transparent"
      aria-hidden
    />
  );
}

export default function HeroCanvas() {
  const [use3D, setUse3D] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setUse3D(false);
      return;
    }
    setUse3D(true);
  }, []);

  if (!use3D) {
    return <HeroFallback />;
  }

  return (
    <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 3.2], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "low-power",
        }}
      >
        <HeroScene />
      </Canvas>
    </div>
  );
}
