// import Counter1 from "./components/counter1";

import Counter2 from "./components/counter2";
import Counter3 from "./components/counter3";
import LikeButton from "./components/like-button";
import NameInput from "./components/name-input";
import TagsInput from "./components/tags-input";
import ToggleDemo from "./components/toggle-demo";
import UserForm from "./components/user-form";

const App = () => {
  return (
    <div>
      <h2>State in React</h2>
      {/* <Counter1 /> */}
      <Counter2 />
      <NameInput />
      <ToggleDemo />
      <TagsInput />
      <UserForm />
      <Counter3 />
      <LikeButton />
    </div>
  );
};

export default App;
