console.log("start");
axios.get('https://feeds.citibikenyc.com/stations/stations.json')
.then(function(response){
	t = eval(response).data;
        $(t.stationBeanList).each(function (index, value) {
        if(value.availableBikes>10){
            $(".list-group-green").append("<li class=\"list-group-item green-css\">"+value.stationName+"</li>");
        }else if(value.availableBikes < 2){
            $(".list-group-red").append("<li class=\"list-group-item red-css\">"+value.stationName+"</li>");
        }else{
            $(".list-group-yellow").append("<li class=\"list-group-item yellow-css\">"+value.stationName+"</li>");
        }
    });
})

.catch(function(error){
    console.log(error);
});
