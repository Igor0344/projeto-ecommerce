import { HeadProvider } from "react-head";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Paths from "./routes/Paths";
<<<<<<< HEAD
import Depoimentos from "./components/Depoimentos";
import Categoria from "./components/Categoria";

const App = () => {
=======
function App() {
>>>>>>> 00688674602b7443351fadab8b2c997e6fe3bd7c
  return (
    <HeadProvider>
     <Categoria/>
      <Depoimentos />
      <Paths />
    </HeadProvider>
  );
}

export default App;