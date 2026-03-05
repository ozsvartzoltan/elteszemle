# Firebase Setup Guide for ELTE Szemle

## 📋 Overview

Your application now supports dual data sources:
- **2025**: Data from `const.js` (static)
- **2026+**: Data from Firebase (dynamic, editable via admin panel)

## 🚀 Setup Steps

### 1. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a new project"
3. Name it "elteszemle" or similar
4. Enable Google Analytics (optional)
5. Wait for project creation

### 2. Register Web App

1. In Firebase Console, click the Web icon (</> symbol)
2. Register app as "elteszemle-web"
3. Copy the Firebase config
4. Don't click "Continue to console" yet

### 3. Configure Environment Variables

1. Create `.env` file in project root (copy from `.env.example`)
2. Fill in your Firebase config:

```bash
REACT_APP_FIREBASE_API_KEY=your_value
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

3. Restart your development server

### 4. Set Up Firestore Database

1. In Firebase Console, go to "Firestore Database"
2. Click "Create database"
3. Start in **Test mode** (for development)
4. Choose closest region
5. Create database

### 5. Set Up Authentication

1. In Firebase Console, go to "Authentication"
2. Click "Get started"
3. Enable "Email/Password" provider
4. Go to "Users" tab
5. Click "Add user"
6. Create admin user with email and password

### 6. Create Firestore Collections

Create the following collection structure:

```
years/
  ├── 2026/
  │   ├── movies/
  │   │   └── (documents will be created via admin panel)
  │   └── jury/
  │       └── (documents will be created via admin panel)
```

**To create manually:**
1. In Firestore, click "Start collection"
2. Name it "years"
3. Add document with ID "2026"
4. In that document, add fields (or just create it empty)
5. Add subcollections:
   - "movies"
   - "jury"

### 7. Set Firestore Rules

Replace default rules with:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Only authenticated users can read/write
    match /years/{year}/movies/{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    match /years/{year}/jury/{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## 🔑 Admin Panel Access

### URL
```
https://yourdomain.com/admin
```

### Features
- Login with email/password
- Switch between years (2025 = const.js, 2026+ = Firebase)
- Manage movies (add, edit, delete)
- Manage jury members (add, edit, delete)

### Movie Fields
- Title
- Director
- Category
- Duration (minutes)
- Image URL
- Description

### Jury Member Fields
- Name
- Title (e.g., "Operator", "Director")
- Image URL
- Description

## 🌐 Website Display

### Year Selector
The website now shows a year selector at the top:
- Click "2025" to view 2025 data (from const.js)
- Click "2026" (or current year) to view Firebase data

### Data Flow
```
Website → Check selected year
  ├─ If 2025 → Load from const.js
  └─ If 2026+ → Load from Firebase (via DataContext)
```

## 🔐 Security Notes

### Development
- Using "Test mode" allows easier development
- Anyone can read data, only authenticated users can write

### Production
- Change Firestore rules to restrict read access if needed
- Set up proper authentication
- Enable HTTPS
- Set proper CORS rules

## 📦 Database Structure

### Movies Collection
```json
{
  "id": "auto-generated",
  "title": "Film Title",
  "director": "Director Name",
  "category": "Category",
  "duration": "120",
  "image": "https://...",
  "description": "Film description",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

### Jury Collection
```json
{
  "id": "auto-generated",
  "name": "Full Name",
  "title": "Position/Title",
  "image": "https://...",
  "description": "Biography",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

## 🐛 Troubleshooting

### "Firebase Config Missing"
- Make sure `.env` file exists with all variables
- Restart development server after creating `.env`

### "Permission Denied" errors
- Check Firestore security rules
- Make sure collection structure is correct
- Ensure authenticated user has write permissions

### "No data showing"
- Check DataContext is wrapping your app
- Make sure year is set correctly
- Check browser console for errors

## 🚀 Deployment

When deploying to production:

1. Set environment variables in your hosting platform
2. Update Firestore security rules for production
3. Change Firestore to production mode
4. Enable proper authentication
5. Test admin panel on staging

## 📚 Additional Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firestore Security Rules](https://firebase.google.com/docs/firestore/security/start)
- [Firebase Authentication](https://firebase.google.com/docs/auth)
