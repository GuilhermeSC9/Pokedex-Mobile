import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
    width: "100%",
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
    backgroundColor: "#333339",
    borderBottomWidth: 1,
    borderColor: "#fff",
  },
  pokemonList: {
    // width: "100%"
    // marginTop: 20,
    flexWrap: "wrap",
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },



});