import { Stack } from 'expo-router';

export default function Navigation() {
    return (
        <Stack>
            <Stack.Screen
                name="(tabs)"
                options={{ headerShown: false }}
            />
        </Stack>
    );
}