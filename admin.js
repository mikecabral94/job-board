// Admin Authentication
const ADMIN_PASSWORD = 'jobhub2026';
const loginOverlay = document.getElementById('loginOverlay');
const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');
const passwordInput = document.getElementById('password');
const navbar = document.querySelector('.navbar');
const adminMain = document.querySelector('.admin-main');

// Check login status
function checkAuth() {
  const isLoggedIn = sessionStorage.getItem('jobhub_admin_logged_in');

  if (isLoggedIn === 'true') {
    if (loginOverlay) loginOverlay.classList.add('hidden');
    if (navbar) navbar.classList.remove('hidden');
    if (adminMain) adminMain.classList.remove('hidden');
    loadDashboard();
  } else {
    if (loginOverlay) loginOverlay.classList.remove('hidden');
    if (navbar) navbar.classList.add('hidden');
    if (adminMain) adminMain.classList.add('hidden');
    if (passwordInput) passwordInput.focus();
  }
}

// Handle login
if (loginForm) {
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const password = passwordInput ? passwordInput.value : '';

    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem('jobhub_admin_logged_in', 'true');
      if (loginError) loginError.classList.remove('show');
      checkAuth();
    } else {
      if (loginError) loginError.classList.add('show');
      if (passwordInput) passwordInput.value = '';
    }
  });
}

// Handle logout
const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
  logoutBtn.addEventListener('click', function(e) {
    e.preventDefault();
    sessionStorage.removeItem('jobhub_admin_logged_in');
    checkAuth();
  });
}

// Initialize
checkAuth();

// Get data from localStorage
function getJobs() {
  return JSON.parse(localStorage.getItem('jobhub_jobs') || '[]');
}

function saveJobs(jobs) {
  localStorage.setItem('jobhub_jobs', JSON.stringify(jobs));
}

function getApplications() {
  return JSON.parse(localStorage.getItem('jobhub_applications') || '[]');
}

function saveApplications(applications) {
  localStorage.setItem('jobhub_applications', JSON.stringify(applications));
}

// Tab switching
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const tabId = btn.dataset.tab;

    tabBtns.forEach(b => b.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));

    btn.classList.add('active');
    document.getElementById(tabId + 'Tab').classList.add('active');
  });
});

// Load Dashboard
function loadDashboard() {
  updateStats();
  renderJobsTable();
  renderApplicationsTable();
  populateJobFilter();
}

// Update Stats
function updateStats() {
  const jobs = getJobs();
  const applications = getApplications();

  document.getElementById('totalJobs').textContent = jobs.length;
  document.getElementById('activeJobs').textContent = jobs.filter(j => j.status === 'active').length;
  document.getElementById('totalApplications').textContent = applications.length;
}

// Render Jobs Table
function renderJobsTable() {
  const jobs = getJobs();
  const applications = getApplications();
  const tbody = document.getElementById('jobsTableBody');
  const noJobs = document.getElementById('noJobs');

  if (jobs.length === 0) {
    tbody.innerHTML = '';
    noJobs.classList.add('show');
    return;
  }

  noJobs.classList.remove('show');

  tbody.innerHTML = jobs.map(job => {
    const appCount = applications.filter(a => a.jobId === job.id).length;
    return `
      <tr>
        <td><strong>${escapeHtml(job.title)}</strong></td>
        <td>${escapeHtml(job.company)}</td>
        <td>${escapeHtml(job.location)}</td>
        <td>${formatType(job.type)}</td>
        <td>${appCount}</td>
        <td><span class="status-badge status-${job.status}">${job.status}</span></td>
        <td>
          <button class="action-btn btn-edit" onclick="editJob(${job.id})">Edit</button>
          <button class="action-btn btn-delete" onclick="confirmDeleteJob(${job.id})">Delete</button>
        </td>
      </tr>
    `;
  }).join('');
}

// Render Applications Table
function renderApplicationsTable() {
  const jobs = getJobs();
  let applications = getApplications();
  const tbody = document.getElementById('applicationsTableBody');
  const noApps = document.getElementById('noApplications');

  // Apply filters
  const jobFilter = document.getElementById('appJobFilter').value;
  const statusFilter = document.getElementById('appStatusFilter').value;

  if (jobFilter) {
    applications = applications.filter(a => a.jobId === parseInt(jobFilter));
  }
  if (statusFilter) {
    applications = applications.filter(a => a.status === statusFilter);
  }

  if (applications.length === 0) {
    tbody.innerHTML = '';
    noApps.classList.add('show');
    return;
  }

  noApps.classList.remove('show');

  tbody.innerHTML = applications.map(app => {
    const job = jobs.find(j => j.id === app.jobId);
    return `
      <tr>
        <td><strong>${escapeHtml(app.name)}</strong></td>
        <td>${job ? escapeHtml(job.title) : 'Unknown Job'}</td>
        <td><a href="mailto:${app.email}">${escapeHtml(app.email)}</a></td>
        <td>${formatDate(app.appliedAt)}</td>
        <td><span class="status-badge status-${app.status}">${app.status}</span></td>
        <td>
          <button class="action-btn btn-view" onclick="viewApplication(${app.id})">View</button>
          <button class="action-btn btn-delete" onclick="confirmDeleteApplication(${app.id})">Delete</button>
        </td>
      </tr>
    `;
  }).join('');
}

// Populate Job Filter for Applications
function populateJobFilter() {
  const jobs = getJobs();
  const filter = document.getElementById('appJobFilter');

  filter.innerHTML = '<option value="">All Jobs</option>' +
    jobs.map(j => `<option value="${j.id}">${escapeHtml(j.title)}</option>`).join('');
}

// Filter event listeners
document.getElementById('appJobFilter').addEventListener('change', renderApplicationsTable);
document.getElementById('appStatusFilter').addEventListener('change', renderApplicationsTable);

// Helper functions
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function formatType(type) {
  return type.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-IE', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}

// Job Form Modal
let editingJobId = null;

function openJobModal(jobId = null) {
  editingJobId = jobId;
  const form = document.getElementById('jobForm');
  const title = document.getElementById('jobFormTitle');

  form.reset();

  if (jobId) {
    const jobs = getJobs();
    const job = jobs.find(j => j.id === jobId);
    if (job) {
      title.textContent = 'Edit Job';
      document.getElementById('jobId').value = job.id;
      document.getElementById('jobTitle').value = job.title;
      document.getElementById('jobCompany').value = job.company;
      document.getElementById('jobLocation').value = job.location;
      document.getElementById('jobType').value = job.type;
      document.getElementById('jobCategory').value = job.category;
      document.getElementById('jobSalary').value = job.salary;
      document.getElementById('jobDescription').value = job.description;
      document.getElementById('jobRequirements').value = job.requirements.join('\n');
      document.getElementById('jobResponsibilities').value = job.responsibilities.join('\n');
      document.getElementById('jobTags').value = job.tags.join(', ');
      document.getElementById('jobStatus').value = job.status;
    }
  } else {
    title.textContent = 'Add New Job';
    document.getElementById('jobId').value = '';
  }

  document.getElementById('jobFormModal').classList.add('active');
}

function editJob(jobId) {
  openJobModal(jobId);
}

function closeJobFormModal() {
  document.getElementById('jobFormModal').classList.remove('active');
  editingJobId = null;
}

// Handle job form submission
document.getElementById('jobForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const jobs = getJobs();
  const jobId = document.getElementById('jobId').value;

  const jobData = {
    title: document.getElementById('jobTitle').value,
    company: document.getElementById('jobCompany').value,
    location: document.getElementById('jobLocation').value,
    type: document.getElementById('jobType').value,
    category: document.getElementById('jobCategory').value,
    salary: document.getElementById('jobSalary').value,
    description: document.getElementById('jobDescription').value,
    requirements: document.getElementById('jobRequirements').value.split('\n').filter(r => r.trim()),
    responsibilities: document.getElementById('jobResponsibilities').value.split('\n').filter(r => r.trim()),
    tags: document.getElementById('jobTags').value.split(',').map(t => t.trim()).filter(t => t),
    status: document.getElementById('jobStatus').value
  };

  if (jobId) {
    // Update existing job
    const index = jobs.findIndex(j => j.id === parseInt(jobId));
    if (index !== -1) {
      jobs[index] = { ...jobs[index], ...jobData };
    }
  } else {
    // Create new job
    jobData.id = Date.now();
    jobData.posted = new Date().toISOString().split('T')[0];
    jobs.push(jobData);
  }

  saveJobs(jobs);
  closeJobFormModal();
  loadDashboard();
});

// View Application
function viewApplication(appId) {
  const applications = getApplications();
  const jobs = getJobs();
  const app = applications.find(a => a.id === appId);

  if (!app) return;

  const job = jobs.find(j => j.id === app.jobId);
  const details = document.getElementById('applicationDetails');

  details.innerHTML = `
    <div class="application-info">
      <div class="info-item">
        <span class="info-label">Applicant Name</span>
        <span class="info-value">${escapeHtml(app.name)}</span>
      </div>
      <div class="info-item">
        <span class="info-label">Email</span>
        <span class="info-value"><a href="mailto:${app.email}">${escapeHtml(app.email)}</a></span>
      </div>
      <div class="info-item">
        <span class="info-label">Phone</span>
        <span class="info-value"><a href="tel:${app.phone}">${escapeHtml(app.phone)}</a></span>
      </div>
      <div class="info-item">
        <span class="info-label">Location</span>
        <span class="info-value">${escapeHtml(app.location)}</span>
      </div>
      <div class="info-item">
        <span class="info-label">Applied For</span>
        <span class="info-value">${job ? escapeHtml(job.title) + ' at ' + escapeHtml(job.company) : 'Unknown Job'}</span>
      </div>
      <div class="info-item">
        <span class="info-label">Applied On</span>
        <span class="info-value">${formatDate(app.appliedAt)}</span>
      </div>
      ${app.linkedin ? `
      <div class="info-item">
        <span class="info-label">LinkedIn</span>
        <span class="info-value"><a href="${app.linkedin}" target="_blank">View Profile</a></span>
      </div>
      ` : ''}
      ${app.portfolio ? `
      <div class="info-item">
        <span class="info-label">Portfolio</span>
        <span class="info-value"><a href="${app.portfolio}" target="_blank">View Portfolio</a></span>
      </div>
      ` : ''}
      <div class="info-item full-width">
        <span class="info-label">Resume/CV</span>
        <span class="info-value"><a href="${app.resume}" target="_blank">View Resume</a></span>
      </div>
      ${app.coverLetter ? `
      <div class="info-item full-width">
        <span class="info-label">Cover Letter</span>
        <span class="info-value">${escapeHtml(app.coverLetter)}</span>
      </div>
      ` : ''}
    </div>

    <div class="application-actions">
      <button class="btn btn-secondary" onclick="updateAppStatus(${app.id}, 'pending')">Pending</button>
      <button class="btn btn-primary" onclick="updateAppStatus(${app.id}, 'reviewed')">Reviewed</button>
      <button class="btn" style="background: var(--secondary); color: white;" onclick="updateAppStatus(${app.id}, 'interviewed')">Interviewed</button>
      <button class="btn" style="background: var(--success); color: white;" onclick="updateAppStatus(${app.id}, 'accepted')">Accept</button>
      <button class="btn btn-danger" onclick="updateAppStatus(${app.id}, 'rejected')">Reject</button>
    </div>
  `;

  document.getElementById('applicationModal').classList.add('active');
}

function closeApplicationModal() {
  document.getElementById('applicationModal').classList.remove('active');
}

function updateAppStatus(appId, status) {
  const applications = getApplications();
  const index = applications.findIndex(a => a.id === appId);

  if (index !== -1) {
    applications[index].status = status;
    saveApplications(applications);
    closeApplicationModal();
    renderApplicationsTable();
  }
}

// Delete Confirmation
let deleteType = null;
let deleteId = null;

function confirmDeleteJob(jobId) {
  deleteType = 'job';
  deleteId = jobId;
  document.getElementById('deleteMessage').textContent = 'Are you sure you want to delete this job? This will also remove all applications for this job.';
  document.getElementById('deleteModal').classList.add('active');
}

function confirmDeleteApplication(appId) {
  deleteType = 'application';
  deleteId = appId;
  document.getElementById('deleteMessage').textContent = 'Are you sure you want to delete this application?';
  document.getElementById('deleteModal').classList.add('active');
}

function closeDeleteModal() {
  document.getElementById('deleteModal').classList.remove('active');
  deleteType = null;
  deleteId = null;
}

document.getElementById('confirmDeleteBtn').addEventListener('click', function() {
  if (deleteType === 'job') {
    let jobs = getJobs();
    let applications = getApplications();

    // Remove job
    jobs = jobs.filter(j => j.id !== deleteId);
    // Remove related applications
    applications = applications.filter(a => a.jobId !== deleteId);

    saveJobs(jobs);
    saveApplications(applications);
  } else if (deleteType === 'application') {
    let applications = getApplications();
    applications = applications.filter(a => a.id !== deleteId);
    saveApplications(applications);
  }

  closeDeleteModal();
  loadDashboard();
});

// Close modals on backdrop click
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
});
