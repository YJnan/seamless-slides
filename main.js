let n
init()
setInterval(()=>{
  getLeave(getImage(n))
    .one('transitionend', (e)=>{
      getEnter($(e.currentTarget))
    })
  getCurrent(getImage(n+1))
  n += 1
},3000)

function getImage(n){
  return $(`.images > img:nth-child(${x(n)})`)
}

function x(n){
  if(n>3){
    n = n%3
    if (n===0){
      n =3
    }
  } 
  return n
}

function init(){
  n = 1
  $(`.images > img:nth-child(${n})`).addClass('current')
    .siblings().addClass('enter')
}

function getCurrent($node){
  return $node.removeClass('enter leave').addClass('current')
}
function getLeave($node){
  return $node.removeClass('enter current').addClass('leave')
}
function getEnter($node){
  return $node.removeClass('leave current').addClass('enter')
}
