import Navbar from "./Navbar";
import "./App.css";
import Firstpart from "./Firstpart";
import Secondpart from "./Secondpart";
import Ourcreations from "./Ourcreations";
import Footer from "./Footer";
import background from "./image-hero.jpg";

function App() {
  return (
    <div className="App">
      <div className="backgroundImg">
        <img src={background} />
      </div>
      <div className="container">
        <Firstpart />
        <Secondpart />
        <Ourcreations />
      </div>
      <Footer />
    </div>
  );
}

export default App;
