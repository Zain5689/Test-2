  //***** page1 **********//
document.addEventListener("DOMContentLoaded", function() {
      var clock = document.getElementById("clock");

      // تحديث الساعة بانتظام
      function updateClock() {
          var currentDate = new Date();
          var hours = currentDate.getHours();
          var minutes = currentDate.getMinutes();
          var seconds = currentDate.getSeconds();

          // تنسيق الوقت في شكل "ساعة:دقيقة:ثانية"
          var timeString = hours + ":" + minutes + ":" + seconds;

          // تعيين نص الساعة في العنصر "p"
          clock.textContent = timeString;
      }

      // تحديث الساعة كل ثانية واحدة (1000 مللي ثانية)
      setInterval(updateClock, 1000);

      // تحديث الساعة عند تحميل الصفحة
      updateClock();
  });

  //***** page2 **********//
  document.addEventListener("DOMContentLoaded", function() {
      var images = [
            "./images/1.jpg",
            "./images/2.jpg",
            "./images/3.jpg",
            "./images/1.jpg",
            "./images/2.jpg",
            "./images/3.jpg"
        ];
        var captions = [
            "Palestinian hill",
            "Springs Mountains",
            "Bird Mountains",
            "Ruby Mountains",
            "mountain mountain",
            "Spectrum mountain"
        ];
        
        var currentIndex = 0;
        var slideshow = document.querySelector(".slideshow");
        var prevButton = document.getElementById("prev");
        var nextButton = document.getElementById("next");
        var image = document.getElementById("image");
        var caption = document.getElementById("caption");
        var currentPage = document.getElementById("currentPage");
        var thumbnails = document.querySelectorAll(".thumbnails .thumbnail");
        
        function updateImage() {
            image.src = images[currentIndex];
            caption.innerHTML = captions[currentIndex];
            currentPage.textContent = (currentIndex + 1) + " / " + images.length;
            thumbnails.forEach(function (thumbnail) {
                thumbnail.classList.remove("active");
            });
            thumbnails[currentIndex].classList.add("active");
        }
        
        function prevImage() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateImage();
        }
        
        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            updateImage();
        }
        
        prevButton.addEventListener("click", prevImage);
        nextButton.addEventListener("click", nextImage);
        
        thumbnails.forEach(function (thumbnail, index) {
            thumbnail.addEventListener("click", function () {
                currentIndex = index;
                updateImage();
            });
        });
        
        updateImage();
});
  //***** page3 **********//
function showImage1(){
    document.getElementById("img").src="images/4.jpg"
}
function showImage2(){
    document.getElementById("img").src="images/5.jpeg"
}
function showImage3(){
    document.getElementById("img").src="images/6.jpg"
}
function showImage4(){
    document.getElementById("img").src="images/7.jpg"
}
//******page4*******//
function receipt(){
    var x =document.getElementById("mytable");
    var row=x.insertRow();
    var a = row.insertCell(0);
    var b = row.insertCell(1);
    a.innerHTML = document.getElementById("f1")[0].value;
    b.innerHTML = document.getElementById("f1")[1].value;
    var btn=document.getElementById("btn");
    var price=document.getElementById("prc").value;
    var rec=0;
    rec=parseInt(rec+price);
    document.getElementById("print").innerHTML=rec;
    if(btn.onclick){
    var x=document.getElementById("f1").reset();
    }
}
//******page5*******//
document.addEventListener("DOMContentLoaded", function() {
  const tableRows = Array.from(document.querySelectorAll("#myTable tr")).slice(1); // Exclude the header row

  function search(query) {
    tableRows.forEach(row => {
      const name = row.cells[0].textContent.toLowerCase();
      const country = row.cells[1].textContent.toLowerCase();

      if (name.includes(query.toLowerCase()) || country.includes(query.toLowerCase())) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  }

  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value;
    search(query);
  });
});
