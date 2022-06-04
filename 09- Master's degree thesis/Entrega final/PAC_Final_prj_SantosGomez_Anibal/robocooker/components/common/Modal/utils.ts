export const openModal = (id: string) =>
  document.documentElement
    .querySelectorAll(`.${id}.modal`)[0]
    .classList.add("modal-open");

export const closeModal = (id: string) =>
  document.documentElement
    .querySelectorAll(`.${id}.modal`)[0]
    .classList.remove("modal-open");
