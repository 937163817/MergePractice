window.onload=function()
{
    
};

$(document).ready(function(){
    $("input").click(function()
    {
        var numberOfListitem = $("#choices li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListitem);
        //console.log("nameOfListItem:"+numberOfListitem);//
        $("H1").text($("#choices li").eq(randomChildNumber).text());
        /*
        if(randomChildNumber==1)
            path="1.jpg";
        if(randomChildNumber==2)
            path="2.jpg";
        if(randomChildNumber==0)
            path="3.png";
        
        document.getElementById('myimage').innerHTML='<img src="'+path+'" />';*/
    });
});
