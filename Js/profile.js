//lets check if user is logged in
firebase.auth().onAuthStateChanged((user)=>{
    if(user){

        //get the user id
        const userId = user.uid;
        //get the email
        const userEmail = user.email;

        //document.getElementById("test").innerText = userEmail

        firebase.firestore().collection("users").doc(userId).get().then((doc)=>{

            const username = doc.data().userName;

            document.getElementById("test").innerText = username 
            document.getElementById("theTitle").innerText = username 


        })





    }else{
        window.location.href = "index.html"
    }
})