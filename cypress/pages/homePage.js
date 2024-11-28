class homePage {
    selectorList(){
        const selectors = {
            locationHomePage: '.css-1idn90j-MuiGrid-root'
        }
        return selectors
    }

    checkLocation(){
        cy.get(this.selectorList().locationHomePage)
    }


}

export default homePage