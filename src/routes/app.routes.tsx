import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/Home";
import { DietStatistics } from "@screens/DietStatistics";


const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
	return (
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen name="home" component={Home} />
			<Screen name="stats" component={DietStatistics} />
		</Navigator>
	);
}
