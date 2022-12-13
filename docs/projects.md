<!-- Control buttons -->
<div id="myBtnContainer">
  <button class="btn active" onclick="filterSelection('all')"> All</button>
  <button class="btn" onclick="filterSelection('client')"> Client</button>
  <button class="btn" onclick="filterSelection('fun')"> Fun</button>
    <button class="btn" onclick="filterSelection('masters')"> Masters</button>
</div>


<!-- The filterable elements. Note that some have multiple class names (this can be used if they belong to multiple categories) -->
<div class="pad2y limiter content notitle">
    <div class="body">
        <div class="container">
            <!-- Fun Projects -->
            <a href="https://github.com/iotaaxel/circom-zk-whiteboard" class="filterDiv fun"><img alt="" src="/images/projects/placeholder.png"> <strong>Circom ZK Application</strong> <span>An implementation of a zero-knowledge circuit in Circom</span> </a>
            <a href="https://github.com/iotaaxel/flight-path-restful" class="filterDiv fun"><img alt="" src="/images/projects/placeholder.png"> <strong>Flight Path</strong> <span>A RESTful microservice api for tracking flights</span> </a>
            <a href="https://github.com/iotaaxel/zk-credit-score" class="filterDiv fun"><img alt="" src="/images/projects/placeholder.png"> <strong>ZK Credit Score</strong> <span>A zero-knowledge application for credit scores</span> </a>
            <!-- Masters Projects -->
            <a href="" class="filterDiv masters"><img alt="" src="/images/projects/placeholder.png"> <strong>Image Classifier</strong> <span>Image Classification with a fully-connected neural network (Stanford CS231n)</span> </a>
            <a href="" class="filterDiv masters"><img alt="" src="/images/projects/placeholder.png"> <strong>Network Visualization</strong> <span>A visualization of different types of neural networks (Stanford CS231n)</span> </a>
            <a href="" class="filterDiv masters"><img alt="" src="/images/projects/placeholder.png"> <strong>Image Captioning</strong> <span>Image Captioning with RNNs, Transformers, and GANs (Stanford CS231n)</span> </a>
            <a href="" class="filterDiv masters"><img alt="" src="/images/projects/placeholder.png"> <strong>MapReduce</strong> <span>An implementation (MIT 6.824)</span> </a>
            <a href="" class="filterDiv masters"><img alt="" src="/images/projects/placeholder.png"> <strong>Raft</strong> <span>A replicated state machine protocol (MIT 6.824)</span> </a>
            <a href="" class="filterDiv masters"><img alt="" src="/images/projects/placeholder.png"> <strong>Fault-tolerant key-value service</strong> <span>An implementation (MIT 6.824)</span> </a>
            <a href="" class="filterDiv masters"><img alt="" src="/images/projects/placeholder.png"> <strong>Sharded key-value service</strong> <span>An implementation (MIT 6.824)</span> </a>
            <!-- Client Projects -->
            <!-- <a href="https://www.google.com" class="filterDiv client">
            <img alt="" src="/images/projects/placeholder.png"> <strong>Client1</strong> <span>A client placeholder project</span> </a> -->
            <!-- <a href="https://www.yahoo.com" class="filterDiv client fun"><img alt="" src="/images/projects/placeholder.png"> <strong>ClientFun1</strong> <span>A fun client placeholder project</span> </a> -->
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