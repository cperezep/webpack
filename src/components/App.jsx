import MonsterList from "./MonsterList";
import "../styles/index.scss";
import webpack from "../assets/webpack.svg";

const App = () => {
  return (
    <>
      <section className="banner"></section>
      <main>
        <section>
          <MonsterList />
        </section>
        <img src={webpack} alt="Webpack" />
      </main>
    </>
  );
};

export default App;
