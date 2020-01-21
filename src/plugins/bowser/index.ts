/**
 * Записывает информацию об устройстве пользователя в data-атрибуты тэга <html>
 */

import bowser from 'bowser';

const device = bowser.getParser(window.navigator.userAgent) as any;
const htmlDataset = document.documentElement.dataset;

htmlDataset.browserName = device.parsedResult.browser.name;
htmlDataset.browserVersion = device.parsedResult.browser.version;
htmlDataset.engineName = device.parsedResult.engine.name;
htmlDataset.platformType = device.parsedResult.platform.type;
htmlDataset.osName = device.parsedResult.os.name;
