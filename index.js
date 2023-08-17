let nameinput = document.getElementById('name');
let pass = document.getElementById('password');
let signname = document.getElementById('signname');
let signpass = document.getElementById('signpassword');
let email = document.getElementById('email');
let passtext = document.getElementById('passtext');
let stuname = document.getElementById('stuname');
let stuemail = document.getElementById('stuemail');
let taskid = document.getElementById('taskid');
let tasksubject = document.getElementById('tasksubject');
let taskactivity = document.getElementById('taskactivity');

let credentials = [];
let monthlyactivities = [];

credentials.push({ name: 'admin', password: '12345678', email: 'admin@gmail.com' });
monthlyactivities.push({
    id: 1,
    activity: "create project file which contains tables between 12 to 19",
    subject: "Maths"
}, {
    id: 2,
    activity: "create project file which contains derivations",
    subject: "Physics"
});

nameinput.addEventListener('click', () => {
    nameinput.value = '';
    pass.value = '';
    nameinput.style.color = "black";
    nameinput.style.fontSize = "1rem";
})
signname.addEventListener('click', () => {
    passtext.innerText = '';
})
function login() {
    return new Promise((resolve, reject) => {
        let username = nameinput.value;
        let passvalue = pass.value;
        let index = searchvalue(username, passvalue);
        let useremail = credentials[index].email;
        if (username.length > 0 && passvalue > 0) {
            if (searchStringInArray(username, passvalue)) {
                sessionStorage.setItem('username', username);
                sessionStorage.setItem('userpass', passvalue);
                sessionStorage.setItem('useremail', useremail);
                resolve();
            } else {
                reject("Invalid username or password");
            }
        }
        else {
            nameinput.style.color = "red";
            nameinput.style.fontSize = "0.8rem";
            nameinput.value = "*Please enter valid data*";
        }
    });
}

function loginbtn() {
    login()
        .then(() => {
            location.href = "welcome.html";
        })
        .catch(error => {
            nameinput.style.color = "red";
            nameinput.style.fontSize = "0.8rem";
            nameinput.value = `*Invalid username or password*`;
        })
}

function signup() {
    if (signpass.value.length < 8) {
        passtext.innerText = "*password should be atleast 8 characters";
        signname.value = '';
        signpass.value = '';
        email.value = '';
    }
    else {
        alert('signup successful!!');
        let userdata = {
            name: signname.value,
            password: signpass.value,
            email: email.value
        }
        credentials.push(userdata);
        signname.value = '';
        signpass.value = '';
        console.log('signup scuccessful', userdata);
    }
}
function searchStringInArray(name, pass) {
    for (var j = 0; j < credentials.length; j++) {
        if (credentials[j].name.match(name) && credentials[j].password.match(pass)) return true;
    }
    return false;
}
function searchvalue(name, pass) {
    for (var j = 0; j < credentials.length; j++) {
        if (credentials[j].name.match(name) && credentials[j].password.match(pass)) return j;
    }
    return null;
}
function monthlycall() {
    monthlyactivities.forEach(element => {
        monthly(element);
    })
}
function monthly(element) {
    let monthlydiv = document.getElementById('monthly');
    const card = document.createElement('div');
    card.setAttribute('class', 'activities');
    let clutter = `<div class="actbox">
      <h2 class="boxid">Task : ${element.id}</h2>
      <h3 class="subject">Subject: ${element.subject}</h3>
      <p class="activity">${element.activity}.</p>
    </div>`
    monthlydiv.appendChild(card).innerHTML = clutter;
}
function addtask() {
    let taskid = document.getElementById('taskid');
    let tasksubject = document.getElementById('tasksubject');
    let taskactivity = document.getElementById('taskactivity');
    let monthlydiv = document.getElementById('monthly');
    let obj = {
        id: taskid.value,
        activity: taskactivity.value,
        subject: tasksubject.value
    }
    monthlyactivities.push(obj);
    while(monthlydiv.hasChildNodes()){
        monthlydiv.firstChild.remove();
    }
    monthlycall();
    console.log("Task added");
}
