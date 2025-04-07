import { useNavigation } from "@react-navigation/native";
import { Container, DietData,  SimpleText, SimpleView } from "./styles";

import { Header } from "@components/Header";
import theme from "@theme/index";

import { StatusBarDinamic } from "@components/StatusBarDinamic";
import { DietGoal } from "@components/DietGoal";


export function DietStatistics() {
	
	const navigation = useNavigation();
	

	return (
		<Container>
			<StatusBarDinamic backColor= {theme.COLORS.GREEN_LIGHT} />
			<Header showBackButton = {true} title="Nova Refeição" type="TERTIARY" />
			<DietData>
				<DietGoal percentage="0%"/>
			</DietData>
			<SimpleView>
				<SimpleText>Refeições</SimpleText>
			</SimpleView>
		</Container>
	);
}
