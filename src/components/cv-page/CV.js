import pdfFile from "./Abel Gurung_CV-july-24.pdf";

function App() {
  return (
    <div>
      <div class="relative h-[55rem]">
        <iframe
          class="absolute top-0 left-0 w-full h-full overflow-y-auto"
          src={pdfFile}
          type="application/pdf"
        ></iframe>
      </div>
    </div>
  );
}

export default App;
