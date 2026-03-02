import { HeadProvider } from "react-head";
import Paths from "./routes/Paths";
import { CartProvider } from "./contexts/CartProvider";
function App() {
  return (
    <HeadProvider>
      <CartProvider>
        <Paths />
      </CartProvider>
    </HeadProvider>
  );
}

export default App;