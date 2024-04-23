const checkDivisibility = () => {
    const number = document.getElementById("numberInput").value;

    if (number % 3 === 0) {
        document.getElementById("result").innerText = "Yes";
    } else {
        document.getElementById("result").innerText = "No";
    }
};
