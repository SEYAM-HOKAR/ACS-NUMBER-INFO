<script>
const lockScreen = document.getElementById('lockScreen');
const unlockBtn = document.getElementById('unlockBtn');
const passInput = document.getElementById('unlockPass');
const errorText = document.getElementById('lockError');
const btn = document.getElementById('check');

const PASSWORD = "1234"; // 🔑 change password

/* 🔥 STEP 1: Force Fullscreen */
function goFullScreen(){
  const el = document.documentElement;
  if(el.requestFullscreen){
    el.requestFullscreen();
  }else if(el.webkitRequestFullscreen){
    el.webkitRequestFullscreen();
  }
}

/* Check button click */
btn.addEventListener('click', ()=>{
  goFullScreen();                 // ✅ fullscreen
  lockScreen.style.display = "flex";
  document.body.style.overflow = "hidden";
});

/* Unlock button */
unlockBtn.addEventListener('click', ()=>{
  if(passInput.value === PASSWORD){
    lockScreen.style.display = "none";
    document.body.style.overflow = "";
    errorText.style.display = "none";
    passInput.value = "";

    /* optional: exit fullscreen on unlock */
    if(document.fullscreenElement){
      document.exitFullscreen().catch(()=>{});
    }
  }else{
    errorText.style.display = "block";
    lockScreen.classList.add("shake");
    setTimeout(()=>lockScreen.classList.remove("shake"),300);
  }
});
</script>
