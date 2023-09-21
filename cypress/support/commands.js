// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("verifyIconHover", (icon, expectedSrc) => {
	cy.get(".icon__container")
		.contains(icon)
		.trigger("mouseover", { force: true })
		.then(() => {
			cy.get(`.${icon}-icon`).should("have.attr", "src", expectedSrc);
		});
});

Cypress.Commands.add("verifyIconClick", (icon, expectedSrc) => {
	cy.get(".icon__container")
		.contains(icon)
		.trigger("mousedown", { force: true });
	// cy.get(`.${icon}-icon`).should("have.attr", "src", expectedSrc);
	cy.get(`.${icon}-icon`).should(($el) => {
		// Keep re-querying until the assertion passes.
		expect($el.attr("src")).to.equal(expectedSrcAfterClick);
	});
});

// Cypress.Commands.add("verifyAllEditorVisibility", (expectedState) => {
// 	cy.get(".editor-container").each(($editor) => {
// 		if (expectedState === "hidden") {
// 			cy.wrap($editor).should("have.css", "display", "none");
// 		} else {
// 			cy.wrap($editor).should("have.css", "display", "block");
// 		}
// 	});
// });

// Cypress.Commands.add("verifyEditorVisibility", (circle, expectedState) => {
// 	cy.wrap(circle).within(() => {
// 		if (expectedState === "hidden") {
// 			cy.get(".editor-container").should(
// 				"have.css",
// 				"none",
// 				expectedState
// 			);
// 		} else {
// 			cy.get(".editor-container").should(
// 				"have.css",
// 				"block",
// 				expectedState
// 			);
// 		}
// 	});
// });
