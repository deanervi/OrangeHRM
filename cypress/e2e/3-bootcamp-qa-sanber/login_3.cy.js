describe('User login dengan password salah', () => {

    it('Buka halaman login', () => {
       cy.visit('https://opensource-demo.orangehrmlive.com');
    });
    it('Masukan username valid', () => {
        cy.get('[name="username"]').type('Admin');         
    });
    it('Masukan password salah', () => {
        cy.get('[name="password"]').type('123456');
    });
    it('Klik login', () => {
        cy.intercept('POST', '**/auth/validate').as('loginRequest');
        cy.get('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click();
        cy.wait('@loginRequest').then((interception) => {
            expect(interception.response.statusCode).to.eq(302);
        });
    });
    it('Muncul pesan error "Invalid credentials"', () => {
        cy.get('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/div/div[1]/div[1]/p').should('have.text', 'Invalid Credentials');
        
    });
})