// Create snowflakes
function createSnowflakes() {
    const container = document.getElementById('snowflakes');
    const snowflakeCount = 50;

    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.innerHTML = '❄';
        snowflake.style.left = Math.random() * 100 + '%';
        snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';
        snowflake.style.animationDelay = Math.random() * 2 + 's';
        snowflake.style.fontSize = (Math.random() * 1 + 0.5) + 'em';
        container.appendChild(snowflake);
    }
}

createSnowflakes();
