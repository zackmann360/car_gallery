// this is the place that stores new accouts
var newAccounts = []
// form pages
var pageSignup = document.querySelector('#pageSignUp')
var pageLogin = document.querySelector("#pageLogin")
var pageSuccess = document.querySelector("#pagesuccess")
var pageCreateSuccess = document.querySelector("#pageCreateSuccess")


//----------------------------------------------------------------------
// login Page
//----------------------------------------------------------------------
var inputGroupEmail = pageLogin.querySelector('#inputGroupEmail')
var inputGroupPass = pageLogin.querySelector('#inputGroupPass')
var emailInput = inputGroupEmail.querySelector('input')
var passInput = inputGroupPass.querySelector('input')
var buttonGroup = pageLogin.querySelector('.buttonGroup')
var button = pageLogin.querySelector('button')
button.onclick = onclickLogin
var joinNow = pageLogin.querySelector('#joinNow')
joinNow.onclick = onclickJoin 

//1. when you click the login button show user name and password erors if the inputs are empty
//2. when you click on the login button if the username is empty show an error for username
// if the password is empty show the error for password
// when you type into the inputs clear out the error 
// when you click the login button if the username and password is filled out show login failed under login button

// when you click on join now show the sign up page

function onclickJoin(){
    pageLogin.classList.remove('show')
    pageSignUp.classList.add('show')

    clearErrorsAndInputs()
}

function onclickLogin(){
    // if the user name is admin and the passeod is admin show the success page
    if(!emailInput.value){
        inputGroupEmail.classList.add('inputError')
    }
    if(!passInput.value){
        inputGroupPass.classList.add('inputError')
    }

    if(emailInput.value && passInput.value){
        buttonGroup.classList.add('wrong')
    }

    // static login 
    if(emailInput.value === "admin" && passInput.value ==="admin"){
        // var current = document.querySelector('.show')
        // current.classList.remove('show')
        pageLogin.classList.remove('show')
        pageSuccess.classList.add('show')
    }

    // dinamic login
    // 1. loop over the accounts
    for(var account of newAccounts){

          // 2. if user = account.user and pass = account.password 
          if(account.username == emailInput.value && account.password == passInput.value){
            pageLogin.classList.remove('show')
            pageSuccess.classList.add('show')
          }
            // then sign in
            



    }
}

inputGroupEmail.onkeyup = onkeyEmail
inputGroupPass.onkeyup = onkeyPass

function onkeyEmail(){
    inputGroupEmail.classList.remove('inputError')
}

function onkeyPass(){
    inputGroupPass.classList.remove('inputError')
}

//---------------------------------------------------------------------
// SignUp page
//---------------------------------------------------------------------

// 1. when you click on join button if the user name is empty show an error
// if the password is empty show an error
// 2. when you type into the username input clear its error 
    // when you type into the password input clear its error
// 3. if the user name and password are not empty show the create account success page
// 4. add username and password to the accounts array
var joinInputGroupEmail = pageSignup.querySelector('#inputGroupEmail')
var joinInputGroupPass = pageSignup.querySelector('#inputGroupPass')
var joinEmailInput = joinInputGroupEmail.querySelector('input')
var joinPassInput = joinInputGroupPass.querySelector('input')

var joinButton = pageSignUp.querySelector('button')
joinButton.onclick = onclickJoinNow

function onclickJoinNow(){

    // add an error is inputs have no value
    if(!joinEmailInput.value){
        joinInputGroupEmail.classList.add('Inputerror')
    }
    if(!joinPassInput.value){
        joinInputGroupPass.classList.add('inputError')
    }

    // this takes you to a successfull sign up page
    if(joinEmailInput.value && joinPassInput.value){
        pageSignup.classList.remove('show')
        pageCreateSuccess.classList.add('show')

        // add account too accounts array
        newAccounts.push(
            {
                username : joinEmailInput.value,
                password : joinPassInput.value
            }
        )
    }
}

// remove errors when you type into the input 
joinEmailInput.onkeydown = onkeydownEmailJoin
joinPassInput.onkeydown = onkeydownPassJoin

function onkeydownEmailJoin(){
    joinInputGroupEmail.classList.remove('inputError')
    
}

function onkeydownPassJoin(){
    joinInputGroupPass.classList.remove('inputError')
}

// return you to the sign in page
var signIn = pageSignup.querySelector('#signIn')
signIn.onclick = onclickSignIn 


function onclickSignIn(){
    pageSignup.classList.remove('show')
    pageLogin.classList.add('show')
}

//---------------------------------------------------------------------
// successful create acocunt page
//---------------------------------------------------------------------

var buttonReturnToSignin = document.querySelector('#returnToSignin')
buttonReturnToSignin.onclick = pageCreateSuccessButton

function pageCreateSuccessButton(){
    pageCreateSuccess.classList.remove('show')
    pageLogin.classList.add('show')
    clearErrorsAndInputs()
}

//---------------------------------------------------------------------
// successfull login page
//---------------------------------------------------------------------

// function to return you to the sign in page
var returnToSignin = document.querySelector("#returnToSignin2")
returnToSignin.onclick = onclickGoBackToSignin

function onclickGoBackToSignin() {
    pageSuccess.classList.remove('show')
    pageLogin.classList.add('show')
    buttonGroup.classList.remove('wrong')
    clearErrorsAndInputs()
}


// function to clear input values and error messages
function clearErrorsAndInputs(){
    inputGroupEmail.classList.remove('error')
    inputGroupPass.classList.remove('error')
    joinInputGroupEmail.classList.remove('error')
    joinInputGroupPass.classList.remove('error')
    buttonGroup.classList.remove('wrong')
    emailInput.value = ''
    passInput.value = ''
    joinEmailInput.value = ''
    joinPassInput.value = ''
}







