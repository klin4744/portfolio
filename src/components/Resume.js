import React, { Component } from 'react';
import { pdfjs } from 'react-pdf';
import { Document, Page } from 'react-pdf';
import pdf from '../assets/resume.pdf';
import './Resume.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends Component {
   state = {
      numPages: null,
      pageNumber: 1,
   };

   onDocumentLoadSuccess = ({ numPages }) => {
      this.setState({ numPages });
   };

   render() {
      const { pageNumber, numPages } = this.state;

      return (
         <div id="resume">
            <div className="resume-content">
               <Document file={pdf} onLoadSuccess={this.onDocumentLoadSuccess}>
                  <Page width="1000" pageNumber={pageNumber} />
               </Document>
            </div>
         </div>
      );
   }
}

export default Resume;
