import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'
import colors from '../../Themes/Colors';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    backgroundColor: "white",
    flex: 0.65
  },
  logo: {
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  },
  centeredText: {
    color: Colors.gray,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: Fonts.size.medium,
    marginVertical: Metrics.baseMarginForText
  },
  marginBottom: {
    marginBottom: 50
  },
  fixedFooterStyle: { position: 'absolute', left: 0, right: 0, bottom: 0 },
  mainInput: {
    height: 40, borderBottomColor: 'black', borderBottomWidth: 0.5,
    marginTop: 70,
    marginRight: 40,marginLeft:40,marginBottom:20 
  },
  otherInputs: { height: 40, borderBottomColor: 'black', borderBottomWidth: 0.5, marginRight: 40,marginLeft:40,marginBottom:20 },
  buttonText: {
    color: Colors.roundedOrangeButton,
    textAlign: 'center',
    fontSize: Fonts.size.small,
    marginVertical: Metrics.meduimMargin
  }, spinnerTextStyle: {
    color: '#FFF'
  },
  blackText:{
    color:"black",
    textAlign:'center',
    fontSize: Fonts.size.small,
    marginVertical: Metrics.meduimMargin
  }
})
