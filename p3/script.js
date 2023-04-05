function calculate() {
    // Get input values
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);
    
    // Calculate results
    var max = Math.max(num1, num2, num3);
    var min = Math.min(num1, num2, num3);
    var avg = ((num1 + num2 + num3) / 3).toFixed(2);
    var arr = [num1, num2, num3];
    arr.sort(function(a, b){return a-b});
    var med = arr[1];
    var range = max - min;
    
    // Update result div with calculated values
    document.getElementById("max").innerHTML = max;
    document.getElementById("min").innerHTML = min;
    document.getElementById("avg").innerHTML = avg
    document.getElementById("med").innerHTML = med;
    document.getElementById("range").innerHTML = range;
    
    // Display result div
    document.getElementById("result").style.display = "block";
}