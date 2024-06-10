let count = localStorage.getItem("count") || 0;
document.getElementById("num").innerHTML = count;

const Counter = () => {
    count++;
    document.getElementById("num").innerHTML = count;
    localStorage.setItem("count", count);
}
document.getElementById("btn").addEventListener("click", Counter);