describe('User Login dengan Username salah', () => {

    it('Buka halaman login', () => {
       cy.visit('https://opensource-demo.orangehrmlive.com');
    });
    it('Masukan username salah', () => {
        cy.get('[name="username"]').type('admin123');         
    });
    it('Masukan password valid', () => {
        cy.get('[name="password"]').type('admin123');
    });
    it('Klik login', () => {
        cy.get('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click();
    });
    it('Muncul pesan error "Invalid credentials"', () => {
        cy.intercept('POST', '**/auth/validate').as('loginRequest');
        cy.get('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/div/div[1]/div[1]/p').should('have.text', 'Invalid Credentials');

        cy.wait('@loginRequest').then((interception) => {
            expect(interception.response.statusCode).to.eq(302);
        });
    });
})