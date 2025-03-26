import { Container, DietData, DietStatisticsText, DietDataText, SimpleText, SimpleView } from "./styles";
import { Header } from "@components/Header";
import { StatusBarDinamic } from "@components/StatusBarDinamic";
import { Button } from "@components/Button";
import { useState } from "react";
import theme from "@theme/index";
import { useNavigation } from "@react-navigation/native";

export function DietStatistics() {
	
	const navigation = useNavigation();
	

	return (
		<Container>
			<StatusBarDinamic backColor= {theme.COLORS.GREEN_LIGHT} />
			<Header showBackButton = {true} title="Nova Refeição" type="TERTIARY" />
			<DietData>
				<DietStatisticsText>0%</DietStatisticsText>
				<DietDataText>das refeições dentro da dieta</DietDataText>
			</DietData>
			<SimpleView>
				<SimpleText>Refeições</SimpleText>
			</SimpleView>
		</Container>
	);
}
