import UserData from '../fixtures/userdata.json'
import LoginPage from '../pages/loginPage'
import HomePage from '../pages/homePage'
import SingUpPage from '../pages/singUpPage'
import GetStartedPage from '../pages/getStartedPage'
import NewBankAccount from '../fixtures/newbankaccount.json'


const loginPage = new LoginPage()
const homepage = new HomePage()
const singUpPage = new SingUpPage()
const getStartedPage = new GetStartedPage()



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
    getStartedPage.nextBtn()
    getStartedPage.newBankData(NewBankAccount.SuccessData.bankName,NewBankAccount.SuccessData.routingNumber,NewBankAccount.SuccessData.accountNumber)
    //****** */
    //checando transações
    homepage.myTransition()
    cy.get('.css-mpyo7s-MuiTypography-root').contains('No Transactions')

  });
});


