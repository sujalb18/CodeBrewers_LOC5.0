import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMrzXs1DfPgJGNaB4O1jji6GVCZ3c7Qn8",
  authDomain: "digivault-c3e87.firebaseapp.com",
  projectId: "digivault-c3e87",
  storageBucket: "digivault-c3e87.appspot.com",
  messagingSenderId: "836223901663",
  appId: "1:836223901663:web:4d5e61eac583f375712e6a",
  measurementId: "G-VD9PSNE1WJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();
const auth = firebase.auth();
const database = firebase.database();

// set up our register function
function signup() {
  email = document.getElementById("email").value;
  fullname = document.getElementById("fullname").value;
  mbnumber = document.getElementById("mbnumber").value;
  dob = document.getElementById("dob").value;
  secret = document.getElementById("secret").value;

  firebase.auth().languageCode = "it";
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
    "sign-in-button",
    {
      size: "invisible",
      callback: (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        onSignInSubmit();
      },
    }
  );

  const appVerifier = window.recaptchaVerifier;
  firebase
    .auth()
    .signInWithPhoneNumber(mbnumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      // ...
    })
    .catch((error) => {
      // Error; SMS not sent
      // ...
    });
  // validate email
}
