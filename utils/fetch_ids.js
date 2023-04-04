const fs = require('fs');

function getAllIDs (dir, allIDsList = []){
    const files = fs.readdirSync(dir);
    files.map(file => {
      const name = dir + '/' + file;
      if (fs.statSync(name).isDirectory()) { // check if subdirectory is present
        getAllFiles(name, allIDsList);     // do recursive execution for subdirectory
      } else {
        const dataJson = require(name);
        allIDsList.push(dataJson.id);           // push filename into the array
      }
    })
    
    return allIDsList;
}

const allFiles = getAllIDs('./templates/NFTCatalog');
console.log(allFiles)
fs.writeFile('ids.txt', JSON.stringify(allFiles), (err) => {
  if (err) throw err;
  else {
     console.log("The file is updated with the given data.")
  }
})