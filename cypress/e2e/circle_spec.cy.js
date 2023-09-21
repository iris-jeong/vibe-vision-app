describe("Circle Component Tests", () => {
	before(() => {
		cy.visit("http://localhost:3000/");
		cy.wait(1000); // wait for 1 second
	});

	context("When each editor is hidden", () => {
		it("should perform actions for each circle component", () => {
			cy.get(".color__container").each(($circle) => {
				// Trigger a mouseenter event on the circle component.
				// cy.wrap($circle)
				// 	.trigger("mouseenter", { force: true })
				// 	.then(() => {
				// 		//Check to see the editor visibility is 'block'
				// 		cy.get(".editor-container").should(
				// 			"have.css",
				// 			"display",
				// 			"block"
				// 		);
				// 	});

				//Trigger a mouse enter event on the lock icon.
				cy.verifyIconHover("lock", "icons/unlocked-hover.svg");

				//Trigger a mouse enter event on the copy icon.
				// cy.verifyIconHover("copy", "icons/copy-hover.svg");

				//Trigger a click event on the copy icon.
				// cy.get(".notification").should("be.visible");

				//Trigger a mouse enter event on the color palette icon.
				// cy.verifyIconHover("palette", "icons/color-palette-hover.svg");

				//Trigger a click event on the color palette icon.
				// cy.get(".color-picker").should("be.visible");
			});
		});
	});
});
