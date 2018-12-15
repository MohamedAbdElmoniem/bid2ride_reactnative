import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
  container: {
    width: Dimensions.get("window").width, //for full screen
    height: Dimensions.get("window").height //for full screen
  },
  fixed: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    alignSelf: 'stretch',
    bottom: 0
  },
 scrollview: {
   backgroundColor: 'transparent',
   flex:1
 }
})
