import LoginPage from "../../support/pageObjects/loginPage";
import ForgotPassword from "../../support/pageObjects/ForgotPassword";

describe('User berhasil melakukan forgot password', () => {
    const loginPage = new LoginPage();
    const forgotPassword = new ForgotPassword();

    before(() => {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.window().then((win) => {
            win.sessionStorage.clear()
        })
        loginPage.visit();
    });
    
    it('Klik text button forgot password', () => {
        loginPage.clickBtnForgotPassword();
    });

    it('Masukan Username valid', () => {
        forgotPassword.inputUsername('Admin');
    });

    it('Klik button Reset Password', () => {
        cy.intercept('POST', '**/auth/requestResetPassword').as('requestResetPassword');
        forgotPassword.clickBtnResetPassword();
        cy.wait('@requestResetPassword').its('response.statusCode').should('eq', 302);
    });

    it('Link reset password berhasil dikirim', () => {
        forgotPassword.ResetPasswordLinkSent();
    });

    

})