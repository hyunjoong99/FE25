// 타이핑 애니메이션
(function(){
  const spanEl = document.querySelector("main h2 span");
  const txtArr = ['Web Publisher', 'Front-End Developer', 'Web UI Designer', 'UX Designer', 'Back-End Developer'];
  let index = 0;
  let currentTxt = txtArr[index].split("");

  function writeTxt(){
    spanEl.textContent += currentTxt.shift(); 
    if(currentTxt.length !== 0){ 
      setTimeout(writeTxt, Math.floor(Math.random() * 100));
    }else{
      currentTxt = spanEl.textContent.split("");
      setTimeout(deleteTxt, 3000);
    }
  }

  function deleteTxt(){
    currentTxt.pop();
    spanEl.textContent = currentTxt.join("");
    if(currentTxt.length !== 0){
      setTimeout(deleteTxt, Math.floor(Math.random() * 100));
    }else{
      index = (index + 1) % txtArr.length;
      currentTxt = txtArr[index].split("");
      writeTxt();
    }
  }

  writeTxt();
})();

const headerEl = document.querySelector("header");
function scrollCheck(){
  const scrollY = window.scrollY || window.pageYOffset;
  headerEl.classList.toggle("active", scrollY > 0);
}
window.addEventListener('scroll', () => {
  requestAnimationFrame(scrollCheck);
});

const animationMove = function(selector){
  const targetEl = document.querySelector(selector);
  const browserScrollY = window.pageYOffset;
  const targetScorllY = targetEl.getBoundingClientRect().top + browserScrollY;
  window.scrollTo({ top: targetScorllY, behavior: 'smooth' });
};

const scrollMoveEl = document.querySelectorAll("[data-animation-scroll='true']"); 
scrollMoveEl.forEach(el => {
  el.addEventListener('click', function(){
    const target = this.dataset.target;
    animationMove(target);
  });
});
