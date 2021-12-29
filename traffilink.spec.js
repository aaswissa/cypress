
context('Viewport', () => {
    beforeEach(() => {
        cy.visit('https://qa.traffilog.co.il/new_web/index.htm')
    })

    it('cy.viewport() - set the viewport size and dimension', () => {
        // https://on.cypress.io/viewport
        cy.viewport(1920, 980)

        // The viewport will be reset back to the default dimensions
        // in between tests (the  default can be set in cypress.json)
    })
})
