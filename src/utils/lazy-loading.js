const lazyLoading = () => {
  const lazyImgs = document.querySelectorAll(".lazy");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove("loading");
          img.classList.add("loaded");
          observer.unobserve(img);
        }
      });
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0,
      //todas as 3 propriedades estao em seu padrao, o que quer dizer que eu nao precisaria utiliza-las. utilizei apenas por fins didáticos.
    }
  );

  lazyImgs.forEach((img) => {
    observer.observe(img);
  });
};

export default lazyLoading;
