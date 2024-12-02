class getStartedPage {
    selectorList(){
        const selectors = {
            getStarted: '[data-test="user-onboarding-dialog-title"]',
            nextBtn: '[data-test="user-onboarding-next"]',
            location: '[data-test="user-onboarding-dialog-title"]',
            bankName: '#bankaccount-bankName-input',
            routingNumber: '#bankaccount-routingNumber-input',
            bankAccount: '#bankaccount-accountNumber-input',
            saveBtn: '[data-test="bankaccount-submit"]',
        }
        return selectors
    }

    checkNewUser(){
        cy.get(this.selectorList().getStarted)
    }
    nextBtn(){
        cy.get(this.selectorList().nextBtn).click()
        cy.get(this.selectorList().location)
    }

    newBankData(bankName,routingNumber,bankAccount){
        cy.get(this.selectorList().bankName).type(bankName)
        cy.get(this.selectorList().routingNumber).type(routingNumber)
        cy.get(this.selectorList().bankAccount).type(bankAccount)
        cy.get(this.selectorList().saveBtn).click()
        cy.get(this.selectorList().saveBtn).click()

    }

}

export default getStartedPage