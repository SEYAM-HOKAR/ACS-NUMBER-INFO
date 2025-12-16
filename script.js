<script>
const lockScreen = document.getElementById('lockScreen');
const unlockBtn = document.getElementById('unlockBtn');
const passInput = document.getElementById('unlockPass');
const errorText = document.getElementById('lockError');
const btn = document.getElementById('check');

const PASSWORD = "1234";

/* STEP 1 */
function goFullScreen(){
  const el = document.documentElement;
  if(el.requestFullscreen) el.requestFullscreen();
  else if(el.webkitRequestFullscreen) el.webkitRequestFullscreen();
}

/* STEP 2 */
history.pushState(null,null,location.href);
window.onpopstate = ()=>{
  history.go(1);
  lockScreen.style.display="flex";
};

/* STEP 3 */
document.addEventListener("visibilitychange",()=>{
  if(document.hidden){
    lockScreen.style.display="flex";
  }
});

/* Button click */
btn.addEventListener('click',()=>{
  goFullScreen();
  lockScreen.style.display="flex";
  document.body.style.overflow="hidden";
});

/* Unlock */
unlockBtn.addEventListener('click',()=>{
  if(passInput.value===PASSWORD){
    lockScreen.style.display="none";
    document.body.style.overflow="";
    passInput.value="";
    errorText.style.display="none";
    if(document.fullscreenElement) document.exitFullscreen();
  }else{
    errorText.style.display="block";
  }
});
</script>
