import "./ScreenDisplay.scss";
import { SoundType } from "../../utils/types";
import { useEffect, useRef } from "react";

type ScreenDisplayProps = {
  textContent: SoundType["id"];
  onOff: boolean;
};

const ScreenDisplay = ({ textContent, onOff }: ScreenDisplayProps) => {
  const textContentRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (!onOff) {
      textContentRef.current!.innerText = "";
    }
  }, [onOff]);

  return (
    <div id="display">
      <p className="ScreenDisplay" ref={textContentRef}>
        {textContent}
      </p>
    </div>
  );
};

export default ScreenDisplay;
/** Created by carlos on 30/09/2022 */
