import { useState } from "react";
import { Image, View } from "react-native";
import { ActionButton } from "../../components/ActionButton";
import { FokusButton } from "../../components/FokusButton";
import { Timer } from "../../components/Timer";
import "./global.css";

const pomodoro = [
  {
    id: "focus",
    duration: 25,
    image: require("./pomodoro.png"),
    display: "Foco",
  },
  {
    id: "short",
    duration: 5,
    image: require("./short.png"),
    display: "Pausa curta",
  },
  {
    id: "long",
    duration: 15,
    image: require("./long.png"),
    display: "Pausa longa",
  },
];

export default function Index() {
  const [timerType, setTimerType] = useState(pomodoro[0]);

  return (
    <View className="flex-1 items-center justify-center bg-brand gap-10 px-5">
      <Image
        className="w-[80%]"
        resizeMode="contain"
        source={timerType.image}
      />
      <View className="w-[80%] gap-8 bg-azulRoyal/80 border-2 border-azulRoyal rounded-3xl p-6 items-center">
        <View className="w-full flex-row justify-around align-center">
          {pomodoro.map((type) => (
            <ActionButton
              key={type.id}
              active={timerType.id === type.id}
              onPress={() => setTimerType(type)}
              display={type.display}
            />
          ))}
        </View>
        <Timer seconds={timerType.duration} />
        <FokusButton />
      </View>
    </View>
  );
}
