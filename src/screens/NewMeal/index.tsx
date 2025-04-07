import { AnotherSimpleView, ButtonView, Container,  SimpleText, SimpleView } from "./styles";
import { Header } from "@components/Header";
import { StatusBarDinamic } from "@components/StatusBarDinamic";

import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import theme from "@theme/index";
import { GenericTextInput } from "@components/GenericTextInput";
import { SelectButton } from "@components/SelectButton";
import { Button } from "@components/Button";

export function NewMeal() {
    const [onDiet, setOnDiet] = useState();

    const navigation = useNavigation();

    return (
        <Container>
            <StatusBarDinamic backColor= {theme.COLORS.GRAY_5} />
            <Header showBackButton = {true} title="Nova Refeição" type="PRIMARY" />
            <SimpleView>
                <GenericTextInput title="Nome" placeHolderText="Ex: Sanduíche."/>
                <GenericTextInput title="Descrição" placeHolderText="Ex: Sanduíche de pão com salada de alface." type="SECONDARY"/>
                <AnotherSimpleView>
                    <GenericTextInput title="Data" type="TERTIARY"/>
                    <GenericTextInput title="Hora" type="TERTIARY"/>
                </AnotherSimpleView>
                <SimpleText>Está dentro da dieta?</SimpleText>
                <AnotherSimpleView>
                    <SelectButton title="Sim"/>
                    <SelectButton title="Não" type="SECONDARY"/>
                </AnotherSimpleView>
            <ButtonView>
                <Button title="Cadastrar refeição"/>
            </ButtonView>
            </SimpleView>
        </Container>
    );
}
