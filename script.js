// Estética Kanto — Editorial Luxury Website Script
document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // Configuration & State
    // ==========================================
    const WHATSAPP_PHONE = '5551993125262'; // Kanto Estética Whatsapp (51) 99312-5262

    // Services Data (Directly from "Projetos kanto.txt")
    const services = [
        // Cabelo
        { id: 'corte', name: 'Corte de Cabelo', category: 'cabelo', desc: 'Corte personalizado adaptado à harmonia do seu rosto, com lavagem e finalização.' },
        { id: 'penteados', name: 'Penteados de Festa', category: 'cabelo', desc: 'Penteados elaborados sob medida para ocasiões especiais, casamentos e formaturas.' },
        { id: 'salao-vip', name: 'Atendimento Salão VIP', category: 'cabelo', desc: 'Serviço de beleza em ambiente reservado com hora exclusiva e atendimento diferenciado.' },
        { id: 'salao-infantil', name: 'Salão de Beleza Infantil', category: 'cabelo', desc: 'Cortes e penteados infantis realizados com paciência, carinho e diversão.' },
        
        // Estética & Pele
        { id: 'pele', name: 'Cuidados com a Pele (Limpeza)', category: 'pele', desc: 'Limpeza facial profunda para desintoxicação dos poros, remoção de impurezas e hidratação.' },
        { id: 'acne', name: 'Tratamentos para Acne', category: 'pele', desc: 'Sessão focada na desinflamação, regulação da oleosidade e cicatrização da pele.' },
        { id: 'massagem', name: 'Massagem Relaxante', category: 'pele', desc: 'Massagem corporal terapêutica com óleos essenciais para alívio completo das tensões musculares.' },
        
        // Depilação
        { id: 'laser', name: 'Depilação a Laser', category: 'depilacao', desc: 'Eliminação duradoura dos pelos com tecnologia de laser segura para todos os tipos de pele.' },
        { id: 'depilacao-cera', name: 'Depilação com Cera', category: 'depilacao', desc: 'Depilação clássica facial e corporal utilizando ceras suaves de alta aderência.' },
        { id: 'depilacao-br', name: 'Depilação Brasileira', category: 'depilacao', desc: 'Depilação íntima feminina realizada com máxima higiene, cuidado e discrição.' },
        
        // Sobrancelhas & Unhas
        { id: 'design-sob', name: 'Design de Sobrancelha', category: 'design', desc: 'Mapeamento facial minucioso para realçar a simetria e expressividade natural do olhar.' },
        { id: 'design-linha', name: 'Design de Sobrancelhas com Linha', category: 'design', desc: 'Técnica de depilação egípcia com linha, ideal para definição precisa e peles sensíveis.' },
        { id: 'manicure', name: 'Manicure Profissional', category: 'design', desc: 'Cuidado completo das cutículas e unhas das mãos, com acabamento esmaltado perfeito.' },
        { id: 'pedicure', name: 'Pedicure Profissional', category: 'design', desc: 'Cuidado e hidratação profunda para as unhas e pele dos pés, com esmaltação.' },
        { id: 'unhas-acrilicas', name: 'Unhas Acrílicas / Alongamento', category: 'design', desc: 'Alongamento resistente com gel ou acrílico, proporcionando comprimento e beleza natural.' },

        // Maquiagem & Noivas
        { id: 'maquiagem', name: 'Serviço de Maquiagem', category: 'maquiagem', desc: 'Maquiagem social para festas e eventos com técnicas de alta fixação e produtos de luxo.' },
        { id: 'maquiagem-perm', name: 'Maquiagem Permanente', category: 'maquiagem', desc: 'Micropigmentação duradoura para preenchimento de sobrancelhas ou contorno natural dos olhos.' },
        { id: 'nupcial', name: 'Serviços Nupciais (Dia da Noiva)', category: 'maquiagem', desc: 'Atendimento exclusivo e completo para noivas, incluindo cabelo, maquiagem e assessoria.' }
    ];

    const categories = {
        'cabelo': { title: 'Cabelo & Penteado', desc: 'Cuidados, cortes e produções assinadas pelas nossas estilistas capilares.' },
        'pele': { title: 'Estética & Pele', desc: 'Tratamentos restauradores e rituais focados na saúde e viço da sua pele.' },
        'depilacao': { title: 'Depilação Especializada', desc: 'Técnicas variadas para remoção de pelos com máxima higiene.' },
        'design': { title: 'Sobrancelha & Unhas', desc: 'Definição do olhar e cuidados com manicure, pedicure e alongamentos.' },
        'maquiagem': { title: 'Maquiagem & Noivas', desc: 'Produções completas de beleza para registrar os momentos mais importantes da vida.' }
    };

    // ==========================================
    // Header Scroll Effect
    // ==========================================
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ==========================================
    // Mobile Menu Toggle & Backdrop Overlay
    // ==========================================
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav-menu');
    const navOverlay = document.getElementById('nav-overlay');

    if (menuToggle && nav && navOverlay) {
        menuToggle.addEventListener('click', () => {
            const isOpen = nav.classList.toggle('open');
            navOverlay.classList.toggle('open', isOpen);
            
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = isOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none';
            spans[1].style.opacity = isOpen ? '0' : '1';
            spans[2].style.transform = isOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none';
        });

        navOverlay.addEventListener('click', () => {
            nav.classList.remove('open');
            navOverlay.classList.remove('open');
            
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('open');
                navOverlay.classList.remove('open');
                
                const spans = menuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }

    // ==========================================
    // Render Accordion Catalogue (Services)
    // ==========================================
    const menuCatalogue = document.getElementById('editorial-menu-catalogue');

    function renderAccordionMenu() {
        if (!menuCatalogue) return;
        menuCatalogue.innerHTML = '';

        Object.keys(categories).forEach((catKey, index) => {
            const cat = categories[catKey];
            const catServices = services.filter(s => s.category === catKey);

            if (catServices.length === 0) return;

            const item = document.createElement('div');
            item.className = `accordion-item ${index === 0 ? 'active' : ''}`;
            item.setAttribute('data-category', catKey);

            // Accordion Header
            const accordionHeader = document.createElement('div');
            accordionHeader.className = 'accordion-header';
            accordionHeader.innerHTML = `
                <h3 class="accordion-title">${cat.title}</h3>
                <svg class="accordion-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            `;

            // Accordion Content Wrapper
            const accordionContent = document.createElement('div');
            accordionContent.className = 'accordion-content';

            const innerList = document.createElement('div');
            innerList.className = 'accordion-inner-list';

            // Fill services inside
            catServices.forEach(service => {
                const row = document.createElement('div');
                row.className = 'menu-item-row';
                row.innerHTML = `
                    <div class="menu-item-header">
                        <h4 class="menu-item-name">${service.name}</h4>
                        <div class="menu-item-dots"></div>
                        <span class="menu-item-price">Sob Consulta</span>
                    </div>
                    <p class="menu-item-desc">${service.desc}</p>
                `;
                innerList.appendChild(row);
            });

            accordionContent.appendChild(innerList);
            item.appendChild(accordionHeader);
            item.appendChild(accordionContent);
            menuCatalogue.appendChild(item);

            // Click Handler for Accordion
            accordionHeader.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                // Close all accordion items
                document.querySelectorAll('.accordion-item').forEach(el => {
                    el.classList.remove('active');
                    el.querySelector('.accordion-content').style.maxHeight = null;
                });

                // If not active before click, open it
                if (!isActive) {
                    item.classList.add('active');
                    accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
                }
            });

            // Open the first item by default on load
            if (index === 0) {
                setTimeout(() => {
                    accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
                }, 100);
            }
        });
    }

    renderAccordionMenu();

    // ==========================================
    // Dynamic Select Service Populator
    // ==========================================
    const bookingServiceSelect = document.getElementById('booking-service');

    function populateBookingServices() {
        if (!bookingServiceSelect) return;
        
        bookingServiceSelect.innerHTML = '<option value="" disabled selected>Selecione o procedimento desejado...</option>';

        Object.keys(categories).forEach(catKey => {
            const optGroup = document.createElement('optgroup');
            optGroup.label = categories[catKey].title;

            const catServices = services.filter(s => s.category === catKey);
            catServices.forEach(service => {
                const opt = document.createElement('option');
                opt.value = service.id;
                opt.textContent = service.name;
                optGroup.appendChild(opt);
            });

            bookingServiceSelect.appendChild(optGroup);
        });
    }

    populateBookingServices();

    // Set minimum date to today for date picker
    const dateInput = document.getElementById('booking-date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
    }

    // ==========================================
    // Curated Booking Form Submission
    // ==========================================
    const bookingForm = document.getElementById('editorial-booking-form');
    const successModal = document.getElementById('success-modal');
    const modalClose = document.getElementById('modal-close');
    const modalCta = document.getElementById('modal-cta');

    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const serviceId = document.getElementById('booking-service').value;
            const dateVal = document.getElementById('booking-date').value;
            const timeVal = document.getElementById('booking-time').value;
            const clientName = document.getElementById('client-name').value.trim();
            const clientPhone = document.getElementById('client-phone').value.trim();

            const selectedService = services.find(s => s.id === serviceId);
            const serviceName = selectedService ? selectedService.name : 'Procedimento Estético';

            // Format date for readibility
            const parts = dateVal.split('-');
            const formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;

            // Create WhatsApp Link
            const messageText = `Olá! Gostaria de solicitar um agendamento na Estética Kanto:\n\n*Serviço:* ${serviceName}\n*Data:* ${formattedDate}\n*Horário:* ${timeVal}\n*Nome:* ${clientName}\n\nAguardo confirmação da agenda!`;
            const encodedText = encodeURIComponent(messageText);
            const waLink = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedText}`;

            if (modalCta) {
                modalCta.href = waLink;
            }

            if (successModal) {
                successModal.classList.add('open');
            }

            bookingForm.reset();

            // Auto redirect to WhatsApp after 3.5 seconds
            setTimeout(() => {
                if (successModal && successModal.classList.contains('open')) {
                    window.open(waLink, '_blank');
                }
            }, 3500);
        });
    }

    // Close success modal handler
    if (modalClose && successModal) {
        modalClose.addEventListener('click', () => {
            successModal.classList.remove('open');
        });
    }
});
