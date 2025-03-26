import { Ionicons } from "@expo/vector-icons";
import styled, {css, type DefaultTheme } from "styled-components/native";

export type HeaderBackStyleProps = "PRIMARY"|"SECONDARY"|"TERTIARY";

type Props = {
    type: HeaderBackStyleProps;    
};

export const Container = styled.View`
    justify-items:center;
`;

export const LogoView = styled.View`
    width: 100%;
    margin-bottom: 24px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.Image`
    
`;

export const BackButtonView = styled.View`
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    align-items: center;   
    position: relative;
    
    background-color: ${({theme}: DefaultTheme) => theme.COLORS.GREEN_LIGHT};
    padding: 0 12px;
    padding-top: 6px;
`;

export const BackButton = styled.TouchableOpacity`
    
`;

export const BackIcon = styled(Ionicons).attrs(({ theme,type }: DefaultTheme) => ({
	size: 32,
	color: type === "PRIMARY"? theme.COLORS.GRAY_1 : type === "SECONDARY"? theme.COLORS.RED_DARK : theme.COLORS.GREEN_DARK,
}))``;

export const BackTitleView = styled.View`
    flex: 1;
    
    align-items: center;
    justify-content: center;
    margin-right: 30px;

    background-color: ${({theme}: DefaultTheme) => theme.COLORS.GREEN_LIGHT};    
`;

export const BackTitle = styled.Text`
    font-size: ${({theme}: DefaultTheme) => theme.FONT_SIZE.LRG}px;
    font-family: ${({theme}: DefaultTheme) => theme.FONT_FAMILY.REGULAR};
`;
