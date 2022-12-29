import './App.css';
import FunctionalComponent1 from './components/FunctionalComponent.js';
import MyComponent from './components/asynccall'
import FetchData from './components/FetchData';
import MyForm from './components/formAndSend';
import GetDataCom from './components/getData';


function App() {
  return (
    <div className="App">
      <FunctionalComponent1/>
      <MyComponent/>
      {/* <FetchData/> */}
      <MyForm/>
      <GetDataCom/>
    </div>
  );
}

export default App;
