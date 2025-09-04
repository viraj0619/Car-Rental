var express = require("express");
var app = express.Router();
var exe = require("./../connection");






app.get("/register", async function (req, res) {

    var sql = `SELECT * FROM icon`;
    var iconData = await exe(sql);
    var iconsObj = { "icons": iconData };

    var sql2 = `SELECT * FROM registration`;
    var data = await exe(sql2);
    var obj = { "user": data };

    // Combine both into one object
    res.render("user/registration.ejs", { ...obj, ...iconsObj });
});

function verify_login(req, res, next) {
    if (req.session.user_id == undefined)
    res.redirect("/login");
    else{
    next()
    }
}
app.post("/save_ragister", async function (req, res) {

    var d = req.body;
    const icons=await exe(`select * from icon`);
    const obj={"icons":icons};
    var sql = `INSERT INTO registration(user_name, user_email,user_mobile,user_aadhar,user_password,gender,user_address,user_country,user_city) VALUES 
    ('${d.user_name}','${d.user_email}','${d.user_mobile}','${d.user_aadhar}','${d.user_password}','${d.gender}','${d.user_address}','${d.user_country}','${d.user_city}')`;
    var data = await exe(sql);
    // res.send(req.body);
    res.render("user/login.ejs",obj);
});

app.get("/login", async function (req, res) {
    // const user_name=await exe(`select (user_name,5) from registration where user_id='${req.session.user_id}'`)
    // UserName={"user_name":user_name[0]}
    var sql = `SELECT * FROM icon`;
    var iconData = await exe(sql);
    var iconsObj = {"icons": iconData,};
    var sql = `SELECT * FROM registration`;
    var data = await exe(sql);
    res.render("user/login.ejs",iconsObj);
});

app.post("/save_login", async function (req, res) {

     var d = req.body;
    var data =await exe( `SELECT * FROM registration WHERE user_mobile  = '${d.user_email_mobile}' or user_email='${d.user_email_mobile}' AND user_password = '${d.user_password}'`);
    
    if (data.length > 0) {
        req.session.user_id = data[0].user_id;
        // res.send("login successfull");
        res.redirect("/");
    }
    else {
        res.send("<h1>Login Failed !! try again ?</h1>");
    }
});

app.get("/logout", function (req, res) {

    req.session.destroy()
    // res.send("logout");

});

app.get("/myprofile",verify_login, async function (req, res) {
    const id=req.session.user_id;
    console.log(id)
    var sql = `SELECT * FROM registration where user_id='${id}'`;
    const icons=await exe(`select * from icon`);

    var data = await exe(sql);

    var obj = { "user": data,"icons":icons};
    res.render("user/myprofile.ejs", obj);
});


app.get("/",async  function (req, res) {

    var sql = `SELECT * FROM icon`;
    var iconData = await exe(sql);
    var iconsObj = {"icons": iconData};
    
    var sql1 = `SELECT * FROM image_slider`;
    var sliderData = await exe(sql1);
    var sliderObj = {"slider": sliderData};

    var sql3 = `SELECT * FROM offer_first`;
    var data = await exe(sql3);
    var offerobj = {"offer1":data};

    var sql4 = `SELECT * FROM offer_second`;
    var data = await exe(sql4);
    var offer_second = {"offer2":data};

    var sql5 = `SELECT * FROM offer_third`;
    var data = await exe(sql5);
    var offer_third = {"offer3":data};
    
    const id=req.session.user_id;
    // console.log(id)
    UserId={"id":id}
    // const user_name=await exe(`select user_name from registration where user_id='${req.session.user_id}'`)
    // UserName={"user_name":user_name[0]}
    // console.log(user_name)
    // Combine both objects into one
    var combinedObj = Object.assign({}, iconsObj, sliderObj,offerobj,offer_second,offer_third,UserId);
    
    res.render("user/home.ejs", combinedObj);
});

app.get("/about",async function (req, res) {

    var sql = `SELECT * FROM icon`;
    var iconData = await exe(sql);
    var iconsObj = {"icons": iconData};

    res.render("user/about.ejs",iconsObj);
});


app.get("/services",async function(req,res){
    const services_info=await exe(`select * from car_services`);

    var sql = `SELECT * FROM icon`;
    var iconData = await exe(sql);
    var iconsObj = {"icons": iconData};
    const PickupData=await exe(`select * from pickup_data where pickup_id='${req.session.pickup_id}'`);
    console.log(PickupData)
    const id=req.session.user_id;
    console.log(id)
    const obj={"services_info":services_info,"PickupData":PickupData}

    res.render("user/services.ejs", { ...obj, ...iconsObj });
});
app.get("/proccess_to_book/:id", verify_login, async function(req, res) {

    var id = req.params.id; 
    const services_info = await exe(`SELECT * FROM car_services where car_services_id='${id}'`); 
    var pickup_data = await exe(`select * from pickup_data where user_id='${req.session.user_id}'`);
    req.session.car_services_id = id;
    var sql=`update pickup_data set car_id='${req.params.id}' where user_id ='${req.session.user_id}'`
    var dataa=await exe(sql)
    
    var sqll = `SELECT * FROM icon`;
    var iconData = await exe(sqll);
    // var iconsObj = {"icons": iconData};



    // res.send(sql);
    // return;
    // console.log(req.session.car_id);
    const Login_id=req.session.user_id;
    const obj = {"services_info": services_info, "pickup_data": pickup_data,"icons":iconData,"Login_id":Login_id};
    res.render("user/proccess_to_book.ejs",obj);
});
   


app.get("/blog",async function (req, res) {

    var sql = `SELECT * FROM icon`;
    var iconData = await exe(sql);
    var iconsObj = {"icons": iconData};

    res.render("user/blog.ejs",iconsObj);
});

app.get("/contact",async  function (req, res) {
    // res.send("contact page is called");

    var sql = `SELECT * FROM icon`;
    var iconData = await exe(sql);
    var iconsObj = {"icons": iconData};

    res.render("user/contact.ejs",iconsObj);
});

app.post("/save_contact",async function(req,res){

    var d  = req.body;
    var sql = `INSERT INTO contactus(name,email,mobile,message) VALUES ('${d.name}','${d.email}','${d.mobile}','${d.message}')`;
    var data = await exe(sql);
    // res.send(req.body);
    res.redirect("/contact");
});


app.get("/book_car", verify_login, function (req, res) {

    res.render("user/book_car.ejs");
});

app.post("/rent_car", async function (req, res) {
    console.log(req.session);
    var d = req.body;

    // Input Validation
    if (typeof d.pickup_date !== 'string' || typeof d.pickup_drop_date !== 'string' || typeof d.pickup_pick !== 'string' || typeof d.pickup_drop !== 'string') {
        console.error('Invalid input format. Dates and times should be strings.');
        res.status(400).send('Invalid input format. Dates and times should be strings.');
        return;
    }

    // Improved Date Handling
    function parseDateTime(dateString, timeString) {
        try {
            return new Date(dateString + 'T' + timeString);
        } catch (error) {
            console.error('Error parsing date/time:', error.message);
            return null;
        }
    }

    var pickupDate = parseDateTime(d.pickup_date, d.pickup_pick);
    var dropOffDate = parseDateTime(d.pickup_drop_date, d.pickup_drop);

    if (!pickupDate || !dropOffDate || isNaN(pickupDate) || isNaN(dropOffDate)) {
        console.error('Invalid date/time format.');
        res.status(400).send('Invalid date/time format.');
        return;
    }
    // Calculate Difference in Days and Minutes
    var differenceInMilliseconds = dropOffDate - pickupDate;
    var differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
    var remainingMilliseconds = differenceInMilliseconds % (1000 * 60 * 60 * 24);
    var differenceInMinutes = Math.floor(remainingMilliseconds / (1000 * 60));

    if (differenceInMinutes < 0) {
        console.error('Drop-off time is before pickup time.');
        res.status(400).send('Drop-off time is before pickup time.');
        return;
    }

    var finalMinute = (differenceInDays * 24 * 60) + differenceInMinutes;

    try {
        var data1 = await exe(`SELECT * FROM pickup_data WHERE user_id='${req.session.user_id}'`);
        console.log(data1);

        if (data1.length > 0) {
            var sql1 = `
                UPDATE pickup_data 
                SET 
                    pickup_location='${d.pickup_location}', 
                    pickup_pick='${d.pickup_pick}', 
                    pickup_drop='${d.pickup_drop}', 
                    pickup_date='${d.pickup_date}', 
                    pickup_drop_date='${d.pickup_drop_date}',
                    rent_minute='${finalMinute}', 
                    user_id='${req.session.user_id}' 
                WHERE user_id='${req.session.user_id}'
            `;
            var data3 = await exe(sql1);
        } else {
            var sql2 = `
                INSERT INTO pickup_data(pickup_location, pickup_pick, pickup_drop, pickup_date, pickup_drop_date, rent_minute, user_id) 
                VALUES('${d.pickup_location}', '${d.pickup_pick}', '${d.pickup_drop}', '${d.pickup_date}', '${d.pickup_drop_date}', '${finalMinute}', '${req.session.user_id}')
            `;
            var data2 = await exe(sql2);
            console.log(data2);
        }
    } catch (error) {
        console.error('Database error:', error.message);
        res.status(500).send('Database error.');
        return;
    }

    res.redirect('/services');
});



module.exports = app;