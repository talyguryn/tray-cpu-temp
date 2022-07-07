'use strict';

const path = require('path');
const { app } = require('electron');
const getPlatform = require('./get-platform');

const Logger = require('./logger');
const log = Logger.getLogger();

const IS_PROD = !require('electron-is-dev');
const root = process.cwd();
const { isPackaged } = app;

let binariesPath = IS_PROD && isPackaged
    ? path.join(path.dirname(app.getAppPath()), 'bin')
    : path.join(root, 'resources', getPlatform(), 'bin');

binariesPath = path.resolve(__dirname, binariesPath);

module.exports = binariesPath;
