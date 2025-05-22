// script.js for Thrive Health Fitness

// Responsive Navigation Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navUl = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
    navUl.classList.toggle("active");
});

// Close menu when a link is clicked (optional, good for SPAs or smooth scrolling)
navUl.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        if (navUl.classList.contains("active")) {
            navUl.classList.remove("active");
        }
    });
});


// Blueprint Form Handling
const blueprintForm = document.getElementById("blueprint-form");
const formMessage = document.getElementById("form-message");

if (blueprintForm) {
    blueprintForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent the default form submission

        // Basic validation
        const nameInput = blueprintForm.querySelector("input[name=\"name\"]");
        const emailInput = blueprintForm.querySelector("input[name=\"email\"]");
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();

        if (!name || !email) {
            formMessage.textContent = "Please fill in both name and email.";
            formMessage.style.color = "red";
            return;
        }

        // --- GA4 Event Tracking --- 
        // Check if gtag function exists before calling it
        if (typeof gtag === "function") {
            gtag("event", "generate_lead", {
                "event_category": "Form Submission",
                "event_label": "Body Transformation Blueprint"
                // You could add more parameters like user name/email if privacy policies allow
            });
            console.log("GA4 event generate_lead sent."); // For debugging
        } else {
            console.log("gtag function not found. GA4 event not sent."); // For debugging
        }
        // --- End GA4 Event Tracking ---

        // Simulate submission and provide feedback
        formMessage.textContent = "Thank you! Check your email for the download link."; // Simulate success
        formMessage.style.color = "green";

        // Optionally clear the form
        blueprintForm.reset();

        // You could also provide a direct download link here for simplicity in this demo,
        // although this isn't ideal for lead capture verification.
        // Example: window.location.href = "./Thrive_Body_Transformation_Blueprint_Revised.pdf"; 
        // Note: Ensure the PDF path is correct relative to the HTML file if using direct download.
    });
}
