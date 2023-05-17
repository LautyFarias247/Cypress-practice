describe("Debe cerrar sesion correctamente", () => {
  beforeEach(() => {
    cy.visit("https://automationexercise.com");
  });
  it("inicia sesion correctamente con el usuario de prueba y cierra sesion", () => {
    cy.get(".shop-menu > .nav > :nth-child(4) > a").click();
    cy.get('[data-qa="login-email"]').type("usuariodeprueba@prueba");
    cy.get('[data-qa="login-password"]').type("123456");
    cy.get('[data-qa="login-button"]').click();
    cy.get(":nth-child(10) > a").contains("Logged in as usuariodeprueba");
    cy.get(".shop-menu > .nav > :nth-child(4) > a").contains("Logout").click();
    cy.get(".login-form > h2");
  });
});
