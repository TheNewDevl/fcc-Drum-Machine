import "./SoundsContainer.scss";
import { SoundsList } from "../../utils/soundsList";
import { SoundType } from "../../utils/types";
import Sound from "../Sound/Sound";

const SoundsContainer = () => {
  return (
    <div className="sounds-container">
      {SoundsList.map((sd: SoundType) => (
        <Sound key={sd.id} sound={sd} />
      ))}
    </div>
  );
};

export default SoundsContainer;
/** Created by carlos on 30/09/2022 */
