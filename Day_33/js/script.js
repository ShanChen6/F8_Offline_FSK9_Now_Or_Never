/*
 * Khai báo biến
 */
var list = document.querySelector(".list");
var listItems = document.querySelectorAll(".list-item");
var listHidden = document.querySelector(".list-hidden");
let lessionIndex = 0;
let moduleIndex = 0;

/*
 * Tính toán và trả về vị trí của con trỏ chuột so với phần tử mục tiêu.
 */
function getMouseOffset(e) {
  var targetRect = e.target.getBoundingClientRect();
  var offset = {
    x: e.pageX - targetRect.left,
    y: e.pageY - targetRect.top,
  };
  return offset;
}

/*
 * Tính toán và trả về vị trí trung tâm theo chiều dọc của phần tử.
 */
function getElementVerticalCenter(el) {
  var rect = el.getBoundingClientRect();
  return (rect.bottom - rect.top) / 2;
}

/*
 * Chèn một phần tử placeholder vào vị trí thích hợp khi kéo thả.
 */
function appendPlaceholder(e, idx) {
  e.preventDefault();
  if (idx === dragIndex) return;
  var offset = getMouseOffset(e);
  var middleY = getElementVerticalCenter(e.target);
  var placeholder = list.children[dragIndex];
  if (offset.y > middleY) {
    list.insertBefore(e.target, placeholder);
  } else if (list.children[idx + 1]) {
    list.insertBefore(e.target.nextSibling || e.target, placeholder);
  }
  return;
}

/*
 * Tạo chức năng kéo thả cho các phần tử con của rootEl
 */
function sortable(rootEl, onUpdate) {
  var dragEl;
  render(rootEl);
  /*
   *Xử lý sự kiện khi kéo phần tử qua các phần tử khác.
   */
  function _onDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    var target = e.target;
    if (target && target !== dragEl && target.nodeName == "DIV") {
      var offset = getMouseOffset(e);
      var middleY = getElementVerticalCenter(e.target);
      if (offset.y > middleY) {
        if (target.nextSibling.parentElement === rootEl)
          rootEl.insertBefore(dragEl, target.nextSibling);
      } else if (target.parentElement === rootEl)
        rootEl.insertBefore(dragEl, target);
    }
  }
  /*
   *  Xử lý sự kiện khi kết thúc kéo thả.
   */
  function _onDragEnd(e) {
    e.preventDefault();
    dragEl.classList.remove("ghost");
    rootEl.removeEventListener("dragover", _onDragOver, false);
    rootEl.removeEventListener("dragend", _onDragEnd, false);
    onUpdate(dragEl);
  }
  rootEl.addEventListener(
    "dragstart",
    function (e) {
      dragEl = e.target;
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("Text", dragEl.textContent);
      rootEl.addEventListener("dragover", _onDragOver, false);
      rootEl.addEventListener("dragend", _onDragEnd, false);
      setTimeout(function () {
        dragEl.classList.add("ghost");
      }, 0);
    },
    false
  );
}

/*
 * Thiết lập các phần tử con của rootEl có thể kéo thả và cập nhật nội dung của chúng.
 */
function render(rootEl) {
  [].slice.call(rootEl.children).forEach(function (itemEl, index) {
    itemEl.draggable = true;
    let type = "B\xe0i";
    if (itemEl.classList.contains("active")) {
      type = "Module";
      moduleIndex++;
    } else lessionIndex++;
    if (!itemEl.children.length)
      itemEl.innerHTML = `${type}: ${
        type === "Module" ? moduleIndex : lessionIndex
      }: <span>${itemEl.innerText}</span>`;
    else
      itemEl.innerHTML = `${type}: ${
        type === "Module" ? moduleIndex : lessionIndex
      }: <span>${itemEl.children[0].innerText}</span>`;
  });
}
/*
 * Khởi tạo chức năng kéo thả cho list và cập nhật lại chỉ số bài học và module sau khi kéo thả.
 */
sortable(list, function (item) {
  lessionIndex = 0;
  moduleIndex = 0;
  render(list);
});
