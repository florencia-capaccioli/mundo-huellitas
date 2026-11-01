import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const COLORS = {
    primary: '#795548',
    inactive: '#A99A8F',
    background: '#FFFCF8',
};

const getIcon = (routeName, color, size) => {
    switch (routeName) {
        case 'posteos':
            return <Ionicons name="newspaper-outline" size={size} color={color} />;

        case 'favoritos':
            return <Ionicons name="heart-outline" size={size} color={color} />;

        default:
            return null;
    }
};

export default function TabsLayout() {
    return (
        <Tabs
            initialRouteName="posteos"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: COLORS.primary,
                tabBarInactiveTintColor: COLORS.inactive,
                tabBarStyle: {
                    backgroundColor: COLORS.background,
                    height: 120,
                    paddingBottom: 20,
                    paddingTop: 22,
                    borderTopColor: '#E8DCD1',
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                },
                tabBarIcon: ({ color, size }) =>
                    getIcon(route.name, color, size),
            })}
        >            
            <Tabs.Screen
                name="posteos"
                options={{ title: 'Posteos' }}
            />

            <Tabs.Screen
                name="favoritos"
                options={{ title: 'Favoritos' }}
            />
        </Tabs>
    );
}