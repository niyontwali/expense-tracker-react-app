import Main from "./components/Main";
import { GlobalProvider } from "./contexts/GlobalState";

const App = () => {
  return (
    <>
      <GlobalProvider>
        <Main />
      </GlobalProvider>
    </>
  );
};

export default App;
