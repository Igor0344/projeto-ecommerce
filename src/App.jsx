import { HeadProvider } from "react-head";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Paths from "./routes/Paths";
import Depoimentos from "./components/Depoimentos";
import Categoria from "./components/Categoria";

const App = () => {
  return (
    <HeadProvider>
      <Depoimentos />
      <Categoria/>
      <Paths />
    </HeadProvider>
  );
}

export default App;