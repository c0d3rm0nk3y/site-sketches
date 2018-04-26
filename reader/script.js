{
  const nav = document.querySelector('.mdl-navigation');

  nav.addEventListener('click', event => {
    const summary = event.target.closest('summary');
    if (!summary) return;

    const details = summary.parentNode;
    const icon = summary.querySelector(':scope > i');

    event.preventDefault();

    const initiallyOpen = details.open;

    const startHeight = details.offsetHeight;
    details.open = !details.open;
    const endHeight = details.offsetHeight;

    const animOpts = {
      duration: 200,
      easing: 'ease-out'
    };

    if (initiallyOpen) {
      details.open = true;
    }

    details.animate([
      { height: startHeight + 'px' },
      { height: endHeight + 'px' }
    ], animOpts).onfinish = () => {
      if (initiallyOpen) {
        details.open = false;
      }
    };

    {
      const iconKeyframes = [
        { transform: 'rotate(0)' },
        { transform: 'rotate(90deg)' }
      ];

      if (initiallyOpen) iconKeyframes.reverse();

      icon.animate(iconKeyframes, animOpts);
    }
  });
}

{
  const techBlogLink = document.querySelector('.tech-blog-link');
  techBlogLink.addEventListener('click', event => {
    event.preventDefault();
    event.target.closest('.mdl-layout').MaterialLayout.toggleDrawer();
    document.querySelector('.initial-content').style.display = 'none';
    const techContent = document.querySelector('.tech-content');
    techContent.style.display = 'block';
    techContent.animate([
      { transform: 'translateY(-100px)', opacity: 0 },
      { transform: 'translateY(0)', opacity: 1 }
    ], {
      duration: 300,
      easing: 'ease-out'
    });
  });
}
