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
      onChange={() => {
        setIsSelected((prevState) => !prevState);
      }}
    />
  );
};

export default DisabledSwitch;
