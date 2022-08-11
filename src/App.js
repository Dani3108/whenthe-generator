import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';
import React, {useCallback} from 'react';

import './styles.css'
import exampleGif from './images/example.gif'

function App() {

  const handleCaptureClick = useCallback(async () => {
    const canvas = await html2canvas(document.querySelector("#capture"));
    const dataURL = canvas.toDataURL('image/webp');
    downloadjs(dataURL, 'download.webp', 'image/webp');
  }, []);

  return (

    <div>
      <h1 className="title">r/whenthe generator</h1>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className='parent' id='capture'>
        <div className='child'>
          <h2 className='title'>when the imposter is sus and the imposter is sussy and the imposter is sus and and ahgjhhdfkjghdfjkhghdhfjg</h2>
        </div>
        <img src={exampleGif} className="center"></img>
      </div>

      <li>
      <a href="#" onClick={handleCaptureClick}>
        Capture
      </a>
</li>
    </div>
  );
}

export default App;
