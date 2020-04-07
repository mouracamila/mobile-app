import { StyleSheet } from "react-native";

export default StyleSheet.create({
  contactBox: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#FFF",
    marginBottom: 2,
  },

  localDescription: {
    fontSize: 16,
    color: "#737380",
  },

  actions: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  action: {
    backgroundColor: "#518F57",
    borderRadius: 8,
    height: 40,
    width: "48%",
    justifyContent: "center",
    alignItems: "center",
  },

  actionText: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "bold",
  },
});
