iFrameResize({
  log                     : true,                  // Enable console logging
  resizedCallback         : function(messageData){ // Callback fn when resize is received
    console.log('CB');
    console.log('Frame ID: ' + messageData.iframe.id);
    console.log('Width: ' + messageData.height);
    console.log('Height' + messageData.width);
    console.log('Event type: ' + messageData.type);
    console.log('--------');
  }
});
