# OL SOFTWARE: React Native

![](https://github.com/miguelzabalaf/OlSoftwareTestReactNative/blob/main/assets/images/cover.png)

I hope and exceed your expectations. This react native(0.71.6) project based on MVVM.

## Run this project

1. Install all dependencies:

```sh
yarn install
```

2. Install pods:

```sh
yarn pod:install
```

3. Run metro in other terminal tap (Optional):

```sh
yarn start
```

1. Run in iOS simulator:

```sh
yarn ios
```

5. Run in Android simulator:

```sh
yarn android
```

If you have any problem, these're my actual global versions:

- node: v18.15.0
- yarn: 1.22.19
- metro: v0.73.9

Other commands:

1. Gradlew clean:

```sh
yarn android:clean
```

2. Generate APK:

```sh
yarn android:build:apk
```

3. Run tests:

```sh
yarn test
```

## Folders

| Name                               | Description                                                                                                                                                                                    |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `components`, `layouts`, `screens` | Contain all archives related with the UI components his logic, like interfaces, controllers, styles etc.                                                                                       |
| `navigation`                       | This folder contains all about the navigation in the app, constants, interfaces, architectures, definitions and more.                                                                          |
| `config`                           | In this folder you can set any configuration (global) for this app, in my case, i set the interceptor configuration to intercept all petitions and set configurations like timeout and headers |
| `redux`                            | You can see all about: constants, types, interfaces, store, reducers and more related with redux configuration                                                                                 |

## Libraries

| Name                                        | Documentation                                                | Description                                                                                                                                                                                                                      |
| ------------------------------------------- | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `react-navigation`                          | https://reactnavigation.org/                                 | It's a [Recomended library](https://reactnative.directory/?search=react-navigation) by react native to manage native navigations, see preferences of navigation by react native [here](https://reactnative.dev/docs/navigation). |
| `react-redux`                               | https://react-redux.js.org/introduction/getting-started      | It's my preferred library to manage all global data of my application, based on [Redux](https://redux.js.org/).                                                                                                                  |
| `redux-persist`                             | https://github.com/rt2zz/redux-persist                       | All redux developer needs know about this library, this library help us to persist all o specific data in our local storage (Mobile and Web).                                                                                    |
| `@react-native-async-storage/async-storage` | https://react-native-async-storage.github.io/async-storage/  | It's a library to manage Data storage of my device (iOS/Android). The principal skill is your persistent storage, and i use that hability for my **persistConfig**.                                                              |
| `redux-immutable-state-invariant`           | https://github.com/leoasis/redux-immutable-state-invariant   | It's a development tool (middleware of my store) , thats spits an error on you when you try to mutate your state either inside a dispatch or between dispatches.                                                                 |
| `@react-native-community/netinfo`           | https://github.com/react-native-netinfo/react-native-netinfo | With this library i was subscribed to my conection information and show a banner if i didn't have conection.                                                                                                                     |
| `axios`                                     | https://axios-http.com/docs/intro                            | It's my preferred library to make HTTP request.                                                                                                                                                                                  |
| `lodash`                                    | https://lodash.com/                                          | It's a utility library of Javascript with a good performance.                                                                                                                                                                    |
| `react-native-size-matters`                 | https://github.com/nirsky/react-native-size-matters          | It's a simple tooling to make your scaling a whole lot easier (All styles in this app was created with this library)                                                                                                             |
| `react-native-svg`                          | https://www.npmjs.com/package/react-native-svg               | Used by adapt SVG images to create a custom components (Of icons)                                                                                                                                                                |
