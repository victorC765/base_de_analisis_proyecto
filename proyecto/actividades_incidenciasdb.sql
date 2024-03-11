-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-03-2024 a las 03:03:46
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `actividades_incidencias`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actividades_ejecucion`
--

CREATE TABLE `actividades_ejecucion` (
  `id_Actividades_Ejecucion` int(11) NOT NULL,
  `actividad` varchar(35) DEFAULT NULL,
  `descripcion_actividad` text DEFAULT NULL,
  `lugar` varchar(45) DEFAULT NULL,
  `hora_incio` varchar(45) DEFAULT NULL,
  `hora_fin` varchar(45) DEFAULT NULL,
  `Paquete_Turistico_id_Paquete_Turistico` int(11) NOT NULL,
  `categoria_id_categoria` int(11) NOT NULL,
  `Bitacora_id_Bitacora` int(11) NOT NULL,
  `cumplimiento_id_cumplimiento` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `actividades_ejecucion`
--

INSERT INTO `actividades_ejecucion` (`id_Actividades_Ejecucion`, `actividad`, `descripcion_actividad`, `lugar`, `hora_incio`, `hora_fin`, `Paquete_Turistico_id_Paquete_Turistico`, `categoria_id_categoria`, `Bitacora_id_Bitacora`, `cumplimiento_id_cumplimiento`) VALUES
(5, 'Actividad Ejemplo', 'Descripción de la actividad de ejemplo', 'Lugar de la actividad', '08:00', '10:00', 1, 1, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actividades_has_recursos`
--

CREATE TABLE `actividades_has_recursos` (
  `id_Actividades_has_Recursoscol` int(11) NOT NULL,
  `Actividades_id_Actividades` int(11) NOT NULL,
  `Recursos_id_Recursos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bitacoras`
--

CREATE TABLE `bitacoras` (
  `id_Bitacoras` int(11) NOT NULL,
  `fecha` date DEFAULT NULL,
  `Paquete_Turistico_id_Paquete_Turistico` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `bitacoras`
--

INSERT INTO `bitacoras` (`id_Bitacoras`, `fecha`, `Paquete_Turistico_id_Paquete_Turistico`) VALUES
(1, '2005-05-23', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `id_categoria` int(11) NOT NULL,
  `categoria` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`id_categoria`, `categoria`) VALUES
(1, 'excurción');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id_Clientes` int(11) NOT NULL,
  `Clientescol` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cumplimiento`
--

CREATE TABLE `cumplimiento` (
  `id_cumplimiento` int(11) NOT NULL,
  `estado` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `cumplimiento`
--

INSERT INTO `cumplimiento` (`id_cumplimiento`, `estado`) VALUES
(1, 'cumplida'),
(2, 'incumplimiento');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `generos`
--

CREATE TABLE `generos` (
  `id_generos` int(11) NOT NULL,
  `Genero` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `incidentes`
--

CREATE TABLE `incidentes` (
  `id_incidentes` int(11) NOT NULL,
  `descripcion_incidente` text DEFAULT NULL,
  `Paquete_Turistico_id_Paquete_Turistico` int(11) NOT NULL,
  `tipo_incidencia_id_tipo_incidencia` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `ubicacion` varchar(68) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `incidentes`
--

INSERT INTO `incidentes` (`id_incidentes`, `descripcion_incidente`, `Paquete_Turistico_id_Paquete_Turistico`, `tipo_incidencia_id_tipo_incidencia`, `fecha`, `hora`, `ubicacion`) VALUES
(1, 'dsdasd', 1, 2, '2024-03-20', '13:43:00', 'asdasdas'),
(2, 'sdasd', 1, 3, '2024-03-12', '13:57:00', 'asdasdasdas'),
(3, 'shadbhabdabsdbasdas', 1, 2, '2024-03-19', '14:17:00', 'sadasd'),
(4, 'sdasda', 1, 4, '2024-03-18', '14:18:00', 'sdasda'),
(5, 'dasdas', 1, 3, '2024-03-06', '14:18:00', 'dsad'),
(6, 'asdas', 1, 1, '2024-03-14', '18:15:00', 'asdas'),
(7, 'sasdasd', 1, 1, '2024-03-12', '14:51:00', 'asdas'),
(8, 'sdas', 1, 1, '2024-03-05', '14:49:00', 'asda'),
(9, 'xcs', 1, 3, '2024-03-28', '17:40:00', 'sd'),
(10, ' zxcazs', 1, 3, '2024-03-14', '21:56:00', 'sxasd'),
(11, 'ttr', 1, 1, '2024-03-07', '18:02:00', 'erge'),
(12, 'dfsd', 1, 3, '2024-03-19', '18:20:00', 'fdfss'),
(13, 'wqe', 1, 1, '2024-03-07', '18:56:00', 'qwe'),
(14, 'wqe', 1, 1, '2024-03-07', '18:56:00', 'qwe'),
(17, 'ñ{l', 1, 1, '2024-03-12', '00:00:00', 'ñ{l'),
(18, '.', 1, 1, '0000-00-00', '00:00:00', ''),
(19, '+', 1, 1, '0000-00-00', '00:00:00', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `incidentes_x_actividades`
--

CREATE TABLE `incidentes_x_actividades` (
  `id_incidentes_x_Actividadescol` int(11) NOT NULL,
  `incidentes_id_incidentes` int(11) NOT NULL,
  `Actividades_id_Actividades` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paquete_turistico`
--

CREATE TABLE `paquete_turistico` (
  `id_Paquete_Turistico` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion_PT` text DEFAULT NULL,
  `fecha_inicio` date DEFAULT NULL,
  `fecha_fin` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `paquete_turistico`
--

INSERT INTO `paquete_turistico` (`id_Paquete_Turistico`, `nombre`, `descripcion_PT`, `fecha_inicio`, `fecha_fin`) VALUES
(1, 'laguaira', 'djajsdja', '2005-05-06', '2005-05-07');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paquete_turistico_has_recursos`
--

CREATE TABLE `paquete_turistico_has_recursos` (
  `id_Paquete_Turistico_has_Recursoscol` int(11) NOT NULL,
  `Paquete_Turistico_id_Paquete_Turistico` int(11) NOT NULL,
  `Recursos_id_Recursos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal_especializado`
--

CREATE TABLE `personal_especializado` (
  `id_personal_especializado` int(11) NOT NULL,
  `cargo` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personas`
--

CREATE TABLE `personas` (
  `id_personas` int(11) NOT NULL,
  `nombre_1` varchar(45) DEFAULT NULL,
  `nombre_2` varchar(45) DEFAULT NULL,
  `apellido_1` varchar(45) DEFAULT NULL,
  `apellido_2` varchar(45) DEFAULT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `cedula_identidad` int(11) DEFAULT NULL,
  `correo` varchar(45) DEFAULT NULL,
  `telefono` varchar(45) DEFAULT NULL,
  `generos_id_generos` int(11) NOT NULL,
  `personal_especializado_id_personal_especializado` int(11) NOT NULL,
  `Clientes_id_Clientes` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personas_x_actividades`
--

CREATE TABLE `personas_x_actividades` (
  `personas_id_personas` int(11) NOT NULL,
  `Actividades_id_Actividades` int(11) NOT NULL,
  `id_personas_has_Actividadescol` int(11) NOT NULL,
  `incidentes_id_incidentes` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personas_x_paquete_turistico`
--

CREATE TABLE `personas_x_paquete_turistico` (
  `id_personas_x_Paquete_Turisticocol` int(11) NOT NULL,
  `personas_id_personas` int(11) NOT NULL,
  `Paquete_Turistico_id_Paquete_Turistico` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recursos`
--

CREATE TABLE `recursos` (
  `id_Recursos` int(11) NOT NULL,
  `Recurso` varchar(45) DEFAULT NULL,
  `cantidad` varchar(45) DEFAULT NULL,
  `tipos_recursos_id_tipos_recursos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `responsablidad_recursos`
--

CREATE TABLE `responsablidad_recursos` (
  `id_responsablidad_recursos` int(11) NOT NULL,
  `personal_especializado_id_personal_especializado` int(11) NOT NULL,
  `Recursos_id_Recursos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipos_recursos`
--

CREATE TABLE `tipos_recursos` (
  `id_tipos_recursos` int(11) NOT NULL,
  `tipo_recurso` varchar(45) DEFAULT NULL,
  `uso` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_incidencia`
--

CREATE TABLE `tipo_incidencia` (
  `id_tipo_incidencia` int(11) NOT NULL,
  `tipo_incidencia` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `tipo_incidencia`
--

INSERT INTO `tipo_incidencia` (`id_tipo_incidencia`, `tipo_incidencia`) VALUES
(1, 'incidente_transporte'),
(2, 'incidente_alojamiento'),
(3, 'incidente_actividades'),
(4, 'incidente_salud'),
(5, 'otro');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `actividades_ejecucion`
--
ALTER TABLE `actividades_ejecucion`
  ADD PRIMARY KEY (`id_Actividades_Ejecucion`),
  ADD KEY `fk_Actividades_Paquete_Turistico1_idx` (`Paquete_Turistico_id_Paquete_Turistico`),
  ADD KEY `fk_Actividades_categoria1_idx` (`categoria_id_categoria`),
  ADD KEY `fk_Actividades_Ejecucion_Bitacora1_idx` (`Bitacora_id_Bitacora`),
  ADD KEY `fk_Actividades_Ejecucion_cumplimiento1_idx` (`cumplimiento_id_cumplimiento`);

--
-- Indices de la tabla `actividades_has_recursos`
--
ALTER TABLE `actividades_has_recursos`
  ADD PRIMARY KEY (`id_Actividades_has_Recursoscol`),
  ADD KEY `fk_Actividades_has_Recursos_Recursos1_idx` (`Recursos_id_Recursos`),
  ADD KEY `fk_Actividades_has_Recursos_Actividades1_idx` (`Actividades_id_Actividades`);

--
-- Indices de la tabla `bitacoras`
--
ALTER TABLE `bitacoras`
  ADD PRIMARY KEY (`id_Bitacoras`),
  ADD KEY `fk_Bitacora_Paquete_Turistico1_idx` (`Paquete_Turistico_id_Paquete_Turistico`);

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id_Clientes`);

--
-- Indices de la tabla `cumplimiento`
--
ALTER TABLE `cumplimiento`
  ADD PRIMARY KEY (`id_cumplimiento`);

--
-- Indices de la tabla `generos`
--
ALTER TABLE `generos`
  ADD PRIMARY KEY (`id_generos`);

--
-- Indices de la tabla `incidentes`
--
ALTER TABLE `incidentes`
  ADD PRIMARY KEY (`id_incidentes`),
  ADD KEY `fk_incidentes_Paquete_Turistico1_idx` (`Paquete_Turistico_id_Paquete_Turistico`),
  ADD KEY `fk_incidentes_tipo_incidencia1_idx` (`tipo_incidencia_id_tipo_incidencia`);

--
-- Indices de la tabla `incidentes_x_actividades`
--
ALTER TABLE `incidentes_x_actividades`
  ADD PRIMARY KEY (`id_incidentes_x_Actividadescol`),
  ADD KEY `fk_incidentes_has_Actividades_Actividades1_idx` (`Actividades_id_Actividades`),
  ADD KEY `fk_incidentes_has_Actividades_incidentes1_idx` (`incidentes_id_incidentes`);

--
-- Indices de la tabla `paquete_turistico`
--
ALTER TABLE `paquete_turistico`
  ADD PRIMARY KEY (`id_Paquete_Turistico`);

--
-- Indices de la tabla `paquete_turistico_has_recursos`
--
ALTER TABLE `paquete_turistico_has_recursos`
  ADD PRIMARY KEY (`id_Paquete_Turistico_has_Recursoscol`),
  ADD KEY `fk_Paquete_Turistico_has_Recursos_Recursos1_idx` (`Recursos_id_Recursos`),
  ADD KEY `fk_Paquete_Turistico_has_Recursos_Paquete_Turistico1_idx` (`Paquete_Turistico_id_Paquete_Turistico`);

--
-- Indices de la tabla `personal_especializado`
--
ALTER TABLE `personal_especializado`
  ADD PRIMARY KEY (`id_personal_especializado`);

--
-- Indices de la tabla `personas`
--
ALTER TABLE `personas`
  ADD PRIMARY KEY (`id_personas`),
  ADD KEY `fk_personas_generos1_idx` (`generos_id_generos`),
  ADD KEY `fk_personas_personal_especializado1_idx` (`personal_especializado_id_personal_especializado`),
  ADD KEY `fk_personas_Clientes1_idx` (`Clientes_id_Clientes`);

--
-- Indices de la tabla `personas_x_actividades`
--
ALTER TABLE `personas_x_actividades`
  ADD PRIMARY KEY (`id_personas_has_Actividadescol`),
  ADD KEY `fk_personas_has_Actividades_Actividades1_idx` (`Actividades_id_Actividades`),
  ADD KEY `fk_personas_has_Actividades_personas1_idx` (`personas_id_personas`),
  ADD KEY `fk_personas_X_Actividades_incidentes1_idx` (`incidentes_id_incidentes`);

--
-- Indices de la tabla `personas_x_paquete_turistico`
--
ALTER TABLE `personas_x_paquete_turistico`
  ADD PRIMARY KEY (`id_personas_x_Paquete_Turisticocol`),
  ADD KEY `fk_personas_has_Paquete_Turistico_Paquete_Turistico1_idx` (`Paquete_Turistico_id_Paquete_Turistico`),
  ADD KEY `fk_personas_has_Paquete_Turistico_personas1_idx` (`personas_id_personas`);

--
-- Indices de la tabla `recursos`
--
ALTER TABLE `recursos`
  ADD PRIMARY KEY (`id_Recursos`),
  ADD KEY `fk_Recursos_tipos_recursos1_idx` (`tipos_recursos_id_tipos_recursos`);

--
-- Indices de la tabla `responsablidad_recursos`
--
ALTER TABLE `responsablidad_recursos`
  ADD PRIMARY KEY (`id_responsablidad_recursos`),
  ADD KEY `fk_responsablidad_recursos_personal_especializado1_idx` (`personal_especializado_id_personal_especializado`),
  ADD KEY `fk_responsablidad_recursos_Recursos1_idx` (`Recursos_id_Recursos`);

--
-- Indices de la tabla `tipos_recursos`
--
ALTER TABLE `tipos_recursos`
  ADD PRIMARY KEY (`id_tipos_recursos`);

--
-- Indices de la tabla `tipo_incidencia`
--
ALTER TABLE `tipo_incidencia`
  ADD PRIMARY KEY (`id_tipo_incidencia`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `actividades_ejecucion`
--
ALTER TABLE `actividades_ejecucion`
  MODIFY `id_Actividades_Ejecucion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `actividades_has_recursos`
--
ALTER TABLE `actividades_has_recursos`
  MODIFY `id_Actividades_has_Recursoscol` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `bitacoras`
--
ALTER TABLE `bitacoras`
  MODIFY `id_Bitacoras` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id_categoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id_Clientes` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `generos`
--
ALTER TABLE `generos`
  MODIFY `id_generos` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `incidentes`
--
ALTER TABLE `incidentes`
  MODIFY `id_incidentes` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `incidentes_x_actividades`
--
ALTER TABLE `incidentes_x_actividades`
  MODIFY `id_incidentes_x_Actividadescol` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `paquete_turistico`
--
ALTER TABLE `paquete_turistico`
  MODIFY `id_Paquete_Turistico` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `paquete_turistico_has_recursos`
--
ALTER TABLE `paquete_turistico_has_recursos`
  MODIFY `id_Paquete_Turistico_has_Recursoscol` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `personal_especializado`
--
ALTER TABLE `personal_especializado`
  MODIFY `id_personal_especializado` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `personas`
--
ALTER TABLE `personas`
  MODIFY `id_personas` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `personas_x_actividades`
--
ALTER TABLE `personas_x_actividades`
  MODIFY `id_personas_has_Actividadescol` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `personas_x_paquete_turistico`
--
ALTER TABLE `personas_x_paquete_turistico`
  MODIFY `id_personas_x_Paquete_Turisticocol` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `responsablidad_recursos`
--
ALTER TABLE `responsablidad_recursos`
  MODIFY `id_responsablidad_recursos` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tipos_recursos`
--
ALTER TABLE `tipos_recursos`
  MODIFY `id_tipos_recursos` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tipo_incidencia`
--
ALTER TABLE `tipo_incidencia`
  MODIFY `id_tipo_incidencia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `actividades_ejecucion`
--
ALTER TABLE `actividades_ejecucion`
  ADD CONSTRAINT `fk_Actividades_Ejecucion_Bitacora1` FOREIGN KEY (`Bitacora_id_Bitacora`) REFERENCES `bitacoras` (`id_Bitacoras`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Actividades_Ejecucion_cumplimiento1` FOREIGN KEY (`cumplimiento_id_cumplimiento`) REFERENCES `cumplimiento` (`id_cumplimiento`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Actividades_Paquete_Turistico1` FOREIGN KEY (`Paquete_Turistico_id_Paquete_Turistico`) REFERENCES `paquete_turistico` (`id_Paquete_Turistico`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Actividades_categoria1` FOREIGN KEY (`categoria_id_categoria`) REFERENCES `categoria` (`id_categoria`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `actividades_has_recursos`
--
ALTER TABLE `actividades_has_recursos`
  ADD CONSTRAINT `fk_Actividades_has_Recursos_Actividades1` FOREIGN KEY (`Actividades_id_Actividades`) REFERENCES `actividades_ejecucion` (`id_Actividades_Ejecucion`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Actividades_has_Recursos_Recursos1` FOREIGN KEY (`Recursos_id_Recursos`) REFERENCES `recursos` (`id_Recursos`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `bitacoras`
--
ALTER TABLE `bitacoras`
  ADD CONSTRAINT `fk_Bitacora_Paquete_Turistico1` FOREIGN KEY (`Paquete_Turistico_id_Paquete_Turistico`) REFERENCES `paquete_turistico` (`id_Paquete_Turistico`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `incidentes`
--
ALTER TABLE `incidentes`
  ADD CONSTRAINT `fk_incidentes_Paquete_Turistico1` FOREIGN KEY (`Paquete_Turistico_id_Paquete_Turistico`) REFERENCES `paquete_turistico` (`id_Paquete_Turistico`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_incidentes_tipo_incidencia1` FOREIGN KEY (`tipo_incidencia_id_tipo_incidencia`) REFERENCES `tipo_incidencia` (`id_tipo_incidencia`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `incidentes_x_actividades`
--
ALTER TABLE `incidentes_x_actividades`
  ADD CONSTRAINT `fk_incidentes_has_Actividades_Actividades1` FOREIGN KEY (`Actividades_id_Actividades`) REFERENCES `actividades_ejecucion` (`id_Actividades_Ejecucion`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_incidentes_has_Actividades_incidentes1` FOREIGN KEY (`incidentes_id_incidentes`) REFERENCES `incidentes` (`id_incidentes`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `paquete_turistico_has_recursos`
--
ALTER TABLE `paquete_turistico_has_recursos`
  ADD CONSTRAINT `fk_Paquete_Turistico_has_Recursos_Paquete_Turistico1` FOREIGN KEY (`Paquete_Turistico_id_Paquete_Turistico`) REFERENCES `paquete_turistico` (`id_Paquete_Turistico`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Paquete_Turistico_has_Recursos_Recursos1` FOREIGN KEY (`Recursos_id_Recursos`) REFERENCES `recursos` (`id_Recursos`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `personas`
--
ALTER TABLE `personas`
  ADD CONSTRAINT `fk_personas_Clientes1` FOREIGN KEY (`Clientes_id_Clientes`) REFERENCES `clientes` (`id_Clientes`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_personas_generos1` FOREIGN KEY (`generos_id_generos`) REFERENCES `generos` (`id_generos`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_personas_personal_especializado1` FOREIGN KEY (`personal_especializado_id_personal_especializado`) REFERENCES `personal_especializado` (`id_personal_especializado`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `personas_x_actividades`
--
ALTER TABLE `personas_x_actividades`
  ADD CONSTRAINT `fk_personas_X_Actividades_incidentes1` FOREIGN KEY (`incidentes_id_incidentes`) REFERENCES `incidentes` (`id_incidentes`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_personas_has_Actividades_Actividades1` FOREIGN KEY (`Actividades_id_Actividades`) REFERENCES `actividades_ejecucion` (`id_Actividades_Ejecucion`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_personas_has_Actividades_personas1` FOREIGN KEY (`personas_id_personas`) REFERENCES `personas` (`id_personas`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `personas_x_paquete_turistico`
--
ALTER TABLE `personas_x_paquete_turistico`
  ADD CONSTRAINT `fk_personas_has_Paquete_Turistico_Paquete_Turistico1` FOREIGN KEY (`Paquete_Turistico_id_Paquete_Turistico`) REFERENCES `paquete_turistico` (`id_Paquete_Turistico`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_personas_has_Paquete_Turistico_personas1` FOREIGN KEY (`personas_id_personas`) REFERENCES `personas` (`id_personas`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `recursos`
--
ALTER TABLE `recursos`
  ADD CONSTRAINT `fk_Recursos_tipos_recursos1` FOREIGN KEY (`tipos_recursos_id_tipos_recursos`) REFERENCES `tipos_recursos` (`id_tipos_recursos`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `responsablidad_recursos`
--
ALTER TABLE `responsablidad_recursos`
  ADD CONSTRAINT `fk_responsablidad_recursos_Recursos1` FOREIGN KEY (`Recursos_id_Recursos`) REFERENCES `recursos` (`id_Recursos`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_responsablidad_recursos_personal_especializado1` FOREIGN KEY (`personal_especializado_id_personal_especializado`) REFERENCES `personal_especializado` (`id_personal_especializado`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
