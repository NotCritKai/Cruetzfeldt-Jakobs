import { Component } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from "react-native";

export default class App extends Component {
  state = {
    search: "",
  };

  render() {
    return (
      <View style={styles.container}>
        {/* Google Logo */}
        <View style={styles.google}>
          <Image
            source={{
              uri: "https://codehs.com/uploads/b61b04781980ec2d29f8083d531cc5f8",
            }}
            style={{ width: 250, height: 100 }}
          />
        </View>

        {/* Search Bar with Magnifying Glass Icon */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.textbox}
            onChangeText={(search) => this.setState({ search })}
            value={this.state.search}
          />
          <View style={styles.iconContainer}>
            <Image
              source={{
                uri: "https://codehs.com/uploads/55c6938d3d45ecfb8a32916545f27306",
              }}
              style={{ width: 30, height: 30 }}
            />
          </View>
        </View>

        {/* Search Button displaying dynamic search term */}
        <TouchableHighlight
          style={styles.searchButton}
          onPress={() => {
            alert("Searching for: " + this.state.search);
          }}
        >
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
    backgroundColor: "#ffffff",
  },
  google: {
    marginBottom: 30,
  },
  searchContainer: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 20,
    alignItems: "center",
  },
  textbox: {
    flex: 1,
    height: 48,
    borderColor: "#000000",
    borderWidth: 1,
    borderTopLeftRadius: 24,
    borderBottomLeftRadius: 24,
    paddingHorizontal: 20,
    fontSize: 16,
  },
  iconContainer: {
    height: 48,
    borderColor: "#000000",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopRightRadius: 24,
    borderBottomRightRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 10,
  },
  searchButton: {
    backgroundColor: "#4285F4",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
  },
  searchButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
