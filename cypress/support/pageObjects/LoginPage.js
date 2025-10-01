class LoginPage {
    //locator
    fieldUsername = '[name="username"]';
    fieldPassword = '[name="password"]';
    btnLogin = '//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button';
    txtDashboard = '//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6';
    txtInvalidCredential = '//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/div/div[1]/div[1]/p';
    txtRequiredUsername = '//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/span';
    txtRequiredPassword = '//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/span';

    //method
    visitWeb(){
       cy.visit('https://opensource-demo.orangehrmlive.com');
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
        cy.get(this.txtDashboard).should('have.text', 'Dashboard');
    }

    isInvalidCredentialDisplayed(){
        cy.get(this.txtInvalidCredential).should('have.text', 'Invalid Credentials');
    }

    isTxtRequiredUsernameDisplayed(){
        cy.get(this.txtRequiredUsername).should('have.text', 'Required');
    }

    isTxtRequiredPasswordDisplayed(){
        cy.get(this.txtRequiredPassword).should('have.text', 'Required');
    }

}