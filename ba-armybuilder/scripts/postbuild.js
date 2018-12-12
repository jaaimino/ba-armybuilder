const moveFile = require('move-file');
 
(async () => {
    await moveFile('build/', 'docs/');
    console.log('Moving to prod folder');
})();