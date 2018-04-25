function init(imgObjList) {
    //Picture collection configuration information
    var imgObjInit = imgObjList;

    var $imglist = document.querySelector(".imglist"),
        $currentPageNo = document.querySelector(".current-page .num"),
        $currentPageText = document.querySelector(".current-page .text"),
        $currentPageNum = document.querySelector(".current-page-num"),
        $pageTotal = document.querySelector(".page-total"),
        $lastBtn = document.querySelector(".last-btn"),
        $nextBtn = document.querySelector(".next-btn");

    for(var i = 1; i <= imgObjInit.total; i++) {
        imgObjInit.imglistStr += '<img src="' + imgObjInit.url + imgObjInit.subUrl + '/' + i + '.jpeg" alt="' + i + ' ' + imgObjInit.subUrl + '" class="hide" />';
    }

    $imglist.innerHTML = imgObjInit.imglistStr;
    $currentPageText.innerHTML = ' ' + imgObjInit.subUrl;
    $pageTotal.innerHTML = imgObjInit.total;
    setPageInfo();

    //Page switching
    $lastBtn.onclick = function () {
        var pageNum = imgObjInit.pageNum;
        if(pageNum <= 1) {
            return;
        } else {
            $imglist.children[pageNum - 1].classList.add('hide');
            imgObjInit.pageNum = pageNum - 1;
            setPageInfo();
        }

    }
    $nextBtn.onclick = function () {
        var pageNum = imgObjInit.pageNum;
        if(pageNum >= imgObjInit.total) {
            return;
        } else {
            $imglist.children[pageNum - 1].classList.add('hide');
            imgObjInit.pageNum = pageNum + 1;
            setPageInfo();
        }
    }

    function setPageInfo() {
        $imglist.children[imgObjInit.pageNum - 1].classList.remove('hide');
        $currentPageNo.innerHTML = imgObjInit.pageNum < 10 ? '0' + imgObjInit.pageNum : imgObjInit.pageNum;
        $currentPageNum.innerHTML = imgObjInit.pageNum < 10 ? '0' + imgObjInit.pageNum : imgObjInit.pageNum;
    }
}