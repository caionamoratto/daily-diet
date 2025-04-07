import { Container, DietData, SimpleText, SimpleView, IconView } from "./styles";
import { Header } from "@components/Header";
import { StatusBarDinamic } from "@components/StatusBarDinamic";
import { Button } from "@components/Button";

import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Icon } from "@screens/Home/styles";
import { DietGoal } from "@components/DietGoal";

export function Home() {
	const [onDiet, setOnDiet] = useState();

	const navigation = useNavigation();

	function handleStatistics() {
		navigation.navigate("stats");
	}
	function handleNewMeal() {
		navigation.navigate("new");
	}

	return (
		<Container>
			<StatusBarDinamic />
			<Header/>
			<DietData>
				<IconView>
					<TouchableOpacity onPress={handleStatistics}>
						<Icon name ={"arrow-up-right"}/>
					</TouchableOpacity>
				</IconView>
				<DietGoal percentage="0%"/>
			</DietData>
			<SimpleView>
				<SimpleText>Refeições</SimpleText>
				<Button title="Nova refeição" type="PRIMARY" icon="plus" onPress={handleNewMeal}/>
			</SimpleView>
		</Container>
	);
}
