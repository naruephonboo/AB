const sign =
[
    
]
// localStorage.setItem('textSize', 'large'); 
var taxirub = localStorage.getItem('taxirub'); 
var taxisong = localStorage.getItem('taxisong'); 
function selectrub(pierub){
    // const signget = document.getElementById("p1").innerHTML;
    if(sign.length > 0){ // มีแล้ว
        sign[0] = pierub;
    }
    else{
        sign.push(pierub)
    }
   
    console.log(sign);
    // var taxirub = localStorage.getItem('taxi'); 
    localStorage.setItem('taxirub', JSON.stringify(pierub));
    console.log(taxirub);
    document.getElementById("rub").innerText = pierub;
    document.getElementById("inrub").innerText = pierub;
    document.getElementById("inrub1").innerText = pierub;
    // document.getElementById("inrub2").value = "Johnny Bravo";
}
 
function selectsong(piesong){
    // const signget = document.getElementById("p1").innerHTML;
    if(sign.length > 1){ // มีแล้ว
        sign[1] = piesong;
    }
    else{
        sign.push(piesong)
    }
    console.log(sign);
    localStorage.setItem('taxisong', JSON.stringify(piesong));
    console.log(taxisong);
    document.getElementById("song").innerText = piesong;
    document.getElementById("insong").innerText = piesong;
    document.getElementById("insong1").innerText = piesong;
}


fetch('taxidata.json')
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
            var ran = Math.floor(Math.random() * 5);
            // console.log(ran);
            document.getElementById("label").innerText = data[ran].label;
            document.getElementById("label1").innerText = data[ran].label;
            document.getElementById("time").innerText = data[ran].time;
            document.getElementById("price").innerText = data[ran].price;
            // console.log(sign);
            // document.getElementById("inrub2").value = sign[0];
            // document.getElementById("insong2").value = sign[1];
            var taxirub = localStorage.getItem('taxirub'); 
            console.log(taxirub);
            var taxisong = localStorage.getItem('taxisong'); 
            console.log(taxisong);
            document.getElementById("prub").value = taxirub;
            document.getElementById("psong").value = taxisong;
        }
        function update(){
            AWS.config.update({
                accessKeyId: "AKIAZYHQD6G3SBZLEQ7Y",
                secretAccessKey: "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",
                region: "us-east-1"
              });
              
              var lambda = new AWS.Lambda();
              var params = {
                FunctionName: "create",
                Payload: JSON.stringify({
                  pickup_location: sign[0],
                  dropoff_location: sign[1],
                })
              };
            
              lambda.invoke(params, function(err, data) {
                if (err) console.log(err, err.stack);
                else{ console.log(JSON.parse(data.Payload).ride_id);
                    localStorage.setItem("ride_id", JSON.parse(data.Payload).ride_id);
                    window.location = "select.html";
                }
                
              });
              }
            
             