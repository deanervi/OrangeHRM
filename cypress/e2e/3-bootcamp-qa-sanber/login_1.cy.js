import LoginPage from '../support/pageObjects/LoginPage';

describe('User Login dengan Password dan Username Valid', () => {
    const loginPage = new LoginPage();

    it('Buka halaman login', () => {
    //    cy.visit('https://opensource-demo.orangehrmlive.com');
        loginPage.visit();
    });
    it('Masukan username valid', () => {
        // cy.get('[name="username"]').type('Admin');      
        loginPage.inputUsername('Admin');
    });
    it('Masukan password valid', () => {
        // cy.get('[name="password"]').type('admin123');
        loginPage.inputPassword('admin123');
    });
    it('Klik login', () => {
        cy.intercept('POST', '**/auth/validate').as('loginRequest');
        // cy.get('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click();
        loginPage.clickBtnLogin();

        cy.wait('@loginRequest').its('response.statusCode').should('eq', 200);
    });
    it('User diarahkan ke halaman Dashboard', () => {
        // cy.get('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6').should('have.text', 'Dashboard');
        loginPage.isDashboardDisplayed();
    });
})