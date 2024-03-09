export const saveDataLocal = (ejercicios) => {
  console.log(ejercicios);
  localStorage.setItem("saveejercicios", JSON.stringify(ejercicios));
};
