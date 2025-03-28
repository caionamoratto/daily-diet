import { Container, DietData, DietStatisticsText, DietDataText, SimpleText, SimpleView } from "./styles";
import { Header } from "@components/Header";
import { StatusBarDinamic } from "@components/StatusBarDinamic";
import { Button } from "@components/Button";

import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Icon } from "@screens/Home/styles";

export function Home() {
	const [onDiet, setOnDiet] = useState();

	const navigation = useNavigation();

	function handleStatistics() {
		navigation.navigate("stats");
	}

	return (
		<Container>
			<StatusBarDinamic />
			<Header/>
			<DietData>
				<TouchableOpacity onPress={handleStatistics}>
					<Icon name ={"arrow-up-right"}/>
				</TouchableOpacity>
				<DietStatisticsText>0%</DietStatisticsText>
				<DietDataText>das refeições dentro da dieta</DietDataText>
			</DietData>
			<SimpleView>
				<SimpleText>Refeições</SimpleText>
				<Button title="Nova refeição" type="PRIMARY" icon="plus"/>
			</SimpleView>
		</Container>
	);
}
