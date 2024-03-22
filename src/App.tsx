import { ContactShadows, Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import './App.css';
import Bass from './components/Bass';
import Controls from './components/Controls';
import LoadingProgress from './components/LoadingProgress';
import { SelectedContext, initalSelected } from './context/selected';

function App() {
  const [selected, setSelected] = useState(initalSelected);
  return (
    <SelectedContext.Provider value={selected}>
      <div className="container">
        <div className="wrapper">
          <div className="canvas">
            <Canvas shadows camera={{ position: [0, 0, 4], fov: 45 }}>
              <ambientLight intensity={0.7} />
              <spotLight
                intensity={0.5}
                angle={0.1}
                penumbra={1}
                position={[10, 15, 10]}
                castShadow
              />
              <Suspense fallback={null}>
                <Bass />
              </Suspense>
              <Environment preset="city" />
              <ContactShadows
                position={[0, -1, 0]}
                opacity={0.25}
                scale={10}
                blur={1.5}
                far={2}
              />
              <OrbitControls
                minPolarAngle={Math.PI / 2}
                maxPolarAngle={Math.PI / 2}
                enableZoom={false}
                enablePan={false}
              />
            </Canvas>
            <LoadingProgress />
          </div>
          <Controls set={setSelected} className="controls" />
        </div>
      </div>
    </SelectedContext.Provider>
  );
}

export default App;
