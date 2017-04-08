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
        var el = '';
        var videoTags = document.getElementsByTagName('video');
        if (videoTags.length == 0) {
            var iframeTag = document.getElementById('iframe-embed').getAttribute('src');
            src = iframeTag;
            el = "<a href='' id='download-btn' class='btn'><i class='fa fa-download'></i> <span>Download</span></a>";
        }
        for( var i = 0; i < videoTags.length; i++ ){
            src = videoTags.item(i).currentSrc;
            el = "<a href='' download id='download-btn' class='btn'><i class='fa fa-download'></i> <span>Download</span></a>";
        }
        var parentEl = document.getElementById('bar-player');
        parentEl.innerHTML = el + parentEl.innerHTML;
        var dl = document.getElementById('download-btn').setAttribute('href', src);
    }
}
