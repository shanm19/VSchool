function display_date(){
    var d = new Date();
    var day_num = d.getDay();
    var week_array = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    console.log("Today is: " + week_array[day_num]);
    console.log("Current time is: " + d.toLocaleTimeString());
}

display_date();