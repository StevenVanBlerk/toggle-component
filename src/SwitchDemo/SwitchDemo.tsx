import { DemoWrapper } from "./styles";
import SednaSwitch from "./components/SednaSwitch";
import IndeterminateSwitch from "./components/IndeterminateSwitch";
import DefaultSwitch from "./components/DefaultSwitch";
import DisabledSwitch from "./components/DisabledSwitch";
import DisabledCheckedSwitch from "./components/DisabledCheckedSwitch";
import HiddenLabelSwitch from "./components/HiddenLabelSwitch";

const SwitchDemo = () => {
  return (
    <DemoWrapper>
      <section>
        <h2>Props</h2>
        <ul>
          <li>
            <DefaultSwitch />
          </li>
          <li>
            <DisabledSwitch />
          </li>
          <li>
            <DisabledCheckedSwitch />
          </li>
          <li>
            <IndeterminateSwitch />
          </li>
          <li>
            <HiddenLabelSwitch />
          </li>
        </ul>
      </section>
      <section>
        <h2>Overrides</h2>
        <div>
          <SednaSwitch />
        </div>
      </section>
    </DemoWrapper>
  );
};

export default SwitchDemo;
