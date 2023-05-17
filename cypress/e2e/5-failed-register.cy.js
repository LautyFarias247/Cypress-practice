describe("Registro con email existente", () => {
  it("Debe lanzar un error",()=>{
		cy.visit("https://automationexercise.com/")
		cy.get('.active > :nth-child(1) > h1 > span')
		cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
		cy.get('.signup-form > h2').contains("New User Signup!")
		cy.get('[data-qa="signup-name"]').type("prueba")
		cy.get('[data-qa="signup-email"]').type("usuariodeprueba@prueba")
		cy.get('[data-qa="signup-button"]').click()
		cy.get('.signup-form > form > p').contains("Email Address already exist!")
	});
});
