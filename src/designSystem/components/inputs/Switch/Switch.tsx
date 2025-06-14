import type { ReactNode, SyntheticEvent } from "react";
import { StyledWrapper } from "./styles";

/** DEV NOTES FOR REVIEWER
 * Some further improvements that could be made to this component include:
 * - Allowing mapping of values to the selected and deselected states, e.g. false = "DARK_MODE" and true = "LIGHT_MODE"
 * - Allowing Switch to handle its own error state and styling via isErrored and errorMessage props
 * - Allowing for anchoring the Switch label to the top, right, bottom, or left via a labelAnchor prop
 * - Allowing for easy theme changes via a variant prop, e.g. "PRIMARY", "SECONDARY", "SUCCESS", "WARNING", "ERROR"
 * - Allowing for easy size variations via a size prop, e.g. "LG", "MD", "SM"
 */

export type SwitchProps = {
  isSelected: boolean | null;
  label: string;
  id: string;
  selectedLabel?: ReactNode;
  deselectedLabel?: ReactNode;
  onChange?: (event: SyntheticEvent) => void;
  isLabelVisible?: boolean;
  isDisabled?: boolean;
  className?: string;
};

const Switch = ({
  isSelected,
  label,
  id,
  onChange,
  isLabelVisible = true,
  isDisabled = false,
  selectedLabel,
  deselectedLabel,
  className,
}: SwitchProps) => {
  return (
    <StyledWrapper
      className={className}
      data-testid={id}
      $isIndeterminate={isSelected === null}
      $isLabelVisible={isLabelVisible}
    >
      <label htmlFor={id}>
        <input
          id={id}
          type="checkbox"
          role="switch"
          aria-label={label}
          onChange={onChange}
          checked={isSelected || false}
          aria-checked={isSelected || false}
          disabled={isDisabled}
          readOnly={!onChange}
        />
        <div className="switch">
          <div className="value-label">{deselectedLabel}</div>
          <div className="track">
            <div className="thumb" />
          </div>
          <div className="value-label">{selectedLabel}</div>
          <span className="label-text">{label}</span>
        </div>
      </label>
    </StyledWrapper>
  );
};

export default Switch;
