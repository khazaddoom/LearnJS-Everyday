const webWorker = new Worker('worker.js');

webWorker.onmessage = function (event) {
    alert("Completed " + event.data + "iterations" );
 };