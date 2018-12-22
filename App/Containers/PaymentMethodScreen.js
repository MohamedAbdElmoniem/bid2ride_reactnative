import React, { Component } from 'react'
import { ScrollView, Text, View, KeyboardAvoidingView, TextInput, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import FullButton from "../Components/FullButton";
import { LiteCreditCardInput } from "react-native-credit-card-input";

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/PaymentMethodScreenStyle'

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

    }
  }

  handleBecomeADriver = () => {
    const {navigation} = this.props;
    navigation.navigate('TermsScreen')

  }

  _onChangeCreditCard = () => {

  }

  handleNavigateToAddCardScreen = () => {
    const {navigation} = this.props;
    navigation.navigate('CardDetailsScreen')
  }

  render() {
    return (
      <View style={styles.container}>
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
              requiresCVC={false}
              placeholders={{ number: "4242 4242 4242 4242" }}
              onChange={this._onChangeCreditCard} />
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
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentMethodScreen)
