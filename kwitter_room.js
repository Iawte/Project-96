
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAQhxdCepL9EAeQ4VSBzYMwpIZxcpK9w8g",
      authDomain: "project-93-590a2.firebaseapp.com",
      databaseURL: "https://project-93-590a2-default-rtdb.firebaseio.com",
      projectId: "project-93-590a2",
      storageBucket: "project-93-590a2.appspot.com",
      messagingSenderId: "104888984641",
      appId: "1:104888984641:web:403c0fdeb3c54999e7d2c0",
      measurementId: "G-KVFE65D45J"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       row="<div class='roomNames' id=" + Room_names + "onclick=redirectToRoomName(this.id)>"+Room_names+"</div>";
                  document.getElementById("output").innerHTML+=row;
      });});}
getData();

function redirectToRoomName(name){
      localStorage.setItem("userName",name);
      window.location=("kr.h")
      }
      