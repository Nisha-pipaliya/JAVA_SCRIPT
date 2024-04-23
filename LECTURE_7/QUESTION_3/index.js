const checkNumber = () => {
    const number = document.getElementById("numberInput").value;

    if (number % 2 === 0) {
        document.getElementById("result").innerText = "It's an even number";
    } else {
        document.getElementById("result").innerText = "It's an odd number";
    }
};
