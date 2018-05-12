export class LoginService{
  loggedIn:boolean = false;
// fake async call to server for validating user authentication
  isLoggedIn(){
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(()=>{
          console.log('resolving within loginservice ' + this.loggedIn);
            resolve(this.loggedIn)
          }, 500);
      }
    );
    return promise;
  }

  logIn(){
    this.loggedIn = true;
  }

  logOut(){
    this.loggedIn = false;
  }
}
