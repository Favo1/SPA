const APP = {
keybase: 'SPA-Project-App-',
keys: [],
init() {
    //start the app
    document.getElementById('btnSave').addEventListener('click', APP.saveChar);
    document.querySelector('header').addEventListener('click', APP.loadChar) ;
},
saveChar(ev) {
    ev.preventDefault();
    let  input = document.getElementById('aInput', 'bInput', 'cInput').value.trim();
    let result = document.getElementById('quadResult').value.trim();
    if (input && result) {
        //if both a input and result are provided
        let key = APP.keybase + input.toLowerCase();
        let storage = localStorage.getItem(Key);
        let chars = [];
        if(storage){
            chars = JSON.parse(storage);
        }
        chars.push(char)
        chars = Array.from(new Set(chars));
        localStorage.SetItem(key, JSON.stringify(chars));
        APP.loadResults();
    }        
},
loadResults(){
    //go to localStorage and retrieve all the keys that start with APP.keybase
    let num = localStorage.length;
    if (num) {
      APP.keys = []; // reset the keys array
      for(let i=0; i <num; i++)
        let key = localStorage.key(i)
        if(key.startsWith(APP.keybase)){
          APP.keys.push(key);
        }
     }
     APP.keys.sort();
     APP.buildNav();
    }
},
buildNav() {
    let nav = document.querySelector('header')
    nav.innerHTML = '';
    let foot = document.querySelector('footer')
    foot.innerHTML = '';
    let df = document.createDocumentFragment();
    APP.keys.forEach((key) => {
        //create a new anchor in the header for each result
        let a = document.createElement('a');
        a.className = 'show';
        a.textContent = key.replace(APP.keybase, '');
        df.append(a);
    });
    nav.append(df);
},
loadChar(ev) {
    if (ev.target.tagName === 'A') {
          let show = ev.target.textContent/toLowerCase();
          document.getElemenById('result').value = show; 
        //put the result into the input field
        //remove old active show class 
        //Set current active class
        //Get the input characters for the calculator and build the reslts page 
    }
},
buildChars(chars) {
    
},
};

document.addEventListener('DOMContentLoaded', APP.init);