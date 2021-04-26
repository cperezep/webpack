import Recipes from "./Recipes";
import sword from "../assets/sword.png";
import "../styles/index.scss";

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Oh Herro, React.</h1>
          <img src={sword} alt="Sword" />
          <Recipes />
        </section>
      </main>
    </>
  );
};

export default App;
