require('colors');
const fs = require('fs');
const { processQuests } = require('./src/quests');

const accounts = JSON.parse(fs.readFileSync('accounts.json', 'utf-8'));

(async () => {
  process.stdout.write('\x1Bc');
  console.log('================================================'.blue);
  console.log('=        Valhalla Foundation Bot               ='.blue);
  console.log('=      Created by AirdropGemHunter             ='.blue);
  console.log('=     https://t.me/AirdropGemHunterChannel     ='.blue);
  console.log('================================================'.blue);
  console.log();
  try {
    for (const bearerToken of accounts) {
      await processQuests(bearerToken);
    }
  } catch (error) {
    console.error('Error in IIFE: ' + error);
  }
})();
