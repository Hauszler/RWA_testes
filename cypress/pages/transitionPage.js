

class transitionPage {
    selectorList(){
        const selector = {
         selectUser: '.css-1507962-MuiGrid-root',
         atualBalance: '[data-test="sidenav-user-balance"]',
         amount: '#amount',
         description: '#transaction-create-description-input',
         payBtn: '[data-test="transaction-create-submit-payment"]',
         checkTransfer: '.css-mpyo7s-MuiTypography-root',
         successAlert: '[data-test="alert-bar-success"]',
        }
        return selector
    }
    


    selectUser() {
    cy.get(this.selectorList().selectUser).eq(0).click()
}
  

    successTransfer(money,description){
       
       cy.get(this.selectorList().amount).type(money)
       cy.get(this.selectorList().description).type(description)
       cy.get(this.selectorList().payBtn).click()
       cy.get(this.selectorList().checkTransfer).eq(1).contains('Paid')
       cy.get(this.selectorList().successAlert)
    }


    failTransfer(money,description){
        cy.get(this.selectorList().amount).type(money)
        cy.get(this.selectorList().description).type(description)
        cy.get(this.selectorList().payBtn).click()
        //deveria esperar um erro por não ter saldo ou deixar saldo negativo,
        //esse erro não existe no app
    }
    
}



export default transitionPage