
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
(1, 'Admin', '', 'admin@gmail.com', '$2b$10$9aJxoFRnyjtcMbcd62uRMuRswN31EXJeesOK/hTYQjId4gxyefk1u',"data:image/png;base64,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","3123456878");

-- instert in carrito table
INSERT INTO `carrito` (`id`,`product_id`, `quantity`, `total`, `user_id`) VALUES
(1, 1, 6,  7, 1),
(2, 5, 12, 5, 1);