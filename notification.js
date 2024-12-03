if(Notification.permission !== 'granted'){
    if(confirm('Accepter les notifications ?')){
            Notification.requestPermission()
            .then(permission =>{
                // Si on les a
                console.log(permission)
                // alert('MERCI')
                if(permission === "granted"){
                console.log("Notification possible")
                // notif de test
            }
        })
    }
}