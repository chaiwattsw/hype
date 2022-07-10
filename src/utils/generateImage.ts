import html2canvas from "html2canvas";
import { RefObject } from "react";

const generateImage = async (
  componentRef: RefObject<HTMLDivElement>,
  elementId: string,
  fileName: string
) => {
  const isShareElement =
    elementId === "share-tracks" || elementId === "share-artists";
  if (componentRef.current === null) return;

  const canvas = await html2canvas(componentRef.current, {
    allowTaint: true,
    useCORS: true,
    scrollX: 0,
    scrollY: -window.scrollY,
    scale: 2,
    onclone: (doc) => {
      if (isShareElement) {
        (doc.getElementById(elementId) as HTMLElement).style.display = "block";
        return;
      }
      (doc.getElementById(elementId) as HTMLElement).style.width = "660px";
      (doc.getElementById(elementId) as HTMLElement).style.height = "901px";
      (doc.getElementById("festival-date") as HTMLElement).style.marginBottom =
        "1.25rem";
      (doc.getElementById("festival-artists") as HTMLElement).style.marginTop =
        "-2.25rem";
      (doc.getElementById("music-festival") as HTMLElement).style.marginTop =
        "0.5rem";
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
