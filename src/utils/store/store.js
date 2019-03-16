/**
 * This file build history store
 * from getStore and history package
 */

import getStore from '../../getStore';
import history from '../history';

const store = getStore(history);

export default store;
