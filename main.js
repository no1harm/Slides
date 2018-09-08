/* $('#menu').on('click','li',function(e){
    let textNode2 = $('<span class="triangle"></span>')
    let $button = $(e.currentTarget)
    let $slides = $('#slides')
    let index = $(e.currentTarget).index()
    $button.addClass('liClass')
    .append(textNode2)
    .siblings().removeClass('liClass')
    .children("span").remove()
    $slides.css({transform:`translateX(${index*-960}px)`})
    window.clearInterval(timerId)
    n = index
})

let timerId = timer()

let n = 0

function timer(){
    return setInterval(function(){
        let $li = $('#menu li')
        let $liLength = $li.length
        n += 1
        $li.eq(n%$liLength).trigger('click')
    },2000)
} */ 
let $slides = $('#slides')
let textNode2 = $('<span class="triangle"></span>')
let n = 0
let $li = $('#menu li')
let size = $li.length

for(let i=0;i<$li.length;i++){
    $li.eq(i).on('click',function(e){
        let $button = $(e.currentTarget)
        let index = $(e.currentTarget).index()
        $slides.css({transform:`translateX(${index*-960}px)`})
        n = index      
        $button
            .addClass('liClass')
            .append(textNode2)
            .siblings().removeClass('liClass')
            .children("span").remove()
    })
}

$li.eq(n % size).trigger('click')

let timerId = setTimer()

function setTimer() {
    return setInterval(() => {
        $li.eq(n % size).trigger('click')
        n += 1
    }, 3000)
}

// 当鼠标移入
$('#slides').on('mouseenter',function(){
    window.clearInterval(timerId)
})

// 当鼠标移出
$('#slides').on('mouseleave',function(){
    timerId = setTimer()
})

//当离开本页面
document.addEventListener('visibilitychange',function(e){
    if(document.hidden){
        window.clearInterval(timerId)
    }else{
        timerId = setTimer()
        console.log(2)
    }
})