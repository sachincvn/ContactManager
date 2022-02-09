// Resposive Menu Controls

var navLinks = document.getElementById("navLinks");
navBar = false;
function toggleMenu(){
    if(navBar==false){
        navLinks.style.height = "90vh";
        navBar = true;
    }
    else{
        navLinks.style.height = "0";
        navBar = false;
    }
}




let id = "no";
showContact();
function addContact(){
    let msg = document.getElementById("msg");
    msg.innerHTML = "";
    let fname,lname,mobileno,email;
    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    mobileno = document.getElementById("mno").value;
    email = document.getElementById("email").value;
    console.log(fname)

    if(fname=="" && lname=="" && mobileno=="" && email==""){
        msg.innerHTML = "<h4 style='background:red;border:1px solid black;color:white;padding:0 1rem'>Please Enter The Details</h4>";
    }
    else{
        if(id=="no"){
            let myContacts = JSON.parse(localStorage.getItem(
                "myContacts"
            ));
            
            if(myContacts==null){
                msg.innerHTML = "<h4 style='background:green;border:1px solid black;color:white;padding:0 1rem'>Successfully Added</h4>";
                let data = [{fname,lname,mobileno,email}];
                localStorage.setItem("myContacts",JSON.stringify(data));
            }
            else{
                msg.innerHTML = "<h4 style='background:green;border:1px solid black;color:white;padding:0 1rem'>Successfully Added</h4>";
                myContacts.push({"fname":fname,"lname":lname,"mobileno":mobileno,"email":email});
                localStorage.setItem("myContacts",JSON.stringify(myContacts));
            }
        }
        else{
            let myContacts = JSON.parse(localStorage.getItem(
                "myContacts"
            ));
            myContacts[id].fname = fname;
            myContacts[id].lname = lname;
            myContacts[id].mobileno = mobileno;
            myContacts[id].email = email;
            localStorage.setItem("myContacts",JSON.stringify(myContacts));
        }
    }

    showContact();
    fname = document.getElementById("fname").value="";
    lname = document.getElementById("lname").value="";
    mobileno = document.getElementById("mno").value="";
    email = document.getElementById("email").value="";
}

function showContact(){
    let root = document.getElementById("contactDetails");
    
    let myContacts = JSON.parse(localStorage.getItem(
        "myContacts"
    ));
    if(myContacts!=null){
        html = ''
        let sno = 1;
        for(let k in myContacts){
            sno++;
            html = html+ `
            <div class="card">
            <table>
                <tr>
                    <th align="left">First Name</th>
                    <th>:</th>
                    <td>${myContacts[k].fname}</td>
                </tr>
                <tr>
                    <th align="left">Sur Name</th>
                    <th>:</th>
                    <td>${myContacts[k].lname}</td>
                </tr>
                <tr>
                    <th align="left">Number</th>
                    <th>:</th>
                    <td>${myContacts[k].mobileno}</td>
                </tr>
                <tr>
                    <th align="left">EmailAddress</th>
                    <th>:</th>
                    <td>${myContacts[k].email}</td>
                </tr>
                <tr>
                    <th align="left"><button class="sm-btn" onclick="editContact(${k})">Edit</button></th>
                    <th></th>
                    <td><button class="sm-btn" onclick="deleteContact(${k})">Delete</button></td>
                </tr>
            </table>
        </div>
            `;
        }
        root.innerHTML = html
    }
}

function editContact(contact_id){
    id = contact_id;
    console.log(id);
    let myContacts = JSON.parse(localStorage.getItem(
        "myContacts"
    ));
    fname = document.getElementById("fname").value=myContacts[contact_id].fname;
    lname = document.getElementById("lname").value=myContacts[contact_id].lname;
    mobileno = document.getElementById("mno").value=myContacts[contact_id].mobileno;
    email = document.getElementById("email").value=myContacts[contact_id].email;
}

function deleteContact(contact_id){
    let myContacts = JSON.parse(localStorage.getItem(
        "myContacts"
    ));
    myContacts.splice(contact_id,1);
    localStorage.setItem("myContacts",JSON.stringify(myContacts));
    showContact();
}