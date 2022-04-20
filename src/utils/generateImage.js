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
  // eslint-disable-next-line react-hooks/exhaustive-deps
};

export default generateImage;
