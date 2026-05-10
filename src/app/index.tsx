import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { AntDesign, Feather, FontAwesome, Ionicons } from "@expo/vector-icons";

const LoginPage = () => {
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: isDarkMode ? "#121212" : "#F5F1E8",
        },
      ]}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={40}
      >
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Image
            source={require("@/assets/images/NewLogo.png")}
            style={styles.logo}
            resizeMode="contain"
          />

          <Text
            style={[
              styles.title,
              {
                color: isDarkMode ? "#fff" : "#222",
              },
            ]}
          >
            Sign In
          </Text>

          <Text
            style={[
              styles.subtitle,
              {
                color: isDarkMode ? "#808080" : "#777",
              },
            ]}
          >
            Let experience the joy of telecare AI.
          </Text>

          <Text
            style={[
              styles.label,
              {
                color: isDarkMode ? "#fff" : "#222",
              },
            ]}
          >
            Email Address
          </Text>

          <View
            style={[
              styles.inputContainer,
              {
                borderColor: emailFocus ? "#95d600" : "#ddd",
                backgroundColor: isDarkMode ? "#1E1E1E" : "#fff",
              },
            ]}
          >
            <Feather
              name="mail"
              size={22}
              color={isDarkMode ? "#808080" : "#555"}
            />

            <TextInput
              placeholder="Enter your email..."
              placeholderTextColor={isDarkMode ? "#808080" : "#888"}
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
              style={[
                styles.input,
                {
                  color: isDarkMode ? "#fff" : "#000",
                },
              ]}
            />
          </View>

          <Text
            style={[
              styles.label,
              {
                color: isDarkMode ? "#fff" : "#222",
              },
            ]}
          >
            Password
          </Text>

          <View
            style={[
              styles.inputContainer,
              {
                borderColor: passwordFocus ? "#95d600" : "#ddd",
                backgroundColor: isDarkMode ? "#1E1E1E" : "#fff",
              },
            ]}
          >
            <Feather
              name="lock"
              size={22}
              color={isDarkMode ? "#808080" : "#555"}
            />

            <TextInput
              placeholder="Enter your password..."
              placeholderTextColor={isDarkMode ? "#808080" : "#888"}
              secureTextEntry
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
              style={[
                styles.input,
                {
                  color: isDarkMode ? "#fff" : "#000",
                },
              ]}
            />

            <Ionicons
              name="eye-off-outline"
              size={22}
              color={isDarkMode ? "#808080" : "#777"}
            />
          </View>

          <Pressable
            style={({ pressed }) => [
              styles.button,
              {
                backgroundColor: pressed ? "#7cb518" : "#95d600",
                transform: [{ scale: pressed ? 0.98 : 1 }],
              },
            ]}
          >
            <Text style={styles.buttonText}>Sign In →</Text>
          </Pressable>

          <View style={styles.socialContainer}>
            <Pressable
              style={[
                styles.iconButton,
                {
                  backgroundColor: isDarkMode ? "#1E1E1E" : "#fff",
                },
              ]}
            >
              <FontAwesome
                name="facebook"
                size={28}
                color={isDarkMode ? "#fff" : "#222"}
              />
            </Pressable>

            <Pressable
              style={[
                styles.iconButton,
                {
                  backgroundColor: isDarkMode ? "#1E1E1E" : "#fff",
                },
              ]}
            >
              <AntDesign
                name="google"
                size={28}
                color={isDarkMode ? "#fff" : "#222"}
              />
            </Pressable>

            <Pressable
              style={[
                styles.iconButton,
                {
                  backgroundColor: isDarkMode ? "#1E1E1E" : "#fff",
                },
              ]}
            >
              <Ionicons
                name="logo-instagram"
                size={28}
                color={isDarkMode ? "#fff" : "#222"}
              />
            </Pressable>
          </View>

          <Text
            style={{
              textAlign: "center",
              color: isDarkMode ? "#808080" : "#555",
              marginBottom: 12,
            }}
          >
            Don’t have an account?{" "}
            <Text
              style={{
                color: "#95d600",
                fontWeight: "bold",
              }}
            >
              Sign Up.
            </Text>
          </Text>
          <Switch
            value={isDarkMode}
            onValueChange={setIsDarkMode}
            trackColor={{ false: "#ccc", true: "#444" }}
            thumbColor={isDarkMode ? "#fff" : "#f4f3f4"}
            style={{
              alignSelf: "center",
              marginBottom: 30,
            }}
          />
          <Text
            style={{
              textAlign: "center",
              color: "#95d600",
              fontWeight: "600",
            }}
          >
            Forgot your password?
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 24,
  },

  logo: {
    width: 90,
    height: 90,
    alignSelf: "center",
    marginBottom: 20,
  },

  title: {
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  subtitle: {
    textAlign: "center",
    fontSize: 17,
    marginBottom: 30,
  },

  label: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 10,
    marginLeft: 5,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 20,
    paddingHorizontal: 16,
    marginBottom: 20,
    height: 64,
  },

  input: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
  },

  button: {
    padding: 18,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 35,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },

  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 18,
    marginBottom: 35,
  },

  iconButton: {
    width: 72,
    height: 72,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
  },
});
