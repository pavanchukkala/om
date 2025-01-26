import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

// Your Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyAofc3mQez-sDrvpZNsoOanaLjeEr3SSag",
    authDomain: "om-new-5d333.firebaseapp.com",
    databaseURL: "https://om-new-5d333-default-rtdb.firebaseio.com",
    projectId: "om-new-5d333",
    storageBucket: "om-new-5d333.firebasestorage.app",
    messagingSenderId: "115867801200",
    appId: "1:115867801200:web:0a0128f496bdd8264586b5",
    measurementId: "G-WLQWC3702E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Handle Form Submission
document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    try {
        await addDoc(collection(db, "contacts"), {
            name: name,
            email: email,
            phone: phone,
            message: message,
            timestamp: new Date()
        });

        alert('Your message has been sent successfully!');
        document.getElementById('contactForm').reset();
    } catch (error) {
        console.error("Error adding document: ", error);
        alert('Failed to send your message. Please try again later.');
    }
});
