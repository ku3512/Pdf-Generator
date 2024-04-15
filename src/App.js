import React, { useState } from 'react';
import './styles.css';
import Form from './components/Form';
import PdfGenerator from './components/PdfGenerator';

function App() {
  const [pdfData, setPdfData] = useState(null);

  const generatePdf = (name, course) => {
    setPdfData({ name, course });
  };

  return (
    <div className="App">
      <Form generatePdf={generatePdf} />
      {pdfData && <PdfGenerator {...pdfData} />}
    </div>
  );
}

export default App;

