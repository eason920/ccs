//
export const hidePcNav = () => {
  for (let i = 1; i <= 8; i++) {
    document.getElementById("smallmenu" + i).style.display = "none";
  }
};
