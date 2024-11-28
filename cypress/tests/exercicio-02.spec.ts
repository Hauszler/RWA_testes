import UserData from '../fixtures/userdata.json'
import LoginPage from '../pages/loginPage'
import HomePage from '../pages/homePage'
import TransitionPage from '../pages/transitionPage'

const loginPage = new LoginPage()
const homepage = new HomePage()
const transitionPage = new TransitionPage()

describe('Enviar dinheiro com saldo suficiente', () => {
  it('Deve enviar dinheiro com sucesso', () => {
    loginPage.accessLoginPage()
    loginPage.loginWhithUser(UserData.userSuccess.username,UserData.userSuccess.password)
    homepage.checkLocation()
    homepage.newtTransitionBtn()
    transitionPage.selectUser()
    transitionPage.successTransfer(10,"teste_teste")
  });
});


describe('Enviar dinheiro com saldo insuficiente', () => {
  it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
    loginPage.accessLoginPage()
    loginPage.loginWhithUser(UserData.userSuccess.username,UserData.userSuccess.password)
    homepage.checkLocation()
    homepage.newtTransitionBtn()
    transitionPage.selectUser()
    transitionPage.failTransfer(10000000,"Não vai ter saldo")
  });
});

