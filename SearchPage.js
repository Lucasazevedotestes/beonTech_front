class Search {

    inputSearch = '[name="q"]';
    StringResult = 'div#result-stats';
    ListedResult = '.hlcw0c';

    searchFor(keyword) {
        cy.get(this.inputSearch).type(`${keyword}{enter}`);
        cy.wait(3000);
    }

    validateStringResult() {
        cy.get(this.StringResult).invoke('text').then(text => {
            expect(text).to.include('About');
            expect(text).to.include('results');
        })
    }

    getListedResult(keyword, index) {
        cy.get(this.ListedResult).contains(keyword).then(url => {
            cy.wrap(url).eq(index).click();
        })
    }

    urlValidation(keyword) {
        cy.url().should('contain', keyword);
    }
}

export default Search;