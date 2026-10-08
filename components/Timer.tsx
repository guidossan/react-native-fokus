import { Text } from "react-native";

export const Timer = ({seconds}: { seconds: number }) => {
    if (seconds === undefined) {
        throw new Error("Seconds is required");
    }
    const date = new Date(seconds * 1000);
    const options = { minute: "2-digit", second: "2-digit" };

    return (
        <Text className="text-6xl font-bold text-white">
          {date.toLocaleTimeString("pt-BR", options)}
        </Text>
    )
}