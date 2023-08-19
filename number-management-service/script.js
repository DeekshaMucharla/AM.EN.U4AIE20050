document.addEventListener("DOMContentLoaded", function() {
    const urlForm = document.getElementById("urlForm");
    const resultDiv = document.getElementById("result");

    urlForm.addEventListener("submit", async function(event) {
        event.preventDefault();
        
        const urlsInput = document.getElementById("urls");
        const urls = urlsInput.value.split(",").map(url => url.trim());

        if (!urls || urls.length === 0) {
            resultDiv.innerHTML = "<p>Please provide at least one URL.</p>";
            return;
        }

        try {
            const response = await fetch(`http://localhost:8008/numbers?${urls.map(url => `url=${encodeURIComponent(url)}`).join("&")}`);
            const data = await response.json();
            
            if (response.status === 200) {
                const numbers = data.numbers;
                resultDiv.innerHTML = `<p>Merged Numbers: [ ${numbers.join(", ")} ]</p>`;
            } else {
                resultDiv.innerHTML = "<p>Error fetching data.</p>";
            }
        } catch (error) {
            resultDiv.innerHTML = `<p>Error: ${error.message}</p>`;
        }
    });
});
