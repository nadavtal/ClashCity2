// import { DataService } from '/data.service'

$(document).ready(() => {
    console.log("main.js ready  ");
localStorage.clear();

var users = [{ first: 'Nadav', last: 'Almagor', email: "nadav@gmail.com", pw: '1234', wins: 5, losses: 2, balance: 2000},
             { first: 'Tal', last: 'Akta', email: "tal@gmail.com", pw: 'fghj', wins: 2, losses: 4, balance: 555},
             { first: 'Gadi', last: 'Gross', email: "gadi@gmail.com", pw: '2345', wins: 1, losses: 7, balance: -465},
            ]   

// console.table(users);

function User(first, last, email, pw) {
    this.first = first;
    this.last = last;
    this.email = email;
    this.pw = pw;
    this.wins = 0;
    this.losses = 0;
    this.balance = 0
}

var video1 = {link : 'https://www.youtube.com/embed/Z81FMWgnHaI', "tags": ['pekka', 'dark_prince', 'prince'], rate: 0,}
var video2 = {link : "https://www.youtube.com/embed/OcsTxNrZJLc", "tags": ['skeleton'], rate: 5}
var video3 = {link : "https://www.youtube.com/embed/0yKCFZHh3f4", "tags": ['hog_rider'], rate: 3.25}
var video4 = {link : "https://www.youtube.com/embed/bOfa0cYM0tI", "tags": ['goblins'], rate: 3.25}
var video5 = {link : "https://www.youtube.com/embed/GnR9oSyU2eY", "tags": ['giant'], rate: 3.99}
var video6 = {link : "https://www.youtube.com/embed/iYKmPD2_yb0", "tags": ['golem'], rate: 3.25}
var video7 = {link : "https://www.youtube.com/embed/zTO3qC_9R1c", "tags": ['wizard', 'electric_wizard'], rate: 3.25}
var video8 = {link : "https://www.youtube.com/embed/x9u8yuoUoWw" , "tags": ['baby_dragon'], rate: 3.25}
var video9 = {link : "https://www.youtube.com/embed/RUdasc71_K4" , "tags": ['golem'], rate: 3.25};
var video10 = {link : "https://www.youtube.com/embed/9EmD2gJAvEM" , "tags": ['electric_wizard', 'pekka'], rate: 3.25}

var video11 = {link : "https://www.youtube.com/embed/F3-CG_cODpw" , "tags": ['3musketeers', 'electric_wizard', 'battle_ramp', 'hog_rider', 'hor'], rate: 3.25}
var video12 = {link : "https://www.youtube.com/embed/lYhuuGJrXZc" , "tags": ['sparky', 'minion_horde', 'giant'], rate: 3.25}
var video13 = {link : "https://www.youtube.com/embed/kI-vI-wbx7U" , "tags": ['hog_rider', 'fireball', 'canon', 'museteer'], rate: 3.25}
var video14 = {link : "https://www.youtube.com/embed/v-FNWCsOK_k" , "tags": ['golem', 'collector', 'dark_prince', 'prince', 'mininios', 'zap', 'baby_dragon', 'tornado'], rate: 3.25}
var video15 = {link : "https://www.youtube.com/embed/AhF8gS-0v-4" , "tags": ['valkiry', 'bowler', 'freeze', 'grave_yard'], rate: 3.25}
var video16 = {link : "https://www.youtube.com/embed/Z81FMWgnHaI" , "tags": ['pekka', 'prince', 'dark_prince', 'collector', 'baby_dragon', 'mininos'], rate: 3.25}
var video17 = {link : "https://www.youtube.com/embed/p3wP7zjkHlo" , "tags": ['balloon' ], rate: 3.25}
var video18 = {link : "https://www.youtube.com/embed/oywlFECfEcs" , "tags": ['mortar', 'tornado', 'rocket', 'knight', 'zap', 'bats', 'log',], rate: 3.25}
var video19 = {link : "https://www.youtube.com/embed/DSuD5ENgaOA" , "tags": ['executioner', 'grave_yard', 'mega_minion', 'zap', 'tornado'], rate: 3.25}
var video20 = {link : "https://www.youtube.com/embed/-JqYfyi9tWg" , "tags": ['grave_yard', 'executioner', 'zap', 'tombstone', 'poison', 'log', "ice_wizard"], rate: 3.25}

var videosList = [video1, video2, video3, video4, video5, video6, video7, video8, video9, video10,
    video11, video12, video13, video14, video15, video16, video17, video18, video19, video20]


var unitIdList = ["pekka", "prince", "wizard", "electro", "golem", "goblins", "goblin_gang", "hog_rider", "skeleton",
"knight", "lumberjack", "InfernoDragon", "Flying_machine", "baby_dragon", "minion Horde", "minions", "lava",
"bats", "mini_pekka", "baloon", "rage", "rocket", "log", "freeze", "tornado", "duplicate", "collector",
"zap", "x_bow", "executioner", "bomb_tower", "mortar", "tombstone", "3musketeers", "battle_ramp",
 "magic_archer", "sparky", "fire_ball", "canon", "musketeer", "grave_yard", "bowler", "valkiry", "mega_minion",
 "poison", "ice_golem", "ice_wizard", "inferno_tower", "mirror"]


 var unitsByType = {ground: ["3musketeers", "battle_ramp", "magic_archer", "sparky", "executioner", "pekka", "prince",
                            "wizard", "electro", "giant", "golem", "goblins", "goblin_gang", "musketeer", "grave_yard",
                             "valkiry", "mega_minion", "ice_golem", "ice_wizard", "bowler", "hog_rider", "skeleton",
                             "knight", "lumberjack", "mini_pekka", ],
                   air: ["InfernoDragon", "Flying_machine", "baby_dragon", "minion Horde", "minions", "lava",
                        "baloon", "bats", ],
                   towers: ["inferno_tower", "bomb_tower", "canon", "mortar", "tombstone", "x_bow", "collector",],
                   spells: ["mirror", "poison", "fire_ball", "zap", "rage","rocket", "log", "freeze", "tornado", "duplicate", ]
                   }


                   function createUnitObject(name, category, id) {
    var unitObj = {
        'id': id,
        'name': name,
        'image': '',
        'category': category,
        'price': 0,
        'description': ""
        }
    return unitObj;
}

//creates an array of Unit objects from a data list
function createUNITSarray(list) {
    // console.log(list.length)
    var UNITS = [];
    for (i = 0; i < list.length; i++){
        // console.log("here")
        var name = list[i];
        // console.log(name);
        var newObj = createUnitObject(name, "ground", i);
        // console.log(newObj);
        UNITS.push(newObj);
        
    }
    // console.log(UNITS);
    return UNITS;
}
createUNITSarray(unitsByType.ground);


//creates html lists of units in a designated element
function addUnitHtml(parentId, list){
    var parent = document.getElementById(parentId);
    
    for(i = 0; i < list.length; i++){
        inputId = list[i];
        var li = document.createElement('li');
        li.setAttribute('id', inputId);
        // li.setAttribute('class', '');
        var div = document.createElement('div');
        div.setAttribute('class', 'nav-item');
        var span = document.createElement('span');
        span.setAttribute('class', 'label');
        span.innerHTML = list[i];
        div.appendChild(span);
        var span1 = document.createElement('span');
        span1.setAttribute('class', 'icon');
        var span2 = document.createElement('span');
        span1.appendChild(span2);
        div.appendChild(span1);
        var span3 = document.createElement('span');
        span3.setAttribute('class', 'icon2');
        div.appendChild(span3);
        li.appendChild(div);
        // console.log(li);
        parent.appendChild(li);
      
        };
    };


addUnitHtml('groundList', unitsByType.ground);
addUnitHtml('airList', unitsByType.air);
addUnitHtml('towerList', unitsByType.towers);
addUnitHtml('spellsList', unitsByType.spells);

//clones the first "video" div to the 2nd video div
function addVideoToDisplay(){
    var itm = document.getElementById("video");
    // console.log(itm)
    var cln = itm.cloneNode(true);
    // console.log(cln); 
    // alert('here')
    var videos = document.getElementById("videos"); 
    videos.insertBefore(cln, videos.childNodes[1]);
}
        
//dispplay video information    
function videoDisplay(video){
    document.getElementById("myIframe").src = video.link;
    document.getElementById("tags").innerHTML = video.tags;
    document.getElementById("rate").innerHTML = video.rate;
}

//finds videos that have this tag among other tags
function playVideosByTag(tag){
    // alert(tag)
    for (x = 0; x < videosList.length; x++){
        var length = videosList[x].tags.length;
        for(y = 0; y < length; y++){
            if (tag === videosList[x].tags[y]){

                video = videosList[x]
                addVideoToDisplay();
                videoDisplay(video);
            }
        }
    }
};

//get tag(id) from clicking on a unit in the menus.
function getTagFromId(){
    for (i = 0; i < unitIdList.length; i++){
        document.getElementById(unitIdList[i]).onclick = function(){
            var id  = $(this).attr("id");
            // alert(id)
            playVideosByTag(id);
            return id;
            }
        }
    };
getTagFromId();

//open and close function
function openClose(source, event, target){
    // alert("here")
    $(source).on(event, () => {
      $(target).toggle();
      $(source).css({
            //   color: '#C3FF00',
              });
    //   $(source).animate({
    //       fontSize: '24px',}, 500)
  
    });
  };
// openClose('#login-button', 'click','.login-form');
// openClose('#upload-button', 'click','.upload-form');
// openClose('.ground', 'click','.ground-menu');
// openClose('.air', 'click','.air-menu');
// openClose('.towers', 'click','.towers-menu');
// openClose('.spells', 'click','.spells-menu');

//creates checkbox menu of from a given list
function createCombocheckBoxMenu(parentId, list, idAdd){
    var parent = document.getElementById(parentId);
    // console.log(parent);
    for(i = 0; i < list.length; i++){
        inputId = list[i] + '-' + idAdd;

        html = '<input id="' + inputId + '" name="' + inputId +'" type="checkbox"'+ '/>'; 
        var div = document.createElement('div');
        div.setAttribute('class', 'inputGroup');
        
        div.innerHTML = html;
        // div.appendChild(li);
        var label = document.createElement('label');
        label.setAttribute('for', inputId);
        label.innerHTML = list[i];
        div.appendChild(label); 
        console.log(parent);   
        div.style.float = "left";
        // li.style.fontSize = "0.9em";
        div.style.padding = '7px';
        // var liId = inputId + 'li';
        // li.setAttribute('id', liId);
        parent.appendChild(div);
        
    }
}

// createCombocheckBoxMenu('ground-dropdown', unitsByType.ground,'button');
// createCombocheckBoxMenu('air-dropdown', unitsByType.air,'button');
// createCombocheckBoxMenu('towers-dropdown', unitsByType.towers,'button');
// createCombocheckBoxMenu('spells-dropdown', unitsByType.spells,'button');


//get tags from checkbox checked
function getTags(){
    var tags = [];
    var radios = document.getElementById('checkboxForm');
    // console.log(radios[1])
    length = radios.length;
    // console.log(length)
    for (var i = 0;  i < length; i++){
        if (radios[i].checked){
            tags.push(radios[i].value);
           }
    }
    alert(tags);
    return tags
}

//checks if the combination of checkbox checked exist in video tags
function arrayContainsAnotherArray(needle, haystack){
    console.log(needle.length);
    for(var i = 0; i < needle.length; i++){
        if(haystack.indexOf(needle[i]) === -1){
            
            return false;
            break;
        }
    }
    return true;
  }


  

  // find relevant videos by tag list

  function playVideosByTags(tagsList){
    // alert(tagsList)
    var videos = [];
    for (i = 0; i < videosList.length; i++){
        if (arrayContainsAnotherArray(tagsList, videosList[i].tags)){
            // alert('yayyy');
            video = videosList[i];
            videos.push(video);
            addVideoToDisplay();
            videoDisplay(video);
            return true;
        }
    }
    if (videos.length === 0){
        alert('there are no videos containing all these units together');
    }    
}

//submit checkboxes & play video
function getTagsPlayVideo(){
    document.getElementById('findVideo').onclick = function(){
        // alert("here")
        var tags = getTags();
        playVideosByTags(tags);
        return false;
    }
} 
getTagsPlayVideo()

//when mouse over unit categories
function onMouseOverCategory(){
   
        $('.groundMenu').hover(
            function(){ $('.ground').addClass('hilighted')},
            function(){ $('.ground').removeClass('hilighted') },
        );
        $('.airMenu').hover(
        
            // function(){ $('.groundModal').addClass('hilighted') },
            function(){ $('.air').addClass('hilighted')},
            function(){ $('.air').removeClass('hilighted') }
        );
        $('.towersMenu').hover(
        
            // function(){ $('.groundModal').addClass('hilighted') },
            function(){ $('.towers').addClass('hilighted')},
            function(){ $('.towers').removeClass('hilighted') }
        );
        $('.spellsMenu').hover(
        
            // function(){ $('.groundModal').addClass('hilighted') },
            function(){ $('.spells').addClass('hilighted')},
            function(){ $('.spells').removeClass('hilighted') }
        );
        } 
    
onMouseOverCategory();

//when mouse over unit
function onMouseOverUnit(){
    $('.nav-item').on('mouseenter', event => {
        $(event.currentTarget).addClass("hilighted"),
                
        $(event.currentTarget).animate({
            fontSize: '120%',}, 100);
      });
    
      $('.nav-item').on('mouseleave', event => {
        $(event.currentTarget).removeClass("hilighted"),  
        $(event.currentTarget).css({
                color: 'lightcoral',
    
                });
        $(event.currentTarget).animate({
            fontSize: '100%',
             }, 100);
      });
    };
onMouseOverUnit();


//search unit autocomplete
function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
  }

autocomplete(document.getElementById("myInput"), unitIdList);

//assign input value to a variable
function getVariablesFromInput(id){
    var inputValue = document.getElementById(id).value;
    return inputValue;
}

//when sign up button is clicked
function signUp(){
    document.getElementById('signUpButton').onclick = function(){
        var first = getVariablesFromInput('firstName');
        var last = getVariablesFromInput('lastName');
        var email = getVariablesFromInput('exampleInputEmail3');
        var pw = getVariablesFromInput('exampleInputPassword3');
        var newUser = new User(first, last, email, pw);
        console.log(newUser);
        // localStorage.setItem('user', newUser);
        // localStorage.setItem('first', first);
        // localStorage.setItem('last', last);
        // localStorage.setItem('email', email);
        // localStorage.setItem('pw', pw);
        // localStorage.setItem('wins', 0);
        // localStorage.setItem('losses', 0);
        // localStorage.setItem('balance', 0);
        users.push(newUser);
        localStorage.setItem('user',JSON.stringify(newUser));
        console.table(users);
    }
}
signUp();

//when login button is clicked
function login(){
    document.getElementById('loginButton').onclick = function(){
        alert('here');
        // var users = DataService.getUsers();
        console.log(users);
        var email = getVariablesFromInput('exampleInputEmail2');
        var pw = getVariablesFromInput('exampleInputPassword2');
    
        if (email === ''){
            alert("please enter email");
        }
        
        for (i = 0; i < users.length; i++){
            if (email === users[i].email){
                // alert(users[i].email)
                if (pw === users[i].pw){
                    // alert(users[i].pw)
                    var user = users[i]
                    break
                }
                else{
                    alert("pass word doesnt match the email");
                    };
            }else{
                alert("Email doesn't exist");
                };
        }
        // localStorage.setItem('first', user.first);
        // localStorage.setItem('last', user.last);
        // localStorage.setItem('email', user.email);
        // localStorage.setItem('pw', user.pw);
        // localStorage.setItem('wins', user.wins);
        // localStorage.setItem('losses', user.losses);
        // localStorage.setItem('balance', user.balance);
        localStorage.setItem('user',JSON.stringify(user));
       
    }
}
login();
});





