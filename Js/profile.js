//lets check if user is logged in
firebase.auth().onAuthStateChanged((user)=>{
    if(user){

        //get the user id
        const userId = user.uid;
        //get the email
        const userEmail = user.email;


        firebase.firestore().collection("users").doc(userId).get().then((doc)=>{

            const username = doc.data().userName;
            const bio = doc.data().bio;
            let profileImge = doc.data().profileImge;

            document.getElementById("test").innerText = username 
            document.getElementById("theTitle").innerText = username 
            document.getElementById("profName").innerText = username 
            document.getElementById("profUserNamed").innerText = "@" +username 
            document.getElementById("bio").innerText = bio;
            
            
            //fill the edit account page
            document.getElementById("edtName").value = username;
            document.getElementById("edtBio").value = bio;


            //
            document.getElementById("mainProfImage").style.backgroundImage = "url("+profileImge+")"

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

        //upload profile picture
        document.getElementById("upload").onclick = function(){

            //getting the image file from input
            let profileImage = document.getElementById("profileImage").files[0];
            
            //creating a storage reference
            let storageRef = firebase.storage().ref();

            //creating child (just naming the image location and image name)
            let uploadTask = storageRef.child("Profile/").child( Math.random() + profileImage.name).put(profileImage);


            uploadTask.on('state_changed', (snapshot) =>{

                //trying to estimate the % of image uploaded
                let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                let wholeNumber = Math.round(progress);

                //showing the progress on html
                document.getElementById("progress").innerText = wholeNumber + "%. Uploading"; 

                //progressbar
                document.getElementById("progressBar").style.width =  wholeNumber +"%";


            },(error) =>{

                //if we encounter an error, here is where we will do the logic 

            }, ()=>{
                //handle successful uploads

                //here we ar getting the image's url afte upload
                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL)=>{

                    //updating the url on the userprofile
                   firebase.firestore().collection("users").doc(userId).update({

                    profileImge: downloadURL

                   }).then(()=>{
                       window.location.reload();
                       //have fun!
                   })
                })


            })           
        }





    }else{
        window.location.href = "index.html"
    }
})