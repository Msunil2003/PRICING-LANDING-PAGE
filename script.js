// Function to toggle pricing tiers
function togglePricing(tier) {
    // Hide all pricing plans
    var pricingPlans = document.querySelectorAll('.pricing-plan');
    pricingPlans.forEach(function(plan) {
        plan.classList.remove('active');
    });

    // Show the selected pricing plan
    var selectedPlan = document.getElementById(tier);
    selectedPlan.classList.add('active');

    // Update active state for toggle buttons
    var toggleButtons = document.querySelectorAll('.pricing-options button');
    toggleButtons.forEach(function(button) {
        button.classList.remove('active');
    });
    document.getElementById(tier + '-toggle').classList.add('active');
}

// Function to handle form submission for saving settings
document.getElementById('settings-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get selected currency and unit
    var currency = document.getElementById('currency').value;
    var unit = document.getElementById('unit').value;

    // Save preferences to local storage
    localStorage.setItem('currency', currency);
    localStorage.setItem('unit', unit);

    alert('Settings saved successfully!');
});

// Function to load saved preferences from local storage
window.addEventListener('load', function() {
    // Load currency preference
    var savedCurrency = localStorage.getItem('currency');
    if (savedCurrency) {
        document.getElementById('currency').value = savedCurrency;
    }

    // Load unit preference
    var savedUnit = localStorage.getItem('unit');
    if (savedUnit) {
        document.getElementById('unit').value = savedUnit;
    }
});

// Function to toggle pricing tiers
function togglePricing(tier) {
    // Hide all pricing plans
    var pricingPlans = document.querySelectorAll('.pricing-plan');
    pricingPlans.forEach(function(plan) {
        plan.style.display = 'none';
    });

    // Show the selected pricing plan
    var selectedPlan = document.getElementById(tier);
    selectedPlan.style.display = 'block';

    // Update active state for toggle buttons
    var toggleButtons = document.querySelectorAll('.pricing-options button');
    toggleButtons.forEach(function(button) {
        button.classList.remove('active');
    });
    document.getElementById(tier + '-toggle').classList.add('active');
}
