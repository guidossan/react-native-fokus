import { Pressable, Text } from "react-native";

export const FokusButton = ({onPress, title, icon}) => {
    return (
        <Pressable className="bg-lilas rounded-full flex flex-row gap-3 p-2 items-center justify-center w-full" onPress={onPress}>
            {icon}
            <Text className="text-2xl font-semibold text-azulMedio text-center">
                {title}
            </Text>
        </Pressable>
    )
}