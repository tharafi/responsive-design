function handleActive(ev) {
    ev.target.parentElement.querySelectorAll(".selected").forEach((element) => {
      element.classList.remove("selected");
    });
  
    // add active
    ev.target.classList.add("selected");
  }

  const colorsLi = document.querySelectorAll("ul li");



  colorsLi.forEach((li) => {
    li.addEventListener("click", (e) => {

        e.target.dataset.class
  
      // set color local storage
      localStorage.setItem("color_option", e.target.dataset.color);
  
      handleActive(e);
    });
  });