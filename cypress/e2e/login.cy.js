describe("Iniciar sesion", () => {
  before(() => {
    cy.visit("https://automationexercise.com");
  });
  it("inicia sesion correctamente con el usuario de prueba", () => {
    cy.get(".shop-menu > .nav > :nth-child(4) > a").click();
    cy.get('[data-qa="login-email"]').type("usuariodeprueba@prueba");
    cy.get('[data-qa="login-password"]').type("123456");
    cy.get('[data-qa="login-button"]').click();
		cy.get(':nth-child(10) > a').contains("Logged in as usuariodeprueba")
		cy.get('.shop-menu > .nav > :nth-child(4) > a').contains("Logout")
  });
});
