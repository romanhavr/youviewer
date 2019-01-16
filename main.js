import search from './modules/search';

// Preparing connection to Youtube API
function loadClient() {
  gapi.load('client', start);
};

function start() {
  gapi.client.init({
      'apiKey': '___my_own_API_KEY___'
    }, 
    loadAPIClientInterfaces()
    );
};

function loadAPIClientInterfaces() {
  gapi.client.load('youtube', 'v3', function() {
    search();
  });
};