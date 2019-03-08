$("ul").on("click","li",function(){
	// //gri ise
	// if($(this).css("color") === "rgb(128, 128, 128)"){
	// 	$(this).css({
	// 		color:"black",
	// 		textDecoration:"none"
	// 	});
	// }
	// //siyah ise
	// else{
	// 	$(this).css({
	// 	color:"gray",
	// 	textDecoration:"line-through"
	// });
	// }
	$(this).toggleClass("completed");	
})
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropogation();
});
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		console.log("you hit enter");
		//listeye eklenecek veri
		var todoText=$(this).val();
		$(this).val("");
		//listeye ekle
		$("ul").append("<li><span><i class=\"fas fa-trash-alt\"></i></span>"+todoText+"</li>");
	}
});
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});