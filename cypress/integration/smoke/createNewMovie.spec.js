describe('smoke', () => {
	it('should create new movie', () => {
		cy.visit('/');
		cy.contains('New Movie').click();
		cy.url().should('include', '/movies/new');
		cy.get('#title').type('Test Movie').should('have.value', 'Test Movie');
		cy.get('#genreId').select('Action');
		cy.get('#numberInStock').type('5');
		cy.get('#dailyRentalRate').type('3');
		cy.get('#submit').click();
		cy.url().should('include', '/');
	});
});
