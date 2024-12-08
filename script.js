const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function videoconanimation()
{
    var videocon=document.querySelector("#videocontainer")
var playbtn = document.querySelector("#play")


videocon.addEventListener("mouseenter",function()
{
    gsap.to(playbtn,{
        scale:1,
        opacity:1
    })
})

videocon.addEventListener("mouseleave",function()
{
    gsap.to(playbtn,{
        scale:0,
        opacity:0
    })
})

videocon.addEventListener("mousemove",function(dets)
{
    gsap.to(playbtn,{
        left:dets.x-100,
        top:dets.y-100
    })
})

}
videoconanimation()

function loadingpageanimation()
{
    gsap.from("#page1 #head1",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.7,
        stagger:0.9
    })

    gsap.from("#page1 #head2",{
        y:100,
        opacity:0,
        delay:0.8,
        duration:0.7,
        stagger:0.9
    })
}
loadingpageanimation()


