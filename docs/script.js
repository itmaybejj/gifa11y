import Gifa11y from './assets/js/gifa11y.esm.js';

window.addEventListener('gifA11ySet', (e)=> {
  console.log(e.detail)
})

window.gifa11y = new Gifa11y({
  // buttonBackground: 'indigo',
  // buttonBackgroundHover: 'rebeccapurple',
  // buttonIconColor: 'white',
  // buttonFocusColor: '#00e7ffad',
  // buttonIconSize: '1.5rem',
  // buttonIconFontSize: '1rem',
  // buttonPlayIconID: 'playsvg',
  // buttonPauseIconID: 'pausesvg',
  // buttonPlayIconHTML: '',
  // buttonPauseIconHTML: '',
  // buttonPauseShared: true,
  container: 'main',
  // exclusions: '',
  // gifa11yOff: '',
  // inheritClasses: true,
  // initiallyPaused: false,
  // langPause: 'Pause GIF:',
  // langPlay: 'Play GIF:',
  // langPauseAllButton: 'Pause all GIFs',
  // langPlayAllButton: 'Play all GIFs',
  // langMissingAlt: 'Missing image description.',
  // langAltWarning: '&#9888; Error! Please add alternative text to GIF.',
  // missingAltWarning: true,
  // showButtons: true,
  // showGifText: false,
  target: 'img[src$=".webp"]',
});
