import {generateDataArray} from './dataGenerator.js';
import {renderGallery} from './pictureBase.js';
import './formValidator.js';
import './uploadForm.js';
import './scaleManager.js';

import { applyFilter } from './effectManager.js';


renderGallery(generateDataArray());
applyFilter();
