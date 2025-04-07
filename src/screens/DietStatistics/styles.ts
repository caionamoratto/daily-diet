
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { type DefaultTheme } from "styled-components/native";

export const Container = styled(SafeAreaView)`
	flex: 1;
	background-color: ${({theme}: DefaultTheme) => theme.COLORS.GRAY_7};
`;

export const DietData = styled.View`
	width: 100%;
	height:25%;	
	padding-top: 15%;

	position: absolute;
	z-index: -1;
	align-items: center;
	
	background-color: ${({theme}: DefaultTheme) => theme.COLORS.GREEN_LIGHT};
`;

export const SimpleView = styled.View`
	align-items: center;
	justify-content: center;
	margin-top: 25%;
	background-color: ${({theme}: DefaultTheme) => theme.COLORS.GRAY_7};
	padding: 24px;
	border-radius: 20px;
`;

export const SimpleText =styled.Text`
	font-size: ${({theme}: DefaultTheme) => theme.FONT_SIZE.MDM}px;
	font-family: ${({theme}: DefaultTheme) => theme.FONT_FAMILY.BOLD};
	marginBottom: 8px;
`;

