// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyAtlWEluGhffVWumRyCcbTdTTYOwlJxkmc",
    authDomain: "let-s-chat-dd13a.firebaseapp.com",
    databaseURL: "https://let-s-chat-dd13a-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-dd13a",
    storageBucket: "let-s-chat-dd13a.appspot.com",
    messagingSenderId: "180557786970",
    appId: "1:180557786970:web:49c3d63b4a1129de1b0d63"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
   
}



