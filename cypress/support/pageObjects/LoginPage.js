class LoginPage {
    //locator
    fieldUsername = '[name="username"]';
    fieldPassword = '[name="password"]';
    btnLogin = '.oxd-button';
    txtDashboard = 'oxd-text oxd-text--p oxd-alert-content-text';
    txtInvalidCredential = '.oxd-alert-content > .oxd-text';
    txtRequiredUsername = '//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/span';
    txtRequiredPassword = '//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/span';
    txtForgotPassword = '.orangehrm-login-forgot > .oxd-text';

    //method
    visit(){
       cy.visit('https://opensource-demo.orangehrmlive.com/'); //ini methodnya untuk visit link
    }

    inputUsername(username){
        cy.get(this.fieldUsername).type(username);
    }

    inputPassword(password){
        cy.get(this.fieldPassword).type(password);
    }

    clickBtnLogin(){
        cy.get(this.btnLogin).click();
    }

    isDashboardDisplayed(){
        // cy.get(this.txtDashboard).should('have.text', 'Dashboard');
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    }

    isInvalidCredentialDisplayed(){
        cy.get(this.txtInvalidCredential).should('have.text', 'Invalid credentials');
    }

    isTxtRequiredUsernameDisplayed(){
        cy.get(this.txtRequiredUsername).should('have.text', 'Required');
    }

    isTxtRequiredPasswordDisplayed(){
        cy.get(this.txtRequiredPassword).should('have.text', 'Required');
    }

    clickBtnForgotPassword(){
        cy.get(this.txtForgotPassword).click();
    }

}

export default LoginPage;