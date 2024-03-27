/************ BITWISE OPERATORS ************/

//decimal 1 = binary 00000001
//decimal 2 = binary 00000010
let a = 1
let b = 2

//bitwise AND '&'
//this returns decimal 0 which is binary 00000000
console.log(a & b)

//bitwise OR '|'
//this returns decimal 3 which in binary is 00000011
console.log(a | b)



console.log('----------BITWISE NOT----------')
//bitwise NOT '~'
//inverts all the bits, uses 2's compliment which means the left most bit is used to signify that it's a negative number
//the leftmost bit, AKA the 'sign', is also counted but as a negative number
//binary 10 = 00001010
//      ~10 = 11110101
//-128 +64 +32 +16 +0 +4 +0 +1= -11
console.log('BITWISE ~10 is: '+~10)

//binary 6 = 00000110
//      ~6 = 11111001
//-128 +64 +32 +16 +8 +0 +0 +1 = -7
console.log('BITWISE ~6 is: '+~6)

//binary 0 = 00000000
//      ~0 = 11111111
//-128 +64 +32 +16 +8 +4 +2 +1 = -1
console.log('BITWISE ~0 is: '+~0)



console.log('----------BITWISE SHIFT----------')
//bitwise LEFT SHIFT '<<'
//binary 5 = 0101
//  5 << 1 = 1010 = 10
//5 << 1 means shift the bits to the left by one space/bit, fill in the blanks with 0
console.log('BIWISE 5 << 1 is: '+(5 << 1))

//bitwise RIGHT SHIFT '>>'
//binary 6 = 00000110
//  6 >> 1 = 00000011 = 3
console.log('BIWISE 6 >> 1 is: '+(6 >> 1))

//binary 20 = 00010100
//  20 << 2 = 01010000 = 80
console.log('BITWISE 20 << 2 is: '+(20 << 2))

//binary 196 = 11000100
//  196 >> 2 = 00110001 = 49
console.log('BITWISE 196 >> 2 is: '+(196 >> 2))