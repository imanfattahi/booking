import FlightBooking from '../flight-booking.vue'
import store from '../../../src/store/index';

describe('Flight Booking Components', () => {

  // Load component and its store
  beforeEach(() => {
    cy.mount(FlightBooking, {
      global: {
        plugins: [store]
      }
    })
  })

  it('Component loaded', () => {
    cy.contains('h5', 'Discover your next dream destination')
  })

  it('Origin has data from store', () => {
    cy.get('[data-test="from-input"] .vue-dropdown li').should('have.length.gte', 1)
  })

  it('Destination has data from store', () => {
    cy.get('[data-test="to-input"] .vue-dropdown li').should('have.length.gte', 1)
  })
})
