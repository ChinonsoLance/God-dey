-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 10, 2024 at 11:53 PM
-- Server version: 8.0.37-cll-lve
-- PHP Version: 8.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pictora3_newart`
--

-- --------------------------------------------------------

--
-- Table structure for table `arts`
--

CREATE TABLE `arts` (
  `id` int NOT NULL,
  `user_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `owner` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `name` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `size` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `price` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `file` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `status` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'pending'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `arts`
--

INSERT INTO `arts` (`id`, `user_id`, `owner`, `name`, `size`, `price`, `description`, `file`, `status`) VALUES
(260, '0x4Ee311D1ce96668B5386cdC50f300efCC2ACC8A0', '0x4Ee311D1ce96668B5386cdC50f300efCC2ACC8A0', 'Nature', '', '1', 'Nature as it\'s ever green', 'assets/Screenshot_20240705-092525_Instagram.jpg', 'approved'),
(261, '0xa010e06deA7d119090a6C5c670824d62Fc94b5eb', '0xa010e06deA7d119090a6C5c670824d62Fc94b5eb', 'Tranquil Grove ', '', '1', '', 'assets/Screenshot_2024-05-19-20-22-51-676_com.miui.gallery.jpg', 'approved'),
(262, '0xa010e06deA7d119090a6C5c670824d62Fc94b5eb', '0xa010e06deA7d119090a6C5c670824d62Fc94b5eb', 'Avian Assembly ', '', '2', '', 'assets/Screenshot_2024-05-19-20-22-48-144_com.miui.gallery.jpg', 'approved'),
(263, '0xa010e06deA7d119090a6C5c670824d62Fc94b5eb', '0xa010e06deA7d119090a6C5c670824d62Fc94b5eb', 'Azure Tresses of Creativity ', '', '3', '', 'assets/Screenshot_2024-05-19-20-22-45-013_com.miui.gallery.jpg', 'approved'),
(264, '0xa010e06deA7d119090a6C5c670824d62Fc94b5eb', '0xa010e06deA7d119090a6C5c670824d62Fc94b5eb', 'Floral symphony in white', '', '1', '', 'assets/Screenshot_2024-05-19-20-22-35-595_com.miui.gallery.jpg', 'approved'),
(265, '0xa010e06deA7d119090a6C5c670824d62Fc94b5eb', '0xa010e06deA7d119090a6C5c670824d62Fc94b5eb', 'Wall wood wonder ', '', '1', '', 'assets/Screenshot_2024-05-19-20-22-18-531_com.miui.gallery.jpg', 'approved'),
(266, '0xa010e06deA7d119090a6C5c670824d62Fc94b5eb', '0xa010e06deA7d119090a6C5c670824d62Fc94b5eb', 'Floral Harmony', '', '2', '', 'assets/Screenshot_2024-05-19-20-21-43-628_com.miui.gallery.jpg', 'approved'),
(267, '0xa010e06deA7d119090a6C5c670824d62Fc94b5eb', '0xa010e06deA7d119090a6C5c670824d62Fc94b5eb', 'Chaos Unleashed ', '', '2', '', 'assets/IMG_20240117_163001.jpg', 'approved'),
(268, '0x947f762E63F1452CCD7C4eC0121865cB87bABe82', '0x947f762E63F1452CCD7C4eC0121865cB87bABe82', 'Caitlin McNamara mathus Banu ', '60x60 ', '1', '', 'assets/IMG_4222.jpeg', 'approved'),
(284, '0x2f5A9850C4Fc0B6eA47E452aD2095dA309816df6', '0x2f5A9850C4Fc0B6eA47E452aD2095dA309816df6', 'Painting on the wall Exhibit II', '60', '1', 'NFT', 'assets/IMG_2287.jpeg', 'approved'),
(285, '0x2f5A9850C4Fc0B6eA47E452aD2095dA309816df6', '0x2f5A9850C4Fc0B6eA47E452aD2095dA309816df6', 'To my heart Exhibits II', '60', '1', 'NFT', 'assets/IMG_1156.jpeg', 'approved'),
(286, '0x2f5A9850C4Fc0B6eA47E452aD2095dA309816df6', '0x2f5A9850C4Fc0B6eA47E452aD2095dA309816df6', 'le guerrier dansant', '60', '1', 'NFT', 'assets/IMG_0591.jpeg', 'approved'),
(287, '0x2f5A9850C4Fc0B6eA47E452aD2095dA309816df6', '0x2f5A9850C4Fc0B6eA47E452aD2095dA309816df6', 'La route vers le paradis II', '60', '1', 'NFT', 'assets/IMG_2283.jpeg', 'approved'),
(288, '0x2f5A9850C4Fc0B6eA47E452aD2095dA309816df6', '0x2f5A9850C4Fc0B6eA47E452aD2095dA309816df6', 'chiot II', '60', '1', 'NFT', 'assets/IMG_2290.jpeg', 'approved'),
(293, '0x2f5A9850C4Fc0B6eA47E452aD2095dA309816df6', '0x3688770B3D540DF3088F50D2f4B6fE248Ba9E81b', 'Le dos nu au pantalon ', '60', '1', 'Fait aux Pastel ', 'assets/1000005791.jpg', 'approved'),
(294, '0x2f5A9850C4Fc0B6eA47E452aD2095dA309816df6', '0x3688770B3D540DF3088F50D2f4B6fE248Ba9E81b', 'L église en pierre', '60', '1', 'Fait à l aquarelle ', 'assets/1000005790.jpg', 'approved'),
(304, '0xa3A23DBE1009B66B51A435f494995c9bf0bEd191', '  0xD07ABB592AE4930E73f057067201f24d1EB19F67', 'Angelo Giglio 1', '', '1', 'Dipinto ad olio su tela realizzato a mano dal pittore Angelo Giglio, pezzo unico .  Angelo Giglio. Autodidatta, nasce a Caltagirone nel 1968, dove vive ed opera. Già dal 1990 si propone con le prime partecipazioni a mostre collettive e concorsi. In seguito allestisce mostre personali in Italia e all\'estero, consolidando la sua carriera artistica con ottimo riscontro da parte del pubblico.', 'assets/20220907_125204.jpg', 'approved'),
(306, '0xa3A23DBE1009B66B51A435f494995c9bf0bEd191', '0x2f5A9850C4Fc0B6eA47E452aD2095dA309816df6', 'Blue path IJ', '60', '1', 'NFT', 'assets/IMG_0408.jpeg', 'approved'),
(315, '0x71C7656EC7ab88b098defB751B7401B5f6d8976F', '0xc801eAD5bB44eEA07Be77B26Cbd9e40FD5E8b0Dc', 'The Uncanny Beast', '60x60', '2', 'The Uncanny Beast is a black-and-white pen drawing of a Frankenstein-like figure, featuring a stitched forehead and closed eyes. Its cross-hatching creates depth, blending serene and eerie elements, appealing to gothic and horror art collectors.', 'assets/frankenstein art.jpeg', 'approved'),
(318, '0xa3A23DBE1009B66B51A435f494995c9bf0bEd191', '0x0aa0D7de04cE57390CD10629948B7bF880d16A26', 'why do I cry', '40x40', '1', 'Acrylic on canvas, ', 'assets/IMG_20191211_103700.jpg', 'approved'),
(319, '0x71C7656EC7ab88b098defB751B7401B5f6d8976F', '0xc801eAD5bB44eEA07Be77B26Cbd9e40FD5E8b0Dc', 'Golden Glow', '60x60', '2', 'This painting, titled Golden Glow, showcases a woman in peaceful reflection, with vibrant colors and smooth golden tones. Her serene expression and bold headwrap make it a captivating piece, perfect for adding warmth and elegance to any space.', 'assets/girl art.jpeg', 'approved'),
(330, '0x71C7656EC7ab88b098defB751B7401B5f6d8976F', '0xc801eAD5bB44eEA07Be77B26Cbd9e40FD5E8b0Dc', 'Shadows of Time', '60x60', '2', 'An evocative play of light and shadow, this abstract piece captures the fleeting nature of time through a dynamic spray-paint technique, offering a sense of mystery and depth.', 'assets/abstracto.jpeg', 'approved'),
(331, '0xc801eAD5bB44eEA07Be77B26Cbd9e40FD5E8b0Dc', '0xc801eAD5bB44eEA07Be77B26Cbd9e40FD5E8b0Dc', 'Shadows of Time', '60x60', '2', 'An evocative play of light and shadow, this abstract piece captures the fleeting nature of time through a dynamic spray-paint technique, offering a sense of mystery and depth.', 'assets/abstracto.jpeg', 'pending'),
(332, '0xFAa684AAD952616c0ae0368D4c7811d8F9345802', '0xFAa684AAD952616c0ae0368D4c7811d8F9345802', 'Wandee', '21×29.7', '0.1', 'Pen on paper', 'assets/FB_IMG_1728140178999.jpg', 'pending'),
(333, '0xFAa684AAD952616c0ae0368D4c7811d8F9345802', '0xFAa684AAD952616c0ae0368D4c7811d8F9345802', 'Wandee', '21×29.7', '0.1', 'Pen on paper.', 'assets/FB_IMG_1728140178999.jpg', 'pending'),
(334, '0xFAa684AAD952616c0ae0368D4c7811d8F9345802', '0xFAa684AAD952616c0ae0368D4c7811d8F9345802', 'Wandee', '21×29.7', '0.1', 'Pen on paper', 'assets/FB_IMG_1728025566557.jpg', 'pending'),
(335, '0xFAa684AAD952616c0ae0368D4c7811d8F9345802', '0xFAa684AAD952616c0ae0368D4c7811d8F9345802', 'Wandee', '21×29.7', '0.1', 'Pen on paper', 'assets/FB_IMG_1728025430983.jpg', 'pending');

-- --------------------------------------------------------

--
-- Table structure for table `bids`
--

CREATE TABLE `bids` (
  `id` int NOT NULL,
  `from` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `to` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `amount` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `art` int NOT NULL,
  `status` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'approved',
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bids`
--

INSERT INTO `bids` (`id`, `from`, `to`, `amount`, `art`, `status`, `date`) VALUES
(5, '0x2f5A9850C4Fc0B6eA47E452aD2095dA309816df6', '0x3688770B3D540DF3088F50D2f4B6fE248Ba9E81b', '1', 294, 'approved', '2024-09-16 19:36:43'),
(6, '0x2f5A9850C4Fc0B6eA47E452aD2095dA309816df6', '0x3688770B3D540DF3088F50D2f4B6fE248Ba9E81b', '1', 293, 'approved', '2024-09-16 19:37:02'),
(7, '0xa3A23DBE1009B66B51A435f494995c9bf0bEd191', '  0xD07ABB592AE4930E73f057067201f24d1EB19F67', '1', 304, 'approved', '2024-09-29 18:04:57'),
(8, '0xa3A23DBE1009B66B51A435f494995c9bf0bEd191', '0x2f5A9850C4Fc0B6eA47E452aD2095dA309816df6', '1', 306, 'approved', '2024-09-29 19:44:27'),
(9, '0x71C7656EC7ab88b098defB751B7401B5f6d8976F', '0xc801eAD5bB44eEA07Be77B26Cbd9e40FD5E8b0Dc', '2', 315, 'approved', '2024-10-04 17:16:36'),
(10, '0xa3A23DBE1009B66B51A435f494995c9bf0bEd191', '0x0aa0D7de04cE57390CD10629948B7bF880d16A26', '1', 318, 'approved', '2024-10-06 19:18:49'),
(11, '0x71C7656EC7ab88b098defB751B7401B5f6d8976F', '0xc801eAD5bB44eEA07Be77B26Cbd9e40FD5E8b0Dc', '2', 319, 'approved', '2024-10-06 19:43:53'),
(12, '0x71C7656EC7ab88b098defB751B7401B5f6d8976F', '0xc801eAD5bB44eEA07Be77B26Cbd9e40FD5E8b0Dc', '2', 330, 'approved', '2024-10-08 22:03:06');

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id` int NOT NULL,
  `mint_fee` double NOT NULL,
  `withdrawal_fee` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `withdrawal_limit` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`id`, `mint_fee`, `withdrawal_fee`, `withdrawal_limit`) VALUES
(1, 0.1, '0.039', '2');

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` int NOT NULL,
  `user_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `amount` double NOT NULL,
  `status` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'pending',
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`id`, `user_id`, `amount`, `status`, `date`) VALUES
(39, '0x0aa0D7de04cE57390CD10629948B7bF880d16A26', 0.1, 'pending', '2024-10-06 19:02:09');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `first_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `last_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `balance` double NOT NULL DEFAULT '0',
  `url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `image` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '@assets/avatar_placeholder.webp',
  `wallet` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `bio` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `phone` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `withdrawal_limit` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `first_name`, `last_name`, `password`, `balance`, `url`, `image`, `wallet`, `email`, `bio`, `phone`, `withdrawal_limit`) VALUES
(1, 'admin', 'vic', 'Okeke', '$2y$10$gQMfIYM7liYmNO29uehdke40OFxvEIa7PuusH1bBrmNkg72MbSoa.', 0.5, 'https://instagram.com', 'assets/john-cameron--_5IRj1F2rY-unsplash (1).jpg', '0x0c166dbCc0F4f382f142594BD2fFA32cca76c644', 'info@pictorallab.com', 'your favourite software developer', '+2348118552122', '0'),
(127, 'Rock09', 'Jeffrey', 'Rock ', '$2y$10$Z./teVK5ezC33PXmXxMQD.HVKc9A8ExE15qEMU7Jc1aKU/UMZHB4O', 40, 'https://www.tiktok.com/@jeffrey_rock09?_t=8pDxuvRaoYI&_r=1', 'assets/IMG_20240514_195039.jpg', '0xa010e06deA7d119090a6C5c670824d62Fc94b5eb', 'rockjeffrey09@gmail.com', NULL, NULL, '0'),
(128, 'evelyn', 'Evelyn', 'Maya', '$2y$10$jdYxOgprAU3alGcF5PDjTussoykkX4JY1aRq1yMgYEF5Fun5ijBhC', 0, 'httsp://twitter.com/evelyn', 'assets/Bitcoin1.png', 'Los angeles', 'evelynmaya582@gmail.com', NULL, NULL, '0'),
(129, 'Catherina', 'Catherine ', 'Morales', '$2y$10$bxP6ySXtFUExpzScsjasPOd31OImhawbUAbYK7uCxmkKS/bmJ37S6', 0, 'https://www.instagram.com/anneball135tsx?igsh=NjNyYnNzbXQyczVu', 'assets/Screenshot_20240827103443.jpg', '0x4Ee311D1ce96668B5386cdC50f300efCC2ACC8A0', 'catherinacharles34@gmail.com', NULL, NULL, '0'),
(130, 'Aurora', 'Aurora', 'Barkley', '$2y$10$XzUIL6i5x.xp/ZDa3QX2Iui9eMLh7aCl1gvZ70eGFw1MifsHfAWj6', 0, 'https://www.facebook.com/daniella.rudolf.5?mibextid=LQQJ4d', 'assets/IMG_1302.jpeg', '0x49b68BE8be10eA44002f3ca733FF1bDE1388d9E8', 'penelopebaker0@gmail.com', NULL, NULL, '0'),
(131, 'ruth79 ', 'Ruth', 'Anandaraj', '$2y$10$upyjDlfMCOU0868kbraEOu./DDd1W0Mj/OZwkjkKJ/cqpsHLsh432', 0, '', 'assets/IMG_1580.jpeg', 'ruth79.cb.id', 'ruth.anandaraj@gmail.com', NULL, NULL, '0'),
(132, 'Caitlin McNamara', 'Caitlin', 'McNamara mathus Banu', '$2y$10$iqyoVVMgmB/uOJgwMxNC8uo50mtFzqMbidQm53z1tILHcsalrxQKO', 30, '', 'assets/IMG_4221.jpeg', '0x947f762E63F1452CCD7C4eC0121865cB87bABe82', 'nnamdivictor509@gmail.com', NULL, NULL, '0'),
(133, 'Jordavar', 'Jordana ', 'Varela ', '$2y$10$XXVTiyWv.EEVP60hInFcZeMB2.8lthFh6YVv5qsUGqRCO2amOShy.', 0, 'https://www.tiktok.com/@jordanavar?_t=8pI44JoBDIE&_r=1', 'assets/852A34CB-E85F-41C7-85D9-C6D3EE6C81AB.jpeg', 'Tegucigalpa Honduras ', 'danavarmeji@yahoo.com', NULL, NULL, '0'),
(134, 'therealsomaa', 'Real', 'Somaa', '$2y$10$P7a/bPxJd1FCMS7RYdS9vOgk2T.gFCiwcWZ3E3ElXP4iXIhSl9tzi', 30, 'https://www.instagram.com/therealsomaa?igsh=YmRjZW1mM3cwbjI0', 'assets/photo_5947496817321165319_x.jpg', '0x0f6fD10c73C5Ab2bBA2085b5858dd4c9f068Ce0D', 'therealsomaa@gmail.com', NULL, NULL, '0'),
(135, 'Mahalakshmi KN', 'Mahalakshmi ', 'KN', '$2y$10$Fw3iO9OtEOD0NeqSxbeo0ugjjxnMlAaqfLyuVBUBgWNbkMb4zFZQe', 0, 'https://www.facebook.com/share/u2V5ZX3qqi9473JL/?mibextid=qi2Omg', 'assets/inbound6757432365413783523.jpg', '0xE69944996De4E372B08Ffa84f37821DbEe730412', 'mahalakshmi011975@gmail.com', NULL, NULL, '0'),
(136, 'ゆりりか', 'ゆりりか', 'ゆりりか', '$2y$10$LJh3Y589MLvvFDGetYuqV.VZBuPN1zcTDgoL6CtZIHiSihvqdpYAW', 0, 'https://lit.link/yuririka', 'assets/無題434_20231028232144.png', '0x838135E06fbd8aaAcd4D1D7f9Dd918A4cac8d6aB', 'yuririka02@gmail.com', NULL, NULL, '0'),
(137, 'Munnypot ', 'Zy', 'Munny ', '$2y$10$l5wKeaHgiJs73MOpdgR9xepF4VoC0C7qYurRK59PtKUonYn4ouAJW', 0, '', 'assets/IMG_5750.jpeg', '0xF80E9b8F74B057b2e54777d0F976Fc0152b69bDA', 'zymunny326@gmail.com', NULL, NULL, '0'),
(138, '', 'Alexandre', 'Franqueira', '$2y$10$9hMNJGx9eyYklu3W6t3dLei1AMU5z8Cmfeh.MEtHLKc3OsmidZwvK', 0, 'https://www.facebook.com/profile.php?id=100063598099779&locale=de_DE', 'assets/IMG_20240827_004528_759.jpg', '', 'isitgrace@naver.com', '', '', '0'),
(139, 'Grace', 'DUNA', 'CHO', '$2y$10$63Ayg72lP.h4oO2i2/fe6.xtMDOifVlIjI/CvQ5yANkTU.OgwU7Fu', 0, '', 'assets/IMG_20221129_035202_406.jpg', '0x60321Be04B08c52DAbded15c2457c9C5BbD3037E', 'dnchokr@gmail.com', NULL, NULL, '0'),
(140, 'alex@alexberg.com', 'Alexander', 'Berg', '$2y$10$pWpK0.PY.SXoeleeLGovIOlV8prEgcR4B39KEp4fbxnBaeax0DBhC', 0, 'https://www.instagram.com/alexander__berg?igsh=MTVxcDBidGcwZ3luNA%3D%3D&utm_source=qr', 'assets/IMG_8555.jpeg', '463 West Street , Suite A1010', 'alex@alexberg.com', NULL, NULL, '0'),
(141, 'Sandibox', 'Septian', 'Reza Sandika', '$2y$10$Gtr9rzUWZMP3QsTZUplELOA2u5Lwvqz3uLvdj/Py4Le6bzn7tmA8C', 0, '', 'assets/IMG_0105.jpeg', '0x31572eA63cCf4BEDFE8fA7bF6ecebCDbC8C7Bc31', 'sandhicagraphic77@gmail.com', NULL, NULL, '0'),
(142, 'Hana ', 'Hanouf ', 'Dahi ', '$2y$10$JcZCzcbap.hRMSUXkaFhAue7G9DaBFQ3BymdAStxvlZXTYANfB27S', 0, 'http://hanouf.hkdhkld', 'assets/77A5E94C-6A1D-454A-B782-1A547BB0ABAF.jpeg', 'Saudi Arabia ', 'h_f_1411@yahoo.com', NULL, NULL, '0'),
(143, 'Apnavinod', 'Vinod ', 'Rathore', '$2y$10$dTpijJ1P19kI8S2o.jIP1OZc6HO7v06NpDQydKp4kuplBuoDuCJ/6', 0, 'https://www.instagram.com/apnavinodarts?igsh=dnFkcW9ocXYyNXBj', 'assets/IMG_20240831_132724.jpg', '0x1f33c6727F95015ff06bbF85e85627EE9Cd516d1', 'apnavinodarts@gmail.com', NULL, NULL, '0'),
(145, 'Bob Heath 1864', 'Bob', 'Heath', '$2y$10$dY3k0zr8mNzX8fnERRq/9uBD7DqKutkl.D98QT3duzOMAsP6lIxMe', 0, 'https://www.bobheath.online/', 'assets/Colossus.jpg', '89 Lytham Road', 'bobartheath@gmail.com', NULL, NULL, '0'),
(146, 'Delazpaint1375_', 'Delaram', 'Safara', '$2y$10$BqL/mTSIroyuOhzEmvs.h.L374rjzwVXrEUyzhXKfbh7fS49.VDfS', 0, 'https://www.instagram.com/delara___design?igsh=cTNjM3B6MGYxNWV4&utm_source=qr', 'assets/IMG_1446.png', '0x12b1146D8E5411F1419446741A41e63d4D224522', 'delaram.painter75@gmail.com', NULL, NULL, '0'),
(147, 'christine46', 'Christine', 'Rodriguez', '$2y$10$oNzaaJ963rcZFKtNEXwdQ.ftts4NHToqnl6er1mM.qrOyWmnnCW0u', 0, '', 'assets/annakalczynskam-26-07-2024-0001.jpeg', '0xA5929fD750E563B92F827B8A47b247EB26F37F08', 'uzyandrew@gmail.com', NULL, NULL, '0'),
(148, 'SandraHills', 'Sandra ', 'Hills', '$2y$10$MpGM91slvXMgq0zUNl81Bu8ZbP9Eiza7OFnvGz2Ja8.38.GnZouPK', 39, 'https://www.facebook.com/profile.php?id=100080503084459&mibextid=LQQJ4d', 'assets/IMG_2595.jpeg', '0x2f5A9850C4Fc0B6eA47E452aD2095dA309816df6', 'Hillssandra70@gmail.com', NULL, NULL, '0'),
(149, 'Nathalie', 'Nathalie ', 'Guidi ', '$2y$10$t2F9lavaK3DKfpq0dMNJVepbUNE.DsnoetFflLvg0K3qqBiLbaUi2', 2, 'https://www.facebook.com/profile.php?id=61559079261484&mibextid=LQQJ4d', 'assets/IMG_2680.jpeg', '0x3688770B3D540DF3088F50D2f4B6fE248Ba9E81b', 'Guidinathalie@hotmail.fr', NULL, NULL, '0'),
(150, 'RavenKeylight', 'Kamil', 'Honisch', '$2y$10$wTgxFuMpgmIe0XYMroeZreu//BJ8ain0aMjRx0WqJFCjTlCL8eLly', 0, '', 'assets/RavenWolf portrait.jpg', '0xA5a1...26Bd', 'keylight@seznam.cz', NULL, NULL, '0'),
(151, 'RavenKeylight', 'Kamil', 'Honisch', '$2y$10$eFvEVOQ5BMQnl79BkYslrOwVesm8TPYgZSbeHMS1HZhUgBauKzeJy', 0, '', 'assets/RavenWolf portrait.jpg', '0xA5a128c31f471983c80efE', 'ravenwolf064@gmail.com', NULL, NULL, '0'),
(152, 'Bayuu', 'Yussuf', 'Yussuf', '$2y$10$VzC4LKvt6K/tuIIAo0LtSe00zuyvKTie.vchWZ6fHCZBAtcKR1SZW', 0, '', 'assets/inbound8309801428454530318.jpg', 'Gizenga St', 'bayuu2000@gmail.com', NULL, NULL, '0'),
(153, '寞影水彩', '苗', '杨', '$2y$10$4k15xub18aj3rvvjGvg9teUk0QOk74TE70cg/WqxyO1blakXN5dZe', 0, '', 'assets/微信图片_20230905230506.jpg', '0x7f2B057B5b2F4562fac97B931E6f498Cf9630705', 'moyingshuicai@outlook.com', NULL, NULL, '0'),
(154, 'Shahid77 ', 'Shahid ', 'Anthani ', '$2y$10$R13k5LMn0lvSBjp1oJt60.nUxVFVFQSNB6DtJr.fVqcQtGp4haTsy', 0, 'https://www.facebook.com/shahid.anthony.96?mibextid=ZbWKwL', 'assets/IMG-20230224-WA0024.jpg', '0x8ac9b8b105117316e3941fbC9218Addf37579e78', 'shahidarch77@gmail.com', NULL, NULL, '0'),
(155, '', 'albert', 'Johnson', '$2y$10$pxKhZK8.jKZx7wAuQhA1HOH.pw9GdRtOkAVaXZAxH5AUYD5hjQBda', 0, '', 'assets/Laughing-Leo.png', '1852 West St', 'albert.json00@gmail.com', NULL, NULL, '0'),
(156, 'Fabro.art', 'Fabricio ', 'Chasipanta', '$2y$10$4i2pBL09Qvjhmzva1FXMX.KD0kB/WfnUu36GEaGefMyhD.Y642fdy', 0, 'https://www.tiktok.com/@fabro.art?_t=8pzkAk9qGXN&_r=1', 'assets/IMG_6646.jpeg', 'fabricio.kevch@gmail.com', 'fabricio.kevf@gmail.com', NULL, NULL, '0'),
(157, '', 'Alexandre', 'Rich', '$2y$10$L1O6D.nx4b2Lcyw/MAWhqe.gl6FDPz5uu0BAq0muFJOD/NBmBKo1m', 0, '', 'assets/994E2DFD-8468-4B15-A6F6-BC0255B859A2.jpeg', '0x00249aaCc08F9e478D55dACa2B86E9B8a5950153', '', NULL, NULL, '0'),
(158, 'angelogiglio', 'angelo', 'giglio spampinato', '$2y$10$TiZI9odQsN7YGzE/ze71.uyjAhXDzaVZWrInhc3yP8cFOV0SiC.xC', 1, '', 'assets/20190615_114342.jpg', '  0xD07ABB592AE4930E73f057067201f24d1EB19F67', 'angelogiglio31@gmail.com', NULL, NULL, '0'),
(159, ' Lisa', 'Lisa', 'Williams', '$2y$10$1EvzQD/ChOC/OXvSgaoJDeCV5h1V.W8zlVvvBT4Z63mhjxOYJztGi', 37, 'https://www.facebook.com/profile.php?id=100083938741258&mibextid=LQQJ4d', 'assets/IMG_1478.jpeg', '0xa3A23DBE1009B66B51A435f494995c9bf0bEd191', 'lisa.will79ams@gmail.com', NULL, NULL, '0'),
(160, 'mhasangujjar7', 'Muhammad Hassan ', 'Gujjar', '$2y$10$x7rr1hVrVY0ZgL04/pkiC.l1HhzQT8RlJ.Y5fJmkSqrSreg/Zg806', 0, 'https://x.com/mhasangujjar7?t=ln5dYd0AnH5old3CpMprIA&s=08', 'assets/WhatsApp Image 2024-09-29 at 12.14.05 PM.jpeg', '  0x65dcec57584Dfd71A293A8C459BCf82b97deEe71', 'mhassangujjar7@gmail.com', NULL, NULL, '0'),
(161, 'Dangerr_artt', 'Sofia', 'Rey', '$2y$10$tJQx2Mp.E9Ya7syTsSEYBODa/LmOTMzufmdLrJGHbL4uK0rMjcC4K', 6, 'https://www.tiktok.com/@dangerr_artt?_t=8oGxtip8EHQ&_r=1', 'assets/Logo con Iniciales de Nombre Sencillo Tipográfico Circular Blanco y Negro (1).png', '0xc801eAD5bB44eEA07Be77B26Cbd9e40FD5E8b0Dc', 'dangerr.artt22@gmail.com', NULL, NULL, '0'),
(162, 'Karik', 'Kari ', 'Kärkiluoma', '$2y$10$C60NVpqrVrjI2PL46rggUus0x4jyOA0EA5x2eVK.oEBtz0VI7w8Oi', 0, '', 'assets/IMG_5715.JPG', 'coinmotion.com', 'psva44@gmail.com', NULL, NULL, '0'),
(163, 'AlexF', 'Alexandre', 'Franqueira', '$2y$10$AJd9PhIsM5gqf680Gez.zOioBuLJl./7TIJzvBhAPmAAjskT5NYPm', 1, 'https://www.facebook.com/profile.php?id=100063598099779&locale=de_DE', 'assets/15774ee798218de3e45c9946ee3645b3.jpg', '0x0aa0D7de04cE57390CD10629948B7bF880d16A26', 'alexandre.frank.68@gmail.com', NULL, NULL, '0'),
(164, 'Wandee', 'Wandee', 'Jinawong', '$2y$10$XtIiB2iE2P56o/NNkScYxep4chTH6L19CrBq49SHHSG.UvdbNtbKi', 0, 'https://www.facebook.com/share/vtoJytzv8D9zWE6c/?mibextid=qi2Omg', 'assets/FB_IMG_1727958324206.jpg', '0x43dB3Cf76E9bEBD0Ab10C5B484e267DCeE4DE786', 'jinToom18.@gmail.com', NULL, NULL, '0'),
(165, 'toom', 'Wandee', 'Jinawong', '$2y$10$m5pByuefI8pzcZJQ2YNIOe0UbwhURnZbiSLc5ZkU1WpeK5w12xKpW', 0, '', 'assets/20241004_193736.jpg', '0xFAa684AAD952616c0ae0368D4c7811d8F9345802', 'jintoom.18@gmail.com', '', '', '0'),
(166, 'Dilsty_Arts', 'Timothy', 'Johnson', '$2y$10$Fn0TIeoCMcwgSw0k76x0CuvndsNWFIT4oFyoRksd0TtnWJmY0PrA2', 0, '', 'assets/994E2DFD-8468-4B15-A6F6-BC0255B859A2.jpeg', '0x634f49051AAD9e99Ae5b78EC0988b7A92E047C3a', 'dilstyninja@gmail.com', NULL, NULL, '0'),
(167, 'laurael', 'Laura', 'El', '$2y$10$EpTNFpR.iGiPxjo3GQjQa.kal/aklqWfXiuTuw7.ini1xvU0OxKru', 34, '', 'assets/IMG_20240822_063206_977.jpg', '0x71C7656EC7ab88b098defB751B7401B5f6d8976F', 'lauraeeth@gmail.com', NULL, NULL, '0'),
(168, 'Jamesreed', 'James', 'Reed', '$2y$10$fHvxvhdsTj9TYVDVEMpzl..HzncO2pKL5Xe5u7ycLPnuEl9s4citu', 0, 'https://www.facebook.com/profile.php?id=100019080111820&mibextid=LQQJ4d', 'assets/4047FEBD-5B02-491A-BA44-CCB37363CD7F.jpeg', 'Cnkkkj', 'mariawilson.mw22@gmail.com', NULL, NULL, '0'),
(169, 'Jm', 'Reed', 'James', '$2y$10$LJYKWYfXIK.LNGuPxgqwkuFfmj.K2cTLxgRNUzKgtU3SxNCaB3FIi', 0, 'https://www.facebook.com/profile.php?id=100019080111820&mibextid=LQQJ4d', 'assets/EC6AEF1C-70A3-470A-98D0-A049569D553B.jpeg', 'Bjkkkbb', 'bramhoekstraa@gmail.com', NULL, NULL, '0'),
(170, 'Di_Ku', 'Di', 'Ku', '$2y$10$5aJHxLRoqVYs11naB4XFJelcrZyRLbbpANMIrSU8PLuS4s7yu9wcq', 0, 'https://www.instagram.com/visual.splendor/', 'assets/Default_Create_an_illustration_depicting_a_mystical_girl_in_an_1.jpg', '0x3F8ADa1F1B040626BDFf12627AC527eA38958B27', 'maori8di@gmail.com', NULL, NULL, '0'),
(171, 'Jaime.barreiro', 'Jaime ', 'Barreiro ', '$2y$10$6lJ1hJUm/ootye7w6EXVSefRBp/Iv85gF1HTlTidF2WfVRevbAqeO', 0, '', 'assets/IMG_0006.png', '0xABacc8DB6Bf237a831d3a9BD68Eb33422ee71AD4', 'jaimebarreirolaredo@gmail.com', NULL, NULL, '0');

-- --------------------------------------------------------

--
-- Table structure for table `withdrawals`
--

CREATE TABLE `withdrawals` (
  `id` int NOT NULL,
  `user_id` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `amount` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `status` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'pending',
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `arts`
--
ALTER TABLE `arts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bids`
--
ALTER TABLE `bids`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `withdrawals`
--
ALTER TABLE `withdrawals`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `arts`
--
ALTER TABLE `arts`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=336;

--
-- AUTO_INCREMENT for table `bids`
--
ALTER TABLE `bids`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=172;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
