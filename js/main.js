
// 获取音频元素并设置默认音量
const audio = document.getElementById('bgMusic');
audio.volume = 0.3;

// 登录功能
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // 简单验证（实际项目应使用更安全的验证方式）
    if(username === '20221172121011' && password === '20010503') {
        // 隐藏登录页，显示内容页
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('contentPage').style.display = 'block';
        document.getElementById('errorMsg').style.display = 'none';
    } else {
        // 显示错误信息
        document.getElementById('errorMsg').style.display = 'block';
    }
}




