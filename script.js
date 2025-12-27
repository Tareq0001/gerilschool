// Data for the application based on the requirements
const schoolData = [
    // Classrooms
    {
        id: 1,
        category: 'classes',
        name: 'فصل 1/أ',
        details: 'الصف الأول الابتدائي - أ',
        location: 'الدور الثاني << اتجه يساراً ثم يميناً',
        floor: 'الدور الثاني',
        mapImage: 'https://placehold.co/600x400?text=Floor+Plan+Floor+2',
        realImage: 'https://placehold.co/600x400?text=Real+Photo+Class+1A',
        coordinates: { top: '30%', left: '40%' }
    },
    {
        id: 2,
        category: 'classes',
        name: 'فصل 2/ب',
        details: 'الصف الثاني الابتدائي - ب',
        location: 'الدور الأول << اتجه مباشرة ثم يساراً',
        floor: 'الدور الأول',
        mapImage: 'https://placehold.co/600x400?text=Floor+Plan+Floor+1',
        coordinates: { top: '45%', left: '60%' }
    },
    {
        id: 3,
        category: 'classes',
        name: 'فصل 3/ج',
        details: 'الصف الثالث الابتدائي - ج',
        location: 'الدور الثالث << نهاية الممر يميناً',
        floor: 'الدور الثالث',
        mapImage: 'https://placehold.co/600x400?text=Floor+Plan+Floor+3',
        coordinates: { top: '20%', left: '80%' }
    },

    // Administration
    {
        id: 101,
        category: 'admin',
        name: 'صالحة الحفظي',
        title: 'مديرة المدرسة',
        office: 'مكتب رقم 1',
        contact: {
            phone: '05xxxxxxxx',
            email: 'principal@abha-school.edu.sa'
        },
        location: 'الدور الأرضي - بجانب المدخل الرئيسي',
        mapImage: 'https://placehold.co/600x400?text=Floor+Plan+Ground+Floor',
        coordinates: { top: '15%', left: '50%' }
    },
    {
        id: 102,
        category: 'admin',
        name: 'وكيلة المدرسة',
        title: 'الوكيلة',
        office: 'مكتب رقم 2',
        contact: {
            phone: '05xxxxxxxx',
            email: 'vice.principal@abha-school.edu.sa'
        },
        location: 'الدور الأرضي - الجناح الإداري',
        mapImage: 'https://placehold.co/600x400?text=Floor+Plan+Ground+Floor',
        coordinates: { top: '25%', left: '50%' }
    },
    {
        id: 103,
        category: 'admin',
        name: 'المرشدة الطلابية',
        title: 'الارشاد الطلابي',
        contact: {
            phone: '05xxxxxxxx',
            email: 'counselor@abha-school.edu.sa'
        },
        location: 'الدور الأول - مقابل المصلى',
        mapImage: 'https://placehold.co/600x400?text=Floor+Plan+Floor+1',
        coordinates: { top: '50%', left: '30%' }
    },
    {
        id: 104,
        category: 'admin',
        name: 'السكرتارية',
        title: 'مكتب السكرتارية',
        contact: {
            phone: 'رقم المدرسة الرسمي: 017xxxxxxx'
        },
        location: 'الدور الأرضي - الاستقبال',
        mapImage: 'https://placehold.co/600x400?text=Floor+Plan+Ground+Floor',
        coordinates: { top: '10%', left: '40%' }
    },

    // Teachers
    {
        id: 201,
        category: 'teachers',
        name: 'نورة الشهري',
        subject: 'اللغة العربية',
        office: 'غرفة معلمات (1)',
        location: 'الدور الثاني - يسار السلالم',
        mapImage: 'https://placehold.co/600x400?text=Floor+Plan+Floor+2',
        coordinates: { top: '60%', left: '20%' }
    },
    {
        id: 202,
        category: 'teachers',
        name: 'فاطمة العسيري',
        subject: 'العلوم',
        office: 'غرفة معلمات (2)',
        location: 'الدور الأول - بجانب المعمل',
        mapImage: 'https://placehold.co/600x400?text=Floor+Plan+Floor+1',
        coordinates: { top: '70%', left: '70%' }
    },

    // Facilities
    {
        id: 301,
        category: 'facilities',
        name: 'المقصف',
        details: 'مقصف المدرسة المركزي',
        location: 'الفناء الخارجي - جهة اليمين',
        mapImage: 'https://placehold.co/600x400?text=Floor+Plan+Outdoor',
        coordinates: { top: '80%', left: '85%' }
    },
    {
        id: 302,
        category: 'facilities',
        name: 'المصلى',
        details: 'مصلى الطالبات والمعلمات',
        location: 'الدور الأول - الجناح الأوسط',
        mapImage: 'https://placehold.co/600x400?text=Floor+Plan+Floor+1',
        coordinates: { top: '50%', left: '50%' }
    },
    {
        id: 303,
        category: 'facilities',
        name: 'الفناء',
        details: 'ساحة الاصطفاف والنشاط',
        location: 'وسط مبنى المدرسة',
        mapImage: 'https://placehold.co/600x400?text=Floor+Plan+Ground+Floor',
        coordinates: { top: '50%', left: '50%' }
    },
    {
        id: 304,
        category: 'facilities',
        name: 'دورات المياه (بنات)',
        details: 'دورات مياه الطالبات',
        location: 'متوفرة في جميع الأدوار - نهاية الممرات',
        mapImage: 'https://placehold.co/600x400?text=Floor+Plan+Multiple',
        coordinates: { top: '90%', left: '10%' }
    },

    // Labs & Halls
    {
        id: 401,
        category: 'labs',
        name: 'معمل الحاسب',
        details: 'مختبر تكنولوجيا المعلومات',
        location: 'الدور الثالث - الجناح التقني',
        mapImage: 'https://placehold.co/600x400?text=Floor+Plan+Floor+3',
        realImage: 'https://placehold.co/600x400?text=Real+Photo+Computer+Lab',
        coordinates: { top: '40%', left: '20%' }
    },
    {
        id: 402,
        category: 'labs',
        name: 'معمل العلوم',
        details: 'مختبر الكيمياء والفيزياء',
        location: 'الدور الأول - يسار الساحة',
        mapImage: 'https://placehold.co/600x400?text=Floor+Plan+Floor+1',
        coordinates: { top: '70%', left: '30%' }
    },
    {
        id: 403,
        category: 'labs',
        name: 'قاعة الفنية',
        details: 'مرسم الفنون التشكيلية',
        location: 'الدور الأرضي - بجانب المكتبة',
        mapImage: 'https://placehold.co/600x400?text=Floor+Plan+Ground+Floor',
        coordinates: { top: '60%', left: '80%' }
    },
    {
        id: 404,
        category: 'labs',
        name: 'مكتبة المدرسة',
        details: 'مركز مصادر التعلم',
        location: 'الدور الأرضي - مقابل المسرح',
        mapImage: 'https://placehold.co/600x400?text=Floor+Plan+Ground+Floor',
        coordinates: { top: '65%', left: '40%' }
    }
];

// DOM Elements
const itemsList = document.getElementById('itemsList');
const detailsPanel = document.getElementById('detailsPanel');
const searchInput = document.getElementById('searchInput');
const categoryButtons = document.querySelectorAll('.cat-btn');

let currentCategory = 'all';

// Initialize the app
function init() {
    renderList(schoolData);
    setupEventListeners();
}

// Render the list of items
function renderList(data) {
    itemsList.innerHTML = '';
    
    if (data.length === 0) {
        itemsList.innerHTML = '<p style="padding: 20px; text-align: center;">لا توجد نتائج مطابقة</p>';
        return;
    }

    data.forEach(item => {
        const div = document.createElement('div');
        div.className = 'list-item';
        div.innerHTML = `
            <span class="badge">${getCategoryName(item.category)}</span>
            <h3>${item.name}</h3>
            <p>${item.details || item.title || item.subject || ''}</p>
        `;
        div.onclick = () => showDetails(item);
        itemsList.appendChild(div);
    });
}

// Show details for a specific item
function showDetails(item) {
    let detailsHTML = `
        <div class="item-details">
            <span class="badge">${getCategoryName(item.category)}</span>
            <h2>${item.name}</h2>
            ${item.title ? `<p><strong>المنصب:</strong> ${item.title}</p>` : ''}
            ${item.subject ? `<p><strong>المادة:</strong> ${item.subject}</p>` : ''}
            ${item.details ? `<p><strong>التفاصيل:</strong> ${item.details}</p>` : ''}
            ${item.office ? `<p><strong>المكتب:</strong> ${item.office}</p>` : ''}
            
            <div class="location-path">
                <strong>📍 الموقع:</strong><br>
                ${item.location}
            </div>

            ${item.contact ? `
                <div class="contact-info">
                    <strong>📞 معلومات التواصل:</strong>
                    ${item.contact.phone ? `<div>الهاتف: ${item.contact.phone}</div>` : ''}
                    ${item.contact.email ? `<div>البريد: ${item.contact.email}</div>` : ''}
                </div>
            ` : ''}

            <div class="map-visual">
                <img src="${item.mapImage || 'https://placehold.co/600x400?text=No+Map+Available'}" alt="Floor Plan" class="floor-plan-img">
                <div class="map-pin" style="top: ${item.coordinates?.top || '50%'}; left: ${item.coordinates?.left || '50%'}"></div>
            </div>
        </div>
    `;
    
    detailsPanel.innerHTML = detailsHTML;
}

// Helper to get Arabic category name
function getCategoryName(cat) {
    const names = {
        'classes': 'فصل دراسي',
        'admin': 'إدارة',
        'teachers': 'معلمات',
        'facilities': 'مرافق',
        'labs': 'معامل وقاعات'
    };
    return names[cat] || cat;
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        filterData(searchTerm, currentCategory);
    });

    // Category filtering
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update UI
            categoryButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter
            currentCategory = btn.dataset.category;
            filterData(searchInput.value.toLowerCase(), currentCategory);
        });
    });
}

// Filter data based on search and category
function filterData(search, category) {
    const filtered = schoolData.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(search) || 
                             (item.details && item.details.toLowerCase().includes(search)) ||
                             (item.title && item.title.toLowerCase().includes(search)) ||
                             (item.subject && item.subject.toLowerCase().includes(search));
        
        const matchesCategory = category === 'all' || item.category === category;
        
        return matchesSearch && matchesCategory;
    });
    
    renderList(filtered);
}

// Start the app
document.addEventListener('DOMContentLoaded', init);
