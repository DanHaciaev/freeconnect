document.addEventListener("DOMContentLoaded", function () {
    const languageToggles = document.querySelectorAll(".language-toggle"); // Все переключатели
    const pageWrapperEn = document.querySelector(".page-wrapper-en");
    const pageWrapperRo = document.querySelector(".page-wrapper-ro");
    const stylesheet = document.getElementById("stylesheet");
  
    // Функция для переключения языка
    function switchLanguage(isRomanian) {
      if (isRomanian) {
        // Румынский
        pageWrapperEn.style.display = "none"; // Скрыть английский
        pageWrapperRo.style.display = "block"; // Показать румынский
        stylesheet.href = "../css/styles-ro.css"; // Стили для румынского
      } else {
        // Английский
        pageWrapperEn.style.display = "block"; // Показать английский
        pageWrapperRo.style.display = "none"; // Скрыть румынский
        stylesheet.href = "../css/styles-en.css"; // Стили для английского
      }
  
      // Синхронизация состояния всех переключателей
      languageToggles.forEach((toggle) => {
        toggle.checked = isRomanian;
      });
  
      // Сохраняем выбранный язык в localStorage
      localStorage.setItem("selectedLanguage", isRomanian ? "ro" : "en");
    }
  
    // Инициализация состояния при загрузке страницы
    const savedLanguage = localStorage.getItem("selectedLanguage");
    const isRomanian = savedLanguage === "ro";
    switchLanguage(isRomanian); // Применяем язык на основе сохранённого значения
  
    // Добавляем обработчики событий для всех переключателей
    languageToggles.forEach((toggle) => {
      toggle.addEventListener("change", function () {
        switchLanguage(this.checked); // Меняем язык в зависимости от переключателя
      });
    });
  });
  