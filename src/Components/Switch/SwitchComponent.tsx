import { Dispatch, SetStateAction } from "react";
import "./SwitchComponent.scss";

type SwitchProps = {
  name: string;
  state: boolean;
  handler: Dispatch<SetStateAction<boolean>>;
};

const SwitchComponent = ({ name, state, handler }: SwitchProps) => {
  const handleState = () => {
    handler(!state);
  };

  const handleClassName = () => {
    return state ? "custom-input" : "custom-input off";
  };
  return (
    <div className="switch">
      <label htmlFor={name}>
        {name}
        <input
          id={name}
          name={name}
          type="checkbox"
          checked={state}
          onChange={handleState}
        />
        <span aria-hidden="true" className={handleClassName()}></span>
      </label>
    </div>
  );
};

export default SwitchComponent;
/** Created by carlos on 30/09/2022 */
