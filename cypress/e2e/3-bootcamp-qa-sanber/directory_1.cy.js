import LoginPage from "../../support/pageObjects/loginPage";
import Directory from "../../support/pageObjects/Directory";

describe('Berhasi membuka menu Directory', () => {
    const loginPage = new LoginPage();
    const directory = new Directory();

    before(() => {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.window().then((win) => {
            win.sessionStorage.clear()
        })
        loginPage.visit();
    });
    
    it('Masukan username valid', () => {
        loginPage.inputUsername('Admin');
    });

    it('Masukan password valid', () => {
        loginPage.inputPassword('admin123');
    });

    it('Klik login', () => {
        cy.intercept('POST', '**/auth/validate').as('loginRequest');
        loginPage.clickBtnLogin();

        cy.wait('@loginRequest').its('response.statusCode').should('eq', 302);
    });

    it('User diarahkan ke halaman Dashboard', () => {
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    });

    it('Klik menu Directory', () => {
        directory.clickDirectoryMenu();
    });

    it('User diarahkan ke menu Directory', () => {
        directory.isDirectoryMenuDisplayed();
    });
    

})