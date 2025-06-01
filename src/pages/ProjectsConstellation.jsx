import { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Stars } from "@react-three/drei";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";

const ProjectModel = ({
  modelPath,
  position,
  title,
  onClick,
  scaleFactor = 0.15,
  description,
  setHoveredData,
  setOrbitSpeed,
}) => {
  const { scene } = useGLTF(modelPath);
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  const haloRef = useRef();
  const scannerRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.scale.set(scaleFactor, scaleFactor, scaleFactor);
    }
    if (haloRef.current) {
      haloRef.current.rotation.z += 0.03;
      haloRef.current.visible = hovered;
    }
    if (scannerRef.current) {
      scannerRef.current.material.opacity = hovered ? 0.4 : 0;
    }
  });

  const createHalo = () => {
    const geometry = new THREE.RingGeometry(0.7, 0.9, 64);
    const material = new THREE.MeshBasicMaterial({
      color: "#00ffff",
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.3,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = Math.PI / 2;
    mesh.position.y = -0.3;
    haloRef.current = mesh;
    return mesh;
  };

  const createScanner = () => {
    const geometry = new THREE.RingGeometry(0.3, 0.7, 64);
    const material = new THREE.MeshBasicMaterial({
      color: "#00ffff",
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.y = -0.5;
    scannerRef.current = mesh;
    return mesh;
  };

  scene.add(createHalo());
  scene.add(createScanner());

  return (
    <group position={position}>
      <primitive
        ref={meshRef}
        object={scene}
        onClick={onClick}
        onPointerOver={() => {
          setHovered(true);
          setHoveredData({ title, description });
          setOrbitSpeed(0.1); // ralenti
        }}
        onPointerOut={() => {
          setHovered(false);
          setHoveredData(null);
          setOrbitSpeed(2.5); // vitesse normale
        }}
      />
    </group>
  );
};

const ProjectsConstellation = () => {
  const navigate = useNavigate();
  const [hoveredData, setHoveredData] = useState(null);
  const [orbitSpeed, setOrbitSpeed] = useState(2.5);

  const projects = [
    {
      title: "Projet Radio/SDR",
      desc: "Projet de guerre électronique utilisant des récepteurs SDR (Software Defined Radio) pour intercepter et analyser des signaux radio. Création d'un cours interactif pédagogique destiné à l'enseignement. Aspects de détournement technique étudiés.",
      model: "/models/radio.glb",
      position: [2, 1.5, 0],
      scaleFactor: 0.06,
    },
    {
      title: "Midnight Engine (3D C++)",
      desc: "Moteur 3D temps réel développé en C++ pour la génération de scènes dynamiques. Comprend le rendu avancé, la gestion des lumières, des caméras, et une interface modulaire pour intégrer de futures fonctionnalités.",
      model: "/models/midnight.glb",
      position: [-2, 1, 0],
      scaleFactor: 0.15,
    },
    {
      title: "Reconnaissance IA",
      desc: "Système de reconnaissance de chiffres manuscrits basé sur un algorithme génétique développé en C. Entraînement de modèles via PyTorch pour traitement IA, évaluation de la performance sur datasets annotés. Pipeline hybride C/Python pour performance et flexibilité.",
      model: "/models/manuscrit.glb",
      position: [0, -2, 0],
      scaleFactor: 0.45,
    },
    {
      title: "Flux Satellite",
      desc: "Projet de réception et décodage de flux satellite. Implémentation d’un système parabolique via LNB capable de capter les signaux de satellites télévision, avec traitement du signal et visualisation des données obtenues en temps réel via serveur web en internet. Analyse spectrale et processeur des décodeurs, ainsi que des clés de chiffrement et d'obfuscation",
      model: "/models/sat.glb",
      position: [0, 2.5, -1],
      scaleFactor: 0.17,
    },
  ];

  return (
    <div className="relative h-screen w-screen bg-gradient-to-br from-[#05001a] via-[#0a0028] to-[#0d0133]">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }} gl={{ antialias: true }}>
        <color attach="background" args={["#0a0a1f"]} />
        <fog attach="fog" args={["#0a0a1f", 10, 25]} />
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 10, 10]} intensity={2} color="#ffffff" />
        <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={orbitSpeed} />
        <Stars radius={100} depth={50} count={5000} factor={4} fade />

        {projects.map((p1, i1) =>
          projects.map((p2, i2) => {
            if (i1 < i2) {
              const points = [
                new THREE.Vector3(...p1.position),
                new THREE.Vector3(...p2.position),
              ];
              const geometry = new THREE.BufferGeometry().setFromPoints(points);
              return (
                <line key={`${i1}-${i2}`} geometry={geometry}>
                  <lineBasicMaterial attach="material" color="#ffffff" linewidth={1.5} />
                </line>
              );
            }
            return null;
          })
        )}

        <Suspense fallback={null}>
          {projects.map((p, i) => (
            <ProjectModel
              key={i}
              position={p.position}
              modelPath={p.model}
              title={p.title}
              scaleFactor={p.scaleFactor}
              description={p.desc}
              setHoveredData={setHoveredData}
              setOrbitSpeed={setOrbitSpeed}
            />
          ))}
        </Suspense>
      </Canvas>

      {hoveredData && (
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute right-8 top-1/2 z-20 w-[360px] -translate-y-1/2 rounded-xl border border-cyan-300 bg-white/10 p-6 text-white backdrop-blur-md shadow-[0_0_20px_rgba(0,255,255,0.3)] animate-pulse"
        >
          <h3 className="text-xl font-bold text-cyan-200 tracking-wide">
            {hoveredData.title}
          </h3>
          <p className="mt-4 text-base text-cyan-100 leading-relaxed">
            {hoveredData.description}
          </p>
        </motion.div>
      )}

      <button
        onClick={() => navigate("/#projects")}
        className="absolute right-6 top-6 z-20 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black shadow-lg hover:bg-gray-300"
      >
        ✕ Retour
      </button>
    </div>
  );
};

export default ProjectsConstellation;
