import userData from "../fixtures/userdata.json"

class singUpPage {
    selectorList() {
        const selectors = {
            singUp: '[data-test="signup"]',
            location: '[data-test="signup-title"]',
            firstName: '#firstName',
            lastName: '#lastName',
            userName: '#username',
            password: '#password',
            confirmPassword: '#confirmPassword',
            singUpBtn:'[data-test="signup-submit"]',
            nextBtn: '[data-test="user-onboarding-next"]',
        }
    return selectors
    }
    accessSingUpPage(){
        cy.get(this.selectorList().singUp).click()
    }
    checkLocationSingUp(){
        cy.get(this.selectorList().location)
    }
    applyUserData(firstName,lastName,userName,password,confirmPassword){
        cy.get(this.selectorList().firstName).type(firstName)
        cy.get(this.selectorList().lastName).type(lastName)
        cy.get(this.selectorList().userName).type(userName)
        cy.get(this.selectorList().password).type(password)
        cy.get(this.selectorList().confirmPassword).type(confirmPassword)
    }
    singUpBtn(){
        cy.get(this.selectorList().singUpBtn).click()
    }

    incomplitUserData(lastName,userName,password,confirmPassword){
        cy.get(this.selectorList().lastName).type(lastName)
        cy.get(this.selectorList().userName).type(userName)
        cy.get(this.selectorList().password).type(password)
        cy.get(this.selectorList().confirmPassword).type(confirmPassword)
    }
    singUpBtnInvisivble(){
        cy.get(this.selectorList().singUpBtn).should('be.disabled')
    }
}

export default singUpPage