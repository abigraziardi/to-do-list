import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./pages/to-do-list/Main";

export default function App() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-400 to-slate-700">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
