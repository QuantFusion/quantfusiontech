<!-- Control buttons -->
<div id="myBtnContainer">
  <button class="btn active" onclick="filterSelection('all')"> All</button>
  <button class="btn" onclick="filterSelection('client')"> Client</button>
  <button class="btn" onclick="filterSelection('fun')"> Fun</button>
</div>


<!-- The filterable elements. Note that some have multiple class names (this can be used if they belong to multiple categories) -->
<div class="pad2y limiter content notitle">
    <div class="body">
        <div class="container">
            <a href="https://www.google.com" class="filterDiv client">
            <img alt="" src="/images/projects/placeholder.png"> <strong>Client1</strong> <span>A client placeholder project</span> </a>
            <a href="https://www.bing.com" class="filterDiv client"><img alt="" src="/images/projects/placeholder.png"> <strong>Client2</strong> <span>Another client placeholder project</span> </a>
            <a href="https://www.yahoo.com" class="filterDiv client fun"><img alt="" src="/images/projects/placeholder.png"> <strong>ClientFun1</strong> <span>A fun client placeholder project</span> </a>
            <a href="https://www.amazon.com" class="filterDiv fun"><img alt="" src="/images/projects/placeholder.png"> <strong>Fun1</strong> <span>A fun placeholder project</span> </a>
        </div>
    </div>
<br>
</div>











<script>
    filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
</script>