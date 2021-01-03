class Bank{
 static getData=()=>{

var accountDetails={
    userone:{acno:1000,balance:1000,username:"userone",password:"testuser"},
    usertwo:{acno:1001,balance:12000,username:"usertwo",password:"testuser1"},
    userthree:{acno:1002,balance:13000,username:"userthree",password:"testuser2"}
}
return accountDetails
}

static authenticateUser=(uname,pwd)=>{
    let dataset=Bank.getData()
     if(uname in dataset){
         if(dataset[uname].password==pwd){
             return 1;//valid username and pwd
         }
         else{
             return 0; // invalid password
         }
     
     }
     else{
        return -1;  //no user exist with provided username
     }

}

 static login=()=>{
     let uname=document.querySelector("#username").value
     let pwd=document.querySelector("#password").value
     let us=Bank.authenticateUser(uname,pwd)
     if(us==1){
        alert("login succesfull")
           window.location.href="userhome.html"

     }

     else if(us==0){
        alert("incorrect password")
     }
     else if(us==-1){
        alert("no user exist with provided username")
     }
    //  let dataset=Bank.getData()
    //  if(uname in dataset){
    //      if(dataset[uname].password==pwd){
    //          alert("login succesfull")
    //          window.location.href="userhome.html"
    //      }
    //      else{
    //          alert("incorrect password")
    //      }
     
    //  }
    //  else{
    //      alert("no user exist with provided username")
    //  }
    
}

static deposit=()=>{
    
    let uname=document.querySelector("#uname").value
    let pwd=document.querySelector("#pwd").value
    let amount=Number( document.querySelector("#amt").value)
    let us=Bank.authenticateUser(uname,pwd)
    let dataset=Bank.getData()
     if(us==1){
    
        dataset[uname].balance+=amount
           alert("your account is credited with"+amount+"current balance is"+dataset[uname].balance)
     }

     else if(us==0){
        alert("incorrect password")
     }
     else if(us==-1){
        alert("no user exist with provided username")
     }

    // let dataset=Bank.getData()
    //  if(uname in dataset){
    //      if(dataset[uname].password==pwd){
    //          dataset[uname].balance+=amount
    //          alert("your account is credited with"+amount+"current balance is"+dataset[uname].balance)
    
    //      }
    //      else{
    //          alert("incorrect password")
    //      }
     
    //  }
    //  else{
    //      alert("no user exist with provided username")
    //  }
    
    
}

static withdraw=()=>{
    let uname=document.querySelector("#uname").value
    let pwd=document.querySelector("#pwd").value
    let amount=Number( document.querySelector("#amt").value)
    let us=Bank.authenticateUser(uname,pwd)
    let dataset=Bank.getData()
    if(us==1){
        if(dataset[uname].balance>=amount){
        dataset[uname].balance-=amount
           alert("your account is debited with"+amount+"current balance is"+dataset[uname].balance)
        }
     else{
               alert("insufficient balance")
     }
    }
    

     else if(us==0){
        alert("incorrect password")
     }
     else if(us==-1){
        alert("no user exist with provided username")
     }
    

    //  if(uname in dataset){
    //      if(dataset[uname].password==pwd){
    //          if(dataset[uname].balance>=amount){
    //          dataset[uname].balance-=amount
    //          alert("your account is debited with"+amount+"current balance is"+dataset[uname].balance)
    
    //      }
    //      else{
    //          alert("insufficient balance")
    //      }
    //      }
    //      else{
    //          alert("incorrect password")
    //      }
     
    //  }
    //  else{
    //      alert("no user exist with provided username")
    //  }

}
}



