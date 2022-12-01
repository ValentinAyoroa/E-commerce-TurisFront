
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
(10, '40');

-- instert in colors table
INSERT INTO `colors` (`id`,`name`) VALUES
(1, 'azul'),
(2, 'blanco'),
(3, 'rojo'),
(4, 'azul'),
(5, 'negro'),
(6, 'gris'),
(7, 'rojo'),
(8, 'azul claro'),
(9, 'amarillo'),
(10, 'negro');

-- instert in carrito table
INSERT INTO `carrito` (`id`,`product_id`, `total`, `user_id`) VALUES
(1, 1, 1, 1),
(2, 5, 1, 1);


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
(10, 'Prismáticos senderismo con ajuste - MH B560', 440000, 'Prismas y lentes de cristal mineral de calidad K9 con tratamiento antirreflectante MgF2 para aumentar la luminosidad', 'https://contents.mediadecathlon.com/p1800235/k$c6ac7670872aabd0fe37e44e3291e481/sq/prismaticos-senderismo-con-ajuste-mh-b560-adulto-aumento-x12-negro-.jpg?format=auto&f=800x0', 10, 10);



-- instert in users table
INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `avatar`, `cellphone`)VALUES
(1, 'soraya', 'sanchez', 'sorayasanchez0503@gmail.com', '$2b$10$9aJxoFRnyjtcMbcd62uRMuRswN31EXJeesOK/hTYQjId4gxyefk1u',"","");
