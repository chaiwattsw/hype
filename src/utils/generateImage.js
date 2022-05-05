import html2canvas from "html2canvas";

const generateImage = async (componentRef, elementId, fileName) => {
  if (componentRef.current === null) return;

  const canvas = await html2canvas(componentRef.current, {
    allowTaint: true,
    useCORS: true,
    scrollX: 0,
    scrollY: -window.scrollY,
    onclone: (doc) => {
      if (elementId === "share-tracks" || elementId === "share-artists") {
        doc.getElementById(elementId).style.display = "block";
        let imageElem = document.getElementsByName("share-center");
        for (let i = 0; i < imageElem.length; i++) {
          imageElem[i].style.marginBottom = "1rem";
        }
        return;
      }
      doc.getElementById(elementId).style.width = "660px";
      doc.getElementById(elementId).style.height = "901px";
      doc.getElementById("festival-date").style.marginBottom = "1.25rem";
      doc.getElementById("festival-artists").style.marginTop = "-2.25rem";
      doc.getElementById("music-festival").style.marginTop = "0.5rem";
      let head = doc.getElementsByName("festival-artists-head");
      let second = doc.getElementsByName("festival-artists-second");
      let third = doc.getElementsByName("festival-artists-third");
      for (let i = 0; i < head.length; i++) {
        head[i].style.fontSize = "3rem";
        head[i].style.lineHeight = 1;
      }
      for (let i = 0; i < second.length; i++) {
        second[i].style.fontSize = "2.25rem";
        second[i].style.lineHeight = "2.5rem";
      }
      for (let i = 0; i < third.length; i++) {
        third[i].style.fontSize = "1.5rem";
        third[i].style.lineHeight = "2rem";
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
