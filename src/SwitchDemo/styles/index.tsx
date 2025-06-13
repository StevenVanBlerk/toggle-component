import styled from "styled-components";

export const DemoWrapper = styled.div`
  display: flex;
  gap: 32px;
  section {
    background: var(--surface-background-color);
    padding: 8px;
    width: 320px;
    border: solid 1px #ffffff;
    border-radius: 6px;

    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  }
`;
