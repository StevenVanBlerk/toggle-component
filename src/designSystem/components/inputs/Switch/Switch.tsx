import type { ReactElement, ReactNode, SyntheticEvent } from "react";
import { StyledWrapper } from "./styles";

type Size = "LG" | "MD" | "SM";
type Anchor = "TOP" | "RIGHT" | "BOTTOM" | "LEFT";
type Variant = "PRIMARY" | "SECONDARY" | "WARNING" | "ERROR";

export type SwitchProps = {
  isSelected: boolean | null;
  label: string;
  id: string;
  selectedLabel?: ReactNode;
  deselectedLabel?: ReactElement;
  onChange?: (event: SyntheticEvent) => void;
  isLabelVisible?: boolean;
  labelAnchor?: Anchor;
  isErrored?: boolean;
  errorMessage?: string;
  isDisabled?: boolean;
  variant?: Variant;
  size?: Size;
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
