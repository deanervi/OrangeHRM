describe('User login dengan field kosong', () => {

    it('Buka halaman login', () => {
    //    cy.visit('https://opensource-demo.orangehrmlive.com');
        loginPage.visit();
    });
    it('Biarkan username dan password kosong', () => {
        // cy.get('[name="username"]').type('');  
        // cy.get('[name="password"]').type('');     
        loginPage.inputUsername('');
        loginPage.inputPassword('');
    });
    it('Klik login', () => {
        cy.intercept('POST', '**/auth/validate').as('loginRequest');
        // cy.get('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click();
        loginPage.clickBtnLogin();
        cy.wait('@loginRequest', {timeout: 2000}).then(() => {
            throw new Error('Request tidak terkirim karena field kosong')
        });
    });
    it('Muncul pesan error "Required" di kedua field', () => {
        // cy.get('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/span').should('have.text', 'Required');
        // cy.get('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/span').should('have.text', 'Required');
        loginPage.isTxtRequiredUsernameDisplayed();
        loginPage.isTxtRequiredPasswordDisplayed();
    });
})