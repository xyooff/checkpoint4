CREATE DATABASE  IF NOT EXISTS `foliobase` character set utf8mb4 collate utf8mb4_0900_ai_ci;

USE `foliobase`;

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `firstname` varchar(255),
  `lastname` varchar(255),
  `email` varchar(255) UNIQUE,
  `password` varchar(255),
  `phoneNumber` varchar(255) NOT NULL,
  `pays` varchar(255),
  `role` enum('ROLE_USER','ROLE_ADMIN') NOT NULL DEFAULT 'ROLE_USER'
)ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO
  `users` (firstname, lastname, email, password, phoneNumber, pays, role)
VALUES
  (
    "Rodrigue",
    "Techer",
    "rodrigue_techer@yahoo.com", 
    "$argon2i$v=19$m=16,t=2,p=1$R3dkZGRIRlM2ZFNzclJYbQ$Mfep1cMEufQIqFCzy40SFg", 
    "0626050116", 
    "France",
    "ROLE_ADMIN"
  );

DROP TABLE IF EXISTS `projectFolio`;

CREATE TABLE `projectFolio` (
  `createWebSite_id` int,
  `language_id` int
)ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO
  `projectFolio` (createWebSite_id, language_id )
VALUES
  (1,1), (1,2), (1,3), (1,4);
DROP TABLE IF EXISTS `createWebSite`;
CREATE TABLE `createWebSite` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(255),
  `url_picture` varchar(255),
  `url_website` varchar(255),
  `description` varchar(255),
  `technicalDescription` varchar(255)
)ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO
  `createWebSite` (title, url_picture, url_website, description, technicalDescription)
VALUES
  (
    "Sharing is caring", 
    "https://unsplash.com/photos/6J--NXulQCs", 
    "https://unsplash.com/photos/bYiw48KLbmw", 
    "Construction d’un site pour un espace de coworking Sharing is caring, un projet imaginé par nos formateurs pour le développement d’un site web en html, css, en groupe de 4 personnes avec un temp limiter", 
    " technical description Construction d’un site pour un espace de coworking Sharing is caring, un projet imaginé par nos formateurs pour le développement d’un site web en html, css, en groupe de 4 personnes avec un temp limiter."
  );

DROP TABLE IF EXISTS `language`;
CREATE TABLE `language` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `url_language` varchar(255)
)ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO
  `language` (name, url_language)
VALUES
  ("react",
    "https://img2.freepng.fr/20180604/pol/kisspng-react-javascript-angularjs-ionic-atom-5b154be6709500.6532453515281223424611.jpg"
  ),
  ("angular",
    "https://img1.freepng.fr/20180502/fgw/kisspng-angularjs-single-page-application-web-application-angular-5aea7a2d8df230.6287313315253161415814.jpg"
  ),
  ("nodejs",
    "https://img2.freepng.fr/20180619/jaw/kisspng-node-js-javascript-express-js-server-side-scriptin-node-js-5b28f613031dd3.1561918615294110910128.jpg"
  ),
  ("php",
    "https://img2.freepng.fr/20180422/qze/kisspng-php-server-side-scripting-computer-software-genera-php-5adc5e78de7813.0517335015243915449112.jpg"
  );


ALTER TABLE `projectFolio` ADD CONSTRAINT `createwebsite_ibfk_1` FOREIGN KEY (`createWebSite_id`) REFERENCES `createWebSite` (`id`);
ALTER TABLE `projectFolio` ADD CONSTRAINT `projectfolio_ibfk_1` FOREIGN KEY (`language_id`) REFERENCES `language` (`id`);




