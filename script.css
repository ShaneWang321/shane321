function copyLink() {
  // 取得要複製的連結
  var link = document.querySelector(".link").textContent;
  
  // 建立一個textarea元素
  var textarea = document.createElement("textarea");
  
  // 將連結設定為textarea的值
  textarea.value = link;
  
  // 將textarea加入到網頁中
  document.body.appendChild(textarea);
  
  // 選取textarea中的內容
  textarea.select();
  
  // 嘗試複製內容到剪貼簿
  document.execCommand("copy");
  
  // 移除textarea元素
  document.body.removeChild(textarea);
  
  // 提示複製成功
  alert("Link copied to clipboard!");
}
