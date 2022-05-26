//sign up a user onclick of the sign in button
document.getElementById("signIn").onclick = function(){

    //get data from input
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    //run a firebase function to sign up the user
    firebase.auth().signInWithEmailAndPassword(email,password).then((userCred)=>{

        //if the sign up is successful redirect to home page
        window.location.href = "home.html";
    
    }).catch((error)=>{
        //if user is not successfully signed in, we are going to catch the error message

        //getting the exact error message
        const mss = error.message;

        //showing the error message on alert
        alert(mss)

    })


}