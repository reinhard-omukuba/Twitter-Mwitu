firebase.auth().onAuthStateChanged((user)=>{

    if(user){
        console.log("user is logged in")
    }else{
        console.log("user is not logged in")
        window.location.href = "index.html";
    }
})