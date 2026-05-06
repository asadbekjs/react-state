// import Counter1 from "./components/counter1";

import Counter2 from "./components/counter2";
import NameInput from "./components/name-input";
import TagsInput from "./components/tags-input";
import ToggleDemo from "./components/toggle-demo";

const App = () => {
  return (
    <div>
      <h2>State in React</h2>
      {/* <Counter1 /> */}
      <Counter2 />
      <NameInput />
      <ToggleDemo />
      <TagsInput />
    </div>
  );
};

export default App;
