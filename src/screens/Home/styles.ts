
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { type DefaultTheme } from "styled-components/native";

export const Container = styled(SafeAreaView)`	
	flex: 1;
	background-color: ${({theme}: DefaultTheme) => theme.COLORS.GRAY_7};
	padding: 24px;
`;

export const DietData = styled.View`
	width: 100%;
	display: relative;
	height: 102px;
	align-items: center;
	justify-content: center;
	background-color: ${({theme}: DefaultTheme) => theme.COLORS.GREEN_LIGHT};
	margin-bottom: 24px;
	border-radius: 8px;
`;
export const Icon = styled(Feather).attrs(
	({ theme, type, name }: DefaultTheme) => ({
		size: 24,
		color: theme.COLORS.GREEN_DARK,

	}),
)``;

export const DietStatisticsText =styled.Text`
	font-size: ${({theme}: DefaultTheme) => theme.FONT_SIZE.XXL}px;
	font-family: ${({theme}: DefaultTheme) => theme.FONT_FAMILY.BOLD};
`;

export const DietDataText =styled.Text`
	font-size: ${({theme}: DefaultTheme) => theme.FONT_SIZE.SML}px;
	font-family: ${({theme}: DefaultTheme) => theme.FONT_FAMILY.REGULAR};
`;

export const SimpleView = styled.View`	
	background-color: ${({theme}: DefaultTheme) => theme.COLORS.GRAY_7};
`;

export const SimpleText =styled.Text`
	font-size: ${({theme}: DefaultTheme) => theme.FONT_SIZE.MDM}px;
	font-family: ${({theme}: DefaultTheme) => theme.FONT_FAMILY.REGULAR};
	marginBottom: 8px;
`;

