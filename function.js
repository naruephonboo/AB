const seat =
[
    
]
// Select add and delete buttons
const incrementCount = document.getElementById("increment-count");
const decrementCount = document.getElementById("decrement-count");
const total = document.getElementById("sum-count");

// Select total count
const totalCount = document.getElementById("total-count");

// Variable to track count
let count = 1;

// Display initial count value
totalCount.innerHTML = count;

// Function to add count
const handleIncrement = () => {
  count++;
  totalCount.innerHTML = count;
};

// Function to delete count
const handleDecrement = () => {
  count--;
  totalCount.innerHTML = count;
};

// Function to fetch count
const handleFetch = () => {
  totalCount.innerHTML = count;

  let sum = count;  ///ค่าของจำนวน

    seat[0] = sum;
    seat.push(sum);
  
  console.log(seat[0]);
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

