document.getElementById("signUp").onclick = function(){

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;


    firebase.auth().createUserWithEmailAndPassword(email,password).then((userCred)=>{

        console.log("User created");
        
    })


}