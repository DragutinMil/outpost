





const app=new Vue({

    el:"#app",
    data:{
        selected1: '',
        selected2: '',
        selected3: '',
        selected4: '',
        selected5: '',
        selected6: '',
        textarea:'',
        emailadress:''
    },
    methods:   {
        dataimport() {
            const xhr2 = new XMLHttpRequest()      

          const profile = {
                email: this.emailadress,
                textarea: this.textarea,
                player: this.selected1,  
                administrator: this.selected2, 
                organizer: this.selected3, 
                arbiter: this.selected4, 
                coach: this.selected5, 
                investitor: this.selected6
                          
            }
            
            
            xhr2.open("POST", "http://localhost:3000");
            xhr2.setRequestHeader("Content-Type", "application/json");
            xhr2.send(JSON.stringify(profile));
          
          console.log(xhr2.response)
          
        
      }
    }
})
