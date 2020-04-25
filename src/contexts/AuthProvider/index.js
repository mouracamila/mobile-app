import React, {
  createContext,
  useReducer,
  useContext,
  useMemo,
  useEffect,
} from "react";
import { AsyncStorage } from "react-native";
import api from "../../services/api";

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

      // REMOVER
      const userToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU4NzI5ODU3M30.CSAQfH4VMoHx-P70VATHBRb_9_QE2pFnP-uFaaHd9oY";

      AsyncStorage.setItem("userToken", userToken);
      dispatch({
        type: "SIGN_IN",
        token: userToken,
      });
      // REMOVER

      // await api
      //   .post("sessions", { email, password })
      //   .then(({ data }) => {
      //     AsyncStorage.setItem("userToken", data.token);
      //     dispatch({ type: "SIGN_IN", token: data.token });
      //   })
      //   .catch((err) => {
      //     alert("Ops! Não foi possível logar.");
      //     console.log(err);
      //   });
    },
    // Logout
    signOut: () => dispatch({ type: "SIGN_OUT" }),
    // Register
    signUp: async (data) => {
      const { name, email, password } = data;

      await api
        .post("users", { name, email, password })
        .then(({ data }) => {
          dispatch({ type: "SIGN_IN", token: data.token });
        })
        .catch((err) => {
          alert("Ops! Não foi possível criar a conta.");
          console.log(err);
        });
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

  return <AuthContext.Provider value={authData} {...props} />;
}

// AuthContext hook
function useAuthContext() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuthContext };
