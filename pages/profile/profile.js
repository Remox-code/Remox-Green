const sideBtns = document.querySelectorAll(".right-side-btn");
const panels = document.querySelectorAll(".panel");

sideBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    sideBtns.forEach((b) => b.classList.remove("active"));
    panels.forEach((p) => p.classList.remove("active"));

    btn.classList.add("active");
    document.getElementById(btn.dataset.target).classList.add("active");
  });
});

// Modal auth
const authModal = document.getElementById("authModal");
const openAuthBtn = document.getElementById("openAuthBtn");
const openAuthBtn2 = document.getElementById("openAuthBtn2");
const closeAuthBtn = document.getElementById("closeAuthBtn");

function openModal() {
  authModal.classList.add("show");
}

function closeModal() {
  authModal.classList.remove("show");
}

openAuthBtn.addEventListener("click", openModal);
openAuthBtn2.addEventListener("click", openModal);
closeAuthBtn.addEventListener("click", closeModal);

authModal.addEventListener("click", (e) => {
  if (e.target === authModal) closeModal();
});

// Auth tabs
const authTabs = document.querySelectorAll(".auth-tab");
const authForms = document.querySelectorAll(".auth-form");

authTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    authTabs.forEach((t) => t.classList.remove("active"));
    authForms.forEach((f) => f.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.form).classList.add("active");
  });
});

// Optional submit prevent
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Login successful.");
});

document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Registration was successful.");
});

document.querySelector(".save-btn").addEventListener("click", () => {
  alert("Information saved");
});
