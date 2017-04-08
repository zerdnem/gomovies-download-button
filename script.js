window.onload = function() {
    setBtn();
}

var episodes = document.getElementsByClassName('les-content');
if (episodes.length > 0) {
    for (var i = 0; i < episodes.length; i++) {
        for (var j = 0; j < episodes[i].children.length; j++) {
            var episode = episodes[i].children[j]
            episode.addEventListener('click', function(){
                location.reload();
            });
        }
    }
}

function setBtn() {
    var url = window.location.href;
    var str = 'watching';
    var watching = url.match(str);
    if (watching) {
        var src = '';
        var videoTags = document.getElementsByTagName('video')
        for( var i = 0; i < videoTags.length; i++ ){
            src = videoTags.item(i).currentSrc;
        }
        var el = "<a href='' download id='download-btn' class='btn'><i class='fa fa-download'></i> <span>Download</span></a>";
        var parent = document.getElementById('bar-player');
        parent.innerHTML = el + parent.innerHTML;
        var dl = document.getElementById('download-btn').setAttribute('href', src);
    }
}
