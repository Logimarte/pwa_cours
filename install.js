const installBtn = document.querySelector("#installbutton")
let deferredPrompt
windows.addEventListener('beforeinsallprompt', event =>{ 
    event.preventDefault()
    installBtn.computedStyleMap.display = 'block'

})

installBtn.addEventListener('click', async(event) =>{
    event.preventDefault()

    if(deferredPrompt){
        deferredPrompt.prompt()
        const choiceUser = await deferredPromt.userChoice
        if(choiceUser ==='accepted'){
            installBtn.style.display="none"
        }
        deferredprompt=null
    }
})
window.addEventListener('appinstalled',() => {
    installBtn.style.display="none"
})