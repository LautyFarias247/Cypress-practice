describe("Prueba de inicio de sesion con usuario inexistente", () => {
  it("No debe iniciar sesion", () => {
		cy.visit("https://automationexercise.com/")
		cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
		cy.get('.login-form > h2')
		cy.get('[data-qa="login-email"]').type("fakeuser@test")
		cy.get('[data-qa="login-password"]').type("fakepassword")
		cy.get('[data-qa="login-button"]').click()
		cy.get('.login-form > form > p').contains("Your email or password is incorrect!")
	});
});