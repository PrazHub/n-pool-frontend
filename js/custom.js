function readMore(moreText) {
 var moreTextElem = document.getElementById(moreText);
 if (moreTextElem.classList.contains("d-none")) {
  console.log(moreTextElem.classList);
  moreTextElem.classList.remove("d-none");
 } else {
  moreTextElem.classList.add("d-none");
 }
}
var counted = 0;
$(window).scroll(function () {
 var scrollTop = $(window).scrollTop();
 var oTop = $("#counter").offset().top - window.innerHeight;
 if (counted == 0 && scrollTop > oTop) {
  $(".count").each(function () {
   var $this = $(this),
    countTo = $this.attr("data-count");
   $({
    countNum: $this.text(),
   }).animate(
    {
     countNum: countTo,
    },

    {
     duration: 2000,
     easing: "swing",
     step: function () {
      $this.text(Math.floor(this.countNum));
     },
     complete: function () {
      $this.text(this.countNum);
      //alert('finished');
     },
    }
   );
  });
  counted = 1;
 }
});
