import { useNavigation } from "@react-navigation/native";
import { BackButton, BackButtonView, BackIcon, BackTitle, BackTitleView, Container, type HeaderBackStyleProps, LogoView } from "./styles";
import logoImg from "@assets/logo.png";
import photoImg from "@assets/photo.png"
import { Image } from "react-native";

type Props = {
	title?: string;
	showBackButton?: boolean;
	type?: HeaderBackStyleProps;
};

export function Header({title, type = "PRIMARY", showBackButton = false}: Props) {
	const navigation = useNavigation();

	function handleGoBackHome() {
		navigation.navigate("home");
	}

	return (
		<Container>            
			{showBackButton === true ? (
				<BackButtonView>
					<BackButton onPress={handleGoBackHome}>
						<BackIcon name="arrow-back" type={type}/>
					</BackButton>
					<BackTitleView>						
						<BackTitle>{title}</BackTitle>
					</BackTitleView>
				</BackButtonView>
			):(
				<LogoView>
					<Image source={logoImg} />
					<Image source={photoImg} />
				</LogoView>                                
            )}
		</Container>
	);
}
