import { ThemeProvider } from "styled-components/native";

import {
	useFonts,
	NunitoSans_400Regular,
	NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";

import theme from "@theme/index";
import { Loading } from "@components/Loading";
import { DietStatistics } from "@screens/DietStatistics";
import { Routes } from "src/routes";


export default function App() {
	const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

	return (
		<ThemeProvider theme={theme}>
      		{fontsLoaded? <Routes/> : <Loading/>}
		</ThemeProvider>
	);
}
