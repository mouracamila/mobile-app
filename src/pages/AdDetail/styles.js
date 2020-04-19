import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: Constants.statusBarHeight + 5,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#518F57",
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: 10,
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

  sellerInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },

  sellerNameCity: {
    flexDirection: "column",
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

  detailsButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  detailsButtonText: {
    color: "#737380",
    fontSize: 15,
    fontWeight: "bold",
    marginVertical: 6,
  },
});
