 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCdOXLt1WCAgbCHMmAOpuG9ccBlHWP2ii4",
    authDomain: "mwh-firebase-test.firebaseapp.com",
    databaseURL: "https://mwh-firebase-test.firebaseio.com",
    storageBucket: "mwh-firebase-test.appspot.com",
    messagingSenderId: "842072814945"
  };
  firebase.initializeApp(config);



  // 1. real time databases starts---------------------------

 /* // getting the element
  var preObject = document.getElementById('object');

  // adding database ref
  var dbRefObject = firebase.database().ref().child('object');

  // sync fun
  dbRefObject.on('value', snap => {
    preObject.innerText = JSON.stringify(snap.val(), null, 3);
  });

  */
  
  // 1. real time databases ends---------------------------
 

  // 2. firebase auth starts----------------------------------------
  //getting the dom
  var txtEmail = document.getElementById('email');
  var txtPwd = document.getElementById('pwd');
  var btnLogin = document.getElementById('login');
  var btnSignUp = document.getElementById('signup');
  var btnLogout = document.getElementById('logout');

  // adding login event
  btnLogin.addEventListener('click', function(){
    var email = txtEmail.value;
    var pass = txtPwd.value;
    // console.log(email, pass);


    const auth = firebase.auth();

    //sign in
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));

  });

  btnSignUp.addEventListener('click', function(){
    var email = txtEmail.value;
    var pass = txtPwd.value;
    console.log(email, pass);


    const auth = firebase.auth();

    //sign in
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));

  });



  btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();  
  });


  // real time listener firebase
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
      console.log(firebaseUser);
      // if logged in 
      btnLogout.classList.remove('hide');
    } else{
      console.log('user is not logged in');
      btnLogout.classList.add('hide');
    }
  })

  // 2. firebase auth ends----------------------------------------

