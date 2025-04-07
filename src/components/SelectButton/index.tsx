import type { TouchableOpacityProps } from "react-native";
import { type ButtonTypeStyleProps, Container, Title, Icon } from "./styles";
import type { Octicons } from "@expo/vector-icons";

type Props = TouchableOpacityProps &{
    title: string;
    type?: ButtonTypeStyleProps;
}


export function SelectButton({title, type = "PRIMARY", ...rest}: Props){
    return (
        <Container type={type} {...rest}>
            <Icon name="dot-fill" type={type}/>
            <Title type={type}>{title}</Title>
        </Container>
    );
}