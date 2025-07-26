// Fetch data from a free API
fetch("https://randomuser.me/api/")
  .then(response => response.json()) // Convert to JSON
  .then(data => {
    const user = data.results[0];
    console.log("Name:", user.name.first, user.name.last);
    console.log("Email:", user.email);
    console.log("Country:", user.location.country);
    console.log("Picture URL:", user.picture.large);
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });
