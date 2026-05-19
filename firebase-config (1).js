// ╔══════════════════════════════════════════════════════════════╗
// ║   ALKHIDMAT FOUNDATION — FIREBASE CONFIGURATION             ║
// ║   Replace the values below with your Firebase project        ║
// ║   credentials from https://console.firebase.google.com      ║
// ╚══════════════════════════════════════════════════════════════╝

const AKF_FIREBASE_CONFIG = {
  apiKey: "AIzaSyBznpvsRiTsEgkhTfrRUA_QSYERgUx8C1U",
  authDomain: "alkhidmat-islamabad.firebaseapp.com",
  projectId: "alkhidmat-islamabad",
  storageBucket: "alkhidmat-islamabad.firebasestorage.app",
  messagingSenderId: "547717382330",
  appId: "1:547717382330:web:cc4a87326c747c86f4c283"
};

// ── ROLE DEFINITIONS ─────────────────────────────────────────
// super_admin : full access including user management & audit logs
// staff       : register, process, receipts — no user management
const AKF_ROLES = {
  SUPER_ADMIN: 'super_admin',
  STAFF:       'staff'
};
