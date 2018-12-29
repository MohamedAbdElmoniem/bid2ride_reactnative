import { createStackNavigator, createAppContainer } from 'react-navigation'
import DriverRegisterationScreen from '../Containers/DriverRegisterationScreen'
import BackgroundCheckScreen from '../Containers/BackgroundCheckScreen'
import FcraScreen from '../Containers/FcraScreen'
import PassengerHomeScreen from '../Containers/PassengerHomeScreen'
import DriverFormScreen from '../Containers/DriverFormScreen'
import TermsScreen from '../Containers/TermsScreen'
import CardDetailsScreen from '../Containers/CardDetailsScreen'
import PaymentMethodScreen from '../Containers/PaymentMethodScreen'
import UpdatePhoneScreen from '../Containers/UpdatePhoneScreen'
import RequestVerificationScreen from '../Containers/RequestVerificationScreen'
import ForgotPasswordScreen from '../Containers/ForgotPasswordScreen'
import SignupScreen from '../Containers/SignupScreen'
import LoginScreen from '../Containers/LoginScreen'
import LaunchAppScreen from '../Containers/LaunchAppScreen'


import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  DriverRegisterationScreen: { screen: DriverRegisterationScreen },
  BackgroundCheckScreen: { screen: BackgroundCheckScreen },
  FcraScreen: { screen: FcraScreen },
  PassengerHomeScreen: { screen: PassengerHomeScreen },
  DriverFormScreen: { screen: DriverFormScreen },
  TermsScreen: { screen: TermsScreen },
  CardDetailsScreen: { screen: CardDetailsScreen },
  PaymentMethodScreen: { screen: PaymentMethodScreen },
  UpdatePhoneScreen: { screen: UpdatePhoneScreen },
  RequestVerificationScreen: { screen: RequestVerificationScreen },
  ForgotPasswordScreen: { screen: ForgotPasswordScreen },
  SignupScreen: { screen: SignupScreen },
  LoginScreen: { screen: LoginScreen },
  LaunchAppScreen: {
    screen: LaunchAppScreen, navigationOptions: {
      header: null,
      backTitle: null,
      headerBackTitle: null
    }
  },
}, {
    // Default config for all screens
    initialRouteName: 'LaunchAppScreen',
    navigationOptions: {
      headerStyle: styles.header,
      backTitle: null,
      headerBackTitle: null
    }
  })

export default createAppContainer(PrimaryNav)
