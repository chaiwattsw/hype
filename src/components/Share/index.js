import React from "react";

const Share = () => {
  // const shareComponent = useRef();

  // const downloadImage = async () => {
  //   const element = shareComponent.current;
  //   const canvas = await html2canvas(element, {
  //     allowTaint: true,
  //     useCORS: true,
  //   });

  //   const data = canvas.toDataURL("image/png");
  //   const link = document.createElement("a");

  //   if (typeof link.download === "string") {
  //     link.href = data;
  //     link.download = "hype.png";

  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //   } else {
  //     window.open(data);
  //   }
  // };

  /* <button onClick={downloadImage} className="bg-green-500 p-6">
        Share
      </button>

      <div ref={shareComponent} className="grid grid-cols-5 gap-6">
        {data?.items?.map((item) => (
          <div>
            <img src={item.album.images[1].url} />
            <p className="text-black">{item.name}</p>
          </div>
        ))}
      </div> */

  return <div>Share</div>;
};

export default Share;
