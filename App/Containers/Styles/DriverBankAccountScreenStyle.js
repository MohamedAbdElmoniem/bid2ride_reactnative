import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  nextButtonActiveStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.roundedOrangeButton
  },
  nextButtonInActiveStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.disabledGreen
  },
  textInputStyle: {
    height: 40, borderBottomColor: 'black', borderBottomWidth: 0.5,marginBottom:15
  }
})
