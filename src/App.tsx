import Navbar from "../src/components/navbar/Navbar";
import Footer from "../src/components/footer/Footer";
import Home from "../src/home/Home";

function App() {
  return (
    <div className="min-h-screen bg-green-50 text-green-900">
      <Home />
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
