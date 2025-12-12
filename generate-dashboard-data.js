const fs = require('fs');
const path = require('path');

const TEST_EXECUTION_COUNT = 180; 

function generateDashboardData() {
  const RESULTS_FILE = path.join(__dirname, 'test-results', 'results.json');
  const OUT_FILE = path.join(__dirname, 'docs', 'dashboard-data.json');

  
  let existingData = JSON.parse(fs.readFileSync(OUT_FILE, 'utf-8'));
  
  let results;
  try {
    
    results = JSON.parse(fs.readFileSync(RESULTS_FILE, 'utf-8'));
  } catch (e) {
    console.error(`Could not read Playwright results. Setting to full failure.`);
    
    existingData.runs.unshift({
        id: 'CI Setup Error', date: new Date().toLocaleDateString('en-GB'),
        channel: 'Web', env: 'QA', status: 'Failed', passed: 0, failed: TEST_EXECUTION_COUNT
    });
    fs.writeFileSync(OUT_FILE, JSON.stringify(existingData, null, 2), 'utf-8');
    return;
  }

  
  const totalPassed = results.stats.passes;
  const finalFailed = TEST_EXECUTION_COUNT - totalPassed;
  const status = finalFailed > 0 ? 'Failed' : 'Passed';

  
  const currentRun = {
    id: `CI Run: ${new Date().toLocaleDateString('en-GB')}`,
    date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }),
    channel: 'Web',
    env: 'QA',
    status: status,
    passed: totalPassed,
    failed: finalFailed,
  };

  
  existingData.runs.unshift(currentRun);
  existingData.runs = existingData.runs.slice(0, 5); 
  
  
  existingData.trend.passed.pop();
  existingData.trend.passed.push(totalPassed);


  fs.writeFileSync(OUT_FILE, JSON.stringify(existingData, null, 2), 'utf-8');
  console.log(`Successfully generated dashboard data with ${totalPassed} passed runs.`);
}

generateDashboardData();