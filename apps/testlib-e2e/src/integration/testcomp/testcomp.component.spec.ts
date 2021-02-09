describe('testlib', () => {
  beforeEach(() => cy.visit('/iframe.html?id=testcompcomponent--primary'));

  it('should render the component', () => {
    cy.get('testco-testcomp').should('exist');
  });
});
