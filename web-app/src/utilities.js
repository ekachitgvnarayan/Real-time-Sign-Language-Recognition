// Define our labelmap
const labelMap = {
    1:{name:'A', color:'red'},
    2:{name:'B', color:'yellow'},
    3:{name:'C', color:'lime'},
    4:{name:'D', color:'blue'},
    5:{name:'E', color:'cyan'},
    6:{name:'F', color:'magenta'},
    7:{name:'G', color:'orange'},
    8:{name:'H', color:'purple'},
    9:{name:'I', color:'chartreuse'},
    10:{name:'K', color:'deeppink'},
    11:{name:'L', color:'gold'},
    12:{name:'M', color:'turquoise'},
    13:{name:'N', color:'darkred'},
    14:{name:'O', color:'navy'},
    15:{name:'P', color:'lawngreen'},
    16:{name:'Q', color:'mediumvioletred'},
    17:{name:'R', color:'darkorange'},
    18:{name:'S', color:'slateblue'},
    19:{name:'T', color:'springgreen'},
    20:{name:'U', color:'darkmagenta'},
    21:{name:'V', color:'sienna'},
    22:{name:'W', color:'dodgerblue'},
    23:{name:'X', color:'olive'},
    24:{name:'Y', color:'hotpink'}
}

// Define a drawing function
export const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx)=>{
    for(let i=0; i<=boxes.length; i++){
        if(boxes[i] && classes[i] && scores[i]>threshold){
            // Extract variables
            const [y,x,height,width] = boxes[i]
            const text = classes[i]
            
            // Set styling
            ctx.strokeStyle = labelMap[text]['color']
            ctx.lineWidth = 10
            ctx.fillStyle = 'white'
            ctx.font = '30px Arial'         
            
            // DRAW!!
            ctx.beginPath()
            console.log(Math.round(scores[i]*100));
            ctx.fillText(labelMap[text]['name'] + ' - ' + Math.round(scores[i]*100)+'%', x*imgWidth, y*imgHeight-10)
            ctx.rect(x*imgWidth, y*imgHeight, width*imgWidth/2, height*imgHeight/2);
            ctx.stroke()
        }
    }
}