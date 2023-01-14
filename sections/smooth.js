const smooth = function () {
  document.querySelector(".goToLink").addEventListener("click", function (e) {
    e.preventDefault();
    const id = this.dataset.href;
    // console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
};
export default smooth;
