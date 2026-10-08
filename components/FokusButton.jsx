import { Pressable, Text } from "react-native";

export const FokusButton = () => {
    return (
        <Pressable className="bg-lilas rounded-full p-2 items-center justify-center w-full">
            <Text className="text-2xl font-semibold text-azulMedio text-center">
                Começar
            </Text>
        </Pressable>
    )
}