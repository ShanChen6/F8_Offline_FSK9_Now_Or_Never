var data = [
  [
    "https://picsum.photos/200/300",
    "Tiêu đề bài viết số 1",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus obcaecati earum ipsam necessitatibus dolorem vel aliquid veniam, quibusdam labore nihil doloremque quaerat aut laudantium, quod consequuntur dolor sunt velit dolores!",
  ],
  [
    "https://picsum.photos/200/300",
    "Tiêu đề bài viết số 2",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus obcaecati earum ipsam necessitatibus dolorem vel aliquid veniam, quibusdam labore nihil doloremque quaerat aut laudantium, quod consequuntur dolor sunt velit dolores!",
  ],
  [
    "https://picsum.photos/200/300",
    "Tiêu đề bài viết số 3",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus obcaecati earum ipsam necessitatibus dolorem vel aliquid veniam, quibusdam labore nihil doloremque quaerat aut laudantium, quod consequuntur dolor sunt velit dolores!",
  ],
];

// Tạo chuỗi HTML
var htmlString = "";
for (var i = 0; i < data.length; i++) {
  var imageUrl = data[i][0];
  var title = data[i][1];
  var content = data[i][2];

  htmlString += `
    <div class="article">
      <img src="${imageUrl}" alt="${title}">
      <h2>${title}</h2>
      <p>${content}</p>
    </div>
  `;
}

// Hiển thị chuỗi HTML
document.write(htmlString);
