describe("ingreso de usuario", () => {
  beforeEach(() => {
    cy.visit("https://automationexercise.com");
  });
  it("ingresa correctamente a la pagina", () => {
    cy.get(".active > :nth-child(1) > h1 > span").contains("Automation");
  });
  it("Ingresa correctamente a la login page, registra el usuario y lo borra", () => {
    cy.get(".shop-menu > .nav > :nth-child(4) > a").click();
    cy.get(".signup-form > h2").contains("New User Signup!");
    cy.get('[data-qa="signup-name"]').type("lautaro");
    cy.get('[data-qa="signup-email"]').type("laut743@mail.com");
    cy.get('[data-qa="signup-button"]').click();
    cy.get(":nth-child(1) > b").contains("Enter Account Information");
    cy.get("#id_gender1").check();
    cy.get('[data-qa="password"]').type("puxfaMGÑjvgsjhlñ-{cvkmdi");
    cy.get('[data-qa="days"]').select("8");
    cy.get('[data-qa="months"]').select("7");
    cy.get('[data-qa="years"]').select("2002");
    cy.get("#newsletter").check();
    cy.get("#optin").check();
    cy.get('[data-qa="first_name"]').type("lautaro");
    cy.get('[data-qa="last_name"]').type("antezana");
    cy.get('[data-qa="company"]').type("devocamp");
    cy.get('[data-qa="address"]').type("antezana247");
    cy.get('[data-qa="address2"]').type("nulo");
    cy.get('[data-qa="state"]').type("california");
    cy.get('[data-qa="country"]').select(5);
    cy.get('[data-qa="city"]').type("lomas de zamora pa");
    cy.get('[data-qa="zipcode"]').type("909090")
		cy.get('[data-qa="mobile_number"]').type("123125125136")
		cy.get('[data-qa="create-account"]').click()
		cy.get('b')
		cy.get('[data-qa="continue-button"]').click()
		cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
		cy.get('[data-qa="continue-button"]').click()
  });
});
