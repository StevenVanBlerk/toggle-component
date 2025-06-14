import styled from "styled-components";

type StyledWrapperProps = {
  $isIndeterminate?: boolean;
  $isLabelVisible?: boolean;
};

export const StyledWrapper = styled.span<StyledWrapperProps>`
  /* variables relevant to Switch components */
  --hover-background-color: #0067cb;
  --hover-outline: 1px solid #ffffff;
  --disabled-opacity: 0.75;
  --track-width: 34px;
  --track-background-color-deselected: #6f96bc;
  --track-background-color-selected: #3d8ad2;
  --track-border-color: #ffffff;
  --track-padding: 2px;
  --thumb-size: 16px;
  --thumb-color: #ffffff;
  --thumb-indeterminate-position: calc(50% - (var(--thumb-size) / 2));
  --thumb-highlight-shadow-hidden: 0 0 0 0px rgba(255, 255, 255, 0.4);
  --thumb-highlight-shadow: 0 0 0 5px rgba(255, 255, 255, 0.4);

  label {
    cursor: pointer;
    display: flex;
    opacity: 1;
  }

  /* Hiding the default checkbox input */
  input {
    appearance: none;
  }

  /* Creating space between the switch track and the value-labels on either side */
  .switch {
    display: flex;
    gap: 4px;
  }

  .track {
    /* The track height is the thumb size plus the top and bottom track padding */
    height: calc(
      var(--thumb-size) + var(--track-padding) + var(--track-padding)
    );
    width: var(--track-width);
    border: 2px solid var(--track-border-color);
    border-radius: 99px;
    align-content: center; // vertically centering the thumb within the track
    padding: 0px var(--track-padding);
    background-color: var(--track-background-color-deselected);
    transition: background-color 0.2s cubic-bezier(0.1, 1, 1, 1);
  }

  .thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background: var(--thumb-color);
    border-radius: 99px;
    transition:
      margin 0.2s cubic-bezier(0.1, 1, 1, 1),
      box-shadow 0.1s ease;
    box-shadow: var(--thumb-highlight-shadow-hidden);
    margin-left: ${({ $isIndeterminate }) =>
      $isIndeterminate /* Centering the thumb if the state is indeterminate */
        ? "var(--thumb-indeterminate-position)"
        : "0%"};
  }

  /* Conditionally visually displaying label text */
  .label-text {
    display: ${({ $isLabelVisible }) => ($isLabelVisible ? "initial" : "none")};
  }

  /* Ensuring icons are vertically centered with the Switch */
  .value-label {
    display: flex;
    align-items: center;
  }

  /* Fading the switch if the input is disabled */
  label:has(input:disabled) {
    cursor: default;
    opacity: var(--disabled-opacity);
  }

  /* Outlining the Switch if focused */
  label:has(input:focus-visible) {
    outline: var(--hover-outline);
  }

  /* Styling track based on isSelected */
  input:checked + .switch .track {
    background-color: var(--track-background-color-selected);
  }

  /* Positioning the thumb on the RHS when the Switch is selected */
  input:checked + .switch .track .thumb {
    margin-left: ${({ $isIndeterminate }) =>
      $isIndeterminate
        ? "var(--thumb-indeterminate-position)" /* isIndeterminate visually trumps :checked */
        : "calc(100% - var(--thumb-size))"};
  }

  /* Adding a hover effect to the Switch when not disabled */
  label:has(input:not(:disabled)):hover {
    .thumb {
      box-shadow: var(--thumb-highlight-shadow);
    }
  }
`;
