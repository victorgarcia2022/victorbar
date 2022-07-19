-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 18-07-2022 a las 23:16:46
-- Versión del servidor: 5.7.33
-- Versión de PHP: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `node_barvictor`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `meseros`
--

CREATE TABLE `meseros` (
  `id` int(11) NOT NULL,
  `tipo_documento` varchar(255) DEFAULT NULL,
  `documento` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  `sede_id` int(11) DEFAULT NULL,
  `created_at` varchar(255) NOT NULL,
  `updated_at` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `meseros`
--

INSERT INTO `meseros` (`id`, `tipo_documento`, `documento`, `nombre`, `usuario_id`, `sede_id`, `created_at`, `updated_at`) VALUES
(1, 'CC', '1053855581', 'Felipe Garcia', 2, 1, '2022-07-18 20:14:55', '2022-07-18 20:14:55'),
(2, 'CC', '1053855581', 'Felipe Garcia', 2, 1, '2022-07-18 21:31:25', '2022-07-18 21:31:25');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `id` int(11) NOT NULL,
  `mesa` int(11) DEFAULT NULL,
  `productos` json DEFAULT NULL,
  `total` varchar(255) DEFAULT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  `sede_id` int(11) DEFAULT NULL,
  `created_at` varchar(255) NOT NULL,
  `updated_at` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `valor` varchar(255) DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `sede_id` int(11) DEFAULT NULL,
  `created_at` varchar(255) NOT NULL,
  `updated_at` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `valor`, `imagen`, `stock`, `sede_id`, `created_at`, `updated_at`) VALUES
(1, 'Ron Actualizado 20 años', '110000', 'https://i0.wp.com/www.licoresmedellin.com/wp-content/uploads/2022/06/Mezcal-Union-Kit-VIEJO-700ml.jpg?fit=600%2C800&ssl=1', 20, 1, '2022-07-18 04:17:27', '2022-07-18 05:10:11'),
(2, 'Ron Actualizado 20 años', '110000', 'https://i0.wp.com/www.licoresmedellin.com/wp-content/uploads/2021/08/tequila_herradura_plata_750ml.jpg?fit=600%2C800&ssl=1', 20, 1, '2022-07-18 04:19:39', '2022-07-18 05:10:15'),
(3, 'Ron Actualizado 20 años', '110000', 'https://i0.wp.com/www.licoresmedellin.com/wp-content/uploads/2021/08/tequila_herradura_anejo_750ml.jpg?fit=600%2C800&ssl=1', 20, 1, '2022-07-18 04:41:57', '2022-07-18 05:04:50'),
(4, 'Ron 15 años', '110000', 'https://i0.wp.com/www.licoresmedellin.com/wp-content/uploads/2021/08/tequila_herradura_anejo_750ml.jpg?fit=600%2C800&ssl=1', 20, 1, '2022-07-18 04:41:58', '2022-07-18 04:41:58'),
(5, 'Ron 15 años', '110000', 'https://i0.wp.com/www.licoresmedellin.com/wp-content/uploads/2021/08/Ron_HAVANA_7_ANOS.jpg?fit=643%2C858&ssl=1', 20, 1, '2022-07-18 04:41:59', '2022-07-18 04:41:59'),
(6, 'Ron 15 años', '110000', 'https://i0.wp.com/www.licoresmedellin.com/wp-content/uploads/2021/08/Beefeater_London_24_750ml.jpg?fit=600%2C800&ssl=1', 20, 1, '2022-07-18 04:42:00', '2022-07-18 04:42:00'),
(7, 'Ron 15 años', '110000', 'https://i0.wp.com/www.licoresmedellin.com/wp-content/uploads/2021/08/Ron_Parce_12_anos_750m-licores-medellinl.jpg?fit=600%2C800&ssl=1', 20, 1, '2022-07-18 04:42:00', '2022-07-18 04:42:00'),
(8, 'Ron 15 años', '110000', 'https://i0.wp.com/www.licoresmedellin.com/wp-content/uploads/2021/08/Ron_Parce_Brothers_Blend_750ml-licores_medellin-1.jpg?fit=638%2C850&ssl=1', 20, 1, '2022-07-18 04:42:01', '2022-07-18 04:42:01'),
(9, 'Ron 15 años', '110000', 'https://i0.wp.com/www.licoresmedellin.com/wp-content/uploads/2021/08/parce-rumgorra.jpg?fit=600%2C800&ssl=1', 20, 1, '2022-07-18 04:42:02', '2022-07-18 04:42:02'),
(10, 'Ron 15 años', '110000', 'https://i0.wp.com/www.licoresmedellin.com/wp-content/uploads/2021/08/viejo_caldas_esencial_750ml.jpg?fit=643%2C858&ssl=1', 20, 1, '2022-07-18 04:42:02', '2022-07-18 04:42:02');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sedes`
--

CREATE TABLE `sedes` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `administrador` varchar(255) DEFAULT NULL,
  `n_mesas` int(11) DEFAULT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  `created_at` varchar(255) NOT NULL,
  `updated_at` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `sedes`
--

INSERT INTO `sedes` (`id`, `nombre`, `administrador`, `n_mesas`, `usuario_id`, `created_at`, `updated_at`) VALUES
(1, 'Sede Manizales', 'Victor Bar', 10, 1, '2022-07-18 20:14:55', '2022-07-18 20:14:55'),
(2, 'Sede Manizales', 'Victor Bar', 10, 1, '2022-07-18 21:31:25', '2022-07-18 21:31:25');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20220713192638-create-usuario.js'),
('20220713192750-create-sede.js'),
('20220713192855-create-mesero.js'),
('20220713195815-create-producto.js'),
('20220713200142-create-pedido.js');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `created_at` varchar(255) NOT NULL,
  `updated_at` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `email`, `password`, `created_at`, `updated_at`) VALUES
(1, 'admin@correo.com', '$2a$12$aX9.fCg9J3yGNz.5/wlWle/MXB7rzkwkctsyyZt0cVf4U9jBsS4JO', '2022-07-18 20:14:55', '2022-07-18 04:38:18'),
(2, 'mesero@correo.com', 'Qaws12pj-22', '2022-07-18 20:14:55', '2022-07-18 20:14:55'),
(3, 'admin@correo.com', 'Qaws12pj-22', '2022-07-18 21:31:25', '2022-07-18 21:31:25'),
(4, 'mesero@correo.com', 'Qaws12pj-22', '2022-07-18 21:31:25', '2022-07-18 21:31:25'),
(5, 'admin@correo.com', '$2a$12$wbB5zajpIk4LfOp5uObxrut1Z0Hz.BhyaIrpscQW4gEIbA9DbqHpO', '2022-07-18 04:38:00', '2022-07-18 04:38:00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `meseros`
--
ALTER TABLE `meseros`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sedes`
--
ALTER TABLE `sedes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `meseros`
--
ALTER TABLE `meseros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `sedes`
--
ALTER TABLE `sedes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
