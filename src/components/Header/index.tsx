import { useNavigation } from "@react-navigation/native";
import { BackButton, BackIcon, Container, Logo, LogoView } from "./styles";
import logoImg from "@assets/logo.png";
import photoImg from "@assets/photo.png"
import { View } from "react-native";
import { StatusBarDinamic } from "@components/StatusBarDinamic";

type Props = {
	showBackButton?: boolean;
    showLogoImg?: boolean;
};

export function Header({ showBackButton = false, showLogoImg = true}: Props) {
	const navigation = useNavigation();

	function handleGoBackHome() {
		
	}

	return (
		<Container>
            <StatusBarDinamic />
			{showBackButton && (
				<BackButton onPress={handleGoBackHome}>
					<BackIcon name="arrow-back" />
				</BackButton>
			)}
			{
                showLogoImg && (
                    <LogoView>
                        <Logo source={logoImg} />
                        <Logo source={photoImg} />
                    </LogoView>
                                
            )}
		</Container>
	);
}
