import React, { Component } from 'react'
import { ScrollView, Text, View, KeyboardAvoidingView, TouchableOpacity, Platform, Dimensions, TextInput } from 'react-native'
import { connect } from 'react-redux'
import Switch from 'react-native-switch-pro'
import Colors from '../Themes/Colors';
import { states } from "../Config/USstates";
import Picker from 'react-native-picker';
import Modal from "react-native-modal";

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/DriverFormScreenStyle'
import UserAuthenitcationActions, { UserAuthenticationSelectors } from '../Redux/UserAuthenitcationRedux';
import colors from '../Themes/Colors';
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Platform.OS === "ios"
  ? Dimensions.get("window").height
  : require("react-native-extra-dimensions-android").get("REAL_WINDOW_HEIGHT");
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
      Zip: '',
      State: '',
      dob: '',
      plate_number: '',
      car_make: '',
      car_model: '',
      car_year: '',
      isModalVisible: false,
      searchedcar: ''
    }
  }

  componentDidMount() {
    this.props.getCarsRequest()
  }

  componentWillReceiveProps(nextProps) {

  }

  validateRegisterationForm = () => {

  }

  handleOpenStatesPicker = () => {
    Picker.init({
      pickerData: states,
      selectedValue: [0],
      onPickerSelect: data => {
        this.setState({ State: data[0] }, () => {
          Picker.hide();
        })
      }
    });
    Picker.show();
  }

  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Modal deviceWidth={deviceWidth}
          deviceHeight={deviceHeight} isVisible={this.state.isModalVisible}>
          <View style={{ flex: 1, backgroundColor: "white", flexDirection: 'column', marginTop: 20 }}>
            <View style={{ flex: 0.05, backgroundColor: colors.roundedOrangeButton, flexDirection: 'row' }}>
              <Text onPress={this._toggleModal} style={{ position: 'absolute', left: 0, marginLeft: 10, marginTop: 10, color: "white" }}>Cancel</Text>
            </View>
            <ScrollView style={{ flex: 0.9 }}>
              <View style={{ flex: 0.1, backgroundColor: 'gray' }}>
                <TextInput placeholder="Search" style={{margin:10,backgroundColor:"white",borderRadius:6,height:"50%"}} onChangeText={(searchedcar) => { this.setState({ searchedcar }) }} />
              </View>
              {this.props.CarsList && this.props.CarsList.map((car, index) => {
                return (
                    <Text style={{ position: 'absolute', left: 0, marginLeft: 10, marginTop: 10, color: "black" }}>{car.name}</Text>
                )
              })}
            </ScrollView>
          </View>
        </Modal>
        <ScrollView style={styles.container}>
          <KeyboardAvoidingView behavior='position'>
            <View style={styles.centered}>
              <Text style={styles.title}>APPLY TO BE A BID2RIDE DRIVER</Text>
            </View>
            <TouchableOpacity onPress={this._toggleModal}>
              <Text>Show Modal</Text>
            </TouchableOpacity>
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
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 0.5 }}>
                <TextInput
                  placeholder='State'
                  style={styles.mainInput}
                  onFocus={() => {
                    this.handleOpenStatesPicker()
                  }}
                  onChangeText={(State) => this.setState({ State }, () => {
                    this.validateRegisterationForm()
                  })}
                  value={this.state.State}
                  clearButtonMode='while-editing'
                />
              </View>
              <View style={{ flex: 0.5 }}>
                <TextInput
                  placeholder='Date of Birth'
                  style={styles.mainInput}
                  onChangeText={(dob) => this.setState({ dob }, () => {
                    this.validateRegisterationForm()
                  })}
                  value={this.state.dob}
                  clearButtonMode='while-editing'
                />
              </View>
            </View>
            <TextInput
              placeholder='Plate Number'
              style={styles.mainInput}
              onChangeText={(plate_number) => this.setState({ plate_number }, () => {
                this.validateRegisterationForm()
              })}
              value={this.state.plate_number}
              clearButtonMode='while-editing'
            />
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flex: 0.5 }}>
                <TextInput
                  placeholder='Car Make'
                  style={styles.mainInput}
                  onChangeText={(car_make) => this.setState({ car_make }, () => {
                    this.validateRegisterationForm()
                  })}
                  value={this.state.car_make}
                  clearButtonMode='while-editing'
                />
              </View>
              <View style={{ flex: 0.5 }}>
                <TextInput
                  placeholder='Car Model'
                  style={styles.mainInput}
                  onChangeText={(car_model) => this.setState({ car_model }, () => {
                    this.validateRegisterationForm()
                  })}
                  value={this.state.car_model}
                  clearButtonMode='while-editing'
                />
              </View>
            </View>
            <TextInput
              placeholder='Car Year of Registeration'
              style={styles.mainInput}
              onChangeText={(car_year) => this.setState({ car_year }, () => {
                this.validateRegisterationForm()
              })}
              value={this.state.car_year}
              clearButtonMode='while-editing'
            />
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
    CarsList: UserAuthenticationSelectors.carsList(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCarsRequest: () => dispatch(UserAuthenitcationActions.getCarsRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DriverFormScreen)
