var nasa = $("#nasa-images");
var input = $("#datepicker").datepicker({dateFormat: 'yy-mm-dd'});

$("form button").click(function(e){
    e.preventDefault();
    var date = input.val();
    if(date===""){
        alert("Please Enter The Date");
        return;
    }
    let url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date="+date+"&api_key=DEMO_KEY";

    $.get(url,function(data){
        let photos = data.photos;
        if(photos.length === 0 ) {
            alert("No photos available for this date");
            return;
        }if(photos.length === 0 ) {
            alert("No photos available for this date");
            return;
        }
        $("#nasa-images img").remove();
        for(let photo of photos){
            nasa.append('<img src ="'+photo.img_src+'">');
        }

    });


});