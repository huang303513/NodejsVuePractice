SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `_id` INT UNSIGNED AUTO_INCREMENT,
  `name` varchar(255) NOT NULL  COMMENT '用户名称',
  `password` varchar(255) NOT NULL COMMENT '用户密码',
  `gender` CHAR(1) NOT NULL COMMENT '性别',
  `bio` varchar(255) NOT NULL DEFAULT '我的忧伤你不懂' COMMENT '个性签名',
  `avatar` varchar(255) NOT NULL  COMMENT '头像名称',
  `created_at` varchar(30) NOT NULL COMMENT '创建时间',
  UNIQUE (name),
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

SET FOREIGN_KEY_CHECKS = 1;