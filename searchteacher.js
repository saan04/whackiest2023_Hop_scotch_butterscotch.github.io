// Import statements are not required in JavaScript
function staffroom(){
let key = document.getElementById("teacher").value;
let driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

driver.get("https://msrit.edu/department/faculty.html?dept=cse.html#start")

let names = [];
for (let i = 1; i <= 30; i++) {
    let name = driver.find_element(By.XPATH, '/html/body/div[3]/section[1]/div/div/div/div/div/div/div[1]/section/div[2]/div[' + i + ']/article/div/header/a');
    names.push(i);
    names.push(name.text.toLowerCase());
}


let val = -10;
for (let i = 1; i < names.length; i += 2) {
    if (names[i].indexOf(key) !== -1) {
        val = i - 1;
        break;
    }
}

if (val === -1) {
    console.log('no personal');
} else {
    if (1 <= val && val <= 15) {
        window.alert("staff room 1");
    } else {
        window.alert("staff room 2");
    }
}
}