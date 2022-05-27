//lets check if user is logged in
firebase.auth().onAuthStateChanged((user)=>{
    if(user){

        //get the user id
        const userId = user.uid;
        //get the email
        const userEmail = user.email;

        //document.getElementById("test").innerText = userEmail

    }else{
        window.location.href = "index.html"
    }
})