/**
 * Cho h = 5, r = 5
 *      *           h=1,r=1
 *      * *         h=2,r=1,2
 *      * * *       h=3,r=1,2,3
 *      * * * *     h=4,r=1,2,3,4
 *      * * * * *
 * 
 *      * * * * *
 *      * * * *
 *      * * *
 *      * *
 *      *
 * 
 *      *
 *      * *
 *      *   *  
 *      *     *
 *      * * * * *
 */

function veHinh1(){
    for(let h = 1; h<=5; h++){
        let str = '';
        for(let r=1; r<=5;r++){
            if(r<=h) str += '* '
            // else console.log(' ')
        }
        console.log(str)
    }
}
veHinh1()


