import { useRef } from "react";
import "./App.css";
import Header from "./Components/Header";
import Summery from "./Components/Summery";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Hobbies from "./Components/Hobbies";
import Portfolio from "./Components/Portfolio";
import ContactForm from "./Components/ContactForm";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function App() {
  const pdfRef = useRef();

  const generatePDF = () => {
    const element = pdfRef.current;
    html2canvas(element, {
      scale: 2,
      useCORS: true,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pdf.internal.pageSize.height;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pdf.internal.pageSize.height;
      }

      pdf.save("Resume.pdf");
    });
  };

  return (
    <>
      <div ref={pdfRef} className="pdf-content">
        <Header />
        <Summery />
        <Education />
        <Skills />
        <Hobbies />
        <Portfolio />
        <ContactForm />
      </div>
      <button onClick={generatePDF} className="pdf-button">
        Download Resume as PDF
      </button>
    </>
  );
}

export default App;
