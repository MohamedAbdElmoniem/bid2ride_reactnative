import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../Themes/'

export default StyleSheet.create({
  buttonActive: {
    marginVertical: 5,
    borderTopColor: Colors.roundedGreenButton,
    borderBottomColor: Colors.roundedGreenButton,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: Colors.roundedGreenButton
  },
  buttonDisabled: {
    marginVertical: 5,
    borderTopColor: Colors.disabledGreen,
    borderBottomColor: Colors.disabledGreen,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: Colors.disabledGreen
  },
  buttonText: {
    margin: 18,
    textAlign: 'center',
    color: Colors.snow,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.bold
  }
})
