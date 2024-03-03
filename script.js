

//   typing animation 
var typed = new Typed('#element', {
  strings: [' Web Developer.', 'Programmer', ' Web Designer.'],
  typeSpeed: 70,
});

function clickfun() {
  // document.querySelector('.navDrawerLinks').classList.toggle('unActive')
  // document.querySelector('.navDrawerLinks').classList.toggle('active')
  document.querySelector('.navDrawerLinks').style.left=`0%`

}
function clickCut() {
  document.querySelector('.navDrawerLinks').style.left=`-100%`
  // document.querySelector('.navDrawerLinks').classList.toggle('unActive')
  // document.querySelector('.navDrawerLinks').classList.toggle('active')
}
document.querySelectorAll('.navDrawerLinks ul li').forEach((el)=>{
el.addEventListener('click',()=>{
  document.querySelector('.navDrawerLinks').style.left=`-100%`
})

})

