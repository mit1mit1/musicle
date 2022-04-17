import { Duration } from "src/types";
import { BASE_COLOR, durationNames, WRONG_SPOT_COLOR } from "src/constants";
import { useStore } from "src/guessStore";
import { NoteShapePath } from "./NoteShapePath";
import "./DurationKey.css";

interface DurationKeyProps {
  duration: Duration;
  status: "unknown" | "wrong-spot" | "unavailable";
}

const DurationKeySVGWidth = 220;
const DurationKeySVGHeight = 220;

const DurationKey = ({ duration, status }: DurationKeyProps) => {
  if (status === "unavailable") {
    return <></>;
  }
  let color = BASE_COLOR;
  if (status === "wrong-spot") {
    color = WRONG_SPOT_COLOR;
  }
  return (
    <>
      <div className="duration-key">
        <svg
          viewBox={`0 0 ${DurationKeySVGWidth} ${DurationKeySVGHeight}`}
          xmlns="<http://www.w3.org/2000/svg>"
          className="duration-key-svg"
        >
          <NoteShapePath
            duration={duration}
            baseXPosition={50}
            baseYPosition={50}
            color={color}
          />
        </svg>
      </div>
    </>
  );
};

export const DurationKeyboard = () => {
  const { availableDurations, wrongSpotDurations } = useStore((state) => state);

  const buffer: Array<JSX.Element> = [];

  durationNames.forEach((duration) => {
    if (!availableDurations.includes(duration)) {
      buffer.push(<DurationKey duration={duration} status="unavailable" />);
    } else if (wrongSpotDurations.has(duration)) {
      buffer.push(<DurationKey duration={duration} status="wrong-spot" />);
    } else {
      buffer.push(<DurationKey duration={duration} status="unknown" />);
    }
  });
  return <>{buffer}</>;
};
