describe('Favorites Page', () => {
  beforeEach(() => {
    cy.intercept("GET", 'https://api.petfinder.com/v2/animals?age=senior', {
      statusCode: 200,
      fixture: "animalsData.json"
    })
      cy.visit('http://localhost:3000/')
})

  it('displays the header', () => {
    cy.get('header').should('exist')
    cy.get('.header-section a').should('have.attr', 'href', '/')
    cy.get('.header-section img').should('have.attr', 'alt', 'Pawsome Connections logo')
  })

  it('displays the "Show Favorite Pets" button', () => {
    cy.get('#showFavorites')
      .should('exist')
      .and('contain', 'Show Favorite Pets')
  })

  it('an animal card can be favorited', () => {
    cy.get('.animals-container')
    cy.get('.animal-card')
    .first().within(() => {
      cy.get('.favorite-button').click()
      cy.get('.favorite-button').should('contain', '❤️')
    })
    cy.get('#showFavorites').click()
    cy.url().should('eq', 'http://localhost:3000/favorites')
    cy.get('.animals-container').should('have.length', 1)
  })

  it('displays the "Show All Pets" button on the favorites page', () => {
    cy.get('#showFavorites').click()
      .should('exist')
      .and('contain', 'Show All Pets')
  })

  it('redirects to the home page when "Show All Pets" button is clicked', () => {
    cy.get('#showFavorites').click()
    cy.url().should('eq', 'http://localhost:3000/favorites')
  })
})
