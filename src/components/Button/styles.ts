import { AntDesign } from "@expo/vector-icons";
import theme from "@theme/index";
import styled, {css, type DefaultTheme } from "styled-components/native";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
	type: ButtonTypeStyleProps;
    
};

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: 50px;    
    flex-direction: row;
    align-items: center;
    border-radius: 6px;
    justify-content: center;
    backgroundColor: ${({theme, type}: DefaultTheme)=> (type === "PRIMARY"? theme.COLORS.GRAY_2 : theme.COLORS.WHITE)};
    border: 2px solid ${theme.COLORS.GRAY_1};
`;

export const Title = styled.Text`
    ${({theme, type}: DefaultTheme)=>css`
    font-size: ${theme.FONT_SIZE.SML}px;
    color: ${(type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_1)};
    font-family: ${theme.FONT_FAMILY.BOLD};
    
`}`;

export const Icon = styled(AntDesign).attrs<Props>(
	({ theme, type, name }: DefaultTheme) => ({
        marginRight: name === "edit" ? 12 : name === "plus" ? 12  : name === "delete" ? 12 :0,
		size: 18,
		color: type === "PRIMARY"? theme.COLORS.WHITE : theme.COLORS.GRAY_2,
	}),
)``;