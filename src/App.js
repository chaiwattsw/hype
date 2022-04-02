import Login from "./components/Login";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center min-h-screen text-center bg-black">
        {/* <Login /> */}

        <section>Your Favorite Song</section>
        <section>Your Facvorite Artist</section>
        <section>Song you might likes based on your top tracks</section>
        <section>Palette</section>
        <section>Your festival lineup</section>
        <section>generate image</section>
        <section>song player</section>
      </div>
    </div>
  );
}

export default App;
