const profileIcon = document.getElementById("profile-icon");
const avatarModal = document.getElementById("avatar-modal");
const avatarsGrid = document.getElementById("avatars-grid");

// Массив путей к аватаркам
const avatarImages = [
  "images/avatar1.png",
  "images/avatar2.png",
  "images/avatar3.png",
  "images/avatar4.png",
  "images/avatar5.png",
  "images/avatar6.png",
];

// Создаем аватарки
function createAvatars() {
  for (let i = 0; i < 6; i++) {
    const avatar = document.createElement("img");
    avatar.className = "avatar";
    avatar.src = avatarImages[i];
    avatar.alt = `Avatar ${i + 1}`;
    avatar.onclick = () => selectAvatar(avatar, i);
    avatarsGrid.appendChild(avatar);
  }
}

// Функция выбора аватарки
function selectAvatar(element, index) {
  profileIcon.innerHTML = `<img src="${avatarImages[index]}" alt="Selected Avatar" style="width: 100%; height: 100%; border-radius: 50%;">`;
  closeModal();
}

profileIcon.addEventListener("click", () => {
  avatarModal.classList.add("active");
});

function closeModal() {
  avatarModal.classList.remove("active");
}

function openModal() {
  avatarModal.classList.add("active");
}

// Создаем аватарки при загрузке страницы
createAvatars();

// Добавляем обработчик для выпадающего меню
const menuToggle = document.getElementById("menu-toggle");
const dropdownMenu = document.getElementById("dropdown-menu");
let isMenuOpen = false;

menuToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  isMenuOpen = !isMenuOpen;
  dropdownMenu.classList.toggle("active");
});

// Закрываем меню при клике вне его
document.addEventListener("click", (e) => {
  if (isMenuOpen && !dropdownMenu.contains(e.target)) {
    dropdownMenu.classList.remove("active");
    isMenuOpen = false;
  }
});
