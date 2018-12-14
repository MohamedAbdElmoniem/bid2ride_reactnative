import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  buttonGreen: {
    height: 45,
    borderRadius: 25,
    marginHorizontal: Metrics.roundedButtonMarginToBeCentered,
    marginVertical: Metrics.baseMargin,
    backgroundColor: Colors.roundedGreenButton,
    justifyContent: 'center'
  },
  buttonOrange: {
    height: 45,
    borderRadius: 25,
    marginHorizontal: Metrics.roundedButtonMarginToBeCentered,
    marginVertical: Metrics.baseMargin,
    backgroundColor: Colors.roundedOrangeButton,
    justifyContent: 'center'
  },
  buttonText: {
    color: Colors.snow,
    textAlign: 'center',
    fontSize: Fonts.size.medium,
    marginVertical: Metrics.baseMargin
  }
})
