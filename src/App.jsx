import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRouter from "./router/AppRouter";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";

function App() {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;