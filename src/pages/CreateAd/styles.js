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
    paddingBottom: 10,
  },

  apresentation: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#bbccb8",
    marginVertical: 10,
  },

  announcementImg: {
    width: "100%",
    height: "auto",
    aspectRatio: 3 / 2,
  },

  addPhoto: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#bbccb8",
    marginBottom: 5,
    padding: 5,
  },

  addPhotoText: {
    marginLeft: 6,
    color: "#ffff",
  },

  description: {
    marginVertical: 8,
    color: "#737380",
  },

  textInput: {
    width: "100%",
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: "#518F57",
    marginBottom: 10,
    borderRadius: 16,
  },

  textInputDescription: {
    width: "100%",
    height: "auto",
    padding: 10,
    borderWidth: 1,
    borderColor: "#518F57",
    marginBottom: 10,
    borderRadius: 16,
  },

  textInputValue: {
    width: "20%",
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: "#518F57",
    marginBottom: 10,
    borderRadius: 16,
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  action: {
    backgroundColor: "#bbccb8",
    borderRadius: 16,
    height: 40,
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
  },

  actionText: {
    color: "#FFF",
  },

  actionsTags: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  actionTag: {
    backgroundColor: "#bbccb8",
    borderRadius: 16,
    height: 40,
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  textTag: {
    color: "#FFF",
    padding: 4,
  },

  button: {
    backgroundColor: "#bbccb8",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  userTerms: {
    marginVertical: 12,
  },
});
