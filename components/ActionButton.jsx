import { Pressable, Text } from "react-native";
import { cn } from "../lib/utils";

export const ActionButton = ({ active, onPress, display }) => {
  return (
    <Pressable
      className={cn(
        "p-2",
        active && "bg-azulRoyal rounded-xl"
      )}
      onPress={onPress}
    >
      <Text className="text-white text-sm">
        {display}
      </Text>
    </Pressable>
  );
};