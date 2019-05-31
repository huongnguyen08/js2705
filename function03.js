/**
 * Cho h = 5, r = 5
 *      *           h=1,r=1
 *      * *         h=2,r=1,2
 *      * * *       h=3,r=1,2,3
 *      * * * *     h=4,r=1,2,3,4
 *      * * * * *   ==> r<=h
 * 
 *      * * * * *   h=1,r=12345 
 *      * * * *     h=2,r=1234
 *      * * *       h=3,r=123
 *      * *         h=4,r=12
 *      *           h=5,r=1
 *                  ==> r+h <= 6 = 5 + 1 = h+1
 * 
 *      
 * 
 *      *           y=1,x=1
 *      * *         y=2,x=1,2
 *      *   *       y=3,x=1,3
 *      *     *     y=4,x=1,4
 *      * * * * *   y=5,x=12345
 *                   y=h || x=y || x=1
 */

function veHinh1(h=5){
    for(let y = 1; y<=h; y++){
        let str = '';
        for(let r=1; r<=h;r++){
            if(r<=y) str += '* '
            else str += ' '
        }
        console.log(str)
    }
}
function veHinh2(h=5){
    for(let y = 1; y<=h; y++){
        let str = '';
        for(let r=1; r<=h;r++){
            if(r+y <= h+1) str += '* '
            else str += ' '
        }
        console.log(str)
    }
}
function veHinh3(h=5){
    for(let y = 1; y<=h; y++){
        let str = '';
        for(let r=1; r<=h;r++){
            if(y==h || r==y || r==1) str += '*'
            else str += ' '
        }
        console.log(str)
    }
}
veHinh3()


