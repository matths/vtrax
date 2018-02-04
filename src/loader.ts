var spinnerStyle:string = `
@keyframes spinner {
  to {transform: rotate(360deg);}
}

.spinner:before {
  content: '';
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  margin-top: -10px;
  margin-left: -10px;
  border-radius: 50%;
  border: 2px solid #ccc;
  border-top-color: #333;
  animation: spinner .6s linear infinite;
}`;

var styleElement:HTMLStyleElement = document.createElement('style');
styleElement.innerText = spinnerStyle;
document.head.appendChild(styleElement);

var loaderElement = document.getElementById('loader');
if (loaderElement!=null) {
	var spinnerElement:HTMLDivElement = document.createElement('div');
	spinnerElement.className = 'spinner';
	loaderElement.appendChild(spinnerElement);
}
