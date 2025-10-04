import LoginPage from "../../support/pageObjects/loginPage";

describe('User Login dengan Username salah', () => {
    const loginPage = new LoginPage();

    before(() => {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.window().then((win) => {
            win.sessionStorage.clear()
        })
        loginPage.visit();
    });

    // it('Buka halaman login', () => {
    //     loginPage.visit();
    // });
    it('Masukan username salah', () => {
        loginPage.inputUsername('admin123');
    });
    it('Masukan password valid', () => {
        loginPage.inputPassword('admin123');
    });
    it('Klik login', () => {
        loginPage.clickBtnLogin();
    });
    it('Muncul pesan error "Invalid credentials"', () => {
        cy.get('.oxd-alert-content > .oxd-text').should('exist');
    });
})