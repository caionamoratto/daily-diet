import type { TouchableOpacityProps } from "react-native";
import { type ButtonTypeStyleProps, Container, Title, Icon } from "./styles";
import type { AntDesign } from "@expo/vector-icons";

type Props = TouchableOpacityProps &{
    title: string;
    type?: ButtonTypeStyleProps;
    icon?: keyof typeof AntDesign.glyphMap;
}


export function Button({title, icon, type = "PRIMARY", ...rest}: Props){
    const hasIcon = !!icon;
    return (
        <Container type={type} {...rest}>
            <Icon name={icon} type={type}/>
            <Title type={type}>{title}</Title>
        </Container>
    );
}