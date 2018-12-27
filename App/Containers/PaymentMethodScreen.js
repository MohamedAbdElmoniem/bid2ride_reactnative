import React, { Component } from 'react'
import { ScrollView, Text, View, KeyboardAvoidingView, TextInput, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import FullButton from "../Components/FullButton";
import { LiteCreditCardInput } from "react-native-credit-card-input";
import PaymentsActions, { PaymentsSelectors } from "../Redux/PaymentsRedux";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import qs from 'qs';
// Styles
import styles from './Styles/PaymentMethodScreenStyle'
import Axios from 'axios';

class PaymentMethodScreen extends Component {

  static navigationOptions = {
    title: 'Payment Method',
    headerStyle: {
      backgroundColor: '#f2a758',
    },
    backTitle: null,
    headerBackTitle: null,
    headerTintColor: '#fff',
    headerTitleStyle: {
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      cardDetails: {}
    }
  }

  componentWillReceiveProps(nextProps) {
    
    if (!this.props.stripeToken && nextProps.stripeToken) {
      this.props.finishPaymentsRequest({
        "stripe_token": nextProps.stripeToken
      })
    }
  }

  handleBecomeADriver = () => {
    const { navigation } = this.props;
    navigation.navigate('TermsScreen')

  }

  handleNavigateToAddCardScreen = () => {
    const { navigation } = this.props;
    navigation.navigate('CardDetailsScreen')
  }

  handleFinishPaymentsForPassenger = () => {

    const { values } = this.state.cardDetails;
    const expiryArray = values.expiry.split('/')
    const data = {
      'card[cvc]': values.cvc, 'card[exp_month]': expiryArray[0], 'card[exp_year]': expiryArray[1], 'card[number]': values.number,
      'muid': '8AD5DF29-1FB9-4EDE-8D13-278420969537'
    };
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'authorization': 'Bearer pk_test_4pfnzdIeS0dgsK8Jd0d1EXvw'
      },
      data: qs.stringify(data),
      url: "https://api.stripe.com/v1/tokens",
    }

    Axios(options).then((response) => {
      const { id } = response.data
      this.props.saveStripeToken(id)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 0.9 }}>
          <KeyboardAvoidingView behavior='position'>
            <TouchableOpacity onPress={() => {
              this.handleBecomeADriver()
            }}>
              <View style={styles.buttonOrange}>
                <Text style={styles.fontColorWhite}>BECOME A DRIVER</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.marginTopToView}>
              <Text style={styles.centeredText}> - Or -</Text>
            </View>
            <View>
              <Text style={styles.centeredTextTitle}>CONTINUE AS PASSENGER</Text>
            </View>
            <View>
              <Text style={styles.centeredText}>Please enter card number</Text>
            </View>
            <View>
              <LiteCreditCardInput invalidColor={"red"}
                placeholderColor={"gray"}
                placeholders={{ number: "4242 4242 4242 4242" }}
                onChange={(cardDetails) => { this.setState({ cardDetails }) }} />
            </View>
            <View>
              <Text style={styles.centeredText}>- Or -</Text>
            </View>
            <View>
              <Text style={styles.centeredText}>Scan your card</Text>
            </View>
            <TouchableOpacity style={styles.centered} onPress={() => {
              this.handleNavigateToAddCardScreen()
            }}>
              <Image style={styles.cameraStyle} source={require('../Images/cameralogo.png')} />
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
        <View style={{ flex: 0.1 }}>
          <FullButton text="Finish" disabled={!this.state.cardDetails.valid} onPress={() => {
            this.handleFinishPaymentsForPassenger()
          }} />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    stripeToken: PaymentsSelectors.stripeToken(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveStripeToken: (id) => dispatch(PaymentsActions.saveStripeTokenForPayments(id)),
    finishPaymentsRequest: (stripetoken) => dispatch(PaymentsActions.finishPaymentsRequest(stripetoken))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentMethodScreen)
