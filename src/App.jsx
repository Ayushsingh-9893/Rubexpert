import Navbar from "./components/Navbar/Navbar";
import Cube from "./components/Cube/Cube";
import Controls from "./components/Controls/Controls";
import ManualInput from "./components/ManualInput/ManualInput";
import CameraScanner from "./components/CameraScanner/CameraScanner";
import Solution from "./components/Solution/Solution";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Cube />
      <Controls />
      <ManualInput />
      <CameraScanner />
      <Solution />
      <Footer />
    </>
  );
}

export default App;