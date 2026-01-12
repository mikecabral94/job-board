// Job Categories
const categories = [
  { id: 'technology', name: 'Technology', icon: '💻' },
  { id: 'design', name: 'Design', icon: '🎨' },
  { id: 'marketing', name: 'Marketing', icon: '📣' },
  { id: 'sales', name: 'Sales', icon: '💼' },
  { id: 'finance', name: 'Finance', icon: '💰' },
  { id: 'healthcare', name: 'Healthcare', icon: '🏥' },
  { id: 'education', name: 'Education', icon: '📚' },
  { id: 'engineering', name: 'Engineering', icon: '⚙️' },
  { id: 'customer-service', name: 'Customer Service', icon: '🎧' },
  { id: 'other', name: 'Other', icon: '📋' }
];

// Sample Jobs Data
const sampleJobs = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'TechCorp',
    location: 'Dublin',
    type: 'full-time',
    category: 'technology',
    salary: '€70,000 - €90,000',
    description: 'We are looking for an experienced Frontend Developer to join our team and help build amazing web applications.',
    requirements: [
      '5+ years of experience with React, Vue, or Angular',
      'Strong understanding of HTML, CSS, and JavaScript',
      'Experience with responsive design and cross-browser compatibility',
      'Familiarity with RESTful APIs and modern build tools'
    ],
    responsibilities: [
      'Develop new user-facing features',
      'Build reusable code and libraries',
      'Optimize applications for maximum speed',
      'Collaborate with backend developers and designers'
    ],
    tags: ['React', 'JavaScript', 'CSS', 'TypeScript'],
    posted: '2026-01-10',
    status: 'active'
  },
  {
    id: 2,
    title: 'UX/UI Designer',
    company: 'DesignHub',
    location: 'Remote',
    type: 'full-time',
    category: 'design',
    salary: '€55,000 - €75,000',
    description: 'Join our creative team as a UX/UI Designer and create beautiful, user-friendly interfaces.',
    requirements: [
      '3+ years of UX/UI design experience',
      'Proficiency in Figma, Sketch, or Adobe XD',
      'Strong portfolio demonstrating design skills',
      'Understanding of user-centered design principles'
    ],
    responsibilities: [
      'Create wireframes, prototypes, and high-fidelity designs',
      'Conduct user research and usability testing',
      'Collaborate with developers to implement designs',
      'Maintain design system and style guides'
    ],
    tags: ['Figma', 'UI Design', 'UX Research', 'Prototyping'],
    posted: '2026-01-09',
    status: 'active'
  },
  {
    id: 3,
    title: 'Digital Marketing Manager',
    company: 'GrowthLabs',
    location: 'Cork',
    type: 'full-time',
    category: 'marketing',
    salary: '€50,000 - €65,000',
    description: 'Lead our digital marketing efforts and drive growth through innovative campaigns.',
    requirements: [
      '4+ years of digital marketing experience',
      'Experience with SEO, SEM, and social media marketing',
      'Strong analytical skills and experience with Google Analytics',
      'Excellent communication and leadership skills'
    ],
    responsibilities: [
      'Develop and execute digital marketing strategies',
      'Manage social media accounts and content calendar',
      'Analyze campaign performance and optimize ROI',
      'Lead a team of marketing specialists'
    ],
    tags: ['SEO', 'Social Media', 'Google Ads', 'Analytics'],
    posted: '2026-01-08',
    status: 'active'
  },
  {
    id: 4,
    title: 'Data Analyst Intern',
    company: 'DataInsights',
    location: 'Dublin',
    type: 'internship',
    category: 'technology',
    salary: '€25,000 - €30,000',
    description: 'Great opportunity for students or recent graduates to gain hands-on experience in data analysis.',
    requirements: [
      'Currently pursuing or recently completed degree in Data Science, Statistics, or related field',
      'Basic knowledge of SQL and Python',
      'Familiarity with data visualization tools',
      'Strong problem-solving skills'
    ],
    responsibilities: [
      'Assist in data collection and cleaning',
      'Create reports and visualizations',
      'Support senior analysts in projects',
      'Learn and apply data analysis techniques'
    ],
    tags: ['Python', 'SQL', 'Excel', 'Tableau'],
    posted: '2026-01-07',
    status: 'active'
  },
  {
    id: 5,
    title: 'Sales Representative',
    company: 'SalesForce Pro',
    location: 'Galway',
    type: 'full-time',
    category: 'sales',
    salary: '€35,000 + Commission',
    description: 'Join our dynamic sales team and help businesses find the perfect solutions.',
    requirements: [
      '2+ years of B2B sales experience',
      'Excellent communication and negotiation skills',
      'Self-motivated with a track record of meeting targets',
      'Valid driving license'
    ],
    responsibilities: [
      'Identify and pursue new business opportunities',
      'Build and maintain client relationships',
      'Present products and services to potential clients',
      'Meet and exceed sales targets'
    ],
    tags: ['B2B Sales', 'CRM', 'Negotiation', 'Lead Generation'],
    posted: '2026-01-06',
    status: 'active'
  },
  {
    id: 6,
    title: 'Part-Time Customer Support',
    company: 'HelpDesk Co',
    location: 'Remote',
    type: 'part-time',
    category: 'customer-service',
    salary: '€18/hour',
    description: 'Provide excellent customer support via chat, email, and phone.',
    requirements: [
      'Previous customer service experience',
      'Excellent written and verbal communication',
      'Patient and empathetic approach',
      'Available for flexible hours'
    ],
    responsibilities: [
      'Respond to customer inquiries promptly',
      'Troubleshoot and resolve issues',
      'Document customer interactions',
      'Escalate complex issues when needed'
    ],
    tags: ['Customer Support', 'Communication', 'Problem Solving'],
    posted: '2026-01-05',
    status: 'active'
  },
  {
    id: 7,
    title: 'Backend Developer (Contract)',
    company: 'CloudSystems',
    location: 'London',
    type: 'contract',
    category: 'technology',
    salary: '€500/day',
    description: '6-month contract for experienced backend developer to work on cloud infrastructure.',
    requirements: [
      '5+ years of backend development experience',
      'Strong knowledge of Node.js or Python',
      'Experience with AWS or Azure',
      'Understanding of microservices architecture'
    ],
    responsibilities: [
      'Design and implement backend services',
      'Optimize database performance',
      'Implement security best practices',
      'Write technical documentation'
    ],
    tags: ['Node.js', 'AWS', 'PostgreSQL', 'Docker'],
    posted: '2026-01-04',
    status: 'active'
  },
  {
    id: 8,
    title: 'Financial Analyst',
    company: 'FinanceFirst',
    location: 'Dublin',
    type: 'full-time',
    category: 'finance',
    salary: '€55,000 - €70,000',
    description: 'Analyze financial data and provide insights to support business decisions.',
    requirements: [
      'Degree in Finance, Accounting, or related field',
      '3+ years of financial analysis experience',
      'Advanced Excel and financial modeling skills',
      'Professional certification (CFA, ACCA) preferred'
    ],
    responsibilities: [
      'Prepare financial reports and forecasts',
      'Analyze business performance metrics',
      'Support budgeting and planning processes',
      'Present findings to senior management'
    ],
    tags: ['Financial Modeling', 'Excel', 'Reporting', 'Analysis'],
    posted: '2026-01-03',
    status: 'active'
  }
];

// Initialize jobs from localStorage or use sample data
function getJobs() {
  const stored = localStorage.getItem('jobhub_jobs');
  if (stored) {
    return JSON.parse(stored);
  }
  // Initialize with sample jobs
  localStorage.setItem('jobhub_jobs', JSON.stringify(sampleJobs));
  return sampleJobs;
}

// Get applications from localStorage
function getApplications() {
  return JSON.parse(localStorage.getItem('jobhub_applications') || '[]');
}

// Save application
function saveApplication(application) {
  const applications = getApplications();
  applications.push(application);
  localStorage.setItem('jobhub_applications', JSON.stringify(applications));
}

// Current filters
let currentFilters = {
  search: '',
  location: '',
  category: '',
  type: '',
  sort: 'newest'
};

// Mobile Navigation
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

// Render Categories
function renderCategories() {
  const grid = document.getElementById('categoriesGrid');
  if (!grid) return;

  const jobs = getJobs().filter(j => j.status === 'active');

  grid.innerHTML = categories.map(cat => {
    const count = jobs.filter(j => j.category === cat.id).length;
    return `
      <div class="category-card ${currentFilters.category === cat.id ? 'active' : ''}"
           onclick="filterByCategory('${cat.id}')">
        <div class="category-icon">${cat.icon}</div>
        <h3>${cat.name}</h3>
        <span class="category-count">${count} jobs</span>
      </div>
    `;
  }).join('');
}

// Filter by category
function filterByCategory(categoryId) {
  currentFilters.category = currentFilters.category === categoryId ? '' : categoryId;
  const categoryFilter = document.getElementById('categoryFilter');
  if (categoryFilter) categoryFilter.value = currentFilters.category;
  renderCategories();
  renderJobs();

  // Scroll to jobs section
  document.getElementById('jobs').scrollIntoView({ behavior: 'smooth' });
}

// Render Jobs
function renderJobs() {
  const grid = document.getElementById('jobsGrid');
  const noJobs = document.getElementById('noJobs');
  if (!grid) return;

  let jobs = getJobs().filter(j => j.status === 'active');

  // Apply filters
  if (currentFilters.search) {
    const search = currentFilters.search.toLowerCase();
    jobs = jobs.filter(j =>
      j.title.toLowerCase().includes(search) ||
      j.company.toLowerCase().includes(search) ||
      j.description.toLowerCase().includes(search) ||
      j.tags.some(t => t.toLowerCase().includes(search))
    );
  }

  if (currentFilters.location) {
    jobs = jobs.filter(j => j.location.toLowerCase().includes(currentFilters.location.toLowerCase()));
  }

  if (currentFilters.category) {
    jobs = jobs.filter(j => j.category === currentFilters.category);
  }

  if (currentFilters.type) {
    jobs = jobs.filter(j => j.type === currentFilters.type);
  }

  // Apply sorting
  switch (currentFilters.sort) {
    case 'newest':
      jobs.sort((a, b) => new Date(b.posted) - new Date(a.posted));
      break;
    case 'oldest':
      jobs.sort((a, b) => new Date(a.posted) - new Date(b.posted));
      break;
    case 'salary-high':
      jobs.sort((a, b) => extractSalary(b.salary) - extractSalary(a.salary));
      break;
    case 'salary-low':
      jobs.sort((a, b) => extractSalary(a.salary) - extractSalary(b.salary));
      break;
  }

  if (jobs.length === 0) {
    grid.innerHTML = '';
    if (noJobs) noJobs.classList.add('show');
    return;
  }

  if (noJobs) noJobs.classList.remove('show');

  grid.innerHTML = jobs.map(job => `
    <div class="job-card" onclick="showJobDetail(${job.id})">
      <div class="job-card-header">
        <div class="job-company">
          <div class="company-logo">${job.company.charAt(0)}</div>
          <span class="company-name">${job.company}</span>
        </div>
        <span class="job-type ${job.type}">${formatType(job.type)}</span>
      </div>
      <h3 class="job-title">${job.title}</h3>
      <div class="job-meta">
        <span>📍 ${job.location}</span>
        <span>🏷️ ${getCategoryName(job.category)}</span>
      </div>
      <div class="job-tags">
        ${job.tags.slice(0, 3).map(tag => `<span class="job-tag">${tag}</span>`).join('')}
      </div>
      <div class="job-card-footer">
        <span class="job-salary">${job.salary}</span>
        <span class="job-posted">${formatDate(job.posted)}</span>
      </div>
    </div>
  `).join('');
}

// Helper functions
function formatType(type) {
  return type.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

function getCategoryName(categoryId) {
  const cat = categories.find(c => c.id === categoryId);
  return cat ? cat.name : categoryId;
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  const now = new Date();
  const diff = Math.floor((now - date) / (1000 * 60 * 60 * 24));

  if (diff === 0) return 'Today';
  if (diff === 1) return 'Yesterday';
  if (diff < 7) return `${diff} days ago`;
  if (diff < 30) return `${Math.floor(diff / 7)} weeks ago`;
  return date.toLocaleDateString('en-IE', { day: 'numeric', month: 'short' });
}

function extractSalary(salaryStr) {
  const numbers = salaryStr.match(/[\d,]+/g);
  if (numbers && numbers.length > 0) {
    return parseInt(numbers[0].replace(/,/g, ''));
  }
  return 0;
}

// Show job detail
function showJobDetail(jobId) {
  const jobs = getJobs();
  const job = jobs.find(j => j.id === jobId);
  if (!job) return;

  const detailsDiv = document.getElementById('jobDetails');
  detailsDiv.innerHTML = `
    <div class="job-detail-header">
      <div class="job-detail-logo">${job.company.charAt(0)}</div>
      <div class="job-detail-info">
        <h2>${job.title}</h2>
        <p class="job-detail-company">${job.company}</p>
        <div class="job-detail-meta">
          <span>📍 ${job.location}</span>
          <span>💼 ${formatType(job.type)}</span>
          <span>💰 ${job.salary}</span>
        </div>
      </div>
    </div>

    <div class="job-detail-section">
      <h3>About This Role</h3>
      <p>${job.description}</p>
    </div>

    <div class="job-detail-section">
      <h3>Requirements</h3>
      <ul>
        ${job.requirements.map(r => `<li>${r}</li>`).join('')}
      </ul>
    </div>

    <div class="job-detail-section">
      <h3>Responsibilities</h3>
      <ul>
        ${job.responsibilities.map(r => `<li>${r}</li>`).join('')}
      </ul>
    </div>

    <div class="job-detail-section">
      <h3>Skills</h3>
      <div class="job-tags">
        ${job.tags.map(tag => `<span class="job-tag">${tag}</span>`).join('')}
      </div>
    </div>

    <div class="job-detail-actions">
      <button class="btn btn-primary" onclick="openApplyModal(${job.id}, '${job.title.replace(/'/g, "\\'")}')">Apply Now</button>
      <button class="btn btn-secondary" onclick="closeJobModal()">Close</button>
    </div>
  `;

  document.getElementById('jobModal').classList.add('active');
}

function closeJobModal() {
  document.getElementById('jobModal').classList.remove('active');
}

// Apply Modal
function openApplyModal(jobId, jobTitle) {
  closeJobModal();
  document.getElementById('applyJobId').value = jobId;
  document.getElementById('applyJobTitle').textContent = jobTitle;
  document.getElementById('applyModal').classList.add('active');
}

function closeApplyModal() {
  document.getElementById('applyModal').classList.remove('active');
  document.getElementById('applyForm').reset();
}

function closeSuccessModal() {
  document.getElementById('successModal').classList.remove('active');
}

// Handle application form
const applyForm = document.getElementById('applyForm');
if (applyForm) {
  applyForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(applyForm);
    const application = {
      id: Date.now(),
      jobId: parseInt(document.getElementById('applyJobId').value),
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      location: formData.get('location'),
      linkedin: formData.get('linkedin'),
      portfolio: formData.get('portfolio'),
      resume: formData.get('resume'),
      coverLetter: formData.get('coverLetter'),
      appliedAt: new Date().toISOString(),
      status: 'pending'
    };

    saveApplication(application);
    closeApplyModal();
    document.getElementById('successModal').classList.add('active');
  });
}

// Search and filter handlers
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const locationFilter = document.getElementById('locationFilter');
const categoryFilter = document.getElementById('categoryFilter');
const typeFilter = document.getElementById('typeFilter');
const sortFilter = document.getElementById('sortFilter');

if (searchBtn) {
  searchBtn.addEventListener('click', () => {
    currentFilters.search = searchInput.value;
    currentFilters.location = locationFilter.value;
    renderJobs();
    document.getElementById('jobs').scrollIntoView({ behavior: 'smooth' });
  });
}

if (searchInput) {
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      searchBtn.click();
    }
  });
}

if (categoryFilter) {
  // Populate category filter
  categoryFilter.innerHTML = '<option value="">All Categories</option>' +
    categories.map(c => `<option value="${c.id}">${c.name}</option>`).join('');

  categoryFilter.addEventListener('change', () => {
    currentFilters.category = categoryFilter.value;
    renderCategories();
    renderJobs();
  });
}

if (typeFilter) {
  typeFilter.addEventListener('change', () => {
    currentFilters.type = typeFilter.value;
    renderJobs();
  });
}

if (sortFilter) {
  sortFilter.addEventListener('change', () => {
    currentFilters.sort = sortFilter.value;
    renderJobs();
  });
}

// Update stats
function updateStats() {
  const jobs = getJobs().filter(j => j.status === 'active');
  const companies = [...new Set(jobs.map(j => j.company))];

  const totalJobsEl = document.getElementById('totalJobs');
  const totalCompaniesEl = document.getElementById('totalCompanies');

  if (totalJobsEl) totalJobsEl.textContent = jobs.length;
  if (totalCompaniesEl) totalCompaniesEl.textContent = companies.length;
}

// Close modals on backdrop click
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Initialize
renderCategories();
renderJobs();
updateStats();
