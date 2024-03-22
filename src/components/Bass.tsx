import { animated, config, useSpring } from '@react-spring/three';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useContext, useEffect, useRef, useState } from 'react';
import { Mesh } from 'three';
import { SelectedContext } from '../context/selected';

const Bass = (props) => {
  const ref = useRef<Mesh>();
  const { nodes, materials } = useGLTF('/bass.gltf');
  const { viewport } = useThree();
  const { body, pickguard, fingerboard, head } = useContext(SelectedContext);
  const [selected, setSelected] = useState(false);

  const { scale } = useSpring({
    scale: selected ? 0.75 : 1,
    config: config.wobbly,
  });

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    ref.current!.rotation.set(
      (Math.cos(t / 4) / 8) * 0.1,
      (Math.sin(t / 4) / 8) * 6,
      -0.2 - ((1 + Math.sin(t / 1.5)) / 2) * 0.1
    );

    ref.current!.position.y = (1 + Math.sin(t / 1.5)) / 10;
  });

  useEffect(() => {
    setSelected(true);
    setTimeout(() => {
      setSelected(false);
    }, 100);
  }, [body, pickguard, fingerboard, head]);

  const bass01 = nodes.Fender_jazz_bass01 as Mesh;
  const bass02 = nodes.Fender_jazz_bass02 as Mesh;
  const bass07 = nodes.Fender_jazz_bass07 as Mesh;
  const bass08 = nodes.Fender_jazz_bass08 as Mesh;
  const detail06 = nodes.detail06 as Mesh;
  const detail07 = nodes.detail07 as Mesh;
  const strings01 = nodes.strings01 as Mesh;
  const detail01 = nodes.detail01 as Mesh;
  const detail02 = nodes.detail02 as Mesh;
  const detail03 = nodes.detail03 as Mesh;
  const whiles01 = nodes.whiles01 as Mesh;
  const detail04 = nodes.detail04 as Mesh;
  const bass09 = nodes.Fender_jazz_bass09 as Mesh;
  const bass_02 = nodes.Fender_jazz_bass_02 as Mesh;
  const bass_05 = nodes.Fender_jazz_bass_05 as Mesh;
  const bass_06 = nodes.Fender_jazz_bass_06 as Mesh;
  const bass_07 = nodes.Fender_jazz_bass_07 as Mesh;
  const bass_08 = nodes.Fender_jazz_bass_08 as Mesh;
  const bass_29 = nodes.Fender_jazz_bass_29 as Mesh;
  const bass11 = nodes.Fender_jazz_bass11 as Mesh;
  const bass14 = nodes.Fender_jazz_bass14 as Mesh;
  const bass15 = nodes.Fender_jazz_bass15 as Mesh;
  const bass13 = nodes.Fender_jazz_bass13 as Mesh;
  const bass12 = nodes.Fender_jazz_bass12 as Mesh;
  const bass10 = nodes.Fender_jazz_bass10 as Mesh;
  const toneKnob = nodes.Fender_jazz_bass06 as Mesh;
  const bass05 = nodes.Fender_jazz_bass05 as Mesh;
  const bass04 = nodes.Fender_jazz_bass04 as Mesh;
  const bass03 = nodes.Fender_jazz_bass03 as Mesh;
  const bass_30 = nodes.Fender_jazz_bass_30 as Mesh;
  const bass_31 = nodes.Fender_jazz_bass_31 as Mesh;
  const bass_32 = nodes.Fender_jazz_bass_32 as Mesh;
  const bass_33 = nodes.Fender_jazz_bass_33 as Mesh;
  const bass_34 = nodes.Fender_jazz_bass_34 as Mesh;
  const bass_35 = nodes.Fender_jazz_bass_35 as Mesh;
  const bass_37 = nodes.Fender_jazz_bass_37 as Mesh;
  const bass_38 = nodes.Fender_jazz_bass_38 as Mesh;
  const bass_39 = nodes.Fender_jazz_bass_39 as Mesh;
  const bass_28 = nodes.Fender_jazz_bass_28 as Mesh;
  const bass_41 = nodes.Fender_jazz_bass_41 as Mesh;
  const bass_27 = nodes.Fender_jazz_bass_27 as Mesh;
  const bass_43 = nodes.Fender_jazz_bass_43 as Mesh;
  const bass_44 = nodes.Fender_jazz_bass_44 as Mesh;
  const bass_45 = nodes.Fender_jazz_bass_45 as Mesh;
  const bass_46 = nodes.Fender_jazz_bass_46 as Mesh;
  const bass_56 = nodes.Fender_jazz_bass_56 as Mesh;
  const bass_58 = nodes.Fender_jazz_bass_58 as Mesh;
  const bass_04 = nodes.Fender_jazz_bass_04 as Mesh;
  const bass_03 = nodes.Fender_jazz_bass_03 as Mesh;
  const bass_66 = nodes.Fender_jazz_bass_66 as Mesh;
  const bass_65 = nodes.Fender_jazz_bass_65 as Mesh;
  const bass_64 = nodes.Fender_jazz_bass_64 as Mesh;
  const bass_67 = nodes.Fender_jazz_bass_67 as Mesh;
  const bass_68 = nodes.Fender_jazz_bass_68 as Mesh;
  const bass_63 = nodes.Fender_jazz_bass_63 as Mesh;
  const bass_62 = nodes.Fender_jazz_bass_62 as Mesh;
  const bass_60 = nodes.Fender_jazz_bass_60 as Mesh;
  const bass_61 = nodes.Fender_jazz_bass_61 as Mesh;
  const bass_69 = nodes.Fender_jazz_bass_69 as Mesh;
  const bass_70 = nodes.Fender_jazz_bass_70 as Mesh;
  const bass_01 = nodes.Fender_jazz_bass_01 as Mesh;
  const bass_57 = nodes.Fender_jazz_bass_57 as Mesh;
  const bass_59 = nodes.Fender_jazz_bass_59 as Mesh;
  const bass_52 = nodes.Fender_jazz_bass_52 as Mesh;
  const bass_20 = nodes.Fender_jazz_bass_20 as Mesh;
  const bass_21 = nodes.Fender_jazz_bass_21 as Mesh;
  const bass_22 = nodes.Fender_jazz_bass_22 as Mesh;
  const bass_23 = nodes.Fender_jazz_bass_23 as Mesh;
  const bass_24 = nodes.Fender_jazz_bass_24 as Mesh;
  const bass_25 = nodes.Fender_jazz_bass_25 as Mesh;
  const bass_26 = nodes.Fender_jazz_bass_26 as Mesh;
  const bass_51 = nodes.Fender_jazz_bass_51 as Mesh;
  const bass_19 = nodes.Fender_jazz_bass_19 as Mesh;
  const bass_53 = nodes.Fender_jazz_bass_53 as Mesh;
  const bass_54 = nodes.Fender_jazz_bass_54 as Mesh;
  const bass_55 = nodes.Fender_jazz_bass_55 as Mesh;
  const bass_17 = nodes.Fender_jazz_bass_17 as Mesh;
  const bass_49 = nodes.Fender_jazz_bass_49 as Mesh;
  const bass_14 = nodes.Fender_jazz_bass_14 as Mesh;
  const bass_15 = nodes.Fender_jazz_bass_15 as Mesh;
  const bass_16 = nodes.Fender_jazz_bass_16 as Mesh;
  const bass_50 = nodes.Fender_jazz_bass_50 as Mesh;
  const bass_18 = nodes.Fender_jazz_bass_18 as Mesh;
  const bass_13 = nodes.Fender_jazz_bass_13 as Mesh;
  const bass_12 = nodes.Fender_jazz_bass_12 as Mesh;
  const bass_48 = nodes.Fender_jazz_bass_48 as Mesh;
  const bass_47 = nodes.Fender_jazz_bass_47 as Mesh;
  const bass_11 = nodes.Fender_jazz_bass_11 as Mesh;
  const bass_36 = nodes.Fender_jazz_bass_36 as Mesh;
  const bass_10 = nodes.Fender_jazz_bass_10 as Mesh;
  const bass_71 = nodes.Fender_jazz_bass_71 as Mesh;
  const bass_72 = nodes.Fender_jazz_bass_72 as Mesh;
  const bass_73 = nodes.Fender_jazz_bass_73 as Mesh;
  const bass_74 = nodes.Fender_jazz_bass_74 as Mesh;
  const bass_75 = nodes.Fender_jazz_bass_75 as Mesh;
  const bass_76 = nodes.Fender_jazz_bass_76 as Mesh;
  const bass_77 = nodes.Fender_jazz_bass_77 as Mesh;
  const bass_78 = nodes.Fender_jazz_bass_78 as Mesh;
  const bass_79 = nodes.Fender_jazz_bass_79 as Mesh;
  const bass_80 = nodes.Fender_jazz_bass_80 as Mesh;
  const bass_81 = nodes.Fender_jazz_bass_81 as Mesh;
  const bass_09 = nodes.Fender_jazz_bass_09 as Mesh;
  const bass_82 = nodes.Fender_jazz_bass_82 as Mesh;
  const bass_83 = nodes.Fender_jazz_bass_83 as Mesh;
  const bass_84 = nodes.Fender_jazz_bass_84 as Mesh;
  const bass_85 = nodes.Fender_jazz_bass_85 as Mesh;
  const bass_86 = nodes.Fender_jazz_bass_86 as Mesh;
  const bass_40 = nodes.Fender_jazz_bass_40 as Mesh;
  const bass_42 = nodes.Fender_jazz_bass_42 as Mesh;
  // const text_01 = nodes.text_01 as Mesh;
  // const text02 = nodes.text02 as Mesh;
  // const text03 = nodes.text03 as Mesh;
  // const text04 = nodes.text04 as Mesh;

  return (
    <animated.mesh scale={scale}>
      <group
        ref={ref}
        {...props}
        scale={[viewport.width / 2.125, viewport.width / 2.125, viewport.width / 2.125]}
      >
        <group
          position={[0.2, 0.2, 0]}
          scale={[3, 3, 3]}
          rotation={[
            -Math.PI / 2 - 20 * (Math.PI / 180),
            15 * (Math.PI / 180),
            Math.PI - 15 * (Math.PI / 180),
          ]}
        >
          <mesh geometry={bass01.geometry} material={materials.chrome} />
          <mesh
            geometry={bass02.geometry}
            material={materials.glossy_black.clone()}
            name="top-screw"
          />
          <mesh geometry={bass07.geometry} material={materials.chrome} />
          <mesh geometry={bass08.geometry} material={materials.chrome} />
          {/* <mesh geometry={text03.geometry} material={materials.text_yellow} /> */}
          <mesh
            geometry={detail06.geometry}
            material={materials.mat_black}
            name="Truss rod"
          />
          {/* <mesh geometry={text04.geometry} material={materials.text_black} /> */}
          <mesh geometry={detail07.geometry} material={materials.chrome} />
          <mesh geometry={strings01.geometry} material={materials.chrome_bump} />
          <mesh geometry={detail01.geometry} material={materials.mat_white} />
          <mesh
            geometry={detail02.geometry}
            material={materials.glossy_black.clone()}
            name="bottom-screw"
          />
          <mesh geometry={detail03.geometry} material={materials.chrome} />
          <mesh geometry={whiles01.geometry} material={materials.chrome} />
          <mesh geometry={detail04.geometry} material={materials.chrome} />
          {/* <mesh geometry={text02.geometry} material={materials.text_black} />
        <mesh geometry={text_01.geometry} material={materials.text_gray} /> */}
          <mesh geometry={bass09.geometry} material={materials.mat_wood_02} />
          <mesh geometry={bass_02.geometry} material={materials.chrome} />
          <mesh geometry={bass_05.geometry} material={materials.chrome} />
          <mesh geometry={bass_06.geometry} material={materials.chrome} />
          <mesh geometry={bass_07.geometry} material={materials.chrome} />
          <mesh geometry={bass_08.geometry} material={materials.chrome} />
          <mesh geometry={bass_29.geometry} material={materials.chrome} />
          <mesh geometry={bass11.geometry} material={materials.mat_white} />
          <mesh geometry={bass14.geometry} material={materials.chrome} />
          <mesh geometry={bass15.geometry} material={materials.chrome} name="Springs" />
          <mesh geometry={bass13.geometry} material={materials.glossy_black.clone()} />
          <mesh geometry={bass12.geometry} material={materials.chrome} />
          <mesh geometry={bass10.geometry} material={materials.chrome} />
          <mesh
            geometry={toneKnob.geometry}
            material={materials.glossy_black.clone()}
            name="Tone Knob"
          />
          <mesh
            geometry={bass05.geometry}
            material={materials.glossy_black.clone()}
            name="Rear Knob"
          />
          <mesh
            geometry={bass04.geometry}
            material={materials.glossy_black.clone()}
            name="Front Knob"
          />
          <mesh
            geometry={bass03.geometry}
            material={materials.aluminium}
            name="Back Square"
          />
          <mesh geometry={bass_30.geometry} material={materials.chrome.clone()} />
          <mesh geometry={bass_31.geometry} material={materials.chrome} />
          <mesh geometry={bass_32.geometry} material={materials.chrome} />
          <mesh geometry={bass_33.geometry} material={materials.chrome} />
          <mesh geometry={bass_34.geometry} material={materials.chrome} />
          <mesh geometry={bass_35.geometry} material={materials.chrome} />
          <mesh geometry={bass_37.geometry} material={materials.chrome} />
          <mesh geometry={bass_38.geometry} material={materials.chrome} />
          <mesh geometry={bass_39.geometry} material={materials.chrome} />
          <mesh geometry={bass_28.geometry} material={materials.chrome} />
          <mesh geometry={bass_40.geometry} material={materials.chrome} />
          <mesh geometry={bass_41.geometry} material={materials.chrome} />
          <mesh geometry={bass_27.geometry} material={materials.chrome} />
          <mesh
            geometry={bass_42.geometry}
            material={materials.glossy_white.clone()}
            name="Pick Guard"
            material-color={pickguard}
          />
          <mesh
            geometry={bass_43.geometry}
            material={materials.glossy_white.clone()}
            name="Pick Guard outline"
          />
          <mesh geometry={bass_44.geometry} material={materials.chrome} />
          <mesh geometry={bass_45.geometry} material={materials.chrome} />
          <mesh geometry={bass_46.geometry} material={materials.chrome} />
          <mesh
            geometry={bass_56.geometry}
            material={materials.mat_wood_02.clone()}
            name="Fingerboard"
            material-color={fingerboard}
          />
          <mesh
            geometry={bass_58.geometry}
            material={materials.mat_wood_01.clone()}
            name="Head & Neck"
            material-color={head}
          />
          <mesh
            geometry={bass_04.geometry}
            material={materials.glossy_black.clone()}
            name="body"
            material-color={body}
          />
          <mesh geometry={bass_03.geometry} material={materials.chrome} />
          <mesh geometry={bass_66.geometry} material={materials.chrome} />
          <mesh geometry={bass_65.geometry} material={materials.chrome} />
          <mesh geometry={bass_64.geometry} material={materials.chrome} />
          <mesh geometry={bass_67.geometry} material={materials.chrome} />
          <mesh geometry={bass_68.geometry} material={materials.chrome} />
          <mesh geometry={bass_63.geometry} material={materials.chrome} />
          <mesh geometry={bass_62.geometry} material={materials.chrome} />
          <mesh geometry={bass_60.geometry} material={materials.chrome} />
          <mesh geometry={bass_61.geometry} material={materials.chrome} />
          <mesh geometry={bass_69.geometry} material={materials.chrome} />
          <mesh
            geometry={bass_70.geometry}
            material={materials.glossy_black.clone()}
            name="Rear Pickup"
          />
          <mesh geometry={bass_01.geometry} material={materials.chrome} />
          <mesh geometry={bass_57.geometry} material={materials.chrome} />
          <mesh geometry={bass_59.geometry} material={materials.glossy_white} />
          <mesh geometry={bass_52.geometry} material={materials.chrome} />
          <mesh geometry={bass_20.geometry} material={materials.chrome} />
          <mesh geometry={bass_21.geometry} material={materials.chrome} />
          <mesh geometry={bass_22.geometry} material={materials.chrome} />
          <mesh geometry={bass_23.geometry} material={materials.chrome} />
          <mesh geometry={bass_24.geometry} material={materials.chrome} />
          <mesh geometry={bass_25.geometry} material={materials.chrome} />
          <mesh geometry={bass_26.geometry} material={materials.glossy_white} />
          <mesh geometry={bass_51.geometry} material={materials.chrome} />
          <mesh geometry={bass_19.geometry} material={materials.glossy_white} />
          <mesh geometry={bass_53.geometry} material={materials.glossy_white} />
          <mesh geometry={bass_54.geometry} material={materials.glossy_white} />
          <mesh geometry={bass_55.geometry} material={materials.chrome} />
          <mesh geometry={bass_17.geometry} material={materials.glossy_white} />
          <mesh geometry={bass_49.geometry} material={materials.chrome} />
          <mesh geometry={bass_14.geometry} material={materials.chrome} />
          <mesh geometry={bass_15.geometry} material={materials.chrome} />
          <mesh geometry={bass_16.geometry} material={materials.glossy_white} />
          <mesh geometry={bass_50.geometry} material={materials.chrome} />
          <mesh geometry={bass_18.geometry} material={materials.chrome} />
          <mesh geometry={bass_13.geometry} material={materials.chrome} />
          <mesh geometry={bass_12.geometry} material={materials.glossy_white} />
          <mesh geometry={bass_48.geometry} material={materials.glossy_white} />
          <mesh geometry={bass_47.geometry} material={materials.chrome} />
          <mesh geometry={bass_11.geometry} material={materials.chrome} />
          <mesh geometry={bass_36.geometry} material={materials.chrome} />
          <mesh geometry={bass_10.geometry} material={materials.chrome} />
          <mesh geometry={bass_71.geometry} material={materials.chrome} />
          <mesh geometry={bass_72.geometry} material={materials.chrome} />
          <mesh geometry={bass_73.geometry} material={materials.chrome} />
          <mesh geometry={bass_74.geometry} material={materials.chrome} />
          <mesh geometry={bass_75.geometry} material={materials.chrome} />
          <mesh geometry={bass_76.geometry} material={materials.chrome} />
          <mesh geometry={bass_77.geometry} material={materials.chrome} />
          <mesh geometry={bass_78.geometry} material={materials.chrome} />
          <mesh geometry={bass_79.geometry} material={materials.chrome} />
          <mesh geometry={bass_80.geometry} material={materials.chrome} />
          <mesh
            geometry={bass_81.geometry}
            material={materials.glossy_black.clone()}
            name="Front Pickup"
          />
          <mesh geometry={bass_09.geometry} material={materials.chrome} />
          <mesh geometry={bass_82.geometry} material={materials.chrome} />
          <mesh geometry={bass_83.geometry} material={materials.chrome} />
          <mesh geometry={bass_84.geometry} material={materials.chrome} />
          <mesh geometry={bass_85.geometry} material={materials.chrome} />
          <mesh geometry={bass_86.geometry} material={materials.chrome} />
        </group>
      </group>
    </animated.mesh>
  );
};

useGLTF.preload('/bass.glb');

export default Bass;
