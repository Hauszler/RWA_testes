class loginPage{
    selectorList(){
        const selectors = {
            usernameField: "#username",
            passwordField: "#password",
            LoginBtn: "[type='submit']",
            location: '.css-1idn90j-MuiGrid-root',
            invalidLogin: '.MuiAlert-message'
        }
        return selectors
    }
    accessLoginPage(){
        cy.visit('http://localhost:3000/')
    }
        
    loginWhithUser(user,password){
        cy.get(this.selectorList().usernameField).type(user)
        cy.get(this.selectorList().passwordField).type(password)
        cy.get(this.selectorList().LoginBtn).click()
    }
    checkInvalidLogin(){
        cy.get(this.selectorList().invalidLogin)
    }
   checkLocationLogin(){
    cy.location('pathname').should('equal', '/signin')
   }

}

export default loginPage