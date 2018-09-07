$('#menu').on('click','li',function(e){
    let textNode2 = $('<span class="triangle"></span>')
    let $button = $(e.currentTarget)
    let slides = $('#slides')

    $button.addClass('liClass')
        .append(textNode2)
        .siblings().removeClass('liClass')
            .children("span").remove()
    
})
