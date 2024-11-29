function selectPlan(planName) {
    
    document.getElementById('plans-section').classList.add('hidden');
    document.getElementById('plans-section').classList.remove('visible');

    
    document.getElementById('payment-section').classList.add('visible');
    document.getElementById('payment-section').classList.remove('hidden');

    
    console.log(`Selected Plan: ${planName}`);
}
