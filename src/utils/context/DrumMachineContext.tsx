import { createContext, PropsWithChildren, useState } from "react";
import { DrumMachineContextType } from "../types";

export const DrumMachineContext = createContext<DrumMachineContextType>(
  {} as DrumMachineContextType
);

export const DrumMachineProvider = ({ children }: PropsWithChildren) => {
  const [isLoopSelected, setLoop] = useState(false);
  const [onOff, setOnOff] = useState(true);
  const [soundId, setSoundId] = useState("");

  return (
    <DrumMachineContext.Provider
      value={{ isLoopSelected, setLoop, onOff, setOnOff, soundId, setSoundId }}
    >
      {children}
    </DrumMachineContext.Provider>
  );
};
