-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 18, 2024 at 09:40 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `car_rental`
--

-- --------------------------------------------------------

--
-- Table structure for table `car_services`
--

CREATE TABLE `car_services` (
  `car_services_id` int(11) NOT NULL,
  `car_name` text DEFAULT NULL,
  `car_type` text DEFAULT NULL,
  `car_fuel_type` text DEFAULT NULL,
  `car_seats` text DEFAULT NULL,
  `car_trips_count` text DEFAULT NULL,
  `car_actual_price` text DEFAULT NULL,
  `car_dis` text DEFAULT NULL,
  `car_exc_fees` text DEFAULT NULL,
  `car_main_img` text DEFAULT NULL,
  `car_img1` text DEFAULT NULL,
  `car_img2` text DEFAULT NULL,
  `car_img3` text DEFAULT NULL,
  `car_img4` text DEFAULT NULL,
  `car_img5` text DEFAULT NULL,
  `car_img6` text DEFAULT NULL,
  `main_price` text DEFAULT NULL,
  `add_car_date` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `car_services`
--

INSERT INTO `car_services` (`car_services_id`, `car_name`, `car_type`, `car_fuel_type`, `car_seats`, `car_trips_count`, `car_actual_price`, `car_dis`, `car_exc_fees`, `car_main_img`, `car_img1`, `car_img2`, `car_img3`, `car_img4`, `car_img5`, `car_img6`, `main_price`, `add_car_date`) VALUES
(8, 'Thar1', 'Manual', 'Petrol', '11', '1001', '1001', '15', '5', '1718866850071.png', '1718865297578.png', '1718865898732.png', '1718865946739.png', '1718867030896.png', '1718868860247.png', '1718866890201.png', '850.85', '20-06-2024'),
(9, 'Fourtuner', 'Manual', 'Diesel', '7', '2', '1200', '10', '12', '1718873194155.png', '1718873140876.png', '1718873140876.png', '1718873140876.png', '1718873140876.png', '1718873140876.png', '1718873140876.png', '1080.00', '20-06-2024'),
(11, 'BMW', 'Automatic', 'Diesel', '3', '3', '12', '10', '12', '1718873711673.png', '1718873711674.png', '1718873711675.png', '1718873711675.png', '1718873711675.png', '1718873711675.png', '1718873711675.png', '10.80', '20-06-2024'),
(12, 'Fourtuner', 'Manual', 'Petrol', '10', '3', '1000', '100', '012', '1718874984746download.jpeg', '1718874984762bmw-6359790_1280.jpg', '17188749847711618229290_2021-mahindra-thar.avif', '1718874984779360_F_420384111_5fzxWlWxvB7bg5BROxfKdBbgBYB2TwGP.jpg', '1718874984783bmw-6359790_1280.jpg', '17188750269042.jpg', '1718874984796IMG_20240206_112201_edited.jpg', '0.00', '20-06-2024'),
(13, 'Kia Car', 'Manual', 'Petrol', '5', '', '1000', '25', '100', '1718889504644main.jpg', '17188895046541623075212_automotive-kia-seltos-advanced-innovation-trends.webp', '1718889504654Kia-Sonet-170120241328.jpg', '1718889504654images (1).jpeg', '1718889504654Kia-Sonet-170120241328.jpg', '1718889504654main.jpg', '1718889504654Kia-Sonet-170120241328.jpg', '750.00', '20-06-2024');

-- --------------------------------------------------------

--
-- Table structure for table `contactus`
--

CREATE TABLE `contactus` (
  `contact_id` int(11) NOT NULL,
  `name` text DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `mobile` int(11) DEFAULT NULL,
  `message` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contactus`
--

INSERT INTO `contactus` (`contact_id`, `name`, `email`, `mobile`, `message`) VALUES
(1, 'Viraj Dhakne', 'viraj@gmail.com', 2147483647, 'Unable to book car services'),
(2, 'Viraj Dhakne', 'viraj@gmail.com', 2147483647, 'Unable to book car services'),
(3, 'Viraj Dhakne', 'viraj@gmail.com', 2147483647, 'Unable to book car services');

-- --------------------------------------------------------

--
-- Table structure for table `icon`
--

CREATE TABLE `icon` (
  `icon_id` int(11) NOT NULL,
  `icon_address` text DEFAULT NULL,
  `icon_mobile` text DEFAULT NULL,
  `icon_time` text DEFAULT NULL,
  `icon_linkedin` text DEFAULT NULL,
  `icon_facebook` text DEFAULT NULL,
  `icon_whatsapp` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `icon`
--

INSERT INTO `icon` (`icon_id`, `icon_address`, `icon_mobile`, `icon_time`, `icon_linkedin`, `icon_facebook`, `icon_whatsapp`) VALUES
(1, '303/2,Savedi,Ahmednagar', '+0241 451299', 'Mon-Sat 09.00-17.00', 'https://www.linkedin.com/in/harshbaid24/', 'https://www.linkedin.com/in/harshbaid24/', 'https://www.linkedin.com/in/harshbaid24/');

-- --------------------------------------------------------

--
-- Table structure for table `image_slider`
--

CREATE TABLE `image_slider` (
  `image_id` int(11) NOT NULL,
  `home_image` text DEFAULT NULL,
  `home_title` varchar(200) DEFAULT NULL,
  `home_sub_title` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `image_slider`
--

INSERT INTO `image_slider` (`image_id`, `home_image`, `home_title`, `home_sub_title`) VALUES
(1, '1719235636150pexels-adrian-dorobantu-989175-2127733.jpg', '37% Off Book your ride now', 'Save up 2200 rupess on best ride at myride car services hurry up ');

-- --------------------------------------------------------

--
-- Table structure for table `offer_first`
--

CREATE TABLE `offer_first` (
  `offer1_id` int(11) NOT NULL,
  `offer1_sub_title1` text DEFAULT NULL,
  `offer1_title1` text DEFAULT NULL,
  `offer1_discount1` text DEFAULT NULL,
  `offer1_sub_title2` text DEFAULT NULL,
  `offer1_title2` text DEFAULT NULL,
  `offer1_discount2` text DEFAULT NULL,
  `offer1_sub_title3` text DEFAULT NULL,
  `offer1_title3` text DEFAULT NULL,
  `offer1_discount3` text DEFAULT NULL,
  `offer1_image1` text DEFAULT NULL,
  `offer1_image2` text DEFAULT NULL,
  `offer1_image3` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `offer_first`
--

INSERT INTO `offer_first` (`offer1_id`, `offer1_sub_title1`, `offer1_title1`, `offer1_discount1`, `offer1_sub_title2`, `offer1_title2`, `offer1_discount2`, `offer1_sub_title3`, `offer1_title3`, `offer1_discount3`, `offer1_image1`, `offer1_image2`, `offer1_image3`) VALUES
(1, 'xuv 500', 'Our Tranding car ', '45% Off', 'Crysta Innova', 'Most selling car', '33% Off', 'Kia Seltos', 'Customers Favorite Car', '28% Off', '1719336720496xuv500.webp', '1719336720496innova.webp', '1719336720496selto.webp');

-- --------------------------------------------------------

--
-- Table structure for table `offer_second`
--

CREATE TABLE `offer_second` (
  `offer_second_id` int(11) NOT NULL,
  `offer2_head` text DEFAULT NULL,
  `offer2_title` text DEFAULT NULL,
  `offer2_desc` text DEFAULT NULL,
  `offer2_price` int(11) DEFAULT NULL,
  `offer2_duplicate` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `offer_second`
--

INSERT INTO `offer_second` (`offer_second_id`, `offer2_head`, `offer2_title`, `offer2_desc`, `offer2_price`, `offer2_duplicate`) VALUES
(3, 'DEAL OF DAY', 'Book now and make your journey fruitfull', 'Myrental services offer a wide range of cars hurry up and book our most trending car', 800, 1350);

-- --------------------------------------------------------

--
-- Table structure for table `offer_third`
--

CREATE TABLE `offer_third` (
  `offer_third_id` int(11) NOT NULL,
  `offer3_avai_date` date DEFAULT NULL,
  `offer3_expi_date` date DEFAULT NULL,
  `offer3_title` text DEFAULT NULL,
  `offer3_discount` int(11) DEFAULT NULL,
  `offer3_upload` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `offer_third`
--

INSERT INTO `offer_third` (`offer_third_id`, `offer3_avai_date`, `offer3_expi_date`, `offer3_title`, `offer3_discount`, `offer3_upload`) VALUES
(1, '2024-06-26', '2024-06-26', 'Customers favorite Creta', 720, '1719392940573renault-triber.avif'),
(2, '2024-06-26', '2024-06-26', 'Customers favorite Creta', 680, '1719393656586c.jfif');

-- --------------------------------------------------------

--
-- Table structure for table `pickup_data`
--

CREATE TABLE `pickup_data` (
  `pickup_id` int(11) NOT NULL,
  `pickup_location` text DEFAULT NULL,
  `pickup_pick` time DEFAULT NULL,
  `pickup_drop` time DEFAULT NULL,
  `pickup_date` date DEFAULT NULL,
  `pickup_drop_date` date DEFAULT NULL,
  `rent_minute` text NOT NULL,
  `user_id` int(11) NOT NULL,
  `transaction_id` int(11) NOT NULL,
  `order_status` text NOT NULL,
  `order_id` int(11) NOT NULL,
  `car_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pickup_data`
--

INSERT INTO `pickup_data` (`pickup_id`, `pickup_location`, `pickup_pick`, `pickup_drop`, `pickup_date`, `pickup_drop_date`, `rent_minute`, `user_id`, `transaction_id`, `order_status`, `order_id`, `car_id`) VALUES
(27, 'Gurgaon', '01:00:00', '03:00:00', '2024-01-01', '2024-01-01', '120', 0, 0, '', 0, 0),
(29, 'Banglore ', '01:00:00', '01:00:00', '2024-01-01', '2024-02-01', '44640', 1, 0, '', 0, 0),
(32, 'Bangalore', '01:00:00', '06:00:00', '2024-01-01', '2024-01-01', '300', 2, 0, '', 0, 11);

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE `registration` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(100) DEFAULT NULL,
  `user_email` varchar(100) DEFAULT NULL,
  `user_mobile` varchar(15) DEFAULT NULL,
  `user_aadhar` varchar(50) DEFAULT NULL,
  `user_password` varchar(20) DEFAULT NULL,
  `gender` text DEFAULT NULL,
  `user_address` text DEFAULT NULL,
  `user_country` text DEFAULT NULL,
  `user_city` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` (`user_id`, `user_name`, `user_email`, `user_mobile`, `user_aadhar`, `user_password`, `gender`, `user_address`, `user_country`, `user_city`) VALUES
(1, 'Harsh Baid', 'harsh@gmail.com', '9876543210', '402170486586', '123456', 'Male', 'EME COLONEY BHINGAR\r\nBHINGAR AHMEDNAGAR', 'India', 'AHMEDNAGAR'),
(2, 'viraj dhakne', 'viraj@gmail.com', '123456789', '987698769876', '123456', 'Male', 'EME COLONEY BHINGAR\r\nBHINGAR AHMEDNAGAR', 'India', 'AHMEDNAGAR');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `car_services`
--
ALTER TABLE `car_services`
  ADD PRIMARY KEY (`car_services_id`);

--
-- Indexes for table `contactus`
--
ALTER TABLE `contactus`
  ADD PRIMARY KEY (`contact_id`);

--
-- Indexes for table `icon`
--
ALTER TABLE `icon`
  ADD PRIMARY KEY (`icon_id`);

--
-- Indexes for table `image_slider`
--
ALTER TABLE `image_slider`
  ADD PRIMARY KEY (`image_id`);

--
-- Indexes for table `offer_first`
--
ALTER TABLE `offer_first`
  ADD PRIMARY KEY (`offer1_id`);

--
-- Indexes for table `offer_second`
--
ALTER TABLE `offer_second`
  ADD PRIMARY KEY (`offer_second_id`);

--
-- Indexes for table `offer_third`
--
ALTER TABLE `offer_third`
  ADD PRIMARY KEY (`offer_third_id`);

--
-- Indexes for table `pickup_data`
--
ALTER TABLE `pickup_data`
  ADD PRIMARY KEY (`pickup_id`);

--
-- Indexes for table `registration`
--
ALTER TABLE `registration`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `car_services`
--
ALTER TABLE `car_services`
  MODIFY `car_services_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `contactus`
--
ALTER TABLE `contactus`
  MODIFY `contact_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `icon`
--
ALTER TABLE `icon`
  MODIFY `icon_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `image_slider`
--
ALTER TABLE `image_slider`
  MODIFY `image_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `offer_first`
--
ALTER TABLE `offer_first`
  MODIFY `offer1_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `offer_second`
--
ALTER TABLE `offer_second`
  MODIFY `offer_second_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `offer_third`
--
ALTER TABLE `offer_third`
  MODIFY `offer_third_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `pickup_data`
--
ALTER TABLE `pickup_data`
  MODIFY `pickup_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `registration`
--
ALTER TABLE `registration`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
