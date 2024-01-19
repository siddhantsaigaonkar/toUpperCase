import Navbar from "./navbar";
import TextForm from "./textform";
function App(params) {
  return (
    <>
      <Navbar title="TextUtils" />

      <div className="container">
        <TextForm heading="Enter the text to analyze below" />
      </div>
    </>
  );
}



export default App;
