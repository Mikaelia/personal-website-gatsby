import React from "react"
import PDFViewer from "./PDFViewer"
import PDFJSBackend from "./backends/pdfs.js"

const ResumePage = () => {
  let _myViewer = React.createRef()

  return (
    <div className="App">
      <PDFViewer
        ref={_myViewer}
        backend={PDFJSBackend}
        src="/mikaela_gurney-resume-2020.pdf"
      />
    </div>
  )
}

export default ResumePage
