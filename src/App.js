import logo from './logo.svg';
import './App.css';
// import StarRatting from './Component/Ratting/StarRatting';
// import Accordian from './Component/Accordian/Accordian';
// import RandomColor from './Component/ColorChanger/ColorChanger';
import ImageSlider from './Component/imageSlider/ImageSlider';

function App() {
  return (
    <div className="App">
      {/* <Accordian/>
<RandomColor/>
<StarRatting/> */}
<ImageSlider url={`https://picsum.photos/v2/list`} limit={"10"}/>
    </div>
  );
}

export default App;
