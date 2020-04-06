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
  },

  announcement: {
    borderRadius: 8,
    backgroundColor: "#FFF",
    marginBottom: 5,
    marginTop: 24,
  },

  announcementContent: {
    padding: 10,
  },

  announcementImg: {
    width: "100%",
    height: "auto",
    aspectRatio: 3 / 2,
  },

  announcementProduct: {
    fontSize: 16,
    color: "#41414d",
    fontWeight: "bold",
    marginVertical: 8,
  },

  announcementDescription: {
    fontSize: 15,
    color: "#737380",
  },

  announcementHowMuch: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginVertical: 8,
  },

  announcementHowMuchProperty: {
    fontSize: 15,
    color: "#737380",
  },

  announcementHowMuchValue: {
    fontSize: 15,
    color: "#737380",
  },

  announcementHowMuchBy: {
    fontSize: 15,
    color: "#737380",
    marginRight: 6,
  },

  announcemenTags: {
    fontSize: 15,
    paddingTop: 8,
    borderTopColor: "#737380",
    borderTopWidth: StyleSheet.hairlineWidth,
  },

  contactBox: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#FFF",
    marginBottom: 2,
  },

  localDescription: {
    fontSize: 15,
    color: "#737380",
  },

  actions: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  action: {
    backgroundColor: "#518F57",
    borderRadius: 8,
    height: 45,
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
