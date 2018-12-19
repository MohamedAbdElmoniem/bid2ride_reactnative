import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'
import { bold } from 'ansi-colors';
import colors from '../../Themes/Colors';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    backgroundColor: "white",
    flex: 1
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
    margin: 20,
    flexWrap: 'wrap',
    fontSize: Fonts.size.medium,
    marginVertical: Metrics.baseMarginForText,
    fontWeight: '600'
  },
  marginBottom: {
    marginBottom: 50
  },
  textContainer: { marginTop: 40 },
  fixedFooterStyle: { position: 'absolute', left: 0, right: 0, bottom: 0 },
  verificationTextInput: { height: 40, textAlign: 'center', borderBottomColor: 'black', borderBottomWidth: 0.5, marginRight: 40, marginLeft: 40, marginTop: 20 },
  buttonText: {
    color: Colors.roundedOrangeButton,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: Fonts.size.small,
    marginTop: Metrics.meduimMargin
  }, spinnerTextStyle: {
    color: '#FFF'
  },
  textNavigate: {
    marginTop: 35,
    fontWeight: 'bold'

  },
  buttonOrange: {
    backgroundColor: colors.roundedOrangeButton,
    marginRight: "22%",
    marginLeft: "22%",
    alignItems: 'center',
    marginTop: "15%"
  },
  fontColorWhite: {
    color: "white",
    padding: 18
  },
  centeredTextTitle: {
    color: Colors.black,
    textAlign: 'center',
    margin: 20,
    flexWrap: 'wrap',
    fontSize: Fonts.size.h5,
    marginVertical: 7,
    fontWeight: '400',
    marginBottom: 10
  },
  marginTopToView: {
    marginTop: 20
  },

  centerCreditCard:{
    alignItems:'center',

  },
  cameraStyle:{
    borderRadius:10,
    margin:15,
    width:50,
    height:50
  }

})
