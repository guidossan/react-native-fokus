import { Text, View } from "react-native";
import "./global.css";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-brand">
      <Text className="text-3xl font-bold text-white">
        Tailwind Funcionando!
      </Text>
    </View>
  );
}