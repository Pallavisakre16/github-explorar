# Welcome to Github explorer app 👋

This is an [Expo](https://expo.dev) project created with [create-expo-app](https://www.npmjs.com/package/create-expo-app).


## 📝 Introduction


Gitgub Explorer : it is an app to explore github repositories and deatils of repository. It is built using [React Native](https://reactnative.dev/) and [Expo](https://expo.dev/). The project aims to search github repositories easily and make them save.

## Get started

1. Install dependencies

   npm install

2. Start the app

   npx expo start (or) npm start (or) npm start -c

## ✨ Features

- search for repositories
- deatils of repositories
- make repositories favorite 



## Folder Structure 

📦 your-repo
├── 📁 assets          # Images, fonts, and other static resources
├── 📁 components      # Reusable components
├── 📁 constants
├── 📁 navigation      # Navigation setup (React Navigation)
├── 📁 screens
├── 📁 store     
├── 📁 utils           # Utility functions and helpers
├── App.js             # Entry point of the app
├── app.json           # Expo configuration
├── eas.json           # Expo configuration
├── package.json       # Project dependencies and scripts
└── README.md          # Project documentation

## api 

API_URL=https://api.github.com/search/repositories?q=


In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the *app* directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

bash
npm run reset-project


This command will move the starter code to the *app-example* directory and create a blank *app* directory where you can start developing.