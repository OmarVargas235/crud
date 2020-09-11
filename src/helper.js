export const effectRipple = e => {
	const btn = e.target;
	const span = document.createElement('span');

	span.style.left = e.layerX + "px";
	span.style.top = e.layerY + "px";

	btn.appendChild(span);

	setTimeout(() => span.style.transform = "translate(-50%, -50%) scale(6)", 50);
	setTimeout(() => span.style.opacity = "0", 300);
	setTimeout(() => span.remove(), 800);
}