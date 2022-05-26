//sign up a user onclick
document.getElementById("signUp").onclick = function(){

    //get data from input
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    //run a firebase function to sign up the user
    firebase.auth().createUserWithEmailAndPassword(email,password).then((userCred)=>{

        //if the sign up is successful redirect to home page
        window.location.href = "home.html";
        

    })


}