import { SafeAreaView } from "react-native-safe-area-context";
import styled, { type DefaultTheme } from "styled-components/native";

export type TextInputStyleProps = "PRIMARY"|"SECONDARY"| "TERTIARY";

type Props = {
    type: TextInputStyleProps;    
};

export const Container = styled(SafeAreaView)`
	
	background-color: ${({theme}: DefaultTheme) => theme.COLORS.GRAY_7};
    height: ${({type}: Props) => type === "PRIMARY"? "70px": type === "SECONDARY"? "130px": "70px"};
    width: ${({type}: Props) => type === "PRIMARY"? "100%": type === "SECONDARY"? "100%": "47%"};
    margin-bottom: 24px;
`;

export const SimpleText =styled.Text`
	font-size: ${({theme}: DefaultTheme) => theme.FONT_SIZE.XSM}px;
	font-family: ${({theme}: DefaultTheme) => theme.FONT_FAMILY.BOLD};
    margin-bottom: 5px;
`;

export const TextInputGeneric =styled.TextInput`
    flex: 1;
    border-color: ${({theme}: DefaultTheme) => theme.COLORS.GRAY_5};
    border-width: 0.5px;
    border-radius: 6px;
	font-size: ${({theme}: DefaultTheme) => theme.FONT_SIZE.SML}px;
	font-family: ${({theme}: DefaultTheme) => theme.FONT_FAMILY.REGULAR};
`;

