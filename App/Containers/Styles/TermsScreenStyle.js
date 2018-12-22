import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'
import { bold } from 'ansi-colors';
import colors from '../../Themes/Colors';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    backgroundColor: "white",
    flex: 0.9
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
    margin:20,
    flexWrap:'wrap',
    fontSize: Fonts.size.medium,
    marginVertical: Metrics.baseMarginForText,
    fontWeight: '600'
  },
  marginBottom: {
    marginBottom: 50
  },
  textContainer:{marginTop:40},
  fixedFooterStyle: { position: 'absolute', left: 0, right: 0, bottom: 0 },
  verificationTextInput: { height: 40, textAlign: 'center', borderBottomColor: 'black', borderBottomWidth: 0.5, marginRight: 40,marginLeft: 40 ,marginTop:20},
  buttonText: {
    color: Colors.roundedOrangeButton,
    textAlign: 'center',
    fontSize: Fonts.size.small,
    marginVertical: Metrics.meduimMargin
  }, spinnerTextStyle: {
    color: '#FFF'
  },
  textNavigate:{
    marginTop: 35,
    fontWeight: 'bold'

  },
  buttonContainer:{
    flex:0.1,
    flexDirection:'row',
    backgroundColor:colors.roundedOrangeButton
  }
})
