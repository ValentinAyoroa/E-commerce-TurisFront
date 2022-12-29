
-- instert in sizes table
INSERT INTO `size` (`id`,`size`) VALUES
(1, 'XS'),
(2, 'S'),
(3, 'M'),
(4, 'Xl'),
(5, 'XXl'),
(6, 'XXXl'), 
(7, '38'),
(8, '35'),
(9, '34'),
(10, '40'),
(11, '9'),
(12, '20'),
(13, '10'),
(14, '15'),
(15, 'L'),
(16, '210'),
(17, 'M'),
(18, '25'),
(19, '30'),
(20, '40'),
(21, '30');

-- instert in colors table
INSERT INTO `colors` (`id`,`name`) VALUES
(1, 'Azul'),
(2, 'Blanco'),
(3, 'Rojo'),
(4, 'Azul'),
(5, 'Negro'),
(6, 'Gris'),
(7, 'Rojo'),
(8, 'Azul claro'),
(9, 'Amarillo'),
(10, 'Negro'),
(11, 'Plateados'),
(12, 'Azul oscuro'), 
(13, 'Amarillo'),
(14, 'Morado'),
(15, 'Blanca'), 
(16, 'Amarillo'),
(17, 'Fucsia'),
(18, '  Azul rey'),
(19, 'Blanca'),
(20, 'Negro'),
(21, 'Verde, Morado');



-- instert in products table
INSERT INTO `products` (`id`, `name`, `price`, `description`, `image`, `color_id`, `size_id`) VALUES
(1, 'Campera SPYFIRE Jacket', 100000, 'la Spyfire Down Jacket te da la calidez y el rendimiento incomparable de la pluma 800 fill con un estilo incomparable', 'https://rupalnet.com/wp-content/uploads/2019/04/kuhl_ms_1055_spyfirejacket_pirateblue_front_wo_style_page.jpg', 1, 1 ),
(2, 'Pantalón RIDER SKI GORE', 85000, 'Tela impermeable y costuras termo-selladas, con abrigo interior 3M Thinsulate®.• Ventilación en entre-piernas con cierre y mesh liviano.• 2 bolsillos para manos con solapas laminadas y cierres inversos', 'https://rupalnet.com/wp-content/uploads/2018/09/pant_rider_dama.jpg', 2, 2),
(3, 'Buzo ZONDA c/bolsillo MICROPOLAR', 109000, 'MicropolarPolar100 antipillling de alta durabilidad.
Tejido de gran elasticidad. Buena repelencia a la humedad y secado rápido.
Posee un bolsillo en el frente con cierre termofusionado', 'https://rupalnet.com/wp-content/uploads/2018/09/buzo-zonda_rotpunkt.jpg', 3, 3),
(4, 'Pantalón CLIMBING Trekking Escalada', 210000, 'Pantalón de escalada, de tejido Micro-Ripstop antidesgarro, tejido elastizado de secado rápido que se adapta a cualquier movimiento', 'https://rupalnet.com/wp-content/uploads/2022/09/Pant_Climbing-1.jpg', 4, 4),
(5, 'GUANTES TERMICOS', 290000, 'Guantes termicos semi-impermables', 'https://www.suescalada.com/735-large_default/guantes-termicos.jpg', 5, 5),
(6, 'CAMISA SECADO RÁPIDO UPEKHA', 980000, 'Camisa secado rápido transpirable Upekha', 'https://www.suescalada.com/2823-large_default/camisa-secado-rapido-upekha.jpg', 6, 6),
(7, 'Botas Senderismo y Trekking Impermeables', 105000, 'Su caña es considerablemente más baja que en las botas tradicionales de trekking, lo cual le proporciona una excelente precisión y libertad de movimientos para poder afontar trepadas', 'https://contents.mediadecathlon.com/m2912743/k$e7cd8b54e43f44f715feb0b8f93be99f/sq/botas-senderismo-y-trekking-impermeables-para-mujer-bestard-paris-lady-gore-tex.jpg?f=960x960', 7, 7),
(8, 'Gorra ANTI-UV de senderismo', 790000, 'La mejor protección solar sigue siendo la ropa: prioriza las mangas largas, los pantalones y los sombreros con ala ancha', 'https://contents.mediadecathlon.com/p2126976/k$ee6879bea56397ea4ba8fc53537f75d1/sq/gorra-anti-uv-de-senderismo-nios-mh500-.jpg?f=960x960', 8, 8),
(9, 'Carpa P Series – 3 Personas', 570000, 'campá cómodamente,s us varillas de aluminio la hacen liviana y resistente, mientras que su tela de poliéster antidesgarro es impermeable y cuenta con protección contra los rayos UV', 'https://rupalnet.com/wp-content/uploads/2018/09/P_serie11.jpg', 9, 9),
(10, 'Prismáticos senderismo con ajuste - MH B560', 440000, 'Prismas y lentes de cristal mineral de calidad K9 con tratamiento antirreflectante MgF2 para aumentar la luminosidad', 'https://contents.mediadecathlon.com/p1800235/k$c6ac7670872aabd0fe37e44e3291e481/sq/prismaticos-senderismo-con-ajuste-mh-b560-adulto-aumento-x12-negro-.jpg?format=auto&f=800x0', 10, 10),
(11, 'Mosquetón En Rosca Con Seguro De Gancho', 79000, ' Mosquetón para conectar en forma rápida y reversible componentes, en especial sistemas que cumplen una función sobre la seguridad y sujeción de otros elementos', 'https://http2.mlstatic.com/D_NQ_NP_653153-MCO48058119590_102021-O.webp', 11, 11),
(12, 'VEJIGA WIDEPAC BOLSA HIDRATACION SOURCE', 35000, 'Vejiga bolsa de hidratacion con la mas alta tecnologia para transportar y beber liquidos', 'https://www.suescalada.com/1974-large_default/-vejiga-widepac-bolsa-hidratacion-source.jpg', 12, 12), 
(13, '2 CAMALOT C4 BLACKDIAMOND', 400000, 'El estandar preferido por los escaladores tradicionales. Camalot Blackdiamond C4 #2', 'https://www.suescalada.com/4994-large_default/2-camalot-c4-blackdiamond-.jpg', 13, 13),
(14, 'TX.DIRECT WASH-IN IMPERMEABILIZANTE ROPA TELAS NIKWAX', 50000, 'El impermeabilizante número uno de alto rendimiento para ropa impermeable - transpirable, seguro y fácil de usar.', 'https://www.suescalada.com/4976-large_default/txdirect-wash-in-impermeabilizante-ropa-telas-nikwax.jpg', 14, 14),
(15, 'KILIMANJARO HIGH MEDIAS TREKKING MUND', 320000, 'Calcetín de trekking con la caña alta para una mayor sujeción durante la práctica deportiva, y elaborado con fribra COOLMAX®', 'https://www.suescalada.com/4972-large_default/kilimanjaro-high-medias-trekking-mund.jpg', 15, 15),
(16, 'SLEEPING CWZ400 NATUREHIKE', 40000, 'Temperatura: Confort 7°C | Límite 2°C | Extrema -9°C', 'https://www.nomadasoutdoor.com.co/wp-content/uploads/2020/07/N%C3%B3madas-Outdoor-CWZ400-Naturehike-02.png', 16, 16),
(17, 'RIÑONERA COSY AONIJIE', 250000, 'Incluye dos botellas de 250ml ó 170ml, Fundas reforzadas con espuma ligera para las botellas, Bolsillo con cremallera y salida para auriculares', 'https://www.nomadasoutdoor.com.co/wp-content/uploads/2018/02/N%C3%B3madas-Outdoor-Cosy-Aonijie-01.png', 17, 17),
(18, 'BOLSA DE AGUA AONIJIE', 50000, 'Bolsa de agua Aonijie 2L con apertura amplia para su fácil llenado y limpieza. Válvula de succión con bloqueo y tapa', 'https://www.nomadasoutdoor.com.co/wp-content/uploads/2018/03/N%C3%B3madas-Outdoor-Bolsa-de-agua-01.png', 18, 18), 
(19, 'LINTERNA CC SE', 240000, 'Luz para camping con funcionalidad de linterna, pilas AA, 220 Lm.', 'https://www.nomadasoutdoor.com.co/wp-content/uploads/2020/04/N%C3%B3madas-Outdoor-Linterna-CC-SE-01.png', 19, 19),
(20, 'BRÚJULA DE MUÑECA KANPAS', 100000, 'Brújula profesional de alto desempeño para muñeca con aguja extra estable y rápida, se ejusta a la muñeca dejando las manos libres, ideal para MTB y carreras de aventura.', 'https://www.nomadasoutdoor.com.co/wp-content/uploads/2021/10/N%C3%B3madas-Outdoor-HDY45FS-02.png', 20, 20),
(21, 'PARACORD', 57000, 'Cuerda 30m, resistencias 550 lb', 'https://www.nomadasoutdoor.com.co/wp-content/uploads/2018/10/N%C3%B3madas-Outdoor-Paracord-30m-04.png', 21, 21);

-- instert in users table
INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `avatar`, `cellphone`)VALUES
(1, 'Admin', '', 'admin@gmail.com', '$2b$10$9aJxoFRnyjtcMbcd62uRMuRswN31EXJeesOK/hTYQjId4gxyefk1u',"data:image/png;base64,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","3123456878"),
(2, 'Alejandra', 'Castro', 'alejandracastro01@gmail.com', '$2b$10$wru1RtuGfSrJDA7KZLi6m.bGr1XMIji0rgPDEFz12lpOEyPL8Bxky', 'data:image/jpeg;base64,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', '3219874327'), 
(3, 'Dayana', 'Rodriguez', 'dayana.rodriguez02@gmail.com', '$2b$10$n9Aw6qMpDIyq87pvTx36HePgywpGG.hRcmfXQkpO.jm2Px7twDpmy', 'https://img.freepik.com/vector-premium/perfil-hombre-dibujos-animados_18591-58482.jpg', '3109334721'), 
(4, 'Pedro', 'Castillo', 'pedrocastillo@gmail.com', '$2b$10$TdLILnFGBSh8DTnTjYk7K.wc6zr4e7ushgOAQNWbqrzxU8Sj0OSia', 'https://img.freepik.com/vector-premium/perfil-empresario-dibujos-animados_18591-58479.jpg?w=2000', '3102234555'), 
(5, 'Carlos', 'Aranguren', 'carlosaranguren@gmail.com', '$2b$10$Z3rocPgOF0YqM2IAls/3.unBFH0IUbMk0csXqIYoQ/q6wreU.LprC', 'https://thumbs.dreamstime.com/z/imagen-del-perfil-personaje-de-dibujos-animados-avatar-hombre-negocios-dise%C3%B1o-gr%C3%A1fico-icono-retrato-la-traje-afroamericano-que-149139825.jpg', '3223456097');

-- instert in carrito table
INSERT INTO `carrito` (`id`,`product_id`, `quantity`, `total`, `user_id`) VALUES
(1, 1, 6,  7, 1),
(2, 5, 12, 5, 1);