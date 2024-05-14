import React from "react";
import { Image, StyleSheet, Platform, Button, View } from "react-native";
import {
  GestureHandlerRootView,
  NativeViewGestureHandler,
  TextInput,
} from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { auth } from "../config/FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function HomeScreen() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const SignUp = async () => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      alert("Sign up success");
    } catch (error: any) {
      alert("Sign up failed " + error.message);
    }
  };
  const SignIn = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      alert("Sign in success");
    } catch (error: any) {
      alert("Sign in failed " + error.message);
    }
  };
  return (
    <GestureHandlerRootView style={styles.background}>
      <TextInput
        placeholder="Email"
        autoFocus={true}
        style={styles.input}
        onChangeText={(text: string) => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        style={styles.input}
        onChangeText={(text: string) => setPassword(text)}
      />
      <View style={{ display: "flex", gap: 10, marginTop: 20 }}>
        <Button title="Sign In" onPress={SignIn} />
        <Button title="Sign Up" color="gray" onPress={SignUp} />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: 300,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
  },
});
