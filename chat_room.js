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
username=localStorage.getItem("user_name");
document.getElementById("username").innerHTML="Welcome "+ username; 
function addroom(){
  roomname=document.getElementById("roomname").value ;
  localStorage.setItem("room_name",roomname);
  firebase.database().ref("/").child(roomname).update({
    purpose:"adding roomname"
  })
  window.location="chat_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
  console.log(Room_names);
  row="<div class='room_name' id='"+Room_names+"' onclick='redirecttoroomnames(this.id)'>#"+Room_names+"</div><hr>";
  document.getElementById("output").innerHTML+=row;
          //End code
    });});}
getData();
function redirecttoroomnames(roomid){
console.log(roomid);
localStorage.setItem("room_name",roomid);
window.location="chat_page.html"
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html"
}