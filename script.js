function startLoader(){
    let counterElement = document.querySelector('.counter')
    let currentValue = 0;

    function updateCounter(){
        if(currentValue === 100){
            return;
        }
        currentValue += Math.floor(Math.random() * 10) + 1;
        if(currentValue>100){
            currentValue = 100;
        }
        counterElement.textContent = currentValue + "%"

        let delay = Math.floor(Math.random()*200) + 50;
        setTimeout(updateCounter,delay)
    }
    updateCounter()
}
startLoader()
const tl = gsap.timeline()

tl.to('.counter',{
    delay:3.3,
    opacity:0,
    duration:0.2,
    zIndex:0,
    display:'none'
})
tl.to('.bar',{
    duration:1.7,
    height:0,
    delay:.1,
    stagger:{
        amount:0.8,
    },
    ease:'power4.inOut',
})
tl.from(".logo",{
    y:-50,
    duration:.3,
    opacity:0
})
tl.from('.link',{
    y:-20,
    duration:.2,
    opacity:0,
    stagger:.2,
})

tl.to('.overlay',{
    zIndex:0,
    display:"none"
})

let nm = document.querySelector("h2").textContent.split('').map(val=>`<span>${val}</span>`).join("")

document.querySelector('h2').innerHTML = nm

tl.from("h2 span",{
    y:100,
    rotate:90,
    duration:.3,
    stagger:.1,
    opacity:0
})

tl.to('h2',{
    transform:"translateX(-40%)",
    scrollTrigger:{
        trigger:"main",
        scroll:"body",
        markers:true,
        start:"top 0",
        end:"top -200%",
        scrub:1,
        pin:true
    }
})