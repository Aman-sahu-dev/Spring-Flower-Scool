let name = document.getElementById('name');
let pass = document.getElementById('password');
let signname = document.getElementById('signname');
let signpass = document.getElementById('signpassword');
let email = document.getElementById('email');
let passtext = document.getElementById('passtext');
let stuname = document.getElementById('stuname');
let stuemail = document.getElementById('stuemail');

let credentials = new Array();
credentials.push({name:'admin',password:'12345678',email:'admin@gmail.com'});

function login(){
    if(searchStringInArray(name.value,pass.value)){
        location.href = "welcome.html";
        // stuname.innerText = `Name: ${name.value}`;
        // stuemail.innerText = `Password: ${pass.value}`;
        // console.log(stuname.innerText);
        // console.log(stuemail.innerText);
    }
    else{
        name.style.color="red";
        name.style.fontSize = "0.8rem";
        name.value = "* Invalid username or password *";
    }
}

function signup(){
    if(signpass.value.length <8 ){
        passtext.innerText = "*password should be atleast 8 characters"
    }
    else{
        alert('signup successful!!');
        let userdata = {
            name : signname.value,
            password:signpass.value,
            email : email.value
        }
        credentials.push(userdata);
        signname.value='';
        signpass.value='';
        console.log('signup scuccessful',userdata);
    }
}
function searchStringInArray (name,pass) {
    for (var j=0; j<credentials.length; j++) {
        if (credentials[j].name.match(name) && credentials[j].password.match(pass)) return true;
    }
    return false;
}