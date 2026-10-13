import { useState, useRef } from "react";
import { Image, View } from "react-native";
import { ActionButton } from "../../components/ActionButton";
import { FokusButton } from "../../components/FokusButton";
import { Timer } from "../../components/Timer"; 
import { IconPause, IconPlay } from "../../components/icons";
import "./global.css";

const pomodoro = [
  {
    id: "focus",
    duration: 25 * 60,
    image: require("./pomodoro.png"),
    display: "Foco",
  },
  {
    id: "short",
    duration: 5 * 60,
    image: require("./short.png"),
    display: "Pausa curta",
  },
  {
    id: "long",
    duration: 15 * 60,
    image: require("./long.png"),
    display: "Pausa longa",
  },
];

export default function Index() {
  const [timerType, setTimerType] = useState(pomodoro[0]);
  const [timerRunning, setTimerRunning] = useState(false);
  const [seconds, setSeconds] = useState(pomodoro[0].duration);
  const timerRef = useRef(null);
  const clearTimer = () => {
    if (timerRef.current != null) {
      setTimerRunning(false)
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }

  const tootleTimerType = (type) => {
    clearTimer()
    setTimerType(type)
    setSeconds(type.duration)
  }

  const toogleTimer = () => {
     if (timerRef.current) {
        clearTimer();
        return;
     }
     setTimerRunning(true);
     const id = setInterval(() => {
        setSeconds(prevSeconds => {
           if (prevSeconds === 0) {
              clearTimer();
              return timerType.duration;
           }
            return prevSeconds - 1;
        })
     }, 1000)
     timerRef.current = id
  }
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
              onPress={() => tootleTimerType(type)}
              display={type.display}
            />
          ))}
        </View>
        <Timer seconds={seconds} />
        <FokusButton 
            icon={timerRunning ? <IconPause /> : <IconPlay />}
            title={timerRunning ? "Pausar" : "Começar"}
            onPress={toogleTimer} 
        />
      </View>
    </View>
  );
}
