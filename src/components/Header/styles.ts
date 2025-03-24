import { Ionicons } from "@expo/vector-icons";
import styled, {css, type DefaultTheme } from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const LogoView = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.Image`
    
`;

export const BackButton = styled.TouchableOpacity`
    flex: 1;
`;

export const BackIcon = styled(Ionicons).attrs(({ theme }: DefaultTheme) => ({
	size: 32,
	color: theme.COLORS.GRAY_2,
}))``;
