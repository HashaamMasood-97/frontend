import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Input from "../components/Input";
import AsyncStorage from "@react-native-community/async-storage";

class Address extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      address: "",
      contact: "",
      id: "",
    };

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeContact = this.onChangeContact.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
  }

  onChangeName(inputText) {
    this.setState({
      name: inputText,
    });
  }

  onChangeEmail(inputText) {
    this.setState({
      email: inputText,
    });
  }

  onChangeContact(inputText) {
    this.setState({
      contact: inputText,
    });
  }

  onChangeAddress(inputText) {
    this.setState({
      address: inputText,
    });
  }

  componentDidMount() {
    AsyncStorage.getItem("token").then((value) => {
      const data = JSON.parse(value);
      this.setState({ name: data.name });
      this.setState({ email: data.Email });
      this.setState({ contact: data.contact });
      this.setState({ address: data.address });
      this.setState({ id: data.id });
    });
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 1,
            paddingBottom: 15,
            paddingHorizontal: 15,
            marginTop: 20,
          }}
        >
          <KeyboardAwareScrollView>
            <Input
              label="Your full name"
              value={this.state.name}
              onChange={this.onChangeName}
            />
            <Input
              label="Address"
              value={this.state.address}
              onChange={this.onChangeAddress}
            />
            <Input
              label="Contact No."
              value={this.state.contact}
              onChange={this.onChangeContact}
            />
            <Input
              label="Email Address"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <Input label="City" value="Karachi" widthHalf={true} />
              <Input label="Country" value="Pakistan" widthHalf={true} />
            </View>
          </KeyboardAwareScrollView>

          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
            }}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() =>
                this.props.navigation.navigate("Payment", {
                  name: this.state.name,
                  address: this.state.address,
                  contact: this.state.contact,
                  email: this.state.email,
                  id: this.state.id,
                })
              }
              style={{
                backgroundColor: "#F08C4F",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 2,
                shadowOffset: { width: 1, height: 2 },
                shadowColor: "#000",
                shadowOpacity: 0.4,
                elevation: 4,
                paddingVertical: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "500",
                  color: "white",
                }}
              >
                Next Step
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Address;
