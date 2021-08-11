
# react-native-app-name

## Getting started

`$ npm install react-native-app-name --save`

### Mostly automatic installation

`$ react-native link react-native-app-name`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-app-name` and add `RNAppName.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNAppName.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.quenice.apmtest.RNAppNamePackage;` to the imports at the top of the file
  - Add `new RNAppNamePackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-app-name'
  	project(':react-native-app-name').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-app-name/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-app-name')
  	```


## Usage
```javascript
import RNAppName from 'react-native-app-name';

// TODO: What to do with the module?
RNAppName;
```
  