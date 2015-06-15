$( document ).ready(function() {
  $.getJSON( "http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=timmillwood&api_key=28bd575099afbdd6d7ec03a73525540f&format=json", function( data ) {
    $('p.lastfm').html('<strong>Last listened to:</strong> <a href="' + data.recenttracks.track[0].url + '" target="_blank">' + data.recenttracks.track[0].name + '</a> by ' + data.recenttracks.track[0].artist['#text']);
  });
});