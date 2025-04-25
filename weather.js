const apiURL = "https://api.weatherapi.com/v1/current.json?q=Cancun&key=4e5e576e864142e780a45600252403";

fetch(apiURL)
  .then(response => {
    if (!response.ok) throw new Error("Network response was not OK");
    return response.json();
  })
  .then(data => {
    document.getElementById("city").textContent = data.location.name;
    document.getElementById("temp").textContent = data.current.temp_c;
    const icon = document.getElementById("icon");
    icon.src = "https:" + data.current.condition.icon;
    icon.style.display = "block";
  })
  .catch(error => {
    console.error("Weather API error:", error);
    document.getElementById("city").textContent = "Weather data unavailable";
    document.getElementById("temp").textContent = "";
    document.getElementById("icon").style.display = "none";
  });
