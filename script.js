document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('video');
    
    video.addEventListener('error', function(e) {
        console.error('视频加载错误:', e);
        console.log('错误详情:', video.error);
    });

    video.addEventListener('loadeddata', function() {
        console.log('视频加载成功');
    });
});

// 添加鼠标移动爱心效果
document.addEventListener('mousemove', function(e) {
    const now = Date.now();
    if (now - lastHeartTime >= heartInterval) {
        createHeart(e.clientX, e.clientY);
        lastHeartTime = now;
    }
});

let lastHeartTime = 0;
const heartInterval = 50; // 控制爱心生成频率（毫秒）

function createHeart(x, y) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';

    // 随机移动方向和旋转角度
    const moveX = (Math.random() - 0.5) * 100;
    const moveY = -Math.random() * 100;
    const rotate = (Math.random() - 0.5) * 90;

    heart.style.setProperty('--moveX', `${moveX}px`);
    heart.style.setProperty('--moveY', `${moveY}px`);
    heart.style.setProperty('--rotate', `${rotate}deg`);

    document.getElementById('hearts-container').appendChild(heart);

    // 动画结束后移除爱心元素
    setTimeout(() => {
        heart.remove();
    }, 1000);
}

// 添加触摸设备支持
document.addEventListener('touchmove', function(e) {
    const touch = e.touches[0];
    const now = Date.now();
    if (now - lastHeartTime >= heartInterval) {
        createHeart(touch.clientX, touch.clientY);
        lastHeartTime = now;
    }
});

function showContact(type) {
    if (type === 'wechat') {
        document.getElementById('wechatPopup').style.display = 'block';
    }
}

function closePopup() {
    document.getElementById('wechatPopup').style.display = 'none';
}

// 点击弹出层背景关闭
document.getElementById('wechatPopup').addEventListener('click', function(e) {
    if (e.target === this) {
        closePopup();
    }
}); 