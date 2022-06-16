/// <reference types="Cypress"/>


describe("test material ui react demo form with cypress",() => {

  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should obtain text data from fixture file to fill form", () => {    
    cy.fixture('mat-form').then((TextData) => {
      expect(TextData.text).to.be.equal("Olá cypress");
    });
  });

  it("Should fill text field correctly with expected text typed",() => {
    cy.fixture('mat-form').then(({ text }) => {
      cy.get('[data-cy="field-name"]').should('have.value', '');
      cy.get('[data-cy="field-name"]').click().type(text);
      cy.get('[data-cy="field-name"]').invoke('val').as('typedText'); // use val to get input text
      cy.get('@typedText').then((typedText) => {
        expect(typedText.trim()).to.be.equal(text);
      })
    });
  });

  it("Should show expected text after click on form button", () => {
    cy.fixture('mat-form').then(({text}) => {
      cy.get('[data-cy="field-name"]').should('have.value', '');
      cy.get('[data-cy="field-name"]').click().type(text);
      cy.get('[data-cy="button-show-name"]').click(); 
      
      cy.get('[data-cy="field-result"]')
        .should('be.visible')
        .invoke('text') // use text to get innerHTML text value
        .as('result');

      cy.get('@result').then((result) => {
        expect(result).to.be.equal(text);        
      });
    });
  });

});