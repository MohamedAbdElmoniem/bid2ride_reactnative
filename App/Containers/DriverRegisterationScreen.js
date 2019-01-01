import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View, TextInput } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import FullButton from "../Components/FullButton";
import { text as CheckrText } from "../Config/DriverRegisterationText";
// Styles
import styles from './Styles/DriverRegisterationScreenStyle'
import Picker from 'react-native-picker';
import { states } from "../Config/USstates";
class DriverRegisterationScreen extends Component {

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
    // social security number
    // driver License number
    // driver License issuing state
    this.state = {
      SSN: '111-11-2001',
      DLN: 'F1112001',
      DLIS: 'CA'

    }
  }

  handleOpenStatesPicker = () => {
    Picker.init({
      pickerData: states.map(val => val.abbreviation),
      selectedValue: [0],
      onPickerSelect: data => {
        this.setState({ DLIS: data[0] }, () => {
          Picker.hide();
        })
      }
    });
    Picker.show();
  }


  componentWillReceiveProps(newProps) {

  }

  handleNavigateToFcra = () => {
    const { navigation } = this.props;
    navigation.navigate('FcraScreen')
  }


  render() {
    const { SSN, DLIS, DLN } = this.state
    const disableButton = !SSN && !DLIS && !DLN

    return (
      <View style={styles.container}>
        <View style={{ flex: 0.9, flexDirection: 'column' }}>
          <KeyboardAvoidingView behavior='position'>
            <View style={{ alignItems: "center", margin: 15 }}>
              <Text style={{ fontSize: 15, color: 'black' }}>BACKGROUND CHECK</Text>
            </View>
            <TextInput clearButtonMode='while-editing'
              style={styles.mainInput} placeholder="Social Security Number" value={this.state.SSN} onChangeText={(SSN) => {
                this.setState({ SSN })
              }} />
            <TextInput clearButtonMode='while-editing'
              style={styles.mainInput} placeholder="Driver License Number" value={this.state.DLN} onChangeText={(DLN) => {
                this.setState({ DLN })
              }} />
            <TextInput clearButtonMode='while-editing'
              onFocus={() => {
                this.handleOpenStatesPicker()
              }}
              style={styles.mainInput} placeholder="Driver License Issuing State" value={this.state.DLIS} onChangeText={(DLIS) => {
                this.setState({ DLIS })
              }} />
            <Text style={{ flexWrap: 'wrap', color: 'black', margin: 15 }}>{CheckrText}</Text>
          </KeyboardAvoidingView>
        </View>
        <View style={{ flex: 0.1 }}>
          <FullButton text="NEXT" disabled={disableButton} onPress={() => {
            this.handleNavigateToFcra()
          }} />
        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(DriverRegisterationScreen)
