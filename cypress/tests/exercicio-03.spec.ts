import UserData from '../fixtures/userdata.json'
import LoginPage from '../pages/loginPage'
import HomePage from '../pages/homePage'
import SingUpPage from '../pages/singUpPage'


const loginPage = new LoginPage()
const homepage = new HomePage()
const singUpPage = new SingUpPage()



describe('Visualizar histórico de transações com sucesso', () => {
  it('Deve exibir o histórico de transações de um usuário corretamente', () => {
    loginPage.accessLoginPage()
    loginPage.loginWhithUser(UserData.userSuccess.username,UserData.userSuccess.password)
    homepage.checkLocation()
    homepage.myTransition()
    homepage.seesTable()
  });
});


describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {
  it.only('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
    //para vizualizar um perfil sem transações vou primeiro criar um perfil novo, fazer esse passo a primeira vez que abre o app
    loginPage.accessLoginPage()
    singUpPage.accessSingUpPage()
    singUpPage.checkLocationSingUp()
    singUpPage.applyUserData(UserData.singUpData.firstName,UserData.singUpData.lastName,UserData.singUpData.username,UserData.singUpData.password, UserData.singUpData.confirmPassword)
    singUpPage.singUpBtn()
    loginPage.checkLocationLogin()
    //login com novo usuario
    loginPage.loginWhithUser(UserData.singUpData.username,UserData.singUpData.password)
    //as linhas abaixo precisam ser comentadas caso não seja a primeira vez que rodar o teste
    //cy.get('[data-test="user-onboarding-next"]').click()
    //cy.get('#bankaccount-bankName-input').type('Inter')
    //cy.get('#bankaccount-routingNumber-input').type('123123123')
    //cy.get('#bankaccount-accountNumber-input').type('123456789')
    //cy.get('[data-test="bankaccount-submit"]').click()
    //cy.get('[data-test="bankaccount-submit"]').click()
    //checando transações
    homepage.myTransition()
    cy.get('.css-mpyo7s-MuiTypography-root').contains('No Transactions')

  });
});