const performance = require("performance-now")

function bubbleSort(a)
{    
    var swapp;
    var n = a.length-1;
    var x=a;
    do {
        swapp = false;
        for (var i=0; i < n; i++)
        {
            if (x[i] > x[i+1])
            {
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);   
    return x; 
} 

module.exports = {
  async callBubbleSort(data){   
    
    var start = performance()     
    await bubbleSort(data.value)    
    var end = performance()
    const duration = (end - start).toFixed(3)
    
    const result = {duration: duration, value: data.value, type: "BoubleSort", data_type: data.type}
    return result    
  },

  async callBubbleSortWithQuantity(data, quantity){
    let localData = [...data.value];
    var start = performance()     
    for (let index = 0; index < quantity; index++) {
      await bubbleSort(localData)      
    }
    const used = process.memoryUsage();
    var end = performance()
    const duration = (end - start).toFixed(3)
    const result = {
      duration: duration, value: data.value, type: "BoubleSort", data_type: data.type, output: localData,
      rss: `${Math.round(used.rss / 1024 / 1024 * 100) / 100} MB`, 
      heapTotal: `${Math.round(used.heapTotal / 1024 / 1024 * 100) / 100} MB`,
      heapUsed: `${Math.round(used.heapUsed / 1024 / 1024 * 100) / 100} MB`,
      external: `${Math.round(used.external / 1024 / 1024 * 100) / 100} MB`
    }

    return result    
  }
  
}