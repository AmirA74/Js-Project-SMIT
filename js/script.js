function Submit() {
  const userNameVal = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const myName = "Amir Arshad";
  const myemail = "admin@user.com";
  const mypassword = 345120;

  if (userNameVal == myName && email == myemail && password == mypassword) {
    Toastify({
      text: "You are SuccessFully Login!",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();
  } else {
    Toastify({
      text: "Please Enter Details Correctly",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #67b26f, #4ca2cd)",
      },
    }).showToast();
  }
}
function goToHomePage() {
  const userEmail = document.getElementById("email").value;
  const userPass = document.getElementById("password").value;
  const email = "admin@user.com";
  const pass = "345120";
  if (userEmail == email && userPass == pass) {
    window.location.href = "home.html";
  } else {
    Toastify({
      text: "Please Enter Details Correctly",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #67b26f, #4ca2cd)",
      },
    }).showToast();
    console.log("Try again");
  }
}

document.getElementById("submit-btn").addEventListener("click", goToHomePage);
// function goToHomePage(){
//   if(userEmail == email && userPass == pass){
//     window.location.href = "home.html";
//   }
//   else{
//       notify("Please Enter Details Correctly")
//   }
//   console.log("Try again");
// }


// function Submit(){
//     const userNameVal = document.getElementById("username").value;
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//      const myName = "Amir Arshad";
//      const myemail = "admin@user.com";
//      const mypassword = 345120;

//      if(userNameVal == myName && email == myemail && password == mypassword){
//          Toastify({
//             text: "You are SuccessFully Login!",
//             duration: 3000,
//             newWindow: true,
//             close: true,
//             gravity: "top", // `top` or `bottom`
//             position: "left", // `left`, `center` or `right`
//             stopOnFocus: true, // Prevents dismissing of toast on hover
//             style: {
//               background: "linear-gradient(to right, #00b09b, #96c93d)",
//             },
//           }).showToast();
//      }else{
//          Toastify({
//             text: "Please Enter Details Correctly",
//             duration: 3000,
//             newWindow: true,
//             close: true,
//             gravity: "top", // `top` or `bottom`
//             position: "left", // `left`, `center` or `right`
//             stopOnFocus: true, // Prevents dismissing of toast on hover
//             style: {
//               background: "linear-gradient(to right, #67b26f, #4ca2cd)",
//             },
//           }).showToast();
//      }
