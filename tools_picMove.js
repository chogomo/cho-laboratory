window.onload=function () {
    var allitem = document.querySelectorAll(".item");
    var alltitle = document.querySelectorAll(".title");
    var allExp = document.querySelectorAll(".Expertise");
    var alllink = document.querySelectorAll(".link");
    //用o表示是否有物件開啟著
    var o=false,a=0;

    for (let index = 0; index < allitem.length; index++) {
        allitem[index].num=index;
        //用false表示當前點擊物件為關閉狀態
        allitem[index].bool=false;
        allitem[index].onclick= function () {
            if (this.bool) {
                //點擊自己關閉
                setN();
                this.style.animation="W6_2 1s forwards";
                this.bool=false;
                o=false;
                alltitle[a].style.animation="titleMoveDw 1s forwards";
                allExp[a].style.animation="ExpDis 1s forwards";
                alllink[a].style.animation="linkDw 1s forwards";
            }else{
                if (o) {
                    //有開其他區域的狀態下打開
                    tof();
                    allitem[a].style.animation="W6_1 1s forwards";
                    alltitle[a].style.animation="titleMoveDw 1s forwards";
                    allExp[a].style.animation="ExpDis 1s forwards";
                    alllink[a].style.animation="linkDw 1s forwards";
                    this.style.animation="W1_6 1s forwards";
                    this.bool=true;
                    a=this.num;
                    alltitle[a].style.animation="titleMoveUp 1s forwards";
                    allExp[a].style.animation="ExpAppear 1s forwards";
                    alllink[a].style.animation="linkUp 1s forwards";
                }else{
                    //原始狀態打開
                    setW();
                    this.style.animation="W2_6 1s forwards";
                    this.bool=true;
                    a=this.num;
                    alltitle[a].style.animation="titleMoveUp 1s forwards";
                    allExp[a].style.animation="ExpAppear 1s forwards";
                    alllink[a].style.animation="linkUp 1s forwards";
                }
                o=true;
            }  
        }; 
    }

    function setN() {
        for (let i = 0; i < allitem.length; i++) {
            allitem[i].style.animation="W1_2 1s forwards";
        }    
    };
    function setW() {
        for (let i = 0; i < allitem.length; i++) {
            allitem[i].style.animation="W2_1 1s forwards";
        }    
    };
    function tof() {
        for (let i = 0; i < allitem.length; i++) {
            allitem[i].bool=false;
        }    
    };
    
    var banner = document.querySelector(".banner");
    var mainNav = document.getElementById("mainNav");
     
    function navdis(obj){
        window.onscroll = function(){
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            var objHidth = obj.offsetHeight; 
            if (scrollTop>objHidth) {
                mainNav.style.opacity="0";   
            }else if(scrollTop<objHidth){
                mainNav.style.opacity=""; 
            }
        }
    }

    navdis(banner);

};