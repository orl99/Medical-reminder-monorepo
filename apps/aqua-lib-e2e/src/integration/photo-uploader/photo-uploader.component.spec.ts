describe('aqua-lib', () => {
  beforeEach(() => cy.visit('/iframe.html?id=photouploadercomponent--primary'));

  it('should render the component', () => {
    cy.get('orly-photo-uploader').should('exist');
  });
});
