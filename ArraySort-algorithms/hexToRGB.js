// Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect 
// the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.


// hex values must either be 3 or 6 (plus #)
// need to have a 0x in front to convert to hex
// if hex is 3 digits we need to concatitate each digit 2 times for each channel
    // hex.length === 4 
        // r = 0x + hex[1] + hex[1]...
// if hex is 6 digits
    // r = 0x + hex[1] + hex[2]
    // g = 0x + hex[3] + hex[4]
    // b = 0x + hex[5] + hex[6]

let hextToRgb = (hex) => {
    let r = 0;
    let g = 0;
    let b = 0;
    if (hex.length === 4) {
        r = '0x' + hex[1] + hex[1];
        g = '0x' + hex[2] + hex[2];
        b = '0x' + hex[3] + hex[3];
    } else if ( hex.length === 7) {
        r = '0x' + hex[1] + hex[2];
        g = '0x'+ hex[3] + hex[4];
        b = '0x' + hex[5] + hex[6];
    }
    return "rgb("+ +r + "," + +g + "," + +b + ")"
}

hextToRgb('#66ccff')