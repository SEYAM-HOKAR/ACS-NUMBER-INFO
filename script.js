<script>
const lockScreen = document.getElementById('lockScreen');
const unlockBtn = document.getElementById('unlockBtn');
const passInput = document.getElementById('unlockPass');
const errorText = document.getElementById('lockError');

const PASSWORD = "1234"; // change password

btn.addEventListener('click', ()=>{
  lockScreen.style.display = "flex";
  document.body.style.overflow = "hidden";
});

unlockBtn.addEventListener('click', ()=>{
  if(passInput.value === PASSWORD){
    lockScreen.style.display = "none";
    document.body.style.overflow = "";
    errorText.style.display = "none";
    passInput.value = "";
  }else{
    errorText.style.display = "block";
    lockScreen.classList.add("shake");
    setTimeout(()=>lockScreen.classList.remove("shake"),300);
  }
});
</script>
