document.addEventListener('DOMContentLoaded', function() {
    let clickCount = 0;
    const audio = new Audio("https://cdn.nest.rip/uploads/5919aa31-e61b-421d-af08-ad7ddacd28ea.ogg");
    
    document.getElementById('logoEasterEgg').addEventListener('click', function(e) {
        e.preventDefault();
        clickCount++;    
        if (clickCount === 5) {
            audio.play();
            document.getElementById('equicordLogo').classList.add('spinning');
            setTimeout(() => {
                document.getElementById('equicordLogo').classList.remove('spinning');
                clickCount = 0;
            }, 1000);
        }
    });
});
