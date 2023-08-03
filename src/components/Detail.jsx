import { LangContext } from "@/contexts/LangContext";
import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext } from "react";

export const Detail = () => {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);
  return (
    <p className="text-center" style={{ color: theme.fgColor }}>
      {
        (lang.name === "en",
        theme.name === "dark"
          ? lang.detail.darkActivated
          : lang.detail.lightActivated)
      }
    </p>
  );
};
