import { useState } from "react";
import { Switch } from "src/designSystem/components";

const HiddenLabelSwitch = () => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Switch
      label="Hidden label"
      id="hidden-label-switch"
      isLabelVisible={false}
      isSelected={isSelected}
      value={isSelected}
      onChange={() => {
        setIsSelected((prevState) => !prevState);
      }}
    />
  );
};

export default HiddenLabelSwitch;
