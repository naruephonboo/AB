
// var ran = {
//     random: Math.ceil(Math.random() * 4)
//   }
  
//   console.log(ran);
//   document.getElementById("data").innerText = 'Name: ' + data[0].label + ' ' + data[0].time;

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
            document.getElementById("label").innerText = data[ran].label;
            document.getElementById("label1").innerText = data[ran].label;
            // document.getElementById("time").innerText = data[ran].time;
            // document.getElementById("price").innerText = data[ran].price;
            // var mainContainer = document.getElementById("myData");
            // for (var i = 0; i < data.length; i++) {
            //     var div = document.createElement("div");
            //     // div.innerHTML = 'Name: ' + data[i].label + ' ' + data[i].time + ' ' + data[i].price;
            //     div.innerHTML = 'Name: ' + data[i].label + ' ' + data[i].time+ ' ' + data[i].price;
            //     mainContainer.appendChild(div);
            // }

            // var ran = {
            //     random: Math.ceil(Math.random() * 4)
            //   }
            //   console.log(ran);
            // var ran = Math.floor(Math.random() * 5);
            // document.getElementById("rand").innerText = 'ran' + ran;
            //   document.getElementById("data").innerText = 'Name: ' + data[ran].label + ' ' + data[ran].time + ' ' + data[ran].price;
            //   document.getElementById("rand").innerText = 'ran' + ran;
            // document.getElementById("rand").innerHTML = Math.floor(Math.random() * 5);
            //   document.getElementById("data").innerText = 'Name: ' + data[1].label + ' ' + data[1].time;
        }