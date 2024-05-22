document.addEventListener("DOMContentLoaded",function () {
    // Captura todos os links de navegação
    document.querySelector('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Obtém o elemento para qual o link aponta
            const targetID = this.getAttribute('href');
            const targetElement = document.querySelector(targetID);

            // Calcula a posição do elemento
            const targetPosition = targetElement.getBoundingClientRect().to + window.scrolly;

            // Realiza a rolagem suave até o elemento
            window.scrollTo({
                top: targertPosition,
                behavior:'smoth'
            });
        });
    });
});

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backToTop").style.display = "block";
    } else {
        document.getElementById("backToTop").style.display = "none"
    }
}
            
document.getElementById("backToTop").addEventListener("click", function () {
    window,this.scrollTo({ top: 0, behavior: 'smooth'});
});
        
        
            
        
            
        

        
    
    
 