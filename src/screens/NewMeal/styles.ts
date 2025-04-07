import { SafeAreaView } from "react-native-safe-area-context";
import styled, { type DefaultTheme } from "styled-components/native";

export const Container = styled(SafeAreaView)`
	flex: 1;
	background-color: ${({theme}: DefaultTheme) => theme.COLORS.GRAY_5};    
`;

export const SimpleView = styled.View`	
	margin-top: 24px;
    height: 100%;
	background-color: ${({theme}: DefaultTheme) => theme.COLORS.GRAY_7};
	padding: 24px;
	border-radius: 20px;
`;

export const AnotherSimpleView = styled.View`
    flex-direction: row;
    justify-content: space-between;    
`;

export const SimpleText =styled.Text`
    margin-bottom: 5px;
	font-size: ${({theme}: DefaultTheme) => theme.FONT_SIZE.XSM}px;
	font-family: ${({theme}: DefaultTheme) => theme.FONT_FAMILY.BOLD};	
`;

export const ButtonView = styled.View`
    flex: 1;
    justify-content: center;
`;