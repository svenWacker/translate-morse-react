import { MorseModule } from "./components/MorseModule";
import { TextModule } from "./components/TextModule";

function App() {
  return (
    <div>
      <h1>Hi I am translate-morse-react App</h1>
      <h2>Hit the button to morse and see the text</h2>
      <MorseModule />
      <h2>Type text to translate in morse</h2>
      {/* <TextModule /> */}
    </div>
  );
}
export default App;
