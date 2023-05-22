var seat =
[
    
]
// Select add and delete buttons
const incrementCount = document.getElementById("increment-count");
const decrementCount = document.getElementById("decrement-count");
const total = document.getElementById("sum-count");

// Select total count
var totalCount = document.getElementById("total-count");

// Variable to track count
var count = 1;

// Display initial count value
totalCount.innerHTML = count;

// Function to add count
var handleIncrement = () => {
  count++;
  totalCount.innerHTML = count;
};

// Function to delete count
var handleDecrement = () => {
  count--;
  totalCount.innerHTML = count;
};

// Function to fetch count
const handleFetch = () => {
  totalCount.innerHTML = count;

  var sum = count;  ///ค่าของจำนวน

    seat[0] = sum;
    seat.push(sum);
    sessionStorage.setItem("numseat", seat[0]);
    console.log(seat[0]);
    update1();
}
  

// Add click event to buttons
incrementCount.addEventListener("click", handleIncrement);
decrementCount.addEventListener("click", handleDecrement);
total.addEventListener("click", handleFetch);

fetch('main.js')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
        function appendData(data) {
            // document.getElementById("inrub2").value = sign[0];
            // document.getElementById("insong2").value = sign[1];
            var taxirub = localStorage.getItem('taxirub'); 
            console.log(taxirub);
            var taxisong = localStorage.getItem('taxisong'); 
            console.log(taxisong);
            document.getElementById("prub1").value = taxirub;
            document.getElementById("psong1").value = taxisong;
        }

        function update1(){
          AWS.config.update({
              accessKeyId: "AKIAZYHQD6G3SBZLEQ7Y",
              secretAccessKey: "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",
              region: "us-east-1"
            });
            console.log("*"+seat[0]);
            var lambda = new AWS.Lambda();
            var ride_id = localStorage.getItem("ride_id");
            var numseat = sessionStorage.getItem("numseat");
            console.log("*"+ride_id);
            var params = {
              FunctionName: "Update",
              Payload: JSON.stringify({
                  ride_id:ride_id,
                  numseat:numseat,
              })
            };
          
            lambda.invoke(params, function(err, data) {
              if (err) console.log(err, err.stack);
              else{ console.log(data);   
                 window.location = "wait.html";
              }
             
            });
            }