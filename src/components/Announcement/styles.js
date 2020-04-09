import { StyleSheet } from "react-native";
// import Constants from "expo-constants";

export default StyleSheet.create({
  announcement: {
    borderRadius: 6,
    backgroundColor: "#FFF",
    marginBottom: 5,
    marginTop: 5,
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
    fontSize: 18,
    color: "#41414d",
    fontWeight: "bold",
  },

  announcementTime: {
    fontSize: 12,
    marginBottom: 8,
    color: "#bbccb8",
  },

  announcementDescription: {
    fontSize: 16,
    color: "#737380",
  },

  announcementHowMuch: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginVertical: 8,
  },

  announcementHowMuchProperty: {
    color: "#737380",
  },

  announcementHowMuchValue: {
    color: "#737380",
  },

  announcementHowMuchBy: {
    color: "#737380",
    marginRight: 6,
  },

  announcemenTags: {
    fontSize: 12,
    paddingTop: 8,
    borderTopColor: "#518F57",
    borderTopWidth: StyleSheet.hairlineWidth,
    color: "#737380",
    fontWeight: "bold",
  },
});
