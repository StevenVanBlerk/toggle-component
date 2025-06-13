import { useState } from "react";
import { Switch } from "src/designSystem/components";

const IndeterminateSwitch = () => {
  const [isSelected, setIsSelected] = useState<boolean | null>(null);

  return (
    <Switch
      label="Initially indeterminate"
      id="indeterminate-switch"
      isSelected={isSelected}
      onChange={() => {
        setIsSelected((prevState) => !prevState);
      }}
    />
  );
};

export default IndeterminateSwitch;
