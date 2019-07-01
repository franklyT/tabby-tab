// This function filters potential duplicates cropping up in topsites
function parseTopsites() {
    chrome.topSites.get(async function(info) {
      let tempGroup = info;
      tempGroup.forEach((elm1, index1) => {
        tempGroup.forEach((elm2, index2) => {
          if (index1 !== index2) {
            if (
              JSON.stringify(
                elm1.url.match(/[https:|http:]\/\/(.*?)\//)[1].replace(/www./, "")
              ) ===
              JSON.stringify(
                elm2.url.match(/[https:|http:]\/\/(.*?)\//)[1].replace(/www./, "")
              )
            ) {
              tempGroup.splice(index1, 1);
            }
          }
        });
      });
    
      for (let i = 0; i < 5; i++) {
       await giveUsApples(tempGroup[i].url, tempGroup[i].title, "tsites");
      }
      setTimeout(()=> {

        selectAll('.tsites-box').forEach((elm)=> {
          let appender = document.createElement('div');
          appender.classList.add('tsites-box__top');
  
            console.log(elm)
            elm.before(appender);
        });

       }, 3000)

    });
    }
    //parseTopsites();
    callWithPerf(parseTopsites)