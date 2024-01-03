import Search from "../PageObjects/SearchPage.js"

const searchPage = new Search();
const keyword = 'cypress';
//tested with random words: [chocolate, summer, cypress, cypress.io]

describe('Navigate to Website', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Do Search Inside Website', () => {
    searchPage.searchFor(keyword);
    searchPage.validateStringResult();
    searchPage.getListedResult(keyword, 0);
    searchPage.urlValidation(keyword);
  })
})
