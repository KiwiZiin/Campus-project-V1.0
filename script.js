gsap.registerPlugin();

window.addEventListener("load", () => {
  // Fade + slide suave no card
  gsap.to(".Area_login", {
    duration: 1.2,
    opacity: 1,
    y: 0,
    ease: "power3.out",
  });

  // Imagem da esquerda aparece com transição leve
  gsap.from(".imagem_esquerda", {
    duration: 1.5,
    x: -50,
    opacity: 0,
    ease: "power3.out",
  });

  // Parallax suave
  document.querySelector(".Tela_esquerda").addEventListener("mousemove", (e) => {
    const { offsetX, offsetY, target } = e;
    const moveX = (offsetX / target.offsetWidth - 0.5) * 15;
    const moveY = (offsetY / target.offsetHeight - 0.5) * 15;
    gsap.to(".imagem_esquerda", {
      duration: 0.5,
      x: moveX,
      y: moveY,
      ease: "power2.out",
    });
  });

  document.querySelector(".Tela_esquerda").addEventListener("mouseleave", () => {
    gsap.to(".imagem_esquerda", { x: 0, y: 0, duration: 0.6, ease: "power3.out" });
  });
});
