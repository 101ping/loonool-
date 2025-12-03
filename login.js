// 目前 Help Center 只是静态 FAQ 展示
// 未来如果需要做“点击问题展开 / 收起答案”等交互，可以在这里实现

console.log("Help Center page loaded.");
// 获取登录按钮
const loginButton = document.getElementById("loginButton");

loginButton.addEventListener("click", () => {
  // 这里未来可以接入真实登录 API
  // 现在只是演示用途
  alert("登录逻辑尚未实现，这里是按钮点击事件占位。");
});
