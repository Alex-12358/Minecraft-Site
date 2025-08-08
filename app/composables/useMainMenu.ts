// composables/useMainMenu.ts
export const useMainMenu = () => {
  return [
    { name: "Главная", to: "/" },
    { name: "Правила", to: "/rules" },
    { name: "Форум", to: "/forum" },
    { name: "Сервера", to: "/servers" },
    { name: "Магазин", to: "/shop" },
    { name: "Вакансии", to: "/vacancies" },
  ];
};
