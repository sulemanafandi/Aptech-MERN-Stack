import './App.css';
import Card from './compontents/Card';
import Navbar from './compontents/Navbar';
import Slider from './compontents/Slider';
import Img1 from './assets/1.jpg';
import Img2 from './assets/2.jpg';
import slider from './assets/1.jpg';

function App() {
  let name = "React";

  return (
    <>
    <Navbar />
    <br />
    <br />
    {name} is awesome!
    <br />
    <Slider slider={slider} />
    <br />
    <Card ctitle="Card 1 hai ye"  ctext="paragraph 1" cImg={Img1} />
    <Card ctitle="Card 2 hai ye"  ctext="paragraph 2" cImg={Img2} />
    </>
  )
}

export default App;
