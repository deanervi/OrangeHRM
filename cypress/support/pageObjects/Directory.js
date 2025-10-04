class Directory{
    //locator
    directoryMenu = ':nth-child(9) > .oxd-main-menu-item';
    txtDirectory = '.oxd-topbar-header-breadcrumb > .oxd-text';

    //method
    clickDirectoryMenu(){
        cy.intercept('GET', '**/directory/viewDirectory').as('viewDirectory');
        cy.get(this.directoryMenu).click();
        cy.wait('@viewDirectory').its('response.statusCode').should('eq', 200);
    }

    isDirectoryMenuDisplayed(){
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory');
        cy.get(this.txtDirectory).should('have.text', 'Directory');
    }

}

export default Directory;