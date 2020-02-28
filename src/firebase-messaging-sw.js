// firebase sample code snippets from https://firebase.google.com/docs/cloud-messaging/js/client
// [START initialize_firebase_in_sw]
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
    'apiKey': "AIzaSyCzTKCsybwbtWHd_NTNtldu_xiZ7NqPBa8",
    'authDomain' : "twiliopoc-9160b.firebaseapp.com",
    'databaseURL': "https://twiliopoc-9160b.firebaseio.com",
    'projectId' : "twiliopoc-9160b",
    'messagingSenderId': "696409224349",
    'appId' : "1:696409224349:web:0798a8d8bd863624311074",
    'measurementId' : "G-T1NKRHPZDY"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
// [END initialize_firebase_in_sw]

messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload['data']['twi_body']);
    // Customize notification here
    const notificationTitle = 'Notification POC';
    const notificationOptions = {
        body: payload['data']['twi_body']
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});
