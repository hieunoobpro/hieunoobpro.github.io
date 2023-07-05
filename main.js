// Bai 1
const text = document.getElementById("text");
text.style.color = "#777";
text.style.fontSize = "2rem";
text.innerHTML = "Tôi có thể làm <em>bất cứ điều gì</em> tôi muốn với JavaScript.";

// bai 2
const li = document.querySelectorAll("li");
for (let i = 0; i < 3; i++) {
  li[i].style.color = "blue";
}
// bai 3

// Thêm 3 thẻ <li> mới vào cuối danh sách
let list = document.getElementById("list");
let newLi1 = document.createElement("li");
newLi1.textContent = "Item 8";
let newLi2 = document.createElement("li");
newLi2.textContent = "Item 9";
let newLi3 = document.createElement("li");
newLi3.textContent = "Item 10";
list.appendChild(newLi1);
list.appendChild(newLi2);
list.appendChild(newLi3);

// Sửa nội dung của thẻ <li> 1 thành màu đỏ
let firstLi = list.querySelector("li:first-child");
firstLi.style.color = "red";

// Sửa background của thẻ <li> 3 thành màu xanh
let thirdLi = list.querySelector("li:nth-child(3)");
thirdLi.style.backgroundColor = "blue";

// Xóa thẻ <li> 4
let fourthLi = list.querySelector("li:nth-child(4)");
fourthLi.remove();

// Thêm một thẻ <li> mới thay thế cho thẻ <li> 4 đã bị xóa
let newLi4 = document.createElement("li");
newLi4.textContent = "This is a new list item";
list.insertBefore(newLi4, myList.children[3]);