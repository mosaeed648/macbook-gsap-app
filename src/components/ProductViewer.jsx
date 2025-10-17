import clsx from "clsx";
import useMackbookStore from "../store";
import { Canvas } from "@react-three/fiber";
import StudioLight from "./three/StudioLight";
import ModelSwitcher from "./three/ModelSwitcher";
import { useMediaQuery } from "react-responsive";

const ProductViewer = () => {
  const { color, scale, setColor, setScale } = useMackbookStore();
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <section id="product-viewer" className="w-full flex flex-col items-center">
      <h2 className="text-3xl font-semibold mt-10">Take a closer look.</h2>

      {/* Controls */}
      <div className="controls mt-6">
        <div className="flex-center gap-5">
          {/* Color Options */}
          <div className="color-control flex gap-3">
            <div
              title="Silver"
              onClick={() => setColor("#adb5bd")}
              className={clsx("w-8 h-8 rounded-full bg-neutral-300 cursor-pointer border",
                color === "#adb5bd" && "ring-2 ring-white")}
            />
            <div
              title="Space Black"
              onClick={() => setColor("#2e2c2e")}
              className={clsx("w-8 h-8 rounded-full bg-neutral-900 cursor-pointer border",
                color === "#2e2c2e" && "ring-2 ring-white")}
            />
          </div>

          {/* Size Options */}
          <div className="size-control flex gap-3">
            <button
              onClick={() => setScale(0.06)}
              className={clsx(
                "px-3 py-1 rounded-lg border",
                scale === 0.06
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              )}
            >
              14"
            </button>
            <button
              onClick={() => setScale(0.08)}
              className={clsx(
                "px-3 py-1 rounded-lg border",
                scale === 0.08
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              )}
            >
              16"
            </button>
          </div>
        </div>
      </div>

      {/* 3D Canvas */}
      <Canvas
        id="canvas"
        camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}
        className="w-full h-[500px] mt-10"
      >
        <color attach="background" args={["#000"]} />
        <StudioLight />
        <ModelSwitcher scale={scale} isMobile={isMobile} />
      </Canvas>
    </section>
  );
};

export default ProductViewer;
