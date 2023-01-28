function floored(){




let name = document.getElementById("usertext").value;



let number = parseInt(name.slice(-2));
let message = "";
if (name.includes('apex')) {
    message += "APEX BLOCK\n";
    message += `room number is ${number}\n`;
    message += `floor on lift is ${parseInt(name[name.length - 3]) + 2}\n`;
    message += `level us ${name[name.length - 3]}\n`;
} else if (name.includes('esb')) {
    message += "ELECTRICAL SCIENCES BLOCK\n";
    message += `room number is ${number}\n`;
    message += `floor on lift is ${parseInt(name[name.length - 3]) + 2}\n`;
    message += `level us ${name[name.length - 3]}\n`;
} else if (name.includes('des')) {
    message += "DEPARTMENT OF  ELECTRICAL SCIENCES\n";
    message += `room number is ${number}\n`;
    message += `floor on lift is ${parseInt(name[name.length - 3]) + 2}\n`;
    message += `level us ${name[name.length - 3]}\n`;
} else if (name.includes('lhc')) {
    message += "LECTURE HALL COMPLEX\n";
    message += `room number is ${number}\n`;
    message += `floor on lift is ${parseInt(name[name.length - 3]) + 2}\n`;
    message += `level is ${name[name.length - 3]}\n`;
}
window.alert(message);

    
}