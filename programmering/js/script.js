const togglebutton = document.querySelector(".toggle-button");
const navbarLinks=document.getElementsByClassName('mylinks')[0]

togglebutton.addEventListener('click',()=>{
  navbarLinks.classList.toggle('active');
})



/* burgermenu til kryds
togglebutton.addEventListener("click", () => {
  togglebutton.classList.toggle("active");
})
*/