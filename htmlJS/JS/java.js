const menuBtn = document.getElementById("menu-btn");
    const sidebar = document.getElementById("BarraLateral");

    menuBtn.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });

    document.querySelectorAll(".BarraLateral a").forEach(link => {
      link.addEventListener("click", () => {
        sidebar.classList.remove("active");
      });
    });