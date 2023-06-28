var serverAddress = "http://172.20.10.3";


let f1 = 0,
    f2 = 0,
    sum1 = 0,
    sum2 = 0,
    j1 = 1,
    j2 = 2,
    ans = "",
    j3, j4
    
class Songo {

    constructor(coteJoueur1, coteJoueur2, pointJoueur1, pointJoueur2) {

        this.coteJoueur1 = [5,5,5,5,5,5,5]
        this.coteJoueur2 = [5,5,5,5,5,5,5]
        this.pointJoueur1 = 0;
        this.pointJoueur2 = 0
        this.tour = 1;

    }
    envoyerDonnees() {
      let  data={
            entier1: this.pointJoueur1,
            entier2: this.pointJoueur2,
            tableau1: this.coteJoueur1,
            tableau2: this.coteJoueur2
        }

      
        
            let xhr = new XMLHttpRequest();
            xhr.open("POST","app.php",true)
        xhr.setRequestHeader("Content-Type","application/json")
        xhr.onreadystatechange=()=>{
            if(xhr.readyState==XMLHttpRequest.DONE){
                alert(xhr.responseText);
                
            }
        };

        xhr.send(JSON.stringify(data));
            
    }

    
    RecupererDelaBd(){
   
          // Envoyer une requête AJAX pour récupérer les données
var xhr1 = new XMLHttpRequest();
var xhr2 = new XMLHttpRequest();
var v1 = new XMLHttpRequest();
var v2 = new XMLHttpRequest();
var v3 = new XMLHttpRequest();
var v4 = new XMLHttpRequest();
var v5 = new XMLHttpRequest();
var v6 = new XMLHttpRequest();
var v7 = new XMLHttpRequest();
var j1 = new XMLHttpRequest();
var j2 = new XMLHttpRequest();
var j3 = new XMLHttpRequest();
var j4 = new XMLHttpRequest();
var j5 = new XMLHttpRequest();
var j6 = new XMLHttpRequest();
var j7 = new XMLHttpRequest();

xhr1.onreadystatechange =()=> {
  if (xhr1.readyState === 4 && xhr1.status === 200) {
    var entier1 = parseInt(xhr1.responseText);
    
    let elmt1 = document.getElementById("111")
       
        elmt1.innerHTML = entier1
        this.pointJoueur1=entier1
        
  }
};

xhr2.onreadystatechange = () => {
  if (xhr2.readyState === 4 && xhr2.status === 200) {
    var entier2 = parseInt(xhr2.responseText);
    let elmt2 = document.getElementById("222")
    elmt2.innerHTML = entier2
    this.pointJoueur2=entier2
    
  }
};

v1.onreadystatechange = () => {
    if (v1.readyState === 4 && v1.status === 200) {
      var t1 = parseInt(v1.responseText);
      let bouton = document.getElementById("0");
        bouton.innerHTML = t1;
       
        this.coteJoueur1[0]=t1
        
        
    }
  };

 
 
  v2.onreadystatechange = ()=> {
    if (v2.readyState === 4 && v2.status === 200) {
      var t2 = parseInt(v2.responseText);
      let bouton1 = document.getElementById("1");
        bouton1.innerHTML = t2;
        this.coteJoueur1[1]=t2
       
    }
  };
  
  v3.onreadystatechange = () => {
    if (v3.readyState === 4 && v3.status === 200) {
      var t3 = parseInt(v3.responseText);
      let bouton2 = document.getElementById("2");
        bouton2.innerHTML = t3;
        this.coteJoueur1[2]=t3
    }
  };
  
  v4.onreadystatechange = () => {
    if (v4.readyState === 4 && v4.status === 200) {
      var t4 = parseInt(v4.responseText);
      let bouton3 = document.getElementById("3");
      bouton3.innerHTML = t4;
      this.coteJoueur1[3]=t4
    }
  };
  
  v5.onreadystatechange = () => {
    if (v5.readyState === 4 && v5.status === 200) {
      var t5 = parseInt(v5.responseText);
      let bouton4 = document.getElementById("4");
        bouton4.innerHTML = t5;
        this.coteJoueur1[4]=t5
    }
  };
  
  v6.onreadystatechange = () => {
    if (v6.readyState === 4 && v6.status === 200) {
      var t6 = parseInt(v6.responseText);
      let bouton5 = document.getElementById("5");
      bouton5.innerHTML = t6;
      this.coteJoueur1[5]=t6
    }
  };
  
  v7.onreadystatechange = () => {
    if (v7.readyState === 4 && v7.status === 200) {
      var t7 = parseInt(v7.responseText);
      let bouton6 = document.getElementById("6");
        bouton6.innerHTML = t7;
        this.coteJoueur1[6]=t7
    }
  };
// jouer 2
var tj1;
  j1.onreadystatechange = () => {
    if (j1.readyState === 4 && j1.status === 200) {
      tj1 = parseInt(j1.responseText);
     
      let bouton13 = document.getElementById("13");
      bouton13.innerHTML = tj1;
      this.coteJoueur2[0]=tj1
    }
  };

  j2.onreadystatechange = () => {
    if (j2.readyState === 4 && j2.status === 200) {
      var tj2 = parseInt(j2.responseText);

      let bouton12 = document.getElementById("12");
      bouton12.innerHTML = tj2;
      this.coteJoueur2[1]=tj2
    }
  };
  
  j3.onreadystatechange = () => {
    if (j3.readyState === 4 && j3.status === 200) {
      var tj3 = parseInt(j3.responseText);
      let bouton11 = document.getElementById("11");
      bouton11.innerHTML = tj3;
      this.coteJoueur2[2]=tj3
    }
  };
  
  j4.onreadystatechange = () => {
    if (j4.readyState === 4 && j4.status === 200) {
      var tj4 = parseInt(j4.responseText);
      let bouton10 = document.getElementById("10");
        bouton10.innerHTML = tj4;
        this.coteJoueur2[3]=tj4
    }
  };
  
  j5.onreadystatechange = () => {
    if (j5.readyState === 4 && j5.status === 200) {
      var tj5 = parseInt(j5.responseText);
      let bouton9 = document.getElementById("9");
        bouton9.innerHTML = tj5;
        this.coteJoueur2[4]=tj5
    }
  };
  
  j6.onreadystatechange = () => {
    if (j6.readyState === 4 && j6.status === 200) {
      var tj6 = parseInt(j6.responseText);
      let bouton8 = document.getElementById("8");
      bouton8.innerHTML = tj6;
      this.coteJoueur2[5]=tj6
    }
  };
  
  j7.onreadystatechange = () => {
    if (j7.readyState === 4 && j7.status === 200) {
      var tj7 = parseInt(j7.responseText);
      let bouton7 = document.getElementById("7");
      bouton7.innerHTML = tj7;
      this.coteJoueur2[6]=tj7
  
    }
  };
//point joeurr 1
xhr1.open("GET", "entier1.php", true);
xhr1.send();

//point joueur 2
xhr2.open("GET", "entier2.php", true);
xhr2.send();

//jouer 1

v1.open("GET", "v1t1.php", true);
v1.send();

v2.open("GET", "v2t1.php", true);
v2.send();

v3.open("GET", "v3t1.php", true);
v3.send();

v4.open("GET", "v4t1.php", true);
v4.send();

v5.open("GET", "v5t1.php", true);
v5.send();

v6.open("GET", "v6t1.php", true);
v6.send();

v7.open("GET", "v7t1.php", true);
v7.send();

//jouer 2

j1.open("GET", "v1t2.php", true);
j1.send();


j2.open("GET", "v2t2.php", true);
j2.send();


j3.open("GET", "v3t2.php", true);
j3.send();

j4.open("GET", "v4t2.php", true);
j4.send();


j5.open("GET", "v5t2.php", true);
j5.send();


j6.open("GET", "v6t2.php", true);
j6.send();


j7.open("GET", "v7t2.php", true);
j7.send();
    }



    nbPoints(idJ) {

        if (idJ == 1)
            return this.pointJoueur1;

        else if (idJ == 2)
            return this.pointJoueur2;
    }

    estBloque(idJ) {

        if (idJ == 1) {
            if (this.tour == 1)
                return 0;
            else

                return 1;
        } else {
            if (this.tour == 2)
                return 0;
            else
                
            return 1;
        }
    }

    distribution(idJ, p) {
        let q, i;
        var snd = new Audio('./juntos-607.mp3') //wav is also supported



        if (idJ == 1) {
            f1 = 0
            for (i = p; i < this.coteJoueur1[p] + p; i++) {

                if (i >= 6 && i <= 12) {
                    let r = i + 1;
                    this.coteJoueur2[r % 7] = this.coteJoueur2[r % 7] + 1;
                    snd.play() //plays the sound
                    f1++;
                    q = 0;
                } else {
                    this.coteJoueur1[(i + 1) % 7] = this.coteJoueur1[(i + 1) % 7] + 1;
                    snd.play() //plays the sound
                    f2++;
                    q = 1;
                }
            }
            this.coteJoueur1[p] = 0;
            return
        } else {
            f1 = 0
            p=p%7
            for (i = p; i < this.coteJoueur2[p] + p; i++) {

                if (i >= 6 && i <= 12) {
                    let m = i + 1;
                    this.coteJoueur1[m % 7] = this.coteJoueur1[m % 7] + 1;
                    snd.play() //plays the sound
                    f1++;
                    q = 0;
                } else {
                    this.coteJoueur2[(i + 1) % 7] = this.coteJoueur2[(i + 1) % 7] + 1;
                    snd.play() //plays the sound
                    f2++;
                    q = 1;
                }
            }
          
            this.coteJoueur2[p] = 0;
        }

        if (q == 1) {
            f1 = 0
            return f2;
        } else {
            return f1;
        }
       
    }

    prise(idJ, f1) {
        let i
        var sn = new Audio('./message-ringtone-magic.mp3') 
        if (idJ == 1) {
            
            if (this.coteJoueur2[f1 - 1] >= 2 && this.coteJoueur2[f1 - 1] <= 4) {
                for (i = f1 - 1; i >= 0; i--) {
                    sn.play()
                    if (this.coteJoueur2[i] >= 2 && this.coteJoueur2[i] <= 4) {
                        sum1 = sum1 + this.coteJoueur2[i];
                        this.coteJoueur2[i] = 0;
                    }

                }
            }
            this.pointJoueur1 += sum1
            sum1 = 0

        } else {
            if (this.coteJoueur1[f1 - 1] >= 2 && this.coteJoueur1[f1 - 1] <= 4) {
                for (i = f1 - 1; i >= 0; i--) {
                    sn.play()
                    if (this.coteJoueur1[i] >= 2 && this.coteJoueur1[i] <= 4) {
                        sum2 = sum2 + this.coteJoueur1[i];
                        this.coteJoueur1[i] = 0;

                    }
                }
            }
            this.pointJoueur2 += sum2
            sum2 = 0;
        }
    }


    poursuiteJeu() {
      
        if (this.pointJoueur1 <= 35 && this.pointJoueur2 <= 35) {
            let m = document.getElementById("message")
            m.innerHTML = "le jeux se poursuit";

        } else if (this.pointJoueur1 >= 35) {
            alert("joueu 1 the winner")
            alert("GAME OVER")

            return j3
        } else if (this.pointJoueur2 >= 35) {
            alert(" joueu 2 the winner")
            alert("GAME OVER")
            
            return j4;
        }

    }
  
}




let t1 = [];
 let t2 = []
let pointj1
let pointj2




let p, idJ, o, g,q

let song1 = new Songo(t1, t2, pointj1, pointj2);

let tour=1


if(tour==1){
document.addEventListener('click', (e) => {

    p = parseInt(e.target.dataset.key)
    console.log("voil "+p)
    if (p >= 0 && p <= 6) {
        idJ = 1
        song1.RecupererDelaBd()
        song1.distribution(idJ, p)
        song1.prise(idJ, f1)
        song1.poursuiteJeu()
        song1.envoyerDonnees()
        song1.RecupererDelaBd()
        setInterval(song1.RecupererDelaBd(),1000)
       // song1.affiche()
        
return
    }

})
tour=2
}

if(tour==2){
    document.addEventListener('click', (e) => {
        q = parseInt(e.target.dataset.key)
        console.log("voila "+q)
        if (q >= 7 && q <= 13) {
            idJ = 2
            song1.RecupererDelaBd()
            song1.distribution(idJ, q)
            song1.prise(idJ, f1)
            song1.poursuiteJeu()
            song1.envoyerDonnees()
            song1.RecupererDelaBd()
            setInterval(song1.RecupererDelaBd(),1000)
           // song1.affiche()
        
        }
        tour=1
    })
  
    }
    const Restart= document.querySelector('#restart');
    Restart.addEventListener('click', (e) => {
      console.log("l ")
      let tableau1=[5, 5, 5, 5, 5, 5, 5];
      let tableau2=[5, 5, 5, 5, 5, 5, 5];
      let  data={
        entier1: 0,
        entier2: 0,
        tableau1: tableau1,
        tableau2: tableau2,
    }

        let xhr = new XMLHttpRequest();
        xhr.open("POST","app.php",true)
    xhr.setRequestHeader("Content-Type","application/json")
    xhr.onreadystatechange=()=>{
        if(xhr.readyState==XMLHttpRequest.DONE){
            alert(xhr.responseText);
            
        }
    };

    xhr.send(JSON.stringify(data));
    song1.RecupererDelaBd()
        
      })

      const opt= document.querySelector('#opt');
      opt.addEventListener('click', (e) => {
        console.log("v ")
      song1.RecupererDelaBd()
          
        })

    setInterval(song1.RecupererDelaBd(),1000)
    
    


