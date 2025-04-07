import { Container, SimpleText, TextInputGeneric, type TextInputStyleProps } from "./styles";

type Props ={
    title: string;    
    type?: TextInputStyleProps;
    placeHolderText?: string;
}

export function GenericTextInput({title, placeHolderText, type="PRIMARY", ...rest}:Props) {  

    return (
        <Container type={type} {...rest}>
            <SimpleText>{title}</SimpleText>
            <TextInputGeneric placeholder={placeHolderText}/>
        </Container>
    );
}
