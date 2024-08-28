function zoom(event) {
  var zoom = document.getElementById("zoomedImage");
  var img = event.currentTarget;
  var blurOverlay = document.getElementById("blurOverlay");
  var offsetX = event.offsetX;
  var offsetY = event.offsetY;
  var width = img.offsetWidth;
  var height = img.offsetHeight;

  var xPercent = (offsetX / width) * 100;
  var yPercent = (offsetY / height) * 100;

  zoom.style.backgroundImage = `url('${img.src}')`;
  zoom.style.backgroundPosition = `${xPercent}% ${yPercent}%`;

  // Điều chỉnh vị trí và hiển thị của lớp phủ mờ
  blurOverlay.style.left = `${offsetX - 50}px`;
  blurOverlay.style.top = `${offsetY - 50}px`;
  blurOverlay.style.display = "block";
}

function showZoom() {
  var zoom = document.getElementById("zoomedImage");
  var blurOverlay = document.getElementById("blurOverlay");
  zoom.style.display = "block";
  blurOverlay.style.display = "block";
}

function hideZoom() {
  var zoom = document.getElementById("zoomedImage");
  var blurOverlay = document.getElementById("blurOverlay");
  zoom.style.display = "none";
  blurOverlay.style.display = "none";
}
