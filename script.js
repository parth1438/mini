document.addEventListener("DOMContentLoaded", () => {

    const portfolioForm = document.getElementById("portfolioForm");
    const portfolioDetails = document.getElementById("portfolioDetails");
    const portfolioOutput = document.getElementById("portfolioOutput");


    portfolioForm.addEventListener("submit", (event) => {

        event.preventDefault();


        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const qualification = document.getElementById("qualification").value.trim();
        const branch = document.getElementById("branch").value.trim();
        const grades = document.getElementById("grades").value.trim();
        const passingYear = document.getElementById("passingYear").value.trim();
        const bio = document.getElementById("bio").value.trim();
        const photoLink = document.getElementById("photoLink").value.trim();


        const portfolioHTML = `
            <div class="portfolio-card">
                <img src="${photoLink}" alt="Profile Photo" class="profile-photo">
                <h3>${firstName} ${lastName}</h3>
                <p><strong>Qualification:</strong> ${qualification}</p>
                <p><strong>Branch:</strong> ${branch}</p>
                <p><strong>Grades:</strong> ${grades}</p>
                <p><strong>Passing Year:</strong> ${passingYear}</p>
                <p><strong>About Me:</strong> ${bio}</p>
            </div>
        `;


        portfolioDetails.innerHTML = portfolioHTML;
        portfolioOutput.style.display = "block";


        portfolioForm.reset();
    });
});
