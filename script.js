document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

document.getElementById("submit-idea").addEventListener("click", function () {
    let idea = document.getElementById("idea-input").value.trim();
    if (idea) {
        alert("THANK YOU FOR THE IDEA. WE'LL RESEARCH ON IT.");
        document.getElementById("idea-input").value = "";
    } else {
        alert("Please enter a business idea.");
    }
});

// Member Contributions Data
const contributions = {
    elon: "Revolutionized electric cars, space travel, and AI with Tesla, SpaceX, and Neuralink.",
    jeff: "Built Amazon, the largest e-commerce empire, and pioneered cloud computing with AWS.",
    bill: "Co-founded Microsoft, transforming personal computing, and donated billions for global health.",
    warren: "One of the most successful investors of all time, known for value investing."
};

// Show Contribution Popup
function showContribution(member) {
    document.getElementById("popup-title").innerText = member.toUpperCase();
    document.getElementById("popup-text").innerText = contributions[member];
    document.getElementById("contribution-popup").style.display = "flex";
}

// Close Popup
function closePopup() {
    document.getElementById("contribution-popup").style.display = "none";
}