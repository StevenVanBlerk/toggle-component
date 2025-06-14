import { DemoCardsWrapper } from "./styles";
import SednaSwitch from "./components/SednaSwitch";
import IndeterminateSwitch from "./components/IndeterminateSwitch";
import DefaultSwitch from "./components/DefaultSwitch";
import DisabledSwitch from "./components/DisabledSwitch";
import DisabledCheckedSwitch from "./components/DisabledCheckedSwitch";
import HiddenLabelSwitch from "./components/HiddenLabelSwitch";
import ValueLabelsSwitch from "./components/ValueLabelsSwitch";

const SwitchDemo = () => {
  return (
    <>
      <h1>Switch examples</h1>
      <DemoCardsWrapper>
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
              <ValueLabelsSwitch />
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
      </DemoCardsWrapper>
    </>
  );
};

export default SwitchDemo;
