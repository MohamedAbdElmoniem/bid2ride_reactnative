import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  logo: {
    marginTop: Metrics.doubleSection,
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
    fontSize: Fonts.size.small,
    marginVertical: Metrics.baseMarginForText
  },
  marginBottom:{
    marginBottom:50
  }
})
