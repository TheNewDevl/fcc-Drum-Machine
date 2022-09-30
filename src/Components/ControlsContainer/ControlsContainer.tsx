import { useContext } from "react";
import "./ControlsContainer.scss";
import SwitchComponent from "../Switch/SwitchComponent";
import { DrumMachineContext } from "../../utils/context/DrumMachineContext";
import ScreenDisplay from "../Display/ScreenDisplay";

type ControlsContainerProps = {};

const ControlsContainer = ({}: ControlsContainerProps) => {
  const { isLoopSelected, setLoop, onOff, setOnOff, soundId } =
    useContext(DrumMachineContext);

  return (
    <div className="ControlsContainer">
      <ScreenDisplay textContent={soundId} onOff={onOff} />
      <SwitchComponent name="On/Off" state={onOff} handler={setOnOff} />
      <SwitchComponent name="Loop" state={isLoopSelected} handler={setLoop} />
    </div>
  );
};

export default ControlsContainer;
/** Created by carlos on 30/09/2022 */
