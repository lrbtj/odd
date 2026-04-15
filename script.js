// Functionality to simulate tab switching (Visual Only)
document.querySelectorAll('.sticky-tabs li').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.sticky-tabs li').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        // You can add logic to scroll to specific sections here
    });
});

// Dynamic Backer Count Update (Simulation)
let backerCount = 3456;
setInterval(() => {
    if(Math.random() > 0.8) {
        backerCount++;
        const backerDisplay = document.querySelectorAll('.stat-value')[1];
        if(backerDisplay) backerDisplay.innerText = backerCount.toLocaleString();
    }
}, 5000);