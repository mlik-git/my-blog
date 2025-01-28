// 获取所有带有类名 "clickable-title" 的元素
const titles = document.querySelectorAll('.clickable-title');

// 为每个标题添加点击事件监听器
titles.forEach(title => {
    title.addEventListener('click', () => {
        // 添加缩小动画类
        title.classList.add('shrink-animation');

        // 动画结束后移除类，以便可以重复触发
        title.addEventListener('animationend', () => {
            title.classList.remove('shrink-animation');
        });
    });
});