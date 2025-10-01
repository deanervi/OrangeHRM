describe('User login hanya isi username', () => {

    it('Buka halaman login', () => {
    //    cy.visit('https://opensource-demo.orangehrmlive.com');
        loginPage.visit();
    });
    it('Masukan username valid', () => {
        // cy.get('[name="username"]').type('Admin');    
        loginPage.inputUsername('Admin');
    });
    it('Biarkan password kosong', () => {
        // cy.get('[name="password"]').type('');
        loginPage.inputPassword('');
    });
    it('Klik login', () => {
        cy.intercept('POST', '**/auth/validate').as('loginRequest');
        // cy.get('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click();
        loginPage.clickBtnLogin();
        cy.wait('@loginRequest').then((interception) => {
            expect(interception.response.statusCode).to.eq(302);
        });
    });
    it('Muncul pesan error "Required" di field password', () => {
        // cy.get('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/span').should('have.text', 'Required');
        loginPage.isTxtRequiredPasswordDisplayed();
    });
})