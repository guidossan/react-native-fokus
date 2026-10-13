import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
        <Stack.Screen name="index" options={{ title: "Fokus" }} />
        <Stack.Screen name="pomodoro" options={{ headerShown: false }} />
    </Stack>
  );
}
 