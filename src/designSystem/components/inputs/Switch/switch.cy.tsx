// TO-DO: Accessibility tests https://www.w3.org/WAI/ARIA/apg/patterns/switch/
import Switch from "./Switch";

const selectors = {
  label: "label",
  input: 'input[type="checkbox"]',
  labelText: ".label-text",
  track: ".track",
  thumb: ".thumb",
};

describe("Switch component tests", () => {
  it("renders the component", () => {
    cy.mount(<Switch isSelected={false} label="Some label" id="test-switch" />);
    cy.get(selectors.label).should("exist");
    cy.get(selectors.track).should("exist");
    cy.get(selectors.thumb).should("exist");
    cy.get(selectors.labelText).should("contain.text", "Some label");
    cy.get(selectors.input).should("exist").and("not.be.checked");
  });

  // These tests confirm the Switch component meets WAI guidelines (https://www.w3.org/WAI/ARIA/apg/patterns/switch/)
  it("upholds WAI accessibility standards", () => {
    const onChangeSpy = cy.stub().as("onChangeSpy");

    cy.mount(
      <Switch
        isSelected={false}
        label="Some label"
        id="test-switch"
        onChange={onChangeSpy}
        isLabelVisible={false}
      />
    );

    cy.get(selectors.input)
      .should("exist")
      .and("not.be.checked")
      .should("have.attr", "aria-checked", "false")
      .should("have.attr", "role", "switch")
      .should("have.attr", "aria-label", "Some label");

    // Confirming space bar triggers the switch's onChange
    cy.get("@onChangeSpy").should("not.have.been.called");
    cy.get(selectors.input).type(" ", { force: true });
    cy.get("@onChangeSpy").should("have.been.calledOnce");
  });

  it("visually renders the label text by default", () => {
    cy.mount(<Switch isSelected={false} label="Some label" id="test-switch" />);
    cy.get(selectors.labelText)
      .should("exist")
      .should("contain.text", "Some label")
      .should("have.css", "display", "block"); // This would be "display: none" if hidden

    cy.get(selectors.input)
      .should("exist")
      .should("have.attr", "aria-label", "Some label");
  });

  it("visually renders the label text when isLabelVisible=true", () => {
    cy.mount(
      <Switch
        isSelected={false}
        label="Some label"
        id="test-switch"
        isLabelVisible={true}
      />
    );
    cy.get(selectors.labelText)
      .should("exist")
      .should("contain.text", "Some label")
      .should("have.css", "display", "block"); // This would be "display: none" if hidden
  });

  it("visually hides the label text when isLabelVisible=false", () => {
    cy.mount(
      <Switch
        isSelected={false}
        label="Some label"
        id="test-switch"
        isLabelVisible={false}
      />
    );
    cy.get(selectors.labelText)
      .should("exist")
      .should("contain.text", "Some label")
      .should("have.css", "display", "none");

    cy.get(selectors.input)
      .should("exist")
      .should("have.attr", "aria-label", "Some label");
  });

  it("triggers an onChange when clicking a Switch", () => {
    const onChangeSpy = cy.stub().as("onChangeSpy");

    cy.mount(
      <Switch
        isSelected={false}
        label="Some label"
        id="test-switch"
        onChange={onChangeSpy}
      />
    );

    cy.get("@onChangeSpy").should("not.have.been.called");
    cy.get(selectors.label).click();
    cy.get("@onChangeSpy").should("have.been.calledOnce");
  });

  it("disables the Switch when isDisabled=true", () => {
    const onChangeSpy = cy.stub().as("onChangeSpy");

    cy.mount(
      <Switch
        isSelected={false}
        label="Some label"
        id="test-switch"
        onChange={onChangeSpy}
        isDisabled
      />
    );

    cy.get("@onChangeSpy").should("not.have.been.called");
    cy.get(selectors.label).click();
    cy.get("@onChangeSpy").should("not.have.been.called");
  });

  it("sets state to indeterminate when isSelected=null", () => {
    cy.mount(<Switch isSelected={null} label="Some label" id="test-switch" />);

    cy.get(selectors.input).should("exist").and("not.be.checked");

    cy.get(selectors.track).then(($trackElement) => {
      const trackWidthPx = $trackElement.css("width"); // a value like "32px"
      const trackWidth = parseFloat(trackWidthPx); // a value like 32

      cy.get(selectors.thumb).then(($thumbElement) => {
        const thumbWidthPx = $thumbElement.css("width"); // a value like "16px"
        const thumbWidth = parseFloat(thumbWidthPx); // a value like 16

        const thumbMarginLeftPx = $thumbElement.css("margin-left"); // a value like "9px"
        const thumbMarginLeft = parseFloat(thumbMarginLeftPx); // a value like 9

        expect(thumbMarginLeft).to.eq(trackWidth / 2 - thumbWidth / 2); // confirming the thumb is visually at the center of its track
      });
    });
  });

  it("visually outlines the Switch when tabbed to", () => {
    cy.mount(<Switch isSelected={false} label="Some label" id="test-switch" />);

    cy.get(selectors.label).should(
      "have.css",
      "outline",
      "rgb(255, 255, 255) none 0px"
    );
    cy.press(Cypress.Keyboard.Keys.TAB);
    cy.get(selectors.label).should(
      "have.css",
      "outline",
      "rgb(255, 255, 255) solid 1px"
    );
  });
});
