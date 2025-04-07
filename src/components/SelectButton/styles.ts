import { Octicons } from "@expo/vector-icons";
import theme from "@theme/index";
import styled, {css, type DefaultTheme } from "styled-components/native";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
	type: ButtonTypeStyleProps;
    
};

export const Container = styled.TouchableOpacity`
    width: 47%;
    height: 50px;    
    flex-direction: row;
    align-items: center;
    border-radius: 6px;
    justify-content: center;
    backgroundColor: ${({theme}: DefaultTheme) => theme.COLORS.GRAY_6};
`;

export const Title = styled.Text`
    ${({theme}: DefaultTheme)=>css`
    font-size: ${theme.FONT_SIZE.SML}px;
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    
`}`;

export const Icon = styled(Octicons).attrs<Props>(
	({ theme, type}: DefaultTheme) => ({
        marginRight: 4,        
		size: 12,
		color: type === "PRIMARY"? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
	}),
)``;