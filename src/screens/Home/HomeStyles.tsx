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
  pokemonCard: {
    width:120,
    height: 120,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: 'yellow',
    backgroundColor: '#2e67b2',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
  },

  pokemonName: {
    width: '100%',
    textAlign: 'center',
    fontSize: 14,
    color: '#ffffff',
    textTransform: 'uppercase'
  },

  pokemonImage: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },


});