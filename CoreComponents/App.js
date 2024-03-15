import { View, Text, Image, ImageBackground } from "react-native";
import logoImg from "./assets/adaptive-icon.png";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <ImageBackground source={logoImg} style={{ flex: 1 }}>
        <Text>Image Text</Text>
      </ImageBackground>
      <Image source={logoImg} style={{ width: 300, height: 300 }} />
      <Image
        source={{ uri: "https://picsum.photos/300" }}
        style={{ width: 300, height: 300 }}
      />
      {/* <Text>
        <Text style={{ color: "white" }}>Hello</Text> World
      </Text> */}
      {/* <View
        style={{ width: 200, height: 200, backgroundColor: "lightblue" }}
      ></View>
      <View
        style={{ width: 200, height: 200, backgroundColor: "lightgreen" }}
      ></View> */}
    </View>
  );
}
