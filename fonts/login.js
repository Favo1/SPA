// Header buttons
//var lnkPost = document.querySelector("#lnkPost");
var lnkLogOut = document.querySelector("#lnkLogOut");
var lnkLogIn = document.querySelector("#btnLogin");
var lnkSignUp = document.querySelector("#lnkSignUp");

lnkLogIn.addEventListener("click", function() {
    clearSections();
    window.location.href = "index.html";
});
lnkLogOut.addEventListener("click", function() {
    firebase.auth().signOut();
    activateLoggedOut();
});
lnkSignUp.addEventListener("click", function() {
    clearSections();
    sectionSignUp.style.display = "block";
});
// lnkPost.addEventListener("click", function() {
//     clearSections();
//     sectionPost.style.display = "block";
// });











btnSignUp.addEventListener("click", function() {
    var name = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var pass = document.querySelector("#pass").value;
    if (name.length<3 || email.length<6 || pass.length<6) {
        alert("You need to enter your Full Name, E-mail address and password -6 characters min-");
    } else {
        if (pass!=pass2) {
            alert("Passwords must match");
        } else {
            // We are ok to register the user
            firebase.auth().createUserWithEmailAndPassword(email, pass)
                .then(function() {
                    // The user was registered
                    alert("User registered");
                    clearSections();
                    activateLoggedIn();
                    var user = firebase.auth().currentUser;
                    user.updateProfile({
                        displayName: name
                    });
                })
                .catch(function(error) {
                    alert("We couldn't register the user. " + error.message);
                })
        }
    }
});