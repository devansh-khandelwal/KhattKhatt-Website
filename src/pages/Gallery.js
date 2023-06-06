import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import "../styles/Gallery.css";
import Reveal from "react-reveal/Reveal";
import Footer from "../components/Footer";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../assets/images", false, /\.(png|jpe?g|svg)$/)
);

function App() {
  return (
    <div className="gallery">
      <Reveal bottom>
        <h1>Photos</h1>
        <PhotoProvider>
          <div className="foo">
            {images.map((item, index) => (
              <PhotoView key={index} src={item} scaleMode="actual">
                <img src={item} alt="" />
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
        <div className="footer">
          <Footer />
        </div>
      </Reveal>
    </div>
  );
}

export default App;
