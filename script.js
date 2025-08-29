   $(document).ready(function(){
            // Initialize Main Product Carousel (Single Row with all 8 products)
            $('.main-product-carousel').owlCarousel({
                items: 4,
                loop: true,
                margin: 20,
                nav: false,
                dots: true,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1,
                        autoplay: true,
                        autoplayTimeout: 3000
                    },
                    576: {
                        items: 2,
                        autoplay: true,
                        autoplayTimeout: 3000
                    },
                    768: {
                        items: 3,
                        autoplay: true,
                        autoplayTimeout: 3000
                    },
                    992: {
                        items: 4,
                        autoplay: true,
                        autoplayTimeout: 3000
                    }
                }
            });

            // Initialize Featured Products Carousel (Only for mobile/tablet)
            $('.featured-carousel').owlCarousel({
                items: 1,
                loop: true,
                margin: 20,
                nav: false,
                dots: true,
                autoplay: true,
                autoplayTimeout: 3500,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    576: {
                        items: 2
                    },
                    768: {
                        items: 3
                    }
                }
            });

            // Handle menu click events for both mobile and desktop
            $('.nav-link[data-filter]').click(function(e) {
                e.preventDefault();
                
                // Remove active class and blue color from all nav links (both mobile and desktop)
                $('.nav-link').removeClass('active').removeClass('text-primary').addClass('text-secondary');
                
                // Add active class and blue color to clicked nav link
                $(this).addClass('active').removeClass('text-secondary').addClass('text-primary');
                
                // Get the filter value
                var filter = $(this).data('filter');
                
                // Update the corresponding menu item in the other navigation (mobile/desktop)
                $('[data-filter="' + filter + '"]').removeClass('text-secondary').addClass('active text-primary');
                
                // Close mobile menu after selection
                $('#mobileNav').collapse('hide');
            });
        });
  
  function toggleChat() {
    const chat = document.getElementById("chatbot");
    chat.style.display = chat.style.display === "none" ? "flex" : "none";
  }

  function sendMessage() {
    const input = document.getElementById("userInput");
    const msg = input.value.trim();
    if (!msg) return;

    const chatlog = document.getElementById("chatlog");

    // Append user message
    chatlog.innerHTML += `<div class="chat-msg chat-user"><strong>You:</strong> ${msg}</div>`;

    // Basic responses
    let response = "I'm not sure how to answer that.";
    const msgLower = msg.toLowerCase();

    if (msgLower.includes("product") || msgLower.includes("offer")) {
      response = "We offer a variety of fashion and tech products. Stay tuned for updates!";
    } else if (msgLower.includes("discount")) {
      response = "Yes! We offer seasonal discounts. Check our home page for promotions.";
    } 
    else if (msgLower.includes("payment methods")) {
      response = "We accept credit cards, PayPal, UPI, and net banking.";
    }
    else if (msgLower.includes("return policy")) {
      response = "Our return policy allows free returns within 30 days of purchase.";
    }  
    else if (msgLower.includes("contact")) {
      response = "You can reach us at support@example.com.";
    } else if (msgLower.includes("shipping") || msgLower.includes("delivery")) {
      response = "We offer free worldwide shipping on all orders!";
    } else if (msgLower.includes("hello") || msgLower.includes("hi")) {
      response = "Hello! How can I help you today?";
    }

    // Append bot response
    setTimeout(() => {
      chatlog.innerHTML += `<div class="chat-msg chat-bot"><strong>Bot:</strong> ${response}</div>`;
      chatlog.scrollTop = chatlog.scrollHeight;
    }, 500);

    input.value = '';
    chatlog.scrollTop = chatlog.scrollHeight;
  }

// Translations for different languages
 const translations = {
        en: {
          dir: "ltr",
          brandName: "Comforty",
          cartBtn: "Cart",
          allCategories: "All Categories",
          navHome: "Home", navShop: "Shop", navProduct: "Product", navPages: "Pages", navAbout: "About",
          contactTxt: "Contact:(808) 555-0111",
          welcomeText: "WELCOME TO CHAIRY",
          heroTitle: "Best Furniture Collection For Your Interior",
          shopNowBtn: "Shop Now →",
          discountTxt: "Discount",
          clientHeading: "What Our Clients Say About Us",
          footerBrand: "Chairy",
          footerDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
          footerCat: "Category",
          footerSupport: "Support",
          footerNewsletter: "News Letter",
          copyTxt: "© Copyright All Rights Reserved",
          byTxt: "This site by Sufiyan Shaikh"
        },
        fr: {
          dir: "ltr",
          brandName: "Confort",
          cartBtn: "Panier",
          allCategories: "Toutes catégories",
          navHome: "Accueil", navShop: "Boutique", navProduct: "Produit", navPages: "Pages", navAbout: "À propos",
          contactTxt: "Contact:(808) 555-0111",
          welcomeText: "BIENVENUE CHEZ CHAIRY",
          heroTitle: "Meilleure collection de meubles pour votre intérieur",
          shopNowBtn: "Acheter maintenant →",
          discountTxt: "Remise",
          clientHeading: "Ce que nos clients disent de nous",
          footerBrand: "Chairy",
          footerDesc: "Lorem ipsum en français.",
          footerCat: "Catégorie",
          footerSupport: "Support",
          footerNewsletter: "Bulletin",
          copyTxt: "© Copyright Tous droits réservés",
          byTxt: "Ce site par Sufiyan Shaikh"
        },
        es: {
          dir: "ltr",
          brandName: "Comodidad",
          cartBtn: "Carrito",
          allCategories: "Todas las categorías",
          navHome: "Inicio", navShop: "Tienda", navProduct: "Producto", navPages: "Páginas", navAbout: "Acerca de",
          contactTxt: "Contacto:(808) 555-0111",
          welcomeText: "BIENVENIDO A CHAIRY",
          heroTitle: "La mejor colección de muebles para tu interior",
          shopNowBtn: "Comprar ahora →",
          discountTxt: "Descuento",
          clientHeading: "Lo que nuestros clientes dicen de nosotros",
          footerBrand: "Chairy",
          footerDesc: "Lorem ipsum en español.",
          footerCat: "Categoría",
          footerSupport: "Soporte",
          footerNewsletter: "Boletín",
          copyTxt: "© Copyright Todos los derechos reservados",
          byTxt: "Este sitio por Sufiyan Shaikh"
        },
        
      };

      function changeLanguage(lang) {
        document.documentElement.setAttribute("dir", translations[lang].dir);
        Object.keys(translations[lang]).forEach(key => {
          const el = document.getElementById(key);
          if (el) el.innerText = translations[lang][key];
        });
      }

      document.getElementById("languageSelect").addEventListener("change", function() {
        changeLanguage(this.value);
      });

      // Default: English
      changeLanguage("en");
