import { useState } from "react";
import { Switch } from "src/designSystem/components";

const ValueLabelsSwitch = () => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Switch
      label="Value labels"
      id="value-labels-switch"
      isSelected={isSelected}
      onChange={() => {
        setIsSelected((prevState) => !prevState);
      }}
      selectedLabel="☀️"
      deselectedLabel="🌙"
    />
  );
};

export default ValueLabelsSwitch;
