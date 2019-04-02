//Background Colors
function Background(value){
    var list = document.querySelectorAll('li')
    for(var i = 0; i < list.length; i++){
        list[i].style.backgroundColor = value
    }   
}

//Font Settings
function FontColor(value){
    var list = document.querySelectorAll('li')
    for(var i = 0; i < list.length; i++){
        list[i].style.color = value
    }
}

function FontStyle(value){
    var list = document.querySelectorAll('li')
    for(var i = 0; i < list.length; i++){
        list[i].style.fontStyle = value
    }
}

function FontSize(value){
    var list = document.querySelectorAll('li')
    for(var i = 0; i < list.length; i++){
        list[i].style.fontSize = value
    }
}