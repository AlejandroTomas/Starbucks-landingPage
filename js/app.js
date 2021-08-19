window.addEventListener('load',() =>{


    let [...arrThum] = document.querySelectorAll('.item-thumb');
    let arrImgThum=[
        document.getElementById('img-thumb-green'),
        document.getElementById('img-thumb-pink'),
        document.getElementById('img-thumb-violet')
    ]
    let imgCoffeSrc=["images/img1.png","images/img2.png","images/img3.png"]
    let $cilcleColor = document.getElementById("circle-background");
    let $imageCoffe = document.querySelector(".rigth-side > img");
    
    function disableScroll(){  
        var x = window.scrollX;
        var y = window.scrollY;
        window.onscroll = function(){ window.scrollTo(x, y) };
    }

    function enableScroll(){  
        window.onscroll = null;
    }

    document.addEventListener('click',(e)=>{
        if(e.target===arrImgThum[0]){
            $cilcleColor.style.backgroundColor= "#027244";
            $imageCoffe.setAttribute("src",imgCoffeSrc[0])
        }

        if(e.target===arrImgThum[1]){
            $cilcleColor.style.backgroundColor= "#EB7396";
            $imageCoffe.setAttribute("src",imgCoffeSrc[1])
        }

        if(e.target===arrImgThum[2]){
            $cilcleColor.style.backgroundColor= "#D751B0";
            $imageCoffe.setAttribute("src",imgCoffeSrc[2])
        }

        if(e.target.matches('#action-menu-responsive')){
            document.getElementById('menu-responsive').style.display= 'flex';
            disableScroll();
        }

        if(e.target.matches('#close-menu-responsive')){
            document.getElementById('menu-responsive').style.display= 'none';
            enableScroll();
        }

    });


    window.addEventListener("resize",(e)=>{
        console.log(window.outerWidth)
        console.log(window.innerWidth)
    });
    
});
