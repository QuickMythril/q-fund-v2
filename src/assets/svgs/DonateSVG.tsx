import { IconTypes } from "./IconTypes";

export const DonateSVG: React.FC<IconTypes> = ({
  color,
  height,
  width,
  className,
}) => {
  return (
    <svg
      className={className}
      fill={color}
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
    >
      <path d="M640-440q-46-42-89.5-82.5t-77-79.5Q440-641 420-677.5T400-748q0-56 38-94t94-38q32 0 60 13.5t48 36.5q20-23 48-36.5t60-13.5q56 0 94 38t38 94q0 34-20 70.5T806.5-602Q773-563 730-522.5T640-440Zm0-108q59-56 109.5-111.5T800-748q0-23-14.5-37.5T748-800q-14 0-26.5 5.5T700-778l-60 72-60-72q-9-11-21.5-16.5T532-800q-23 0-37.5 14.5T480-748q0 33 50.5 88.5T640-548ZM560-60l-280-78v58H40v-440h318l248 92q33 12 53.5 42t20.5 66h80q50 0 85 33t35 87v40L560-60ZM120-160h80v-280h-80v280Zm438 16 238-74q-3-11-13.5-16.5T760-240H568q-31 0-56-4t-54-14l-69-24 23-76 80 26q18 6 42 9t66 3q0-11-6.5-21T578-354l-234-86h-64v220l278 76ZM200-300Zm400-20Zm-400 20Zm80 0Zm360-374Z" />
    </svg>
  );
};
