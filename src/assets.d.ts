declare module "*.glb" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "meshline" {
  export class MeshLineGeometry {
    setPoints(points: unknown): void;
  }

  export class MeshLineMaterial {
    constructor(...args: unknown[]);
  }
}
