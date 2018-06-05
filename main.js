var allButtons = $('#buttons > div')
for(let i = 0;i < allButtons.length;i++){
  $(allButtons[i]).on('click',(click) =>{
    var index = $(click.currentTarget).index()
    var mv = index*-300
    $('#images').css({transform: 'translate('+ mv +'px)'})
    n = index
    activeButtons(allButtons.eq(n))
  })
}

let n = 0
var size = allButtons.length
simplifyButtons(n%size)
var timerId = setTimer()
$('#window').on('mouseenter',() =>{
  window.clearInterval(timerId)
})
$('#window').on('mouseleave',() =>{
  timerId = setTimer()
})

function activeButtons($buttons){
  $buttons
  .addClass('red')
  .siblings('.red').removeClass('red')
}
function simplifyButtons(index){
  allButtons.eq(index).trigger('click')
  activeButtons(allButtons.eq(index))
}
function setTimer(){
  return setInterval(() =>{
  n +=1
  simplifyButtons(n%size)
},1500)
}