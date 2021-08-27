import "./App.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";
import parse from "html-react-parser";

function App() {
  const [text, setText] = useState("");

  return (
    <div className="container">
      <h1 className="text-center pt-5 text-white">Rich Text Editor</h1>
      <div className="row">
        <div className="col-lg-6 mt-5 py-3 h-100">
          <CKEditor
            editor={ClassicEditor}
            data={text}
            onChange={(event, editor) => {
              const data = editor.getData();
              setText(data);
            }}
            config={{
              ckfinder: {
                // Upload the images to the server using the CKFinder QuickUpload command
                // You have to change this address to your server that has the ckfinder php connector
                uploadUrl:
                  "https://example.com/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json",
              },
            }}
          />
        </div>
        <div className="col-lg-6 mt-3">
          <h4 className="text-center mb-3 text-white">Content Output</h4>
          <p className="border h-100 p-2 bg-white output">{parse(text)}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
