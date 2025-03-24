import { StatusBar } from "react-native";

type Props = {
    backColor?: string
}

export function StatusBarDinamic({backColor = "#FAFAFA"}: Props) {
        return (
            <StatusBar
            barStyle="dark-content"
            backgroundColor={backColor}
        />
    );
}
