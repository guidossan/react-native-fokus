import { View, Image, Text } from "react-native";
import { FokusButton } from "../../components/FokusButton";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-brand gap-10 px-12">
      <Image  source={require("../../assets/images/logo.png")} />
      <View  className="w-full gap-4 items-center">
        <Text className="text-white text-center text-2xl font-extralight">
          Otimize sua {'\n'} produtividade, {'\n'}
          <Text className="font-bold">
            mergulhe no que {'\n'} importa
          </Text>
        </Text>
        <Image source={require("../../assets/images/home.png")} />
        <FokusButton title="Quero iniciar!" onPress={() => {}} />
      </View>
    </View>
  )
}