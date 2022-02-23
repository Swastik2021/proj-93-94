// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDQyvO3UpFOHCYdXH1GE2hEqmQw74ydptM",
      authDomain: "lets-chat-29fe2.firebaseapp.com",
      databaseURL: "https://lets-chat-29fe2-default-rtdb.firebaseio.com",
      projectId: "lets-chat-29fe2",
      storageBucket: "lets-chat-29fe2.appspot.com",
      messagingSenderId: "358799426341",
      appId: "1:358799426341:web:7f5b6b17fdfd6a954510cc"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
