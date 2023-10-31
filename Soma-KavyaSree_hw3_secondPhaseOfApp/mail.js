const firebaseConfig = {
    apiKey: "AIzaSyD-31KvtTI1pSRSQDeLlMtdflVllgFyWMg",
    authDomain: "contactform-a97e5.firebaseapp.com",
    databaseURL: "https://contactform-a97e5-default-rtdb.firebaseio.com",
    projectId: "contactform-a97e5",
    storageBucket: "contactform-a97e5.appspot.com",
    messagingSenderId: "744037325905",
    appId: "1:744037325905:web:719be150dd7a7411e4ac70"
  };

// intialize firebase
firebase.initializeApp(firebaseConfig);

// reference for my data base
var contactFormDB = firebase.database().ref('contactForm');

document.getElementById('contactForm').addEventListener('submit', submitForm);


function submitForm(e){
    e.preventDefault();
    var name = getElementVal('name');
    var email = getElementVal('emailid');
    var location = getElementVal('location');
    var msgContent = getElementVal('msgContent');

    console.log(name,email,location,msgContent);
    saveMessages(name,email,location,msgContent);

    document.querySelector('.alert').style.display = 'block';

    setTimeout(() =>{
        document.querySelector('.alert').style.display = 'none';
    }, 2000);
    
    document.getElementById('contactForm').reset();
}

const saveMessages = (name,email,location,msgContent) => {
    var newContactForm = contactFormDB.push();
    newContactForm.set({
        name:name,
        email:email,
        location:location,
        msgContent: msgContent
    });
};


const getElementVal = (id) => {
    return document.getElementById(id).value;
};