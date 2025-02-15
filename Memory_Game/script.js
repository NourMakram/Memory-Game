
var userInput = document.getElementById("userInput");
var StartButton = document.querySelector(".playIcon button");
var audioGame = document.getElementById("bagin");
var wrongaudio = document.getElementById("wrong");
var timer = document.querySelector('#num');
var winIngame = document.getElementById("win");
//get number of collect block
var collect = document.getElementById("succes-tries");
var blocks = document.querySelector(".game").children;

var ArrayOfBlocks = Array.from(blocks);

StartButton.addEventListener("click", startGame);


function startGame() {

   document.querySelector(".start-page").remove();

   //content the index from [0 - 19]
   var orderRang = Array.from((Array(ArrayOfBlocks.length)).keys());

   orderElementRandom(orderRang)



   ArrayOfBlocks.forEach((block, index) => {
      //order the block random
      block.style.order = orderRang[index];

      //block is clicked
      block.addEventListener("click", function () {

         //flip the block
         flipBlock(block);
         //number of flip blocks
         var ArrayFlipBlocks = ArrayOfBlocks.filter((block) => {
            return block.classList.contains("filp-block");
         })

         if (ArrayFlipBlocks.length == 2) {

            stopClicking();
            isMatching(ArrayFlipBlocks[0], ArrayFlipBlocks[1]);
         }

      })
   }

   );
   //start the counter
   starCounter();


}





//prevent the blocks from clicking
function stopClicking() {

   document.querySelector(".game").classList.add("no-click");

   //remove the class no-click after 1s
   setTimeout(() => {
      document.querySelector(".game").classList.remove("no-click");

   }, 1000);
}
function isMatching(firstBlock, secondBlock) {
   //if the two blocks is the smilier
   if (firstBlock.dataset.type === secondBlock.dataset.type) {

      firstBlock.classList.remove("filp-block");
      secondBlock.classList.remove("filp-block");

      firstBlock.classList.add("is-match");
      secondBlock.classList.add("is-match");

      //start audio success
      var audioSuccess = document.getElementById("success");

      audioSuccess.play();


      document.querySelector('#succes-tries').innerHTML = parseInt(document.querySelector('#succes-tries').innerHTML) + 1;


   }
   else {



      //if two blocks not smilier
      setTimeout(function () {
         firstBlock.classList.remove("filp-block");
         secondBlock.classList.remove("filp-block");
      }, 1000);

      wrongaudio.play();

   }
}

function flipBlock(block) {

   block.classList.add("filp-block");
}


function orderElementRandom(arr) {

   var random, current = arr.length, temp;

   while (current > 0) {

      random = Math.ceil(Math.random() * current);
      current--;
      temp = arr[current];
      arr[current] = arr[random];
      arr[random] = temp;

   }


}

//timer 
function starCounter() {
   var counter = 0;


   var t = setInterval(function () {
      counter = timer.innerHTML = parseInt(timer.innerHTML) + 1;

      if (counter == 10) {

         document.querySelector("#zero").remove();

      }
      

      if (parseInt(collect.innerHTML) == 10) {
         //if the player win
         //stop timer
         clearInterval(t)
         //stop clicking
         document.querySelector(".game").classList.add("no-click");

         winInGame()
      }
      //finish the game 
       if (counter == 100 ) {
          //if the player win
            //stop timer
            clearInterval(t)
            //stop clicking
            document.querySelector(".game").classList.add("no-click");
         if (parseInt(collect.innerHTML) == 10) {
               winInGame()
         }
        else{
         gameOver()

        }
      }



   }
, 1000);


}


function winInGame() {
   var newdiv = document.createElement("div");
   var maindiv = document.querySelector(".main")
   newdiv.className = "start-page"
   document.body.insertBefore(newdiv, maindiv)
   newdiv.innerHTML = "<h1 class='word-congrat'><span>Con</span><span>gratu</span><span>lation</span></h1>"
   newdiv.innerHTML += ` <div class="clipping">
   <svg version="1.1" width="130px" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 48 48" style="enable-background:new 0 0 48 48;" xml:space="preserve">
<style type="text/css">
.st0{fill:#724F3D;}
.st1{fill:#A86C4D;}
.st2{fill:none;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
.st3{fill:#FF87AF;}
.st4{fill:#FF6196;}
.st5{fill:#FFE500;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
.st6{fill:#45413C;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
.st7{fill:#FF6242;}
.st8{fill:#FFA694;}
.st9{fill:#FFAA54;}
.st10{fill:#00B8F0;}
.st11{fill:#009FD9;}
.st12{fill:#FFE500;}
.st13{fill:#EBCB00;}
.st14{fill:#9CEB60;}
.st15{fill:#6DD627;}
.st16{fill:#724F3D;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
.st17{fill:#BF8DF2;}
.st18{fill:#9F5AE5;}
.st19{fill:#00DFEB;}
.st20{fill:#00C9D4;}
.st21{fill:#FF866E;}
.st22{fill:#00F5BC;}
.st23{fill:#00DBA8;}
.st24{fill:#FF8A14;}
.st25{fill:#DE926A;}
.st26{fill:#FFCEBF;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
.st27{fill:#FFB59E;}
.st28{fill:#FFCEBF;}
.st29{fill:#A86C4D;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
.st30{fill:#ADC4D9;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
.st31{fill:#FFF48C;}
.st32{fill:#C0DCEB;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
.st33{fill:#4ACFFF;}
.st34{fill:#45413C;}
.st35{fill:#FFDCD1;}
.st36{opacity:0.15;fill:#45413C;}
.st37{fill:#FFB59E;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
.st38{fill:#00DFEB;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
.st39{fill:#F0F0F0;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
.st40{fill:#E0366F;}
.st41{fill:#FFE8E0;}
.st42{fill:#EBCB00;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
.st43{fill:#FFDA8F;}
.st44{fill:#FFBE3D;}
.st45{fill:#FFE9BD;}
.st46{fill:#FFFFFF;}
.st47{fill:#E0E0E0;}
.st48{fill:#656769;}
.st49{fill:#525252;}
.st50{fill:#87898C;}
.st51{fill:#656769;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
.st52{fill:#B89558;}
.st53{fill:#947746;}
.st54{fill:#525252;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
.st55{fill:#FFFFFF;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
.st56{fill:#A6FBFF;stroke:#45413C;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
</style>
<g>
<g>
 <path id="XMLID_10624_" class="st42" d="M3.9,23.1c0.8-0.9,2.2-0.9,3.1-0.1l-3-2.9c-1-0.9-1-2.5-0.1-3.5s2.5-1,3.5-0.1l0.1,0.1
    c-1.1-1-1.1-2.7-0.1-3.7s2.7-1.1,3.7-0.1l1.7,1.6c-1-0.9-1-2.5-0.1-3.5c0.9-1,2.5-1,3.5-0.1l8.9,8.6c-1.1-1.6-0.7-4.5,1-5.4
    c0.7-0.4,1.6-0.1,2.1,0.6l4.3,5.6c3.7,6,2.8,13.6-2,18.7c-3.5,3.7-9.4,3.8-13.1,0.3L4,26.2C3.1,25.4,3.1,24,3.9,23.1z"/>
 <line class="st2" x1="29.8" y1="23.9" x2="25.3" y2="19.6"/>
 <line id="XMLID_10623_" class="st2" x1="7.5" y1="16.7" x2="16.6" y2="25.4"/>
 <line id="XMLID_10622_" class="st2" x1="7" y1="23.1" x2="13.1" y2="29"/>
 <line id="XMLID_10621_" class="st2" x1="12.9" y1="14.6" x2="20.2" y2="21.6"/>
</g>
<ellipse id="XMLID_10620_" class="st36" cx="26" cy="45.5" rx="11.5" ry="1.5"/>
<path id="XMLID_10619_" class="st5" d="M38.2,13.7l5.3-1.7c0.3-0.1,0.4-0.4,0.3-0.6l-1.4-2.3c-0.1-0.2-0.4-0.2-0.6,0l-3.9,4
 C37.6,13.4,37.8,13.8,38.2,13.7z"/>
<path id="XMLID_10618_" class="st5" d="M35.3,11.3l2.6-4.9c0.1-0.2,0-0.5-0.2-0.6l-2.6-0.7c-0.2-0.1-0.5,0.1-0.5,0.4l0,5.6
 C34.6,11.5,35.1,11.6,35.3,11.3z"/>
<path id="XMLID_10617_" class="st5" d="M16.2,7.6L19,2.7c0.1-0.2,0-0.5-0.2-0.6l-2.6-0.7c-0.2-0.1-0.5,0.1-0.5,0.4l-0.2,5.6
 C15.5,7.8,16,7.9,16.2,7.6z"/>
<path id="XMLID_10616_" class="st5" d="M12.4,7.9L11,2.5c-0.1-0.3-0.3-0.4-0.6-0.3L8.1,3.5C7.8,3.6,7.8,3.9,8,4.1l3.8,4.1
 C12.1,8.5,12.5,8.2,12.4,7.9z"/>
<g>
 <path id="XMLID_10615_" class="st12" d="M10.4,25.3c0.8-0.9,2.2-0.9,3.1-0.1l-3-2.9c-1-0.9-1-2.5-0.1-3.5c0.9-1,2.5-1,3.5-0.1
    l0.1,0.1c-1.1-1-1.1-2.7-0.1-3.7s2.7-1.1,3.7-0.1l1.7,1.6c-1-0.9-1-2.5-0.1-3.5s2.5-1,3.5-0.1l8.9,8.6c-1.1-1.6-0.7-4.5,1-5.4
    c0.7-0.4,1.6-0.1,2.1,0.6l4.3,5.6c3.7,6,2.8,13.6-2,18.7c-3.5,3.7-9.4,3.8-13.1,0.3L10.4,28.3C9.6,27.5,9.5,26.1,10.4,25.3z"/>
 <path class="st31" d="M32.7,19.2c0.7-0.4,1.6-0.1,2.1,0.6l4.3,5.6c1.3,2.1,2,4.3,2.2,6.6c0.3-3.2-0.4-6.6-2.2-9.5l-4.3-5.6
    c-0.4-0.7-1.3-1-2.1-0.6c-1.5,0.8-2,3-1.4,4.6C31.6,20.2,32,19.5,32.7,19.2z"/>
 <path class="st31" d="M19.3,16.1c0.9-1,2.5-1,3.5-0.1l6.3,6c1,1,2.5,1.2,3.7,0.7l-10-9.6c-1-0.9-2.6-0.9-3.5,0.1
    c-0.8,0.9-0.9,2.2-0.2,3.1C19.1,16.3,19.2,16.2,19.3,16.1z"/>
 <path id="XMLID_10614_" class="st2" d="M10.4,25.3c0.8-0.9,2.2-0.9,3.1-0.1l-3-2.9c-1-0.9-1-2.5-0.1-3.5c0.9-1,2.5-1,3.5-0.1
    l0.1,0.1c-1.1-1-1.1-2.7-0.1-3.7s2.7-1.1,3.7-0.1l1.7,1.6c-1-0.9-1-2.5-0.1-3.5s2.5-1,3.5-0.1l8.9,8.6c-1.1-1.6-0.7-4.5,1-5.4
    c0.7-0.4,1.6-0.1,2.1,0.6l4.3,5.6c3.7,6,2.8,13.6-2,18.7c-3.5,3.7-9.4,3.8-13.1,0.3L10.4,28.3C9.6,27.5,9.5,26.1,10.4,25.3z"/>
 <line class="st2" x1="36.2" y1="26" x2="31.7" y2="21.7"/>
 <line id="XMLID_10613_" class="st2" x1="14" y1="18.9" x2="23" y2="27.5"/>
 <line id="XMLID_10612_" class="st2" x1="13.4" y1="25.2" x2="19.6" y2="31.1"/>
 <line id="XMLID_10611_" class="st2" x1="19.3" y1="16.7" x2="26.7" y2="23.7"/>
</g>
</g>
</svg>`;
//audio
winIngame.play();

}
function gameOver() {
   var newdiv = document.createElement("div");
   var maindiv = document.querySelector(".main")
   newdiv.className = "start-page"
   document.body.insertBefore(newdiv, maindiv)
   newdiv.innerHTML = "<p class='gameOver_p'>Game over</p>"
   newdiv.innerHTML += "<button class='gameOver_b' onclick='tryAgain();'>Try again</button>"

}
function tryAgain() {

   var btnTry = document.querySelector(".gameOver_b");

   btnTry.addEventListener("click", function () {
      timer.innerHTML = "0";
      collect.innerHTML = "0";
      var newspan = document.createElement("span");
      newspan.id = "zero"
      newspan.innerHTML = "0"
      document.querySelector(".game").classList.remove("no-click");

      ArrayOfBlocks.map((e) => {
         e.classList.remove("is-match");
         e.classList.remove("filp-block");

      })
      document.querySelector(".timer").insertBefore(newspan, timer);

      startGame();


   });

}









