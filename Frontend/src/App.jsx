import Navbar from "./components/common/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/common/Footer";

function App() {
  return (
    
    <div className="pt-16">
  <AppRoutes />
  <Navbar />
      
      <Footer />
</div>

   
  );
}

export default App;
