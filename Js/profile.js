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
            const bio = doc.data().bio;

            document.getElementById("test").innerText = username 
            document.getElementById("theTitle").innerText = username 
            document.getElementById("profName").innerText = username 
            document.getElementById("profUserNamed").innerText = "@" +username 
            document.getElementById("bio").innerText = bio;
            
            //fill the edit account page
            document.getElementById("edtName").value = username;
            document.getElementById("edtBio").value = bio;

        })

        //update acount
        document.getElementById("saveChanges").onclick = function(){

            var edtName = document.getElementById("edtName").value;
            var edtBio = document.getElementById("edtBio").value;

            firebase.firestore().collection("users").doc(userId).update({
                userName:edtName,
                bio:edtBio
            }).then(()=>{
                window.location.reload();
            })
        }





    }else{
        window.location.href = "index.html"
    }
})