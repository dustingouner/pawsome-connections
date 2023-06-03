
describe("Home page", () => {
  beforeEach(() => {
    cy.intercept('GET', "https://api.petfinder.com/v2/animals?age=senior", {
      fixture: 'animal.json'
    })
    cy.visit("http://localhost:3000/animal/64841660")
  })
  it("Should display a header with the app logo", () => {
    cy.get("header").should("is.visible").find("img").should("be.visible");
  });
  it("Should display the pets name above the details", () => {
    cy.get("h1").contains("Sadie")
  })
  it("User can view the pets image and details", () => {
    cy.get(".pet-photo").should('have.attr', 'src').and('include', "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64841660/1/?bust=1685823877")
    cy.get(".animal-info-header").contains("Pet Details")
    cy.get(".description").contains("Sweet senior looking for her new person. Her mom went into assisted living.")
    cy.get("p").contains("Adoption Status: adoptable") 
    cy.get("p").contains("Species: Dog") 
    cy.get("p").contains("Gender: Female") 
    cy.get("p").contains("Breed: Shih Tzu") 
    cy.get("p").contains("Age: Senior") 
    cy.get("p").contains("Size: Small") 
    cy.get("p").contains("Spayed/Neutered: yes") 
    cy.get("p").contains("House Trained: yes") 
    cy.get(".contact-info-header").contains("Contant Information")
    cy.get("p").contains("Location: Valdosta, GA")
    cy.get("p").contains("Email: ig6Kennels@yahoo.com") 
    cy.get("p").contains("Phone Number: (229) 300-0203") 
  })
  it("User can return to the home page by clicking the logo in header", () => {
    cy.get("img").click()
    cy.url().should("eq", "http://localhost:3000/")
  })


})