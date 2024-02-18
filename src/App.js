import logo from './logo.svg';
// import './App.css';
import ThemeChanger from './Component/LightDark/ThemeChanger';
import ScrollPersentage from './Component/Scroll/ScrollPersentage';
import Opp from './Opp/Opp';
import { Index } from './Component/Tab/Index';
// import QrCode from './Component/Qrcode/QrCode';
// import MainTree from './Component/TreeView/MainTree';
// import StarRatting from './Component/Ratting/StarRatting';
// import Accordian from './Component/Accordian/Accordian';
// import RandomColor from './Component/ColorChanger/ColorChanger';
// import ImageSlider from './Component/imageSlider/ImageSlider';
// import LodeMore from './Component/Loadmoredata/LodeMore';

function App() {
  return (
    <div className="App">
      {/* <Accordian/>
<RandomColor/>
<StarRatting/>
<ImageSlider url={`https://picsum.photos/v2/list`} limit={"10"}/> */}
{/* <LodeMore/> */}
{/* <MainTree/> */}
{/* <QrCode/> */}
{/* <ThemeChanger/> */}
{/* <ScrollPersentage/> */}
{/* <Opp/> */}
<Index/>
    </div>
  );
}

export default App;
