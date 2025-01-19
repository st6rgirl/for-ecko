const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener('click', () => {
    question.innerHTML = 'Now ask me too!';
});

noBtn.addEventListener('mouseover', () => {
    const windowWidth = window.innerWidth; // Get full window width
    const windowHeight = window.innerHeight; // Get full window height

    const maxX = windowWidth - noBtnRect.width;
    const maxY = windowHeight - noBtnRect.height;

    // Generate random positions within the viewport
    const i = Math.floor(Math.random() * maxX);
    const j = Math.floor(Math.random() * maxY);

    noBtn.style.position = 'absolute';
    noBtn.style.left = `${i}px`;
    noBtn.style.top = `${j}px`;

    // Make sure it stays visible (optional, for debugging)
    console.log(`Moved 'No' button to: (${i}px, ${j}px)`);
});
