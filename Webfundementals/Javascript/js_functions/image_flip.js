// getting images to flip back and forth:
for(var i= 0; i<=4;i++){
$('div').append("<img src=\'images/ninja"+i+".png\' alt=\'images/cat"+i+".png\'/>")
}
$("img").click(function() {
// create click function to manipulate source
var temp= $(this).attr('alt');
// create and store a temporary alternative when click on (this) part to variable temp.
// $(this).fadeOut(300, function() {
  // manipulates the effect
  $(this).attr("alt",$(this).attr("src"));
  // change from alternative data source back to source when click on this
  // $(this).fadeIn(100);
  // manipulates the effect
  $(this).attr('src',temp);
  // change source back to temp (which is the alternative source) when click function is made
