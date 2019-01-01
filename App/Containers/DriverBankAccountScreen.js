import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View, TouchableOpacity, TextInput } from 'react-native'
import { connect } from 'react-redux'
import UserAuthenitcationActions, { UserAuthenticationSelectors } from '../Redux/UserAuthenitcationRedux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { checkBoxTextDisclosure } from "../Config/DriverRegisterationText";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import qs from 'qs';
import Axios from 'axios';
// Styles
import styles from './Styles/DriverBankAccountScreenStyle'
import PaymentsActions, { PaymentsSelectors } from "../Redux/PaymentsRedux";

class DriverBankAccountScreen extends Component {

  static navigationOptions = {
    title: 'Driver Registeration',
    headerStyle: {
      backgroundColor: '#f2a758',
    },
    headerBackTitle: null,
    backTitle: null,
    headerTintColor: '#fff',
    headerTitleStyle: {
    }
  }


  constructor(props) {
    super(props);
    this.state = {
      account_number: '000123456789',
      routing_number: '110000000',
      country: 'US'

    }
  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {

    if (!this.props.stripeTokenDriver && nextProps.stripeTokenDriver) {
      this.props.savePaymentsDriverRequest({
        "stripe_token": nextProps.stripeTokenDriver
      })
    }
  }

  handleRegisterDriverBankAccount = () => {
    const data = {
      "bank_account[account_holder_type]": 'individual',
      "bank_account[account_number]": this.state.account_number.toString(),
      "bank_account[country]": this.state.country.toString(),
      "bank_account[routing_number]": this.state.routing_number.toString()
    }
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
    const { account_number, country, routing_number } = this.state;


    return (
      <View style={styles.container}>
        <View style={{ flex: 0.9, flexDirection: 'column', margin: 15 }}>
          <View style={{ alignItems: 'center', marginBottom: 15, marginTop: 10 }}>
            <Text style={{ fontSize: 20, color: "black" }}>BANK ACCOUNT DETAIL</Text>
          </View>
          <KeyboardAvoidingView behavior='position'>
            <View>
              <TextInput placeholder="Account Number" value={account_number} onChangeText={(account_number) => { this.setState({ account_number }) }} style={styles.textInputStyle} />
            </View>
            <View>
              <TextInput placeholder="Routing Number" value={routing_number} onChangeText={(routing_number) => { this.setState({ routing_number }) }} style={styles.textInputStyle} />
            </View>
            <View>
              <TextInput placeholder="Country" value={country} onChangeText={(country) => { this.setState({ country }) }} style={styles.textInputStyle} />
            </View>
          </KeyboardAvoidingView>
        </View>
        {account_number && routing_number && country ? <View style={{ flex: 0.1 }}>
          <TouchableOpacity style={styles.nextButtonActiveStyle} onPress={() => {
            this.handleRegisterDriverBankAccount()
          }}>
            <Text style={{ color: 'white', fontSize: 15 }}>NEXT</Text>
          </TouchableOpacity>
        </View> : <View style={{ flex: 0.1 }}>
            <TouchableOpacity style={styles.nextButtonInActiveStyle}>
              <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>NEXT</Text>
            </TouchableOpacity>
          </View>}

      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    stripeTokenDriver: PaymentsSelectors.stripeTokenDriver(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveStripeToken: (id) => dispatch(PaymentsActions.saveStripeTokenForPaymentsDriver(id)),
    savePaymentsDriverRequest: (stripetoken) => dispatch(UserAuthenitcationActions.savePaymentsDriverRequest(stripetoken))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DriverBankAccountScreen)
