
import UserData from '../fixtures/userdata.json'
import LoginPage from '../pages/loginPage'
import HomePage from '../pages/homePage'
import SingUpPage from '../pages/singUpPage'


const loginPage = new LoginPage()
const homepage = new HomePage()
const singUpPage = new SingUpPage()



describe('Login com sucesso', () => {
  it('Deve fazer login com usuario valido', () => {
   loginPage.accessLoginPage()
   loginPage.loginWhithUser(UserData.userSuccess.username,UserData.userSuccess.password)
   homepage.checkLocation()
  })

})


describe('Tentar fazer login com credenciais inválidas', () => {
  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    loginPage.accessLoginPage()
    loginPage.loginWhithUser(UserData.userFail.username,UserData.userFail.password)
    loginPage.checkInvalidLogin()
  });
});


describe('Registro de novo usuário com sucesso', () => {
  it.only('Deve registrar um novo usuário com informações válidas', () => {
    loginPage.accessLoginPage()
    singUpPage.accessSingUpPage()
    singUpPage.checkLocationSingUp()
    singUpPage.applyUserData(UserData.singUpData.firstName,UserData.singUpData.lastName,UserData.singUpData.username,UserData.singUpData.password, UserData.singUpData.confirmPassword)
    singUpPage.singUpBtn()
    loginPage.checkLocationLogin()
    loginPage.loginWhithUser()
  });


  describe('Tentar registrar um novo usuário com informações incompletas', () => {
    it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
      loginPage.accessLoginPage()
      singUpPage.accessSingUpPage()
      singUpPage.checkLocationSingUp()
      //sem o primeiro nome
      singUpPage.incomplitUserData(UserData.singUpData.lastName,UserData.singUpData.username,UserData.singUpData.password, UserData.singUpData.confirmPassword)
      singUpPage.singUpBtnInvisivble()
      cy.get('#firstName-helper-text')
    });
  });
});


