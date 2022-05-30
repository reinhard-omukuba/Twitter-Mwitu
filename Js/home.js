//checking authentication state
firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        //getting the user id
        const userId = user.uid;

        //getting the timestamp
        const timeStamp = new Date();

        document.getElementById("tweetBtn").onclick = function(){
            const tweet = document.getElementById("tweetInput").value;

            //sending the tweet to database onclick of a button 
            const sendTweet = firebase.firestore().collection("tweets").doc();
            sendTweet.set({
                userTweet:tweet,
                userId:userId,
                timeStamp:timeStamp,
                docId: sendTweet.id 

            }).then(()=>{
                window.location.reload();
            })
        }

        //onchange of the tweet input
        document.getElementById("tweetInput").onkeyup = function(){

            const tweet = document.getElementById("tweetInput").value;
            
            if(tweet == ""){
                document.getElementById("disabledBtn").style.display = "block";
                document.getElementById("tweetBtn").style.display = "none";

            }else{
                document.getElementById("disabledBtn").style.display = "none";
                document.getElementById("tweetBtn").style.display = "block";
            }
            
        }

        //getting the username

        firebase.firestore().collection("users").doc(userId).get().then((doc) =>{
            const username =  doc.data().userName;

            document.getElementById("username").innerText = username;
        })







    }else{
        //if user is not logged in, do the below task
        console.log("user is not logged in")
        window.location.href = "index.html";
    }
})


//signing out a user
// document.getElementById("logout").onclick = function(){
//     firebase.auth().signOut().then(()=>{
//         alert("User logged out successfully")
//         window.location.href = "index.html";
//     })
// }