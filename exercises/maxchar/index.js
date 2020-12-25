// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"



// my answer
function maxChar(str) {
    const hash = {};
    let maxKey,max=0;
    for(let c of str){
        hash[c] = hash[c] + 1 || 1;
    }
    for(let key in hash){
        if(hash[key]>max){
            max = hash[key];
            maxKey = key;
        }
    }
    return maxKey;
}

module.exports = maxChar;
