import { useState } from "react";
import { Switch } from "src/designSystem/components";

const DefaultSwitch = () => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Switch
      label="Default"
      id="default-switch"
      isSelected={isSelected}
      onChange={() => {
        setIsSelected((prevState) => !prevState);
      }}
    />
  );
};

export default DefaultSwitch;
