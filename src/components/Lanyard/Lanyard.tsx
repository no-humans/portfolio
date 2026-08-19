/* eslint-disable react/no-unknown-property */
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Canvas,
  extend,
  useFrame,
  type ThreeEvent,
} from "@react-three/fiber";
import {
  Environment,
  Lightformer,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
  type RapierRigidBody,
  type RigidBodyProps,
} from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import * as THREE from "three";

import cardGLB from "./card.glb";
import lanyardTexture from "./lanyard.png";

extend({ MeshLineGeometry, MeshLineMaterial });

type LanyardProps = {
  className?: string;
  profileImage: string;
  name?: string;
  role?: string;
  experience?: string;
  location?: string;
  skills?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  position?: [number, number, number];
  gravity?: [number, number, number];
  fov?: number;
  transparent?: boolean;
  frontImage?: string | null;
  backImage?: string | null;
  imageFit?: "cover" | "contain";
  lanyardImage?: string | null;
  lanyardWidth?: number;
};

const CARD_WIDTH = 1200;
const CARD_HEIGHT = 1800;
const BLANK_PIXEL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";

const FRONT_UV_RECT = { x: 0, y: 0, w: 0.5, h: 0.755 };
const BACK_UV_RECT = { x: 0.5, y: 0, w: 0.5, h: 0.757 };

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function toDataUrl(svg: string) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function createFrontCardTexture({
  profileImage,
  name,
  role,
  experience,
}: Pick<LanyardProps, "profileImage" | "name" | "role" | "experience">) {
  const safeName = escapeXml(name ?? "PRANAV P.");
  const safeRole = escapeXml(role ?? "FRONTEND DEVELOPER");
  const safeExperience = escapeXml(experience ?? "2+ YEARS EXPERIENCE");
  const safeProfileImage = escapeXml(profileImage);

  return toDataUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${CARD_WIDTH}" height="${CARD_HEIGHT}" viewBox="0 0 ${CARD_WIDTH} ${CARD_HEIGHT}">
      <rect width="${CARD_WIDTH}" height="${CARD_HEIGHT}" rx="72" fill="#ffffff"/>
      <rect x="24" y="24" width="${CARD_WIDTH - 48}" height="${CARD_HEIGHT - 48}" rx="58" fill="none" stroke="#e6e6e6" stroke-width="4"/>
      <rect x="96" y="102" width="128" height="10" rx="5" fill="#ff5b17"/>
      <circle cx="600" cy="410" r="216" fill="#f8f8f8" stroke="#ececec" stroke-width="4"/>
      <clipPath id="profileClip">
        <circle cx="600" cy="410" r="176"/>
      </clipPath>
      <image href="${safeProfileImage}" x="424" y="234" width="352" height="352" clip-path="url(#profileClip)" preserveAspectRatio="xMidYMid slice" />
      <circle cx="600" cy="410" r="176" fill="none" stroke="#ffffff" stroke-width="8"/>
      <circle cx="884" cy="292" r="14" fill="#ff5b17"/>
      <text x="600" y="908" text-anchor="middle" fill="#111111" font-family="Inter, Arial, sans-serif" font-size="96" font-weight="800" letter-spacing="-4">${safeName}</text>
      <text x="600" y="1018" text-anchor="middle" fill="#ff5b17" font-family="Inter, Arial, sans-serif" font-size="44" font-weight="700" letter-spacing="2">${safeRole}</text>
      <rect x="314" y="1102" width="572" height="2" fill="#e5e5e5"/>
      <text x="600" y="1186" text-anchor="middle" fill="#444444" font-family="Inter, Arial, sans-serif" font-size="40" font-weight="600" letter-spacing="1.5">${safeExperience}</text>
      <text x="600" y="1260" text-anchor="middle" fill="#111111" font-family="Inter, Arial, sans-serif" font-size="30" font-weight="700" letter-spacing="4">FRONTEND ENGINEER</text>
      <circle cx="600" cy="1440" r="8" fill="#ff5b17"/>
      <text x="600" y="1496" text-anchor="middle" fill="#888888" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="700" letter-spacing="5">PORTFOLIO ID</text>
    </svg>
  `);
}

function createBackCardTexture({
  name,
  role,
  experience,
  location,
  skills,
  githubUrl,
  linkedinUrl,
}: Pick<
  LanyardProps,
  | "name"
  | "role"
  | "experience"
  | "location"
  | "skills"
  | "githubUrl"
  | "linkedinUrl"
>) {
  const safeName = escapeXml(name ?? "PRANAV P.");
  const safeRole = escapeXml(role ?? "FRONTEND DEVELOPER");
  const safeExperience = escapeXml(experience ?? "2+ YEARS EXPERIENCE");
  const safeLocation = escapeXml(location ?? "KERALA, INDIA");
  const safeSkills = escapeXml(skills ?? "REACT • TYPESCRIPT • JAVASCRIPT");
  const safeGithub = escapeXml(githubUrl ?? "github.com/pranavpasad242");
  const safeLinkedin = escapeXml(linkedinUrl ?? "linkedin.com/in/pranav-p");

  return toDataUrl(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${CARD_WIDTH}" height="${CARD_HEIGHT}" viewBox="0 0 ${CARD_WIDTH} ${CARD_HEIGHT}">
      <rect width="${CARD_WIDTH}" height="${CARD_HEIGHT}" rx="72" fill="#ffffff"/>
      <rect x="24" y="24" width="${CARD_WIDTH - 48}" height="${CARD_HEIGHT - 48}" rx="58" fill="none" stroke="#e6e6e6" stroke-width="4"/>
      <rect x="96" y="102" width="128" height="10" rx="5" fill="#ff5b17"/>
      <circle cx="1024" cy="208" r="56" fill="none" stroke="#ff5b17" stroke-width="4"/>
      <circle cx="1024" cy="208" r="12" fill="#ff5b17"/>
      <text x="120" y="300" fill="#111111" font-family="Inter, Arial, sans-serif" font-size="82" font-weight="800" letter-spacing="-2">${safeName}</text>
      <text x="120" y="398" fill="#ff5b17" font-family="Inter, Arial, sans-serif" font-size="42" font-weight="700" letter-spacing="2">${safeRole}</text>
      <rect x="120" y="466" width="480" height="2" fill="#ececec"/>
      <text x="120" y="586" fill="#111111" font-family="Inter, Arial, sans-serif" font-size="38" font-weight="700" letter-spacing="2">${safeExperience}</text>
      <text x="120" y="670" fill="#666666" font-family="Inter, Arial, sans-serif" font-size="30" font-weight="600" letter-spacing="1">${safeSkills}</text>
      <text x="120" y="774" fill="#111111" font-family="Inter, Arial, sans-serif" font-size="34" font-weight="700" letter-spacing="1.5">${safeLocation}</text>
      <rect x="120" y="880" width="960" height="2" fill="#ececec"/>
      <text x="120" y="980" fill="#888888" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="700" letter-spacing="1">${safeGithub}</text>
      <text x="120" y="1058" fill="#888888" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="700" letter-spacing="1">${safeLinkedin}</text>
      <text x="120" y="1204" fill="#ff5b17" font-family="Inter, Arial, sans-serif" font-size="26" font-weight="800" letter-spacing="4">PORTFOLIO NETWORK</text>
      <circle cx="120" cy="1368" r="10" fill="#ff5b17"/>
      <text x="150" y="1376" fill="#111111" font-family="Inter, Arial, sans-serif" font-size="26" font-weight="700" letter-spacing="3">OPEN TO WORK</text>
      <text x="120" y="1488" fill="#bbbbbb" font-family="Inter, Arial, sans-serif" font-size="22" font-weight="600" letter-spacing="2">KINDLY CONNECT</text>
    </svg>
  `);
}

export function Lanyard({
  className = "",
  profileImage,
  name = "PRANAV P.",
  role = "FRONTEND DEVELOPER",
  experience = "2+ YEARS EXPERIENCE",
  location = "KERALA, INDIA",
  skills = "REACT • TYPESCRIPT • JAVASCRIPT",
  githubUrl = "github.com/pranavpasad242",
  linkedinUrl = "linkedin.com/in/pranav-p",
  position = [0, 0, 20],
  gravity = [0, -40, 0],
  fov = 20,
  transparent = true,
  frontImage = null,
  backImage = null,
  imageFit = "contain",
  lanyardImage = null,
  lanyardWidth = 1,
}: LanyardProps) {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth < 768,
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generatedFrontImage = useMemo(
    () =>
      createFrontCardTexture({
        profileImage,
        name,
        role,
        experience,
      }),
    [profileImage, name, role, experience],
  );

  const generatedBackImage = useMemo(
    () =>
      createBackCardTexture({
        name,
        role,
        experience,
        location,
        skills,
        githubUrl,
        linkedinUrl,
      }),
    [name, role, experience, location, skills, githubUrl, linkedinUrl],
  );

  return (
    <div className={`relative ${className}`}>
      <Canvas
        className="h-full w-full"
        camera={{ position, fov }}
        dpr={[1, isMobile ? 1.5 : 2]}
        gl={{ alpha: transparent }}
        onCreated={({ gl }) =>
          gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)
        }
      >
        <ambientLight intensity={Math.PI} />
        <Physics gravity={gravity} timeStep={isMobile ? 1 / 30 : 1 / 60}>
          <Band
            isMobile={isMobile}
            frontImage={frontImage ?? generatedFrontImage}
            backImage={backImage ?? generatedBackImage}
            imageFit={imageFit}
            lanyardImage={lanyardImage}
            lanyardWidth={lanyardWidth}
          />
        </Physics>
        <Environment blur={0.75}>
          <Lightformer
            intensity={2}
            color="white"
            position={[0, -1, 5]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[-1, -1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[1, 1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={10}
            color="white"
            position={[-10, 0, 14]}
            rotation={[0, Math.PI / 2, Math.PI / 3]}
            scale={[100, 10, 1]}
          />
        </Environment>
      </Canvas>
    </div>
  );
}

type BandProps = {
  maxSpeed?: number;
  minSpeed?: number;
  isMobile?: boolean;
  frontImage?: string | null;
  backImage?: string | null;
  imageFit?: "cover" | "contain";
  lanyardImage?: string | null;
  lanyardWidth?: number;
};

type LanyardRigidBody = RapierRigidBody & {
  lerped?: THREE.Vector3;
};

function Band({
  maxSpeed = 50,
  minSpeed = 0,
  isMobile = false,
  frontImage = null,
  backImage = null,
  imageFit = "contain",
  lanyardImage = null,
  lanyardWidth = 1,
}: BandProps) {
  const band = useRef<any>(null);
  const fixed = useRef<RapierRigidBody>(null!);
  const j1 = useRef<LanyardRigidBody>(null!);
  const j2 = useRef<LanyardRigidBody>(null!);
  const j3 = useRef<RapierRigidBody>(null!);
  const card = useRef<RapierRigidBody>(null!);

  const vec = new THREE.Vector3();
  const ang = new THREE.Vector3();
  const rot = new THREE.Vector3();
  const dir = new THREE.Vector3();

  const segmentProps: RigidBodyProps = {
    type: "dynamic",
    canSleep: true,
    colliders: false,
    angularDamping: 4,
    linearDamping: 4,
  };

  const getLerped = (body: LanyardRigidBody): THREE.Vector3 => {
    if (!body.lerped) {
      body.lerped = new THREE.Vector3().copy(body.translation());
    }

    return body.lerped;
  };

  const { nodes, materials } = useGLTF(cardGLB) as any;
  const texture = useTexture(lanyardImage || lanyardTexture);
  const frontTex = useTexture(frontImage || BLANK_PIXEL);
  const backTex = useTexture(backImage || BLANK_PIXEL);

  const cardMap = useMemo(() => {
    const baseMap = materials.base.map as THREE.Texture;
    if (!frontImage && !backImage) return baseMap;

    const baseImage = baseMap.image as HTMLImageElement;
    const width = baseImage.width;
    const height = baseImage.height;
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");

    if (!ctx) return baseMap;

    ctx.drawImage(baseImage, 0, 0, width, height);

    const drawFitted = (img: HTMLImageElement, rect: typeof FRONT_UV_RECT) => {
      const rx = rect.x * width;
      const ry = rect.y * height;
      const rw = rect.w * width;
      const rh = rect.h * height;
      const pick = imageFit === "contain" ? Math.min : Math.max;
      const scale = pick(rw / img.width, rh / img.height);
      const dw = img.width * scale;
      const dh = img.height * scale;
      const dx = rx + (rw - dw) / 2;
      const dy = ry + (rh - dh) / 2;

      ctx.save();
      ctx.beginPath();
      ctx.rect(rx, ry, rw, rh);
      ctx.clip();
      ctx.drawImage(img, dx, dy, dw, dh);
      ctx.restore();
    };

    if (frontImage && frontTex.image) {
      drawFitted(frontTex.image as HTMLImageElement, FRONT_UV_RECT);
    }
    if (backImage && backTex.image) {
      drawFitted(backTex.image as HTMLImageElement, BACK_UV_RECT);
    }

    const composite = new THREE.CanvasTexture(canvas);
    composite.colorSpace = THREE.SRGBColorSpace;
    composite.flipY = baseMap.flipY;
    composite.anisotropy = 16;
    composite.needsUpdate = true;
    return composite;
  }, [frontImage, backImage, imageFit, frontTex, backTex, materials.base.map]);

  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ]),
  );
  const [dragged, drag] = useState<false | THREE.Vector3>(false);
  const [hovered, hover] = useState(false);

  useRopeJoint(fixed, j1, [
    [0, 0, 0],
    [0, 0, 0],
    1,
  ]);
  useRopeJoint(j1, j2, [
    [0, 0, 0],
    [0, 0, 0],
    1,
  ]);
  useRopeJoint(j2, j3, [
    [0, 0, 0],
    [0, 0, 0],
    1,
  ]);
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.45, 0],
  ]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? "grabbing" : "grab";
      return () => {
        document.body.style.cursor = "auto";
      };
    }
  }, [hovered, dragged]);

  useFrame((state, delta) => {
    if (dragged && typeof dragged !== "boolean") {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      });
    }

    if (fixed.current) {
      [j1, j2].forEach((ref) => {
        const lerped = getLerped(ref.current);
        const clampedDistance = Math.max(
          0.1,
          Math.min(1, lerped.distanceTo(ref.current.translation())),
        );
        lerped.lerp(
          ref.current.translation(),
          delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed)),
        );
      });

      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(getLerped(j2.current));
      curve.points[2].copy(getLerped(j1.current));
      curve.points[3].copy(fixed.current.translation());
      band.current.geometry.setPoints(curve.getPoints(isMobile ? 16 : 32));

      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel(
        { x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z },
        true,
      );
    }
  });

  curve.curveType = "chordal";
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  return (
    <>
      <group position={[0, 4, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody
          position={[0.5, 0, 0]}
          ref={j1}
          {...segmentProps}
          type="dynamic"
        >
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[1, 0, 0]}
          ref={j2}
          {...segmentProps}
          type="dynamic"
        >
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[1.5, 0, 0]}
          ref={j3}
          {...segmentProps}
          type="dynamic"
        >
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[2, 0, 0]}
          ref={card}
          {...segmentProps}
          type={dragged ? "kinematicPosition" : "dynamic"}
        >
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={2.25}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(event: ThreeEvent<PointerEvent>) => {
              (event.target as Element).releasePointerCapture(event.pointerId);
              drag(false);
            }}
            onPointerDown={(event: ThreeEvent<PointerEvent>) => {
              (event.target as Element).setPointerCapture(event.pointerId);
              drag(
                new THREE.Vector3()
                  .copy(event.point)
                  .sub(vec.copy(card.current.translation())),
              );
            }}
          >
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial
                map={cardMap}
                map-anisotropy={16}
                clearcoat={isMobile ? 0 : 1}
                clearcoatRoughness={0.15}
                roughness={0.9}
                metalness={0.8}
              />
            </mesh>
            <mesh
              geometry={nodes.clip.geometry}
              material={materials.metal}
              material-roughness={0.3}
            />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="white"
          depthTest={false}
          resolution={isMobile ? [1000, 2000] : [1000, 1000]}
          useMap
          map={texture}
          repeat={[-4, 1]}
          lineWidth={lanyardWidth}
        />
      </mesh>
    </>
  );
}

useGLTF.preload(cardGLB);
