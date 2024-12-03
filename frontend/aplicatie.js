function analyzeTree(type) {
    const inputField = document.getElementById(type);
    const numbers = inputField.value.trim();
  
    if (!numbers) {
      alert("Te rog introdu valori!");
      return;
    }
  
    fetch("/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: type, numbers: numbers })
    })
    .then(response => response.json())
    .then(data => {
      document.getElementById("result").innerHTML = data.message;
    })
    .catch(error => console.error('Error:', error));
  }
  