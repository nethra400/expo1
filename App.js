import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  Alert,
  Platform,
} from "react-native";
import ViewImageScreen from "../Screens/ViewImageScreen";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
// class App extends Component {
//   render() {
//     console.log("Nethra");
//     let name = "Nethra";
//     return (
//       <View style={styles.container}>
//         <Text>{name}basic app</Text>
//         <StatusBar style="auto" />
//       </View>
//     );
//   }
// }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
// export default App;

// export default function App() {
//   const handlePress = () => console.log('Text Pressed');
//   return (
//     <SafeAreaView style={styles.container}>
//       {/* <View style={{backgroundColor: 'red', marginTop: 30 }}> */}
//       {/* <Text numberOfLines={1} onPress={()=> console.log('Text Pressed')}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text> */}
//       <Text numberOfLines={1} style={{fontSize: 20}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
//       <TouchableOpacity
//         onPress={handlePress}
//       >
//       <Image
//         blurRadius={1}
//         resizeMode='contain'
//         fadeDuration={1000}
//         // source={
//         //   require('./assets/icon.png')
//         // }
//         source={{
//           width: 400,
//           height: 400,
//           uri: "https://picsum.photos/seed/picsum/200/300"
//         }}
//       />
//       </TouchableOpacity >
//       {/* <Button
//         color="orange"
//         title="Click Me"
//         onPress={()=>alert('Button Tapped')}
//       />  */}
//       {/* <Button
//         color="orange"
//         title="Click Me"
//         onPress={()=>Alert.alert('Button Tapped')}
//       />  */}
//       <Button
//         color="orange"
//         title="Click Me"
//         onPress={()=>
//           Alert.alert('Do You want to Save', 'Description', [
//             {text: 'Yes', onPress: () => console.log('Yes')},
//             {text: 'No', onPress: () => console.log('No')},
//           ])}
//       />
//       <StatusBar style="auto" />
//       {/* </View> */}
//     </SafeAreaView>
//   );
// }
// // Safe Area View is only for iOS

// Class Component - export default App at the end
// class App extends Component {
//   render() {
//     console.log('Ramesh');
//     let name = 'Ramesh';
//     // let x;
//     // x.toString();
//     return (

//           <View style={styles.container}>
//             <Text>{name} basic app</Text>
//             <StatusBar style="auto" />
//           </View>
//     )
//   }
// }
// const containerStyle = {backgroundColor: 'orange'}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: Platform.OS === "android"? 20: 0,
//     backgroundColor: 'dodgerblue',
// alignItems: 'center',
// justifyContent: 'center',
//   },

// });

//  export default App;

// Functional component
// export default function App() {
//   return (
//     <View style={{backgroundColor: '#fff', flex:1, flexDirection: 'row'}}>
//       <View style={{backgroundColor: 'dodgerblue', width:100, height:100}} />
//       <View style={{backgroundColor: 'gold', width:100, height:100}} />
//       <View style={{backgroundColor: 'tomato', width:100, height:100}} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#aaabbb',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
// });
export default function App(){
  return(
    <ViewImageScreen/>
  )
}



