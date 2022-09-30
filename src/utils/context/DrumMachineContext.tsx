import { createContext, PropsWithChildren, useState } from "react";
import { DrumMachineContextType } from "../types";

export const DrumMachineContext = createContext<DrumMachineContextType>(
  {} as DrumMachineContextType
);

export const DrumMachineProvider = ({ children }: PropsWithChildren) => {
  const [isLoopSelected, setLoop] = useState(true);
  const [onOff, setOnOff] = useState(true);

  return (
    <DrumMachineContext.Provider
      value={{ isLoopSelected, setLoop, onOff, setOnOff }}
    >
      {children}
    </DrumMachineContext.Provider>
  );
};
