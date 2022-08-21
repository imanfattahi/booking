describe('Make sure app is running', () => {

  it('Front is running', () => {
    cy.visit('/')
  })

  it('Server is running', () => {
    // todo - use environment variables
    cy.request('http://127.0.0.1:3000/api/v1/promotions/priceoffers/ond/:origin/:destination')
  })
})

describe('Flight booking test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Ban searching with no value', () => {
    cy.get('[data-test="search-btn"]').should('be.disabled')
  })

  it('Allow searching if Origin and Destination are selected', () => {
    // select first option of .select -- {downArrow}{enter}
    cy.get('[data-test="from-input"]').click().type('{downArrow}{enter}')
    cy.get('[data-test="to-input"]').click().type('{downArrow}{enter}')
    cy.get('[data-test="search-btn"]').should('not.be.disabled')
  });

  it('Get result after doing search', () => {
    cy.get('[data-test="from-input"]').click().type('{downArrow}{enter}')
    cy.get('[data-test="to-input"]').click().type('{downArrow}{enter}')
    cy.get('[data-test="search-btn"]').click()
    cy.get('.flight-list').should('be.exist')
  });

  it('Test book a flight', () => {
    const stub = cy.stub()
    cy.on ('window:alert', stub)
    cy.get('[data-test="from-input"]').click().type('{downArrow}{enter}')
    cy.get('[data-test="to-input"]').click().type('{downArrow}{enter}')
    cy.get('[data-test="search-btn"]').click()
    cy.get('.flight-item:first-child [data-test="book-btn"]').click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('Booked!;)')
      })
  });
})
