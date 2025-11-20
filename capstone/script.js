// Common JavaScript functionality for BuddyLawyer

// Utility functions
function showElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.remove('hidden');
        element.classList.add('flex');
    }
}

function hideElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.add('hidden');
        element.classList.remove('flex');
    }
}

// Upload Modal Functions
function showUploadModal() {
    const modal = document.getElementById('uploadModal');
    if (modal) {
        modal.style.display = 'flex';
        setTimeout(() => {
            modal.classList.add('animate-fadeIn');
        }, 10);
    }
}

function closeUploadModal() {
    const modal = document.getElementById('uploadModal');
    if (modal) {
        modal.classList.remove('animate-fadeIn');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
}

function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    if (fileInput && fileInput.files.length > 0) {
        const file = fileInput.files[0];
        console.log('Uploading file:', file.name);
        
        // Show loading state
        showNotification('Uploading document...', 'info');
        
        // Simulate upload
        setTimeout(() => {
            closeUploadModal();
            showNotification('Document uploaded successfully!', 'success');
            fileInput.value = '';
        }, 2000);
    } else {
        showNotification('Please select a file to upload', 'warning');
    }
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    const colors = {
        success: 'bg-green-500',
        error: 'bg-red-500',
        warning: 'bg-amber-500',
        info: 'bg-blue-500'
    };
    
    notification.className = `fixed top-4 right-4 z-50 px-6 py-4 rounded-lg text-white ${colors[type]} shadow-lg animate-slideIn`;
    notification.innerHTML = `
        <div class="flex items-center gap-3">
            <i data-feather="${type === 'success' ? 'check-circle' : type === 'error' ? 'x-circle' : type === 'warning' ? 'alert-triangle' : 'info'}" class="w-5 h-5"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    feather.replace();
    
    setTimeout(() => {
        notification.classList.add('animate-fadeOut');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Dashboard Functions
function startSummarize() {
    showNotification('Opening document summarizer...', 'info');
    setTimeout(() => {
        showNotification('Please upload a document to summarize', 'info');
        showUploadModal();
    }, 1000);
}

function startMagicWrite() {
    showNotification('Opening Magic Write editor...', 'info');
    setTimeout(() => {
        showNotification('Please select or upload a document to edit', 'info');
    }, 1000);
}

// Document Management
function deleteDocument(docId) {
    if (confirm('Are you sure you want to delete this document?')) {
        showNotification('Document deleted successfully', 'success');
        // In real app, this would make an API call
    }
}

function shareDocument(docId) {
    const shareUrl = `${window.location.origin}/share/${docId}`;
    if (navigator.clipboard) {
        navigator.clipboard.writeText(shareUrl);
        showNotification('Share link copied to clipboard!', 'success');
    }
}

// Search functionality
function initializeSearch() {
    const searchInput = document.querySelector('input[placeholder*="Search"]');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const documents = document.querySelectorAll('[data-document-name]');
            
            documents.forEach(doc => {
                const name = doc.getAttribute('data-document-name').toLowerCase();
                if (name.includes(searchTerm)) {
                    doc.style.display = '';
                } else {
                    doc.style.display = 'none';
                }
            });
        });
    }
}

// Form validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    return password.length >= 8;
}

// Theme management
function toggleTheme() {
    const body = document.body;
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    }
}

function loadTheme() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
    initializeSearch();
    
    // Close modals when clicking outside
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
    
    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// API helpers (mock responses for demo)
async function mockAPICall(endpoint, data = {}) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                success: true,
                data: { message: 'Operation successful' }
            });
        }, 1000);
    });
}

// Document processing simulation
function processDocument(fileType) {
    const processingSteps = [
        'Analyzing document structure...',
        'Extracting key information...',
        'Identifying legal terms...',
        'Generating summary...',
        'Complete!'
    ];
    
    let step = 0;
    const interval = setInterval(() => {
        if (step < processingSteps.length) {
            showNotification(processingSteps[step], 'info');
            step++;
        } else {
            clearInterval(interval);
            showNotification('Document processed successfully!', 'success');
        }
    }, 1500);
}

// Export functions to global scope
window.BuddyLawyer = {
    showUploadModal,
    closeUploadModal,
    uploadFile,
    showNotification,
    startSummarize,
    startMagicWrite,
    deleteDocument,
    shareDocument,
    toggleTheme,
    processDocument
};