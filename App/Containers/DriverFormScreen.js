import React, { Component } from 'react'
import { ScrollView, Text, View, KeyboardAvoidingView, TouchableOpacity, TextInput } from 'react-native'
import { connect } from 'react-redux'
import Switch from 'react-native-switch-pro'
import Colors from '../Themes/Colors';

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/DriverFormScreenStyle'

class DriverFormScreen extends Component {

  static navigationOptions = {
    title: 'Driver Registeration',
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
      first_name: '',
      middle_name: '',
      last_name: '',
      address_one: '',
      address_two: '',
      city: '',
      Zip: ''
    }
  }

  validateRegisterationForm = () => {

  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>

        <ScrollView style={styles.container}>
          <KeyboardAvoidingView behavior='position'>
            <View style={styles.centered}>
              <Text style={styles.title}>APPLY TO BE A BID2RIDE DRIVER</Text>
            </View>
            <TextInput
              placeholder='First name'
              style={styles.mainInput}
              onChangeText={(first_name) => this.setState({ first_name }, () => {
                this.validateRegisterationForm()
              })}
              value={this.state.first_name}
              clearButtonMode='while-editing'
            />
            <TextInput
              placeholder='Middle name'
              style={styles.mainInput}
              onChangeText={(middle_name) => this.setState({ middle_name }, () => {
                this.validateRegisterationForm()
              })}
              value={this.state.middle_name}
              clearButtonMode='while-editing'
            />
            <View style={{ margin: 15, flex: 1, flexDirection: 'row' }}>
              <Switch width={50} height={30} backgroundActive={Colors.roundedOrangeButton} />
              <Text>I do not have a middle name</Text>
            </View>
            <TextInput
              placeholder='Last name'
              style={styles.mainInput}
              onChangeText={(last_name) => this.setState({ last_name }, () => {
                this.validateRegisterationForm()
              })}
              value={this.state.last_name}
              clearButtonMode='while-editing'
            />
            <TextInput
              placeholder='Address Line 1'
              style={styles.mainInput}
              onChangeText={(address_one) => this.setState({ address_one }, () => {
                this.validateRegisterationForm()
              })}
              value={this.state.address_one}
              clearButtonMode='while-editing'
            />
            <TextInput
              placeholder='Address Line 2 (optional)'
              style={styles.mainInput}
              onChangeText={(address_two) => this.setState({ address_two }, () => {
                this.validateRegisterationForm()
              })}
              value={this.state.address_two}
              clearButtonMode='while-editing'
            />

            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 0.5 }}>
                <TextInput
                  placeholder='City'
                  style={styles.mainInput}
                  onChangeText={(city) => this.setState({ city }, () => {
                    this.validateRegisterationForm()
                  })}
                  value={this.state.city}
                  clearButtonMode='while-editing'
                />
              </View>
              <View style={{ flex: 0.5 }}>
                <TextInput
                  placeholder='Zip'
                  style={styles.mainInput}
                  onChangeText={(Zip) => this.setState({ Zip }, () => {
                    this.validateRegisterationForm()
                  })}
                  value={this.state.Zip}
                  clearButtonMode='while-editing'
                />
              </View>
            </View>

          </KeyboardAvoidingView>
        </ScrollView>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={{ fontSize: 15, color: "white", margin: 20, fontWeight: 'bold' }}>NEXT</Text>
        </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(DriverFormScreen)
