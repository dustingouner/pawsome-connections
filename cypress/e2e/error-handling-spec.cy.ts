describe("Dashboard", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://api.petfinder.com/v2/animals?age=senior", {
      fixture: "animalsData.json",
    })
  });
  it("should have an error message when you go down the wrong path", () => {
    cy.visit("http://localhost:3000/whatever");
    cy.get("header").should("is.visible").find("img").should("be.visible");
    cy.get(".error-message").first().contains("Sorry, you went down the wrong path!");
    cy.get(".error-message").last().contains("Please check your url and try again!");
  });

  it("should have an error message when you go down the wrong animal detail path", () => {
    cy.visit("http://localhost:3000/animal/whatever");
    cy.get("header").should("is.visible").find("img").should("be.visible");
    cy.get(".error-message").contains("Sorry, we cannot locate this pet!");
  });

  it("should display an error message when the zip code is not 5 digits", () => {
    cy.visit("http://localhost:3000");
    cy.get("#locationInput").type("8043")
    .get("#submitForm").click()
    .get(".zipcode-error").should("is.visible")
  })

  it("should display an error message for a bad fetch call", () => {
    cy.intercept("GET", "https://api.petfinder.com/v2/animals?age=senior", {
      statusCode: 500, 
      body: { error: "Failed to fetch" }, 
    });
    cy.visit("http://localhost:3000");
    cy.get(".error-message").contains("Failed to Fetch");
    cy.get(".giphy-embed").should("be.visible");
  })
});