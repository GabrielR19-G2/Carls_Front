-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: carlsjr
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `administradors`
--

LOCK TABLES `administradors` WRITE;
/*!40000 ALTER TABLE `administradors` DISABLE KEYS */;
/*!40000 ALTER TABLE `administradors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `pagos`
--

LOCK TABLES `pagos` WRITE;
/*!40000 ALTER TABLE `pagos` DISABLE KEYS */;
/*!40000 ALTER TABLE `pagos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `pedidoproductos`
--

LOCK TABLES `pedidoproductos` WRITE;
/*!40000 ALTER TABLE `pedidoproductos` DISABLE KEYS */;
/*!40000 ALTER TABLE `pedidoproductos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
/*!40000 ALTER TABLE `pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Famous Star with Cheese','Carne 100% de res asada a la parrilla, salsa especial, queso americano, mayonesa, lechuga, cebolla, tomate y pepinillos.',115,'/img/famous.png','Hamburguesa','2023-10-25 07:08:37','2023-10-25 07:08:37'),(2,'Western Bacon Big Angus','Carne 100% Black Angus asada a la parrilla, dos tiras de tocino, dos rebanadas de queso americano, aros de cebolla empanizados y salsa BBQ.',220,'/img/western.png','Hamburguesa','2023-10-25 07:09:10','2023-10-25 07:09:10'),(10,'Double Western Bacon','Dos piezas de carne 100% de res asada a la parrilla, salsa BBQ, rebanadas de tocino, queso americano y aros de cebolla empanizados.',120,'/img/double.png','Hamburguesa','2023-10-25 07:09:10','2023-10-25 07:08:37'),(11,'Guacamole Bacon Big Angus ','Carne 100% Black Angus asada a la parrilla, queso pepper jack, cebolla morada, lechuga, tomate, salsa Santa Fe y tocino.',145,'/img/guacamole.png','Hamburguesa','2023-10-25 07:09:10','2023-10-25 07:08:37'),(12,'Jalapeño Burger','Carne 100% de res asada a la parrilla, chiles jalapeños, queso Pepper Jack,cebolla, tomate, lechuga y salsa Santa Fe.',150,'/img/jalapeño.png','Hamburguesa','2023-10-25 07:09:10','2023-10-25 07:08:37'),(13,'The Original Big Angus Burger','Mostaza, catsup, carne 100% Black Angus asada a la parrilla, mostaza, catsup, queso americano, cebolla morada, tomate, lechuga y pepinillos.',140,'/img/original.png','Hamburguesa','2023-10-25 07:09:10','2023-10-25 07:08:37'),(14,'Ice Cream Shake Frutilla','Cremoso batido a base de helado americano de frutilla y leche descremada.',90,'/img/frutilla.png','Postre','2023-10-25 07:09:10','2023-10-25 07:08:37'),(16,'Ensalada de verduras','Frescas hojas de lechuga, rodajas de tomate, aros de cebolla morada, mix de queso rallado.',70,'/img/everduras.png','Ensaladas','2023-10-25 07:09:10','2023-10-25 07:08:37');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20231004151842-create-usuario.js'),('20231004151901-create-administrador.js'),('20231004151914-create-cliente.js'),('20231004151935-create-producto.js'),('20231004151948-create-pago.js'),('20231004152009-create-pedido.js'),('20231004152029-create-pedido-producto.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'root','123','2023-10-25 07:08:37','2023-10-25 07:08:37');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-03  0:38:39
