const Store = require('electron-store');

const defaults = {
  defaults: {
    captureFormat: 'jpeg',
    customOutDir: undefined,
    keyframeCut: true,
    autoMerge: false,
    timecodeShowFrames: false,
    invertCutSegments: false,
    autoExportExtraStreams: true,
    askBeforeClose: false,
    enableAskForImportChapters: true,
    enableAskForFileOpenAction: true,
    muted: false,
    autoSaveProjectFile: true,
    wheelSensitivity: 0.2,
    language: undefined,
    ffmpegExperimental: false,
    
    captureFormat1: 'jpeg',
    customOutDir1: undefined,
    keyframeCut1: true,
    autoMerge1: false,
    timecodeShowFrames1: false,
    invertCutSegments1: false,
    autoExportExtraStreams1: true,
    askBeforeClose1: false,
    enableAskForImportChapters1: true,
    enableAskForFileOpenAction1: true,
    muted1: false,
    autoSaveProjectFile1: true,
    wheelSensitivity1: 0.2,
    language1: undefined,
    ffmpegExperimental1: false,
  },
};


let store;

async function init() {
  for (let i = 0; i < 5; i += 1) {
    try {
      store = new Store(defaults);
      return;
    } catch (err) {
      // eslint-disable-next-line no-await-in-loop
      await new Promise(r => setTimeout(r, 2000));
      console.error('Failed to create config store, retrying', err);
    }
  }

  throw new Error('Timed out while creating config store');
}

function get(key) {
  return store.get(key);
}

function set(key, val) {
  if (val === undefined) store.delete(key);
  else store.set(key, val);
}

module.exports = {
  init,
  get,
  set,
};
