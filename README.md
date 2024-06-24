# React Native Vehicle Tracker App

This is a React Native application for tracking vehicle locations using Google Pub/Sub.

## Installation

To run this application on your local machine, follow these steps:

### Prerequisites

- Node.js (v20.x LTS recommended)
- npm (v10.x or newer) or Yarn (v1.22 or newer)
- JDK (Java Development Kit) 17
- Android Studio with Android SDK installed (for Android development)
- Xcode (for iOS development, Mac only)

### Setting Up

1. **Clone the repository:**

   ```bash
   git clone https://github.com/irfan555/vehicle-tracking-mobile.git
   cd vehicle-tracker-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up Google Pub/Sub Configuration:**

   - Obtain your Google Cloud Platform credentials and configure them in your project.

4. **Configure Android Studio:**

   - Open Android Studio and ensure that the Android SDK is correctly installed and configured.

5. **Start Android Emulator:**

   - Open Android Studio and start an Android emulator from the AVD Manager.

6. **Run the application:**

   - Start Metro Bundler in a terminal:

     ```bash
     npx react-native start
     ```

   - In a separate terminal, run the application on the Android emulator:

     ```bash
     npx react-native run-android
     ```

   - For iOS, run:

     ```bash
     npx react-native run-ios
     ```

### Additional Configuration

- **Google Pub/Sub Integration:**
  - Configure the Pub/Sub endpoint and credentials in the application according to your Google Cloud setup.

- **Monitoring Network Requests:**
  - Use React Native Debugger or other network monitoring tools to inspect requests made by the app.

## Folder Structure

```
├── android/           # Android native code and configuration
├── ios/               # iOS native code and configuration
├── src/               # React Native source code
│   ├── components/    # Reusable UI components
│   ├── screens/       # Application screens
│   ├── services/      # Services for API integration, e.g., Google Pub/Sub
│   ├── utils/         # Utility functions
│   ├── App.js         # Root component
│   └── ...            # Other application files
└── README.md          # This file
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize this README file further based on the specifics of your React Native application, including additional details about features, troubleshooting tips, or deployment instructions.
