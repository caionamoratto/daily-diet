import { useNavigation } from "@react-navigation/native";
import { AnotherSimpleText, AnotherSimpleView, Container, DietData,  OnDietText,  RowSimpleView,  RowSimpleViewText,  SimpleText, SimpleView } from "./styles";

import { Header } from "@components/Header";
import theme from "@theme/index";

import { StatusBarDinamic } from "@components/StatusBarDinamic";
import { DietGoal } from "@components/DietGoal";


export function DietStatistics() {
	
	return (
		<Container>
			<StatusBarDinamic backColor= {theme.COLORS.GREEN_LIGHT} />
			<Header showBackButton = {true} type="TERTIARY" />
			<DietData>
				<DietGoal percentage="0%"/>
			</DietData>
			<SimpleView>
				<SimpleText>Estatísticas gerais</SimpleText>
				<AnotherSimpleView>
					<OnDietText>22</OnDietText>
					<AnotherSimpleText>melhor sequência de pratos dentro da dieta</AnotherSimpleText>
				</AnotherSimpleView>
				<AnotherSimpleView>
					<OnDietText>109</OnDietText>
					<AnotherSimpleText>refeições registradas</AnotherSimpleText>
				</AnotherSimpleView>
				<RowSimpleView>
					<RowSimpleViewText type="PRIMARY">
						<OnDietText>99</OnDietText>
						<AnotherSimpleText>refeições dentro da dieta</AnotherSimpleText>
					</RowSimpleViewText>
					<RowSimpleViewText>
						<OnDietText>10</OnDietText>
						<AnotherSimpleText>refeições fora da dieta</AnotherSimpleText>
					</RowSimpleViewText>
				</RowSimpleView>
			</SimpleView>
		</Container>
	);
}
