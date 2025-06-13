import { useState } from "react";
import SquareIcon from "src/designSystem/icons/square-icon.svg?react"; // TO-DO: create a cleaner icon import pattern
import GridIcon from "src/designSystem/icons/grid-icon.svg?react";
import { StaticAccentSwitch } from "./styles";

const SednaSwitch = () => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <StaticAccentSwitch
      label="Custom colors and value labels"
      id="custom-value-labels-switch"
      isSelected={isSelected}
      onChange={() => {
        setIsSelected((prevState) => !prevState);
      }}
      deselectedLabel={<SquareIcon className="icon deselect-icon" />}
      selectedLabel={<GridIcon className="icon select-icon" />}
    />
  );
};

export default SednaSwitch;
