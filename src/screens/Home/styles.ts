
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
	height: 102px;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	background-color: ${({theme}: DefaultTheme) => theme.COLORS.GREEN_LIGHT};	
	border-radius: 8px;
	margin-bottom: 24px;
`;

export const IconView = styled.View`
	transform: translate(280px, -30px);
	background-color: ${({theme}: DefaultTheme) => theme.COLORS.GREEN_LIGHT};
`;

export const Icon = styled(Feather).attrs(
	({ theme }: DefaultTheme) => ({
		size: 24,
		color: theme.COLORS.GREEN_DARK,
	}),)`
`;

export const SimpleView = styled.View`	
	background-color: ${({theme}: DefaultTheme) => theme.COLORS.GRAY_7};
`;

export const SimpleText =styled.Text`
	font-size: ${({theme}: DefaultTheme) => theme.FONT_SIZE.MDM}px;
	font-family: ${({theme}: DefaultTheme) => theme.FONT_FAMILY.REGULAR};
	marginBottom: 8px;
`;

