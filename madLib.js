window.onload = function() {
  //check that js is working
  console.log("reading js");

  //capture the submit event
  document.f.onsubmit = processForm;

  //capture the reset event
  document.f.onreset = resetPage;

  //define process function
  function processForm() {

    //store user name in a variable
    var userEmotion = document.f.userEmotion.value;
    //store user color in a variable
    var userAdj = document.f.userAdj.value;
      
    var userVillain = document.f.userVillain.value;
      
    var userVerb = document.f.userVerb.value;
      
    var userNoun = document.f.userNoun.value;
      
    var userObject = document.f.userObject.value;
      
    var userLocation = document.f.userLocation.value;
      
    var userVerb1 = document.f.userVerb1.value;
      
    var userAdj1 = document.f.userAdj1.value;

    //error detection
    if (userEmotion == "" || userAdj == "" || userVillain == "" || userVerb =="" || userNoun == "" || userObject == "" || userLocation == "" || userAdj1 == "" || userVerb1 == "") {
      alert("Fill out the form!");

    } else {

      //capture the msg element to change it's text and html
      var myMsg = document.getElementById("myMsg");

      myMsg.innerHTML = "Picnic Day is finally here and Picnic Day Bear is extremely <em> " + userEmotion + "</em> for another <em>" + userAdj + "</em> filled day in Davis. Then, all of a sudden, the <em>" + userVillain + " </em> <em> " + userVerb + "</em> out from behind a <em>" + userNoun + " </em> and steals Picnic Day Bear's favorite <em>" + userObject + " </em>. Picnic Day Bear chases the <em>" + userVillain + "</em> all around the <em>" + userLocation + "</em> until he finally catches up and <em>" + userVerb1 + "</em> him to the ground. Picnic Day Bear takes back his <em>" + userObject + "</em> and continues on his way to the official battle site, waiting <em>" + userAdj1 + "</em> to take on the rest of the mascots.";
      myMsg.className = "show";
    }

    //prevent page from reloading
    return false;
  }

  //if user chooses "reset"
  function resetPage() {
    //remove any text from myMsg
    myMsg.innerHTML = "";
    //change the class name
    myMsg.className = "hide";
    //reset the userName field
    userEmotion.value = "";
    //reset the userColor field
    userAdj.value = "";
      
    userVerb.value = "";
      
    userNoun.value = "";
      
    userLocation.value = "";
      
    userVerb1.value = "";
      
    userAdj1.value = "";

    return false;
  }
}