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
            var taxirub = localStorage.getItem('taxirub'); 
            console.log(taxirub);
            var taxisong = localStorage.getItem('taxisong'); 
            console.log(taxisong);
            // document.getElementById("prub1").value = taxirub;
            // document.getElementById("psong1").value = taxisong;
            function chagetaxi(){
                document.getElementById("prub1").value = sign[0];
                document.getElementById("psong1").value = sign[1];
            }