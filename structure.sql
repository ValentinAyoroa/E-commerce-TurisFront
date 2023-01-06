-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--

--
-- Base de datos: `turisfront_db`
--
CREATE DATABASE turisfront_db;

-- Seleccionar base de datos
USE turisfront_db;

-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-12-2022 a las 01:01:55
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10
SET
  SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

START TRANSACTION;

SET
  time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */
;

/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */
;

/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */
;

/*!40101 SET NAMES utf8mb4 */
;


-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `size`
--
CREATE TABLE `size` (
  `id` int(5) AUTO_INCREMENT PRIMARY KEY NOT NULL,
  `size` varchar(10) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `colors`
--
CREATE TABLE `colors` (
  `id` int(5) AUTO_INCREMENT PRIMARY KEY NOT NULL,
  `name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `products`
--
CREATE TABLE `products` (
  `id` int(5) AUTO_INCREMENT PRIMARY KEY NOT NULL,
  `name` varchar(30) NOT NULL,
  `price` double(15, 2) NOT NULL,
  `description` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `color_id` int(30) NOT NULL,
  `size_id` int(30) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `users`
--
CREATE TABLE `users` (
  `id` int(5) AUTO_INCREMENT PRIMARY KEY NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(255) NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `cellphone` int(15) NOT NULL
)
 ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `carrito`
--
CREATE TABLE `carrito` (
  `id` int(5) AUTO_INCREMENT PRIMARY KEY NOT NULL ,
  `product_id` int(30) NOT NULL,
  `quantity` int(15) NOT NULL,
  `total` double(15,2) NOT NULL,
  `user_id` int(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--
--
-- Indices de la tabla `carrito`
--
ALTER TABLE
  `carrito`
ADD FOREIGN KEY (product_id) REFERENCES products (id) ON DELETE CASCADE,
ADD FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE;

--
-- Indices de la tabla `products`
--
ALTER TABLE
  `products`
ADD FOREIGN KEY (color_id) REFERENCES colors (id) ON DELETE CASCADE,
ADD FOREIGN KEY (size_id) REFERENCES size (id) ON DELETE CASCADE;


--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD UNIQUE KEY `email` (`email`);

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

