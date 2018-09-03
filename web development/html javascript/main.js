// listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

// save bookmark
function saveBookmark(e){
// Get form values
var siteName = document.getElementById('siteName').value;
var siteUrl = document.getElementById('siteUrl').value;

if(!siteName || !siteUrl){
  alert('maddapaker fill in the form');
  return false;
}

var bookmark = {
  name: siteName,
  url: siteUrl
}



/*
//Local Storage Test
  localStorage.setItem('test', 'Hello world');
  localStorage.getItem('test');
  localStorage.removeItem('test');
  localStorage.getItem('test');

*/
// test if bookmarks is null
if(localStorage.getItem('bookmarks') === null){
  // init array
  var bookmarks = [];
  //add to array
  bookmarks.push(bookmark);
  //set to loacal Storage
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
} else {
  // Get bookmarks from localStorage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
 // Add bookmark to array
bookmarks.push(bookmark);
// Re-set back to local Storage
localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}

//Re-fetch bookmarks
fetchBookmarks();

//prevent form from submitting
e.preventDefault();
}


//Delete Bookmarks
function deleteBookmark(url){
  // Get bookmarks from local Storage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
//loop through bookmarks
  for(var i = 0; i<bookmarks.length; i++){
    if(bookmarks[i].url == url){
      //revomve from array
      bookmarks.splice(i, 1);
    }
  }
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  //Re-fetch bookmarks
  fetchBookmarks();
}





// Fetch Bookmarks
function fetchBookmarks(){
  // Get bookmarks from LocalStorage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  console.log(bookmarks);
  //Get output id
  var bookmarksResult = document.getElementById('bookmarksResult');

  // build output
  bookmarksResult.innerHTML = '';
  for(var i=0; i<bookmarks.length; i++){
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;

  bookmarksResult.innerHTML += '<div class="well">'+
                                '<h3>'+name+
                                ' <a class="btn btn-default" target="_blank" href="'+url+'">visit</a> ' +
                                ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger"  href="#">Delete</a> '

                                '</h3>'+
                                '</div>';
  }
}
