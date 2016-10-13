import parsePath from 'path-parse';
import { error } from '../switzerland';

/**
 * @constant scriptPath
 * @return {String|void}
 */
const scriptPath = (() => {

    try {
        return parsePath(document.currentScript.getAttribute('src')).dir;
    } catch (err) {}

    try {
        return parsePath(self.location.href).dir;
    } catch (err) {}

    error('Unable to determine the path for the current component');

})();

/**
 * @method path
 * @param {String} file
 * @return {String}
 */
export const path = file => `${scriptPath}/${file}`;

// /**
//  * @method toString
//  * @return {String}
//  */
path.toString = () => scriptPath;
