document.write("<h1>Bảng cửu chương</h1>");
document.write("<div class='row'>");
for (var i = 1; i <= 5; i++) {
  document.write("<div class='table'>");
  document.write("<h3>", i, "</h3>");
  for (var j = 1; j <= 10; j++) {
    document.writeln(i, " x ", j, " = ", i * j, "<br>");
  }
  document.write("</div>");
}
document.write("</div>");

document.write("<div class='row'>");
for (var i = 6; i <= 10; i++) {
  document.write("<div class='table'>");
  document.write("<h3>", i, "</h3>");
  for (var j = 1; j <= 10; j++) {
    document.writeln(i, " x ", j, " = ", i * j, "<br>");
  }
  document.write("</div>");
}
document.write("</div>");
