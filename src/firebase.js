import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDNJqsutP-46LOp1QZ4XQ49RTut96zYoio",
    authDomain: "react-chat-app-ea257.firebaseapp.com",
    projectId: "react-chat-app-ea257",
    storageBucket: "react-chat-app-ea257.appspot.com",
    messagingSenderId: "40504163098",
    appId: "1:40504163098:web:1d0894cb31804792aa4aa3",
    measurementId: "G-LQHKJP2N1Y"

//   "type": "service_account",
//   "project_id": "react-chat-app-ea257",
//   "private_key_id": "c578443e269d3807bb59e1efa5b794bb9c1cf71c",
//   "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDOpJwBBXKmJmsK\nUR7XD3BU5MQS9qSfkdF9MTW52izhLHk7VPyMOBmjK4mwWTyERoiGa05mag1tl0/n\nT2gj91IBtHwSr6vRLq89YmZV3CwRPYqre6JJ4d692IbE6RRX7BBUJfya1uB6nut6\nX0kQCK+8oo9e4uyQgXYoxR4TAm5xVnGlrw46vkQJPewx9xIPwxQTqkxfuvKkdnOj\nGS5ImWsA8CbhDeRnBB9zolAIfCcyqX7mIZcFSBBaaVotbPLSmB3OPm95deMLc+we\nczl3JZuGb1RJE+MG3X1FslkgoFfhtSy+PmHN5ve1wE6qfzTJokPMtO/LeE1Hszqb\nbc3y11GhAgMBAAECggEAFAJogMjQQzpxHvyf6d86112XhuaPJkxuZpr/QtHXiq5N\nxusB0WoVQXGT0ZmyfHR//9QgMVaPmk8Ok61ivijSrguWABE2p/jHS0Bd/G5nbfvx\nk41TN6hBc0ymMCcJq0HWiu9quGuaLQV6c80KPB07Nx7elyeOFKgUkvoTYW/Y1eyG\nUrpmZZguJ5TTGaMW+kRw1G4n7i8F0022t7XeMBK6JkV5NgFmlDxuBLYmWBvrET/R\ngFWmy/9pQrhn76A840j41tKzT26gGUfXXVeayz9X5lvZ7i5KcjjEJmxnnpb+XTbD\noZ+4JUop0VAMeI+4RISeAK4lMlvEz4oH4TbPzPRjqQKBgQDzo1DehjXWpegVItZM\ncxSLxstsW45vj0FfLmhdXJLM/NzRBO0j/9htt6Dm2XHVmYFJLSexPDROXSoMFxEq\nAhVilxRP3ARHWbXml2q7NpB6EFraru/X7z6Eh+wkKWmSAoYGvwVvjsAn1vbNWXaJ\nEaA37Xh9F3xBn6DsuG0FdZYQHwKBgQDZIMFg1wp+qc+PULa7jYmJUGF7jhl4lMg9\noFC6vLXEIzvG/svFa3ybVvyHBnKCxDRxa46L69eZkBmFHD3AHsbSIxf3BvoO6QLQ\n9OGZfO0bbBXqZHqrTbV3cVjh/FpQjbtWY8bffPDKulMnvH4wbdOiSg0skjiW8H0m\nJD7yc+NmPwKBgCTQpdSqNRJ1SWeANx+gOBeS94QtJY3H+NnYGl8ZMPmWsAtJkkfh\nTiPuHnsjmmbrZjTXhOrsLP82Zrci+S3+2JpoN+KFXYQmkyz/7lnRue0n8YKf8pAP\nj8PZAh7IvzIX/YahcMHVsUWT3wFSpm254xrwYEeOt/D2nQuIJrkvdniDAoGAK+oj\nEnoLxliEAWF6w+45fgtC3CF+Z1P4N/afvVUDklrp8TKBdjlqJ2TtiEW2jVovnSz6\n1LPrlER/1NtEZgIThlbQtwazNqbMCgUtR8Trk9tFh3WxFcqOxEyphHNstNQlqrBd\nfcAgV3Bd9zB5eUQNRMqjZXthdK3JMhisno7v1DMCgYBxW0NSwCCVrXBsO+Ke4egr\neV2awSIQ1hkAV+46iGfyaA8EVng7RsTc+k7/JDTJyOF8Z+BeIwOIofupwDXdpSIa\n6SMlQGS35+E9yk4iuMZHSTQnUwIfGwC6WIjZxcw+UYEgW1chaLgr8wPQ4LNYBgB1\n3LDI52i6IV3RK5DJDCTB2Q==\n-----END PRIVATE KEY-----\n",
//   "client_email": "firebase-adminsdk-s27rj@react-chat-app-ea257.iam.gserviceaccount.com",
//   "client_id": "102576837298492861803",
//   "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//   "token_uri": "https://oauth2.googleapis.com/token",
//   "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//   "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-s27rj%40react-chat-app-ea257.iam.gserviceaccount.com",
//   "universe_domain": "googleapis.com"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };