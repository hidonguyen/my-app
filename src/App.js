import React from 'react';
import logo from './logo.svg';
import './App.css';

function downloadFile(url, filename) {
  fetch(url)
      .then(response => response.blob())
      .then(blob => {
          const urlBlob = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.style.display = 'none';
          a.href = urlBlob;
          a.download = filename; // Tên file sẽ được tải xuống
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(urlBlob); // Giải phóng bộ nhớ
      })
      .catch(() => alert('File download failed!'));
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        Button to test service worker: <button onClick={() => {
          downloadFile('https://github.com/scssolutionsdeveloper/smart-salon-pos-integrated/releases/download/v2.1.4/SMART-Salon-POS_2.1.4.exe', 'SMART-Salon-POS_2.1.4.exe');
        }
        }>Test</button>
      </header>
    </div>
  );
}

export default App;
