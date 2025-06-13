import { useState } from "react";
import { Switch } from "src/designSystem/components";

const DisabledCheckedSwitch = () => {
  const [isSelected, setIsSelected] = useState(true);

  return (
    <Switch
      label="Disabled and checked"
      isDisabled={true}
      id="disabled-checked-switch"
      isSelected={isSelected}
      onChange={() => {
        setIsSelected((prevState) => !prevState);
      }}
    />
  );
};

export default DisabledCheckedSwitch;
