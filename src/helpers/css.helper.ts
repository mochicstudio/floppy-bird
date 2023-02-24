const setBootingBackground = () => {
  document.getElementById('html')?.classList.add('booting-screen');
};

const setInGameBackground = () => {
  document.getElementById('html')?.classList.replace('booting-screen', 'in-game-screen');
};

export {
  setBootingBackground,
  setInGameBackground
};
