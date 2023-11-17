//challenge1
let name = document.getElementById('user')
name.innerHTML="Anushka";

//challenge2
let buttonBg= document.getElementById('btn-click')
buttonBg.addEventListener('click',()=>{
    buttonBg.style.backgroundColor="red";
})

//challenge3
let BuiltButton=document.getElementById('build-button');
let statement=document.getElementById('statement')
BuiltButton.addEventListener('click',makeSentence);
function makeSentence(){
  let noun=document.getElementById('noun').value;
  let verb=document.getElementById('verb').value;
  let adverb=document.getElementById('adverb').value;
  statement.innerHTML='"'+noun+" "+verb+" "+adverb+'"';
}

//challenge4.1
let grandParent=document.getElementById('grandparent');
let parent=document.getElementById('parent');
let child=document.getElementById('child');
grandParent.addEventListener('click',()=>{
    console.log("Granparent clicked")
},{capture: true})
parent.addEventListener('click',()=>{
    console.log("parent clicked")
},{capture: true})
child.addEventListener('click',()=>{
    console.log("Child clicked")
},{capture: true})

//challenge4.2
grandParent.addEventListener('click',()=>{
  console.log("Granparent clicked")
})
parent.addEventListener('click',()=>{
  console.log("parent clicked")
})
child.addEventListener('click',()=>{
  console.log("Child clicked")
})

//challenge5
document.querySelector("#category").addEventListener("click",(e)=>{console.log(e.target.innerHTML)})
