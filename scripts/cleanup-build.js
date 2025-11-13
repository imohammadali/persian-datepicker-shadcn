const { rimraf } = require('rimraf');
const { glob } = require('glob');

async function cleanup() {
  try {
    // Remove stories directory
    await rimraf('./build/stories');
    
    // Remove .map files
    const mapFiles = await glob('./build/**/*.map');
    for (const file of mapFiles) {
      await rimraf(file);
    }
    
    // Remove .stories.* files
    const storyFiles = await glob('./build/**/*.stories.*');
    for (const file of storyFiles) {
      await rimraf(file);
    }
    
    console.log('Build cleanup completed');
  } catch (error) {
    console.error('Error during cleanup:', error);
    process.exit(1);
  }
}

cleanup();

