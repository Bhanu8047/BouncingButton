let wrapper = $('.wrapper');
let button = $('.button');
let time = 0;
wrapper.on('click', ()=>{

    if(time === 0){
        wrapper.addClass("buttonOff");
        time++;
    }
    if(wrapper.hasClass("buttonOff")) {
        button.removeClass("buttonTransOff");
        wrapper.removeClass("buttonOff");
        button.addClass("buttonTransOn");
        wrapper.addClass("buttonOn")
    }
    else{
        button.removeClass("buttonTransOn");
        wrapper.removeClass("buttonOn");
        button.addClass("buttonTransOff");
        wrapper.addClass("buttonOff")
    }
});