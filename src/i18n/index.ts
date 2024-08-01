import spanish from "@lang/es.json";
import english from "@lang/en.json";

const LANG = {
    SPANISH: "es",
    ENGLISH: "en"
}

export const getI18N = ({
    currentLocale = "es"
}: {
    currentLocale: string | undefined
}) => {
    if (currentLocale === LANG.ENGLISH) return {...spanish, ...english}
    return spanish
}
    