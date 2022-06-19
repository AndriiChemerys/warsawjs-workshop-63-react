import html2canvas from "html2canvas";
import React, { useRef } from "react";

const Capture = ({
  img,
  textTop = "text top",
  textBottom = "bottom tekst",
}) => {
  const ref = useRef(null);
  const exportAsImage = async (el, imageFileName) => {
    const canvas = await html2canvas(el);
    const image = canvas.toDataURL("image/png", 1.0);
    downloadImage(image, imageFileName);
  };
  const downloadImage = (blob, fileName) => {
    const fakeLink = window.document.createElement("a");
    fakeLink.style = "display:none;";
    fakeLink.download = fileName;

    fakeLink.href = blob;

    document.body.appendChild(fakeLink);
    fakeLink.click();
    document.body.removeChild(fakeLink);

    fakeLink.remove();
  };
  const divStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    position: "relative",
    width: 400,
    height: 600,
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  };
  return (
    <>
      <div ref={ref} style={divStyle}>
        <p style={{ zIndex: 1 }}>{textTop}</p>
        <p style={{ zIndex: 1 }}>{textBottom}</p>
      </div>
      <button onClick={() => exportAsImage(ref.current, "test")}>
        Click me
      </button>
    </>
  );
};

export default Capture;
