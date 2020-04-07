import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: Constants.statusBarHeight + 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#518F57",
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: 5,
  },

  sellerName: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 6,
  },

  sellerCity: {
    fontSize: 12,
    color: "#bbccb8",
  },

  sellerTags: {
    fontSize: 12,
    marginVertical: 5,
    borderTopColor: "#518F57",
    color: "#737380",
    fontWeight: "bold",
  },

  delivery: {
    marginVertical: 5,
  },

  deliveryText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 3,
  },

  delivery: {
    marginTop: 4,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  deliveryInformation: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  deliveryInformationDay: {
    color: "#737380",
  },

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
