import * as flsFunctions from './modules/functions.js';
import { costСalculation } from './modules/costCalculation.js';
import { openAccordion } from './modules/accordion.js';
import { sliderOptions, sliderServices, sliderFirstScreen } from './modules/sliders.js';
import { burgerMenu } from './modules/burger.js';

flsFunctions.isWebp();
burgerMenu();
costСalculation();
openAccordion();
sliderOptions();
sliderServices();
sliderFirstScreen();
