//sign up a user onclick of the signup button
document.getElementById("signUp").onclick = function(){

    //get data from input
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const username = document.getElementById("username").value;

    //hide the sign up button
    document.getElementById("signUp").style.display = "none";

    //show signing in button
    document.getElementById("signingUp").style.display = "block";

    //run a firebase function to sign up the user
    firebase.auth().createUserWithEmailAndPassword(email,password).then((userCred)=>{

        //getting the userid from usercred result
        const theUserId = userCred.user.uid;

        firebase.firestore().collection("users").doc(theUserId).set({

            userEmail:email,
            userName: username,
            userId:theUserId,
            profileImge: "https://firebasestorage.googleapis.com/v0/b/twitter-mwitu-1ff67.appspot.com/o/Profile%2Fdefaultprofile.jpg?alt=media&token=1684b844-e68c-4ea4-a439-d1ec46968f5e"

        }).then(()=>{
            //if the sign up is successful redirect to home page
            window.location.href = "home.html";
        })

        
    
    }).catch((error)=>{
        //if user is not successfully signed up, we are going to catch the error message

        //getting the exact error message
        const mss = error.message;

        //showing the error message on Bootsrap's toast
        const toastLiveExample = document.getElementById('liveToast')
        const toast = new bootstrap.Toast(toastLiveExample)

        document.getElementById("toast-body").innerText = mss
        toast.show()

        //showing the signup button
        document.getElementById("signUp").style.display = "block";

        //hiding the signing up button
        document.getElementById("signingUp").style.display = "none";


    })

}

