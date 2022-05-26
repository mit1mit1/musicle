import { durationlessPitchRadius, sharpYOffset } from "src/constants/svg";
import { Pitch } from "src/types";
import { getBaseYPosition, shouldAddSharp } from "src/utils";
import { SharpPath } from "./SharpPath";
import svgStyles from "src/components/SVGScore.module.scss"

const sharpPathDisplacement = -80;

interface DurationlessPitchPathProps {
  pitch: Pitch;
  xStart: number;
  color: string;
  opacity?: number;
  handleClick?: () => void;
}

export const DurationlessPitchPath = ({
  pitch,
  xStart,
  color,
  opacity = 1,
  handleClick,
}: DurationlessPitchPathProps) => {
  const yStart = getBaseYPosition(pitch) - durationlessPitchRadius;
  return (
    <g onClick={handleClick} className={handleClick ? svgStyles.clickableSVG : ""}>
      {shouldAddSharp(pitch) && (
        <SharpPath
          handleClick={handleClick}
          xStart={xStart + sharpPathDisplacement}
          yStart={yStart + sharpYOffset + durationlessPitchRadius}
          color={color}
          opacity={opacity}
          strokeWidth={6}
        />
      )}
      {handleClick && (
        <rect
          className={svgStyles.clickableCover}
          stroke=""
          opacity={0}
          x={xStart - durationlessPitchRadius * 0.5 - 15}
          y={yStart - durationlessPitchRadius * 0.5 - 15}
          width={durationlessPitchRadius * 3 + 30}
          height={durationlessPitchRadius * 3 + 30}
        />
      )}
      <g
        transform={`rotate(45 ${xStart + durationlessPitchRadius} ${
          yStart + durationlessPitchRadius
        })`}
      >
        <rect
          x={xStart}
          y={yStart}
          width={durationlessPitchRadius * 2}
          height={durationlessPitchRadius * 2}
          fill={color}
          opacity={opacity}
        />
      </g>
    </g>
  );
};
