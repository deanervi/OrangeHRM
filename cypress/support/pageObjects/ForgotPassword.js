class ForgotPassword {
    //locator
    fieldUsername = '[name="username"]';
    btnResetPassword = '.oxd-button--secondary';
    txtLinkResetPasswordSent = '.oxd-text--h6';

    //method
    inputUsername(username){
        cy.get(this.fieldUsername).type(username);
    }

    clickBtnResetPassword(){
        cy.get(this.btnResetPassword).click();
    }

    ResetPasswordLinkSent(){
        cy.get(this.txtLinkResetPasswordSent).should('have.text', 'Reset Password link sent successfully');
    }

}

export default ForgotPassword;