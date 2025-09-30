describe('User login hanya isi username', () => {

    it('Buka halaman login', () => {
       cy.visit('https://opensource-demo.orangehrmlive.com');
    });
    it('Masukan username valid', () => {
        cy.get('[name="username"]').type('Admin');         
    });
    it('Biarkan password kosong', () => {
        cy.get('[name="password"]').type('');
    });
    it('Klik login', () => {
        cy.intercept('POST', '**/auth/validate').as('loginRequest');
        cy.get('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click();
        cy.wait('@loginRequest').then((interception) => {
            expect(interception.response.statusCode).to.eq(302);
        });
    });
    it('Muncul pesan error "Required" di field password', () => {
        cy.get('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/span').should('have.text', 'Required');
    });
})