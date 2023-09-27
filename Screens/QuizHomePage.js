import React from "react";
import { StatusBar, Text, View } from "react-native";

import COLORS from "../constants/colors";

const QuizHomePage = () => {
  return (
    <>
      <View>
        <StatusBar backgroundColor="#009387" barStyle="default" />
      </View>

      <View style={{ flex: 1, backgroundColor: COLORS.secondary }}>
        <Text
          style={{
            flex: 1,
            fontSize: 22,
            fontWeight: "bold",
            marginVertical: 12,
            color: COLORS.white,
            textAlign: "center",
          }}
        >
          QuizHomePage
        </Text>
      </View>
    </>
  );
};

export default QuizHomePage;
