import { useNavigation } from "@react-navigation/native";
import { Container, DietStatisticsText, DietDataText } from "./styles";


type Props = {
    percentage?: string;    
}


export function DietGoal({percentage}: Props) {
    
    const navigation = useNavigation();
    

    return (
        <Container>
            <DietStatisticsText>{percentage}</DietStatisticsText>
            <DietDataText>das refeições dentro da dieta</DietDataText>
        </Container>
    );
}
