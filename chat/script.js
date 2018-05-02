{
  const messages = document.querySelector('.messages');
  const header = document.querySelector('.main-header');
  const lastMessage = messages.querySelector(':scope > .message:last-child');

  window.requestAnimationFrame(() => {
    lastMessage.style.opacity = 0;
    messages.style.transform = `translateY(${lastMessage.offsetHeight}px)`;

    header.addEventListener('click', event => {
      event.preventDefault();
      messages.animate([
        { transform: messages.style.transform },
        { transform: 'none' }
      ], {
        duration: 250,
        easing: 'ease-out',
        fill: 'forwards'
      });

      lastMessage.animate([
        { opacity: 0 },
        { opacity: 1 }
      ], {
        duration: 250,
        easing: 'ease-in-out',
        fill: 'forwards'
      });
    });
  });
}

{
  const blogLink = document.querySelector('.blog-link');
  const chatUi = document.querySelector('.chat-ui');

  blogLink.addEventListener('click', () => {
    chatUi.animate([
      { transform: 'none' },
      { transform: 'translateX(-100%)' }
    ], {
      duration: 500,
      easing: 'ease-in-out',
      fill: 'forwards'
    });
  });
}
