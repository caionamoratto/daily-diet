
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { type DefaultTheme } from "styled-components/native";

export const Container = styled(SafeAreaView)`

	flex: 1;
    align-items: center;
`;


export const DietStatisticsText =styled.Text`
	font-size: ${({theme}: DefaultTheme) => theme.FONT_SIZE.XXL}px;
	font-family: ${({theme}: DefaultTheme) => theme.FONT_FAMILY.BOLD};
`;

export const DietDataText =styled.Text`
	font-size: ${({theme}: DefaultTheme) => theme.FONT_SIZE.SML}px;
	font-family: ${({theme}: DefaultTheme) => theme.FONT_FAMILY.REGULAR};
`;

