# TNPS (TNPS Gate Access & Campus Management System)

TNPS is a React Native mobile application designed to streamline campus access control, digital ID verification, room bookings, and administrative operations. The app provides specialized user experiences for both **Students** and **Administrators** through a unified login portal.

---

## 🚀 Key Features

### 👨‍🎓 Student Portal
- **Dashboard**: Real-time status tracker (Inside/Outside Campus, Fee status, active pass summary).
- **Gate Passes**: Submit new gate pass requests and monitor active status.
- **Pass History**: Audit trail of all historical gate passes.
- **Attendance**: View check-in/check-out logs and monthly entry statistics.
- **Room Booking**: Reserve study spaces and discussion rooms.
- **Sick Leave**: Submit medical leave requests and track approval status.
- **Notifications**: Instant alerts for campus notices and gate activities.

### 🛡️ Admin Portal (SuperID Admin)
- **Todays Log**: Live monitor of all student movements through the gates.
- **Student Management**: Full directory containing student lists, hostel status, and onboarding forms for new students.
- **Activity & Analytics**:
  - Global campus metrics & analytics.
  - Active pass monitor and gate out logs.
  - Tracking of late-comers.
  - Verification of student complaints and announcements.
- **Barcode Scanner**: Integrated scanning tool to authenticate students at Hostel & Campus gates.
- **Sick Leave Manager**: Log sick requests, track medical cases, and update logs.
- **System Settings**: Access controls, feature toggles, user management, and set gate timing boundaries.

---

## 🛠️ Technology Stack

- **Core Framework**: React Native (TypeScript)
- **Navigation**: Customized State-driven Navigation mimicking Material Bottom Navigation Suite
- **Iconography**: React Native Vector Icons (`MaterialCommunityIcons`)
- **Embedded WebViews**: Custom, high-fidelity responsive HTML templates styled with Tailwind CSS, Plus Jakarta Sans, and glassmorphism UI components.

---

## 📂 Project Structure

```text
├── App.tsx             # Application Entry point & main navigation coordinator
├── screens/            # Native React Native Screen layouts
│   ├── LoginScreen.tsx          # Dual-role authentication gate
│   ├── DashboardScreen.tsx      # Main Student Dashboard
│   ├── AdminDashboardScreen.tsx # Multi-grid Admin Console
│   ├── WebViewScreen.tsx        # Wrapper to render embedded HTML template views
│   └── PlaceholderScreens.tsx   # Native views (Attendance, Rooms, Passes, etc.)
├── stitch_mobile_application_development/ # Rich interactive HTML templates for WebViews
│   ├── activity/       # Gate logs, reports, analytics & security notices
│   ├── barcode/        # Scanner simulator interfaces
│   ├── roombook/       # Room booking management
│   ├── setting/        # Admin settings, user management, feature controls
│   ├── sick/           # Sick leave forms and record lists
│   └── students/       # Student database & registration templates
├── package.json        # Node.js dependencies and scripts
└── tsconfig.json       # TypeScript configuration
```

---

## 🔐 Credentials for Testing

To log in and test different user roles, use the following credentials:

| Role | Username / Email | Password |
| :--- | :--- | :--- |
| **Student** | `student@gmail.com` | `student` |
| **Admin** | `admin@gmail.com` | `admin` |

---

## ⚙️ Getting Started

### Prerequisites
Make sure you have Node.js and the React Native CLI setup on your local machine.

### Installation
1. Clone the repository.
2. Install npm dependencies:
   ```bash
   npm install
   ```

### Running the App
1. **Start Metro Bundler**:
   ```bash
   npm start
   ```
2. **Run on Android**:
   ```bash
   npm run android
   ```
3. **Run on iOS** (macOS required):
   ```bash
   npx react-native run-ios
   ```
