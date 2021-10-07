function include(file) {
  
  var script  = document.createElement('script');
  script.src  = file;
  script.type = 'text/javascript';
  script.defer = true;
  
  document.getElementsByTagName('head').item(0).appendChild(script);
  
}
  
/* Include Many js files */
include('https://ferroboyd.github.io/hostmeplz/iframeResizer.min.js');

iFrameResize({
  log                     : true,                  // Enable console logging
  enablePublicMethods     : true,                  // Enable methods within iframe hosted page
  resizedCallback         : function(messageData){ // Callback fn when resize is received
    console.log('CB');
    console.log('Frame ID: ' + messageData.iframe.id);
    console.log('Width: ' + messageData.height);
    console.log('Height' + messageData.width);
    console.log('Event type: ' + messageData.type);
    console.log('--------');
  }
});
