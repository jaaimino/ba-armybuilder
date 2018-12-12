const moveFile = require('move-file');
const rimraf = require('rimraf');

rimraf('docs', async () => {
    await moveFile('build/', 'docs/');
    console.log('Moving to prod folder');
})
 
