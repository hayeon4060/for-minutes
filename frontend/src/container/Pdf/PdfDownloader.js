import React from "react";

import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import Pdf from "./Pdf";
import '../Minute/Minute.css';

const PdfDownloader = ({
  title,
  topic,
  writer,
  parties,
  date,
  meeting_date,
  summary,
  keyword,
}) => {
  return (
    <PDFDownloadLink
      document={
        <Pdf
          title={title}
          topic={topic}
          writer={writer}
          parties={parties}
          date={date}
          meeting_date={meeting_date}
          summary={summary}
          keyword={keyword}
        />
      }
      fileName={`회의록-${date}.pdf`}
    >
      {({ blob, url, loading, error }) =>
        loading ? "Loading document..." : "Download now!"
      }
    </PDFDownloadLink>
  );
};

export default PdfDownloader;
