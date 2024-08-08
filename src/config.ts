import { GoDotFill } from "react-icons/go";

const CONFIG = {
    colors: {
        primary: "#007bff",
        secondary: "#242323",
    },
    themes: {
        light: {
            backgroundColor: "#eef0f1",
            textColor: "#000",
        },
        dark: {
            backgroundColor: "#242323",
            textColor: "#eef0f1",
        }
    },
    icons: {
        dot: GoDotFill,
    }
} as const;

export default CONFIG;