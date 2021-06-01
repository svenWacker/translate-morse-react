import { MorseModule } from "./components/MorseModule";
import { TextModule } from "./components/TextModule";

function App() {
  return (
    <div>
      <h1>Learn To Morse</h1>
      <h2>Type in your text</h2>
      <TextModule />
      <h2>Hit the button to morse and see the text</h2>
      <MorseModule />
    </div>
  );
}
export default App;
