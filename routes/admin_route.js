var express = require("express");
var exe = require("./../connection");
var route = express.Router();

route.get("/", function (req, res) {
    res.render("admin/home.ejs");
});
route.get("/add_cars", function (req, res) {
    res.render("admin/add_cars.ejs");
});
route.post("/add_services_car", async function (req, res) {
    const d = req.body;
    const date = new Date().toISOString().slice(0, 10).split('-').reverse().join('-');
    var car_main_img = req.files.car_main_img;
    if (req.files.car_main_img) {
        var car_main_img = new Date().getTime() + req.files.car_main_img.name;
        req.files.car_main_img.mv("public/admin/uploads/" + car_main_img);
    }
    var car_img1 = req.files.car_img1;
    if (req.files.car_img1) {
        var car_img1 = new Date().getTime() + req.files.car_img1.name;
        req.files.car_img1.mv("public/admin/uploads/" + car_img1);
    }
    var car_img2 = req.files.car_img2;
    if (req.files.car_img2) {
        var car_img2 = new Date().getTime() + req.files.car_img2.name;
        req.files.car_img2.mv("public/admin/uploads/" + car_img2);
    }
    var car_img3 = req.files.car_img3;
    if (req.files.car_img3) {
        var car_img3 = new Date().getTime() + req.files.car_img3.name;
        req.files.car_img3.mv("public/admin/uploads/" + car_img3);
    }
    var car_img4 = req.files.car_img4;
    if (req.files.car_img4) {
        var car_img4 = new Date().getTime() + req.files.car_img4.name;
        req.files.car_img4.mv("public/admin/uploads/" + car_img4);
    }
    var car_img5 = req.files.car_img5;
    if (req.files.car_img5) {
        var car_img5 = new Date().getTime() + req.files.car_img5.name;
        req.files.car_img5.mv("public/admin/uploads/" + car_img5);
    }
    var car_img6 = req.files.car_img6;
    if (req.files.car_img6) {
        var car_img6 = new Date().getTime() + req.files.car_img6.name;
        req.files.car_img6.mv("public/admin/uploads/" + car_img6);
    }
    const sql = `insert into car_services(car_name,car_type,car_fuel_type,car_seats,car_trips_count,car_actual_price,car_dis,car_exc_fees,car_main_img,car_img1,car_img2,car_img3,car_img4,car_img5,car_img6,main_price,add_car_date) values('${d.car_name}','${d.car_type}','${d.car_fuel_type}','${d.car_seats}','${d.car_trips_count}','${d.car_actual_price}','${d.car_dis}','${d.car_exc_fees}','${car_main_img}','${car_img1}','${car_img2}','${car_img3}','${car_img4}','${car_img5}','${car_img6}','${d.main_price}','${date}')`
    const data = await exe(sql);
    res.redirect("/admin/add_cars_list");
});
route.get("/add_cars_list", async function (req, res) {
    const services_info = await exe(`select * from car_services`);
    const obj = { "services_info": services_info };
    res.render("admin/add_cars_list.ejs", obj);
})
route.get("/edit_service_cars/:id", async function (req, res) {
    var id = req.params.id;
    const services_info = await exe(`SELECT * FROM car_services where car_services_id='${id}'`);
    const obj = { "services_info": services_info }
    res.render("admin/edit_service_cars.ejs", obj);
})

route.post('/update_services_car', async (req, res) => {
    const d = req.body;
    const date = new Date().toISOString().slice(0, 10).split('-').reverse().join('-');
    if (req.files && req.files.car_main_img) {
        var file_name = new Date().getTime() + req.files.car_main_img.name;
        req.files.car_main_img.mv('public/admin/uploads/' + file_name);
        var data = await exe(`update car_services set car_main_img='${file_name}' where car_services_id='${req.body.car_services_id}'`)
    }
    if (req.files && req.files.car_img1) {
        var file_name2 = new Date().getTime() + req.files.car_img1.name;
        req.files.car_img1.mv('public/admin/uploads/' + file_name2);
        var data = await exe(`update car_services set car_img1='${file_name2}' where car_services_id='${req.body.car_services_id}'`)
    }
    if (req.files && req.files.car_img2) {
        var file_name3 = new Date().getTime() + req.files.car_img2.name;
        req.files.car_img2.mv('public/admin/uploads/' + file_name3);
        var data = await exe(`update car_services set car_img2='${file_name3}' where car_services_id='${req.body.car_services_id}'`)
    }
    if (req.files && req.files.car_img3) {
        var file_name4 = new Date().getTime() + req.files.car_img3.name;
        req.files.car_img3.mv('public/admin/uploads/' + file_name4);
        var data = await exe(`update car_services set car_img3='${file_name4}' where car_services_id='${req.body.car_services_id}'`)
    }
    if (req.files && req.files.car_img4) {
        var file_name5 = new Date().getTime() + req.files.car_img4.name;
        req.files.car_img4.mv('public/admin/uploads/' + file_name5);
        var data = await exe(`update car_services set car_img4='${file_name5}' where car_services_id='${req.body.car_services_id}'`)
    }
    if (req.files && req.files.car_img5) {
        var file_name6 = new Date().getTime() + req.files.car_img5.name;
        req.files.car_img5.mv('public/admin/uploads/' + file_name6);
        var data = await exe(`update car_services set car_img5='${file_name6}' where car_services_id='${req.body.car_services_id}'`)
    }
    if (req.files && req.files.car_img6) {
        var file_name7 = new Date().getTime() + req.files.car_img6.name;
        req.files.car_img6.mv('public/admin/uploads/' + file_name7);
        var data = await exe(`update car_services set car_img6='${file_name7}' where car_services_id='${req.body.car_services_id}'`)
    }
    const sql = `
    UPDATE car_services 
    SET 
        car_name='${d.car_name}',
        car_type='${d.car_type}',
        car_fuel_type='${d.car_fuel_type}',
        car_seats='${d.car_seats}',
        car_trips_count='${d.car_trips_count}',
        car_actual_price='${d.car_actual_price}',
        car_dis='${d.car_dis}',
        car_exc_fees='${d.car_exc_fees}',
        main_price='${d.main_price}',
        add_car_date='${date}'
    WHERE 
        car_services_id='${d.car_services_id}'
`;
    const data2 = await exe(sql);


    res.redirect("/admin/add_cars_list")
})
route.get("/delete_service_cars/:id", async function (req, res) {
    var id = req.params.id;
    const sql = await exe(`delete from car_services where car_services_id='${id}'`);
    res.redirect("/admin/add_cars_list");
});

// -----------Top icon start---------

route.get("/navbar_icon", async function (req, res) {

    var sql = `SELECT * FROM icon`;
    var data = await exe(sql);
    var obj = { "icons": data };
    res.render("admin/navbar_icon.ejs", obj);
});

route.post("/save_icon", async function (req, res) {

    var d = req.body;
    var sql = `INSERT INTO icon(icon_address,icon_mobile,icon_time,icon_linkedin,icon_facebook,icon_whatsapp) VALUES ('${d.icon_address}','${d.icon_mobile}',
    '${d.icon_time}','${d.icon_linkedin}','${d.icon_facebook}','${d.icon_whatsapp}')`;
    var data = await exe(sql);

    // res.send(req.body);
    res.redirect("/admin/navbar_icon");
});

route.get("/icon_edit/:icon_id", async function (req, res) {

    var id = req.params.icon_id;
    var data = await exe(`SELECT * FROM icon WHERE icon_id = '${id}'`);
    var obj = { "iedit": data[0] };
    // res.send(data[0]);


    res.render("admin/edit_icon.ejs", obj);
});

route.post("/update_icon", async function (req, res) {



    var d = req.body;
    var sql = `UPDATE icon SET
    icon_address = '${d.icon_address}',
    icon_mobile = '${d.icon_mobile}', 
     icon_time = '${d.icon_time}',
      icon_linkedin = '${d.icon_linkedin}',
       icon_facebook = '${d.icon_facebook}',
       icon_whatsapp = '${d.icon_whatsapp}' WHERE icon_id  = '${d.icon_id}'`;
    var data = await exe(sql);
    // res.send(data);

    res.redirect("/admin/navbar_icon");


});

route.get("/icon_delete/:icon_id",async function(req,res){

    var id  = req.params.icon_id;
    var data = await exe(`DELETE FROM icon WHERE icon_id = '${id}'`);
    // res.send(data);
    res.redirect("/admin/navbar_icon");
})

// ----------Top icon end--------

// image slider start 

route.get("/image_slider",async function(req,res){

   var sql = `SELECT * FROM image_slider`;
   var data = await exe(sql);
   var obj = {"slider":data}

    res.render("admin/image_slider.ejs",obj);
});

route.post("/save_slider",async function(req,res){
    
    // var new_file = new Date().getTime()+req.files.home_image.name;
    // req.files.home_image.mv("public/admin/uploads/"+new_file);
    // req.body.home_image= new_file;

    var d = req.body; 
    var sql = `INSERT INTO image_slider(home_image, home_title , home_sub_title) VALUES ('${d.home_image}','${d.home_title}','${d.home_sub_title}')`;
    var data = await exe(sql);

    // res.send(req.files);
    res.redirect("/admin/image_slider");
});

route.get("/edit_slider/:image_id",async function(req,res){

    var id = req.params.image_id;
    var data = await exe(`SELECT * FROM image_slider WHERE image_id = '${id}'`);
    var obj = {"slider":data[0]};
    res.render("admin/edit_slider.ejs",obj);
});

route.post("/edit_slider",async function(req,res){

    var d =req.body;
    var sql =  `UPDATE image_slider SET home_title = '${d.home_title}', home_sub_title = '${d.home_sub_title}' WHERE image_id = '${d.image_id}'`;
    var data = await exe(sql);
    // res.send(data);
    res.redirect("/admin/image_slider");
})

route.get("/delete_slider/:image_id",async function(req,res){

    var id = req.params.image_id;
    var data = await exe(`DELETE FROM image_slider WHERE image_id = '${id}'`);
    // res.send("deleted");
    res.redirect("/admin/image_slider");

})
// image slider end

// offer first start 
route.get("/offer_first",async function(req,res){


   

    
    var sql = `SELECT * FROM offer_first`;
    var data  = await exe(sql);
    var obj  = {"offer1":data};
    res.render("admin/offer_first.ejs",obj);

});

route.post("/save_offer_first",async function(req,res){

    var new_file1 = new Date().getTime()+req.files.offer1_image1.name;
    req.files.offer1_image1.mv("public/admin/uploads/"+new_file1);
    req.body.offer1_image1 = new_file1;

    var new_file2 = new Date().getTime()+req.files.offer1_image2.name;
    req.files.offer1_image2.mv("public/admin/uploads/"+new_file2);
    req.body.offer1_image2 = new_file2;


    var new_file3 = new Date().getTime()+req.files.offer1_image3.name;
    req.files.offer1_image3.mv("public/admin/uploads/"+new_file3);
    req.body.offer1_image3 = new_file3;

    // if (req.files && req.files.offer1_image1) {
    //     var new_file1 = new Date().getTime() + req.files.offer1_image1.name;
    //     req.files.car_img4.mv('public/admin/uploads/' + file_name1);
    // }

    var d = req.body;
    var sql = `INSERT INTO offer_first(offer1_sub_title1,offer1_title1,offer1_discount1,offer1_sub_title2,
     offer1_title2,offer1_discount2,offer1_sub_title3,offer1_title3,offer1_discount3,offer1_image1,
     offer1_image2,offer1_image3) VALUES
      ('${d.offer1_sub_title1}','${d.offer1_title1}',
    '${d.offer1_discount1}','${d.offer1_sub_title2}',
    '${d.offer1_title2}','${d.offer1_discount2}',
    '${d.offer1_sub_title3}','${d.offer1_title3}','${d.offer1_discount3}','${new_file1}',
    '${new_file2}','${new_file3}')`;
    var data = await exe(sql);
    res.redirect("/admin/offer_first");
  
    // res.send(req.files);
    // res.send(req.body);
});
// offer first end

// offer second start --------


route.get("/offer_second",async function(req,res){

    var sql = `SELECT * FROM offer_second`;
    var data = await exe(sql);
    var obj = {"offer2":data};

    res.render("admin/offer2_second.ejs",obj);
    // res.send("executed");
});

route.post("/save_second_offer",async function(req,res){

    var d = req.body;
    var sql = `INSERT INTO offer_second(offer2_head,offer2_title,offer2_desc,offer2_price,offer2_duplicate) VALUES 
    ('${d.offer2_head}','${d.offer2_title}','${d.offer2_desc}','${d.offer2_price}','${d.offer2_duplicate}')`;
    var data = await exe(sql);
    // res.send(req.body);
    res.redirect("/admin/offer_second");
});

route.get("/edit_offer2/:offer_second_id",async function(req,res){


    var id = req.params.offer_second_id;
    var data = await exe(`SELECT * FROM offer_second WHERE offer_second_id = '${id}'`);
    var obj = {"offer2":data[0]};
    // res.send("executed");
    res.render("admin/offer2_edit.ejs",obj)
});

route.post("/save_offer2_edit",async function(req,res){

    var d = req.body;
    var sql = `UPDATE offer_second SET offer2_head = '${d.offer2_head}', offer2_title = '${d.offer2_title}', offer2_desc = '${d.offer2_desc}', offer2_price = '${d.offer2_price}', offer2_duplicate = '${d.offer2_duplicate}'  WHERE offer_second_id = '${d.offer_second_id}'`;
    var data = await exe(sql);
    // res.send(data);
    res.redirect("/admin/offer_second");
});

route.get("/delete_offer2/:offer_second_id",async function(req,res){
    
    var id = req.params.offer_second_id;
    var data = await exe(`DELETE FROM offer_second WHERE offer_second_id = '${id}'  `);
    // res.send("deleted");
    res.redirect("/admin/offer_second");
});

// --------offer third end--------


// ---------offer third start ----------

route.get("/offer_third",async function(req,res){

    var sql = `SELECT * FROM offer_third`;
    var data = await exe(sql);
    var obj = {"offer3":data}
    res.render("admin/offer3_third.ejs",obj);
});

route.post("/save_offer_third",async function(req,res){

    var new_file = new Date().getTime()+req.files.offer3_upload.name;
    req.files.offer3_upload.mv("public/admin/uploads/"+new_file);
    req.body.offer3_upload = new_file;

    var d = req.body;
    var sql =  `INSERT INTO offer_third(offer3_avai_date,offer3_expi_date,offer3_title,offer3_discount,offer3_upload) VALUES 
    ('${d.offer3_avai_date}','${d.offer3_expi_date}','${d.offer3_title}','${d.offer3_discount}','${new_file}')`;
    var data  = await exe(sql);

    // res.send(req.body);
    res.redirect("/admin/offer_third");
});
// -------------- Offer third end ----------

// ------------ contact us start --------

route.get("/contactus",async function(req,res){

    var data = await exe(`SELECT * FROM contactus`);
    var obj = {"contact":data}
    res.render("admin/contactpage.ejs",obj);
});

route.get("/delete_contact/:contact_id",async function(req,res){

    var id = req.params.contact_id;
    var data = await exe(`DELETE FROM contactus WHERE contact_id = '${id}'`);
    res.redirect("/admin/contactus");
    // res.send("contact deelted");
});
// ------------ contact us end --------

module.exports = route;

