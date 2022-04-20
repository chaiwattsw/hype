import html2canvas from "html2canvas";

const generateImage = async (componentRef, elementId, fileName) => {
  if (componentRef.current === null) return;

  const canvas = await html2canvas(componentRef.current, {
    allowTaint: true,
    useCORS: true,
    width: 382,
    height: 724,
    scale: 3,
    onclone: (doc) => {
      doc.getElementById(elementId).style.display = "block";
      let imageElem = document.getElementsByName("share-center");
      for (let i = 0; i < imageElem.length; i++) {
        imageElem[i].style.marginBottom = "1rem";
      }
    },
  });

  const data = canvas.toDataURL("image/jpeg");
  const link = document.createElement("a");

  if (typeof link.download === "string") {
    link.href = data;
    link.download = fileName;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

export default generateImage;
