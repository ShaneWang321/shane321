function copyToClipboard() {
  const el = document.createElement('textarea');
  el.value = 'https://shane321.vercel.app/'; // 在這裡替換成您要複製的網址
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  alert('已複製網址到剪貼簿！');
}
