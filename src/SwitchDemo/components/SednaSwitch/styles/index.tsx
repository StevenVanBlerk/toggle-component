import { Switch } from "src/designSystem/components";
import styled from "styled-components";

export const StaticAccentSwitch = styled(Switch)`
  --track-background-color-deselected: var(--track-background-color-selected);
  --icon-selected-color: #ffffff;
  --icon-deselected-color: #1f5e9b;

  .icon {
    width: 8px;
    height: 8px;
    transition: fill 0.2s ease;
  }

  .deselect-icon {
    fill: ${({ isSelected }) =>
      isSelected
        ? "var(--icon-deselected-color)"
        : "var(--icon-selected-color)"};
  }

  .select-icon {
    fill: ${({ isSelected }) =>
      isSelected
        ? "var(--icon-selected-color)"
        : "var(--icon-deselected-color)"};
  }
`;
