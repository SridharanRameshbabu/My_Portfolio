
          document.addEventListener('DOMContentLoaded', function() {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.nav-link');
            
            function highlightNav() {
              let scrollY = window.pageYOffset;
              
              sections.forEach(current => {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop - 100;
                const sectionId = current.getAttribute('id');
                
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                  navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                      link.classList.add('active');
                    }
                  });
                }
              });
            }
            
            window.addEventListener('scroll', highlightNav);
            highlightNav(); // Run once on page load
          });
