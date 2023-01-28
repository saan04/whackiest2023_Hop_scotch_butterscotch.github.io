// Import statements are not required in JavaScript
function staffroom(){
    let key = document.getElementById("teacher").value;
    //var webdriver = require(['selenium-webdriver']);

    //let driver = new webdriver.Builder()
   //   .forBrowser('chrome')
   //   .build();
    
   // driver.get("https://msrit.edu/department/faculty.html?dept=cse.html#start")
    
  //  let names = [];
  //  for (let i = 1; i <= 30; i++) {
  //      let name = driver.find_element(By.XPATH, '/html/body/div[3]/section[1]/div/div/div/div/div/div/div[1]/section/div[2]/div[' + i + ']/article/div/header/a');
  //      names.push(i);
  //      names.push(name.text.toLowerCase());
    //}
    
    names=[1, 'dr annapurna p. patil', 2, 'bhushan a. matad', 3, 'dr. monica r. mundada', 4, 'dr. jayalakshmi d. s.', 5, 'dr. shilpa shashikant chaudhari', 6, 'dr. t.n.r.kumar', 7, 'dr. s. rajarajeswari', 8, 'dr. j sangeetha', 9, 'dr. parkavi a.', 10, 'dr. geetha j.', 11, 'dr. dayananda r. b.', 12, 'dr sangeetha.v', 13, 'veena g.s.', 14, 'mallegowda m.', 15, 'chandrika prasad', 16, 'pradeep kumar d.', 17, 'dr. ganeshayya shidaganti', 18, 'darshana a. naik', 19, 'jamuna s murthy', 20, 'sushma b', 21, 'nandini s b', 22, 'chetan d s', 23, 'soumya c s', 24, 'manjula l', 25, 'akshata s. bhayyar', 26, 'vishwachetan d', 27, 'mamatha a', 28, 'pallavi n', 29, 'akshatha kamath']

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
        } else if (16 <= val && val <= 30) {
            window.alert("staff room 2");
        }else {window.alert("no teacher found");}
    }
}