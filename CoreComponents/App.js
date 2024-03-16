import { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
  StatusBar,
  ActivityIndicator,
  Alert,
} from "react-native";
import logoImg from "./assets/adaptive-icon.png";
import Greet from "./components/Greet";

export default function App() {
  const [isModalVisiable, setIsModalVisiable] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Greet name="Pankaj Ghosh" />
      <Greet name="John Doe" />
      {/*<Button
        title="Alert"
        onPress={() =>
          Alert.alert("Invalid Data", "DOB Incorrect", [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
            },
            {
              text: "Ok",
              onPress: () => console.log("Ok Pressed"),
            },
          ])
        }
      />*/}
      {/* <ActivityIndicator size="large" color="midnightblue" animating /> */}
      {/* <StatusBar backgroundColor="lightgreen" barStyle="dark-content" /> */}
      {/*<Button
        title="Press"
        onPress={() => setIsModalVisiable(true)}
        color="midnightblue"
      />
      <Modal
        visible={isModalVisiable}
        onRequestClose={() => setIsModalVisiable(false)}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
          <Text>Modal Content</Text>
          <Button title="Close" onPress={() => setIsModalVisiable(false)} />
        </View>
        </Modal>*/}
      {/*<Pressable onPress={() => console.log("Img pressed")}>
        <Image source={logoImg} style={{ width: 300, height: 300 }} />
      </Pressable>
      <Pressable onPress={() => console.log("Text pressed")}>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </Pressable>*/}

      {/* <ScrollView>
        <Image source={logoImg} style={{ width: 300, height: 300 }} />
        <ImageBackground source={logoImg} style={{ flex: 1 }}>
          <Text>Image Text</Text>
        </ImageBackground>
        <Image
          source={{ uri: "https://picsum.photos/300" }}
          style={{ width: 300, height: 300 }}
        />
        <Text>
          <Text style={{ color: "white" }}>Hello</Text> World
        </Text>
        <View
          style={{ width: 200, height: 200, backgroundColor: "lightblue" }}
        ></View>
        <View
          style={{ width: 200, height: 200, backgroundColor: "lightgreen" }}
        ></View>
      </ScrollView> */}
    </View>
  );
}
