import Class from "./Gallery.module.css";

export default function Gallery(props) {
  const { images } = props;

  if (images) {
    return (
      <div className={Class.gallery}>
        {images.map((image) => (
          <div>
            <img src={image} />
          </div>
        ))}
      </div>
    );
  }
  return <h1>No Images</h1>;
}
