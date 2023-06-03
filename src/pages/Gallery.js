import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import "../styles/Gallery.css";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../assets/images", false, /\.(png|jpe?g|svg)$/)
);

function App() {
  return (
    <PhotoProvider>
      <div className="foo">
        {images.map((item, index) => (
          <PhotoView key={index} src={item} scaleMode="actual">
            <img src={item} alt="" />
          </PhotoView>
        ))}
      </div>
    </PhotoProvider>
  );
}

export default App;
