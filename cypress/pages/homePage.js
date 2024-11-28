class homePage {
    selectorList(){
        const selectors = {
            locationHomePage: '.css-1idn90j-MuiGrid-root',
            newtTransitionBtn: '[data-test="nav-top-new-transaction"]',
            myTransitionBtn:'[data-test="nav-personal-tab"]',
            transitionList: '[data-test="transaction-list"]',
        }
        return selectors
    }

    checkLocation(){
        cy.get(this.selectorList().locationHomePage)
    }

    newtTransitionBtn(){
        cy.get(this.selectorList().newtTransitionBtn).click()
    }
    myTransition(){
        cy.get(this.selectorList().myTransitionBtn).click()
    }
    seesTable(){
        cy.get(this.selectorList().newtTransitionBtn).should('be.visible')
    }
}

export default homePage