
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";

import {
    getDatabase,
    ref,
    set,
    get,
    child,
    update,
    remove
} from "https://www.gstatic.com/firebasejs/13.4.0/firebase-database.js";


const firebaseConfig = {

    apiKey: "AIzaSyCZXjfZCZwxouTkPbgpl2cr_xxkxozB1BE",

    authDomain: "fire9b-7f28d.firebaseapp.com",

    databaseURL: "https://fire9b-7f28d-default-rtdb.firebaseio.com",

    projectId: "fire9b-7f28d",

    storageBucket: "fire9b-7f28d.firebasestorage.app",

    messagingSenderId: "996353150410",

    appId: "1:996353150410:web:59c7ec352568fb9c2b1333",

    measurementId: "G-WCWXJQ6BKW"

};



const app = initializeApp(firebaseConfig);

const db = getDatabase(app);


var namebox = document.getElementById("namebox");

var rollbox = document.getElementById("rollbox");

var secbox = document.getElementById("secbox");

var genbox = document.getElementById("genbox");

var insBtn = document.getElementById("Insbtn");

var selBtn = document.getElementById("Selbtn");

var updBtn = document.getElementById("Updbtn");

var delBtn = document.getElementById("Delbtn");

var result = document.getElementById("result");



function InsertData() {

    if (rollbox.value.trim() === "") {

        alert("Please enter RollNo");

        return;

    }

    set(ref(db, "TheStudents/" + rollbox.value), {

        NameOfStd: namebox.value,

        RollNo: rollbox.value,

        Section: secbox.value,

        Gender: genbox.value

    })

    .then(() => {

        result.innerHTML = "Data stored successfully";

    })

    .catch((error) => {

        result.innerHTML = "Error: " + error.message;

    });

}



function SelectData() {

    const dbref = ref(db);

    get(child(dbref, "TheStudents/" + rollbox.value))

    .then((snapshot) => {

        if (snapshot.exists()) {

            namebox.value = snapshot.val().NameOfStd;

            rollbox.value = snapshot.val().RollNo;

            secbox.value = snapshot.val().Section;

            genbox.value = snapshot.val().Gender;

            result.innerHTML = "Data found";

        }

        else {

            alert("No data found");

        }

    })

    .catch((error) => {

        result.innerHTML = "Error: " + error.message;

    });

}



function UpdateData() {

    if (rollbox.value.trim() === "") {

        alert("Please enter RollNo");

        return;

    }

    update(ref(db, "TheStudents/" + rollbox.value), {

        NameOfStd: namebox.value,

        Section: secbox.value,

        Gender: genbox.value

    })

    .then(() => {

        result.innerHTML = "Data updated successfully";

    })

    .catch((error) => {

        result.innerHTML = "Error: " + error.message;

    });

}




function DeleteData() {

    if (rollbox.value.trim() === "") {

        alert("Please enter RollNo");

        return;

    }

    remove(ref(db, "TheStudents/" + rollbox.value))

    .then(() => {

        result.innerHTML = "Data deleted successfully";

    })

    .catch((error) => {

        result.innerHTML = "Error: " + error.message;

    });

}




insBtn.addEventListener('click', InsertData);

selBtn.addEventListener('click', SelectData);

updBtn.addEventListener('click', UpdateData);

delBtn.addEventListener('click', DeleteData);
