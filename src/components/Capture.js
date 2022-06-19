import React, { useCallback, useRef } from "react";
import html2canvas from "html2canvas";
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

const Capture = ({ img, textTop, textBottom }) => {
  const ref = useRef(null);

  return (
    <>
      <div
        ref={ref}
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          position: "relative",
          width: 400,
          height: 600,
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
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
