describe('medical-reminder', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));

  it('should render the component', () => {
    cy.get('orly-root').should('exist');
  });
});
