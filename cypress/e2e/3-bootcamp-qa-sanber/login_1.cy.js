import LoginPage from "../../support/pageObjects/loginPage";

describe('User Login dengan Password dan Username Valid', () => {
    const loginPage = new LoginPage();

    before(() => {                                   //di before ini adalah function untuk reset session
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.window().then((win) => {
            win.sessionStorage.clear()
        })

        // --------------------------- //
        loginPage.visit(); //ini function untuk buka link orangeHRM
    });
    
    it('Masukan username valid', () => {
        loginPage.inputUsername('Admin');  //ini untuk input username
    });
    
    it('Masukan password valid', () => {
        loginPage.inputPassword('admin123'); //ini untuk input password
    });
    it('Klik login', () => {
        cy.intercept('POST', '**/auth/validate').as('loginRequest'); //ini untuk kirim request 
        loginPage.clickBtnLogin(); //ini untuk klik button login

        cy.wait('@loginRequest').its('response.statusCode').should('eq', 302); //ini untuk validasi response
    });
    it('User diarahkan ke halaman Dashboard', () => {
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'); //ini untuk cek apakah halaman dashboard tampil
    });

})