import { useState } from "react";
import { Switch } from "src/designSystem/components";

const DisabledSwitch = () => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Switch
      label="Disabled"
      isDisabled={true}
      id="disabled-switch"
      isSelected={isSelected}
      value={isSelected}
      onChange={() => {
        setIsSelected((prevState) => !prevState);
      }}
    />
  );
};

export default DisabledSwitch;
