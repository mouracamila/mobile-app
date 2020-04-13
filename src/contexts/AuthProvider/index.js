import React, {
  createContext,
  useReducer,
  useContext,
  useMemo,
  useEffect,
} from "react";
import { AsyncStorage } from "react-native";

const AuthContext = createContext();

function AuthProvider(props) {
  const [auth, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoggedIn: true,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            userToken: action.token,
            isLoggedIn: true,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            userToken: null,
            isLoggedIn: false,
          };
      }
    },
    {
      isLoggedIn: false,
      name: null,
      error: null,
    }
  );

  const authContext = useMemo(() => ({
    // Login
    signIn: async (data) => {
      const { email, password } = data;

      await axios
        .post(`http://192.168.1.4:3333/sessions`, { email, password })
        .then((resp) => {
          console.log(resp);
          dispatch({ type: "SIGN_IN", token: userToken });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // Logout
    signOut: () => dispatch({ type: "SIGN_OUT" }),
    // Register
    signUp: async (data) => {
      let userToken = null;

      dispatch({ type: "SIGN_IN", token: userToken });
    },
  }));

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem("userToken");
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      if (userToken) {
        dispatch({ type: "RESTORE_TOKEN", token: userToken });
      }
    };

    bootstrapAsync();
  }, []);

  const authData = { ...authContext, auth, dispatch };
  console.log(authData);

  return <AuthContext.Provider value={authData} {...props} />;
}

// AuthContext hook
function useAuthContext() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuthContext };
