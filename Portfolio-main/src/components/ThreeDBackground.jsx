import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export default function ThreeDBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-40 blur-[2px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 70 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 7]} />
        <mesh>
          <sphereGeometry args={[1.5, 64, 64]} />
          <meshStandardMaterial color="#ffa600" wireframe />
        </mesh>
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  )
}
