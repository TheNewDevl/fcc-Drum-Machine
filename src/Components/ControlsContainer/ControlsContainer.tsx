import { useContext } from "react";
import "./ControlsContainer.scss";

type ControlsContainerProps = {};
import SwitchComponent from "../Switch/SwitchComponent";
import { DrumMachineContext } from "../../utils/context/DrumMachineContext";

const ControlsContainer = ({}: ControlsContainerProps) => {
  const { isLoopSelected, setLoop, onOff, setOnOff } =
    useContext(DrumMachineContext);

  return (
    <div className="ControlsContainer">
      <div id="display"></div>

      <SwitchComponent name="On/Off" state={onOff} handler={setOnOff} />
      <SwitchComponent name="Loop" state={isLoopSelected} handler={setLoop} />
    </div>
  );
};

export default ControlsContainer;
/** Created by carlos on 30/09/2022 */
