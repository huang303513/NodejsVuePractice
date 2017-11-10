SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS `posts`;
CREATE TABLE `posts` (
  `_id` INT UNSIGNED AUTO_INCREMENT,
  `author` varchar(255) NOT NULL DEFAULT '' COMMENT '用户信息',
  `title` varchar(255) NOT NULL DEFAULT '文章标题' COMMENT '文章标题',
  `content` TEXT NOT NULL COMMENT '文章内容',
  `commentsCount` int(11) NOT NULL DEFAULT '0' COMMENT '评论次数'
  `pv` int(11) NOT NULL DEFAULT '0' COMMENT '访问次数',
  `created_at` varchar(30) NOT NULL COMMENT '创建时间',
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

SET FOREIGN_KEY_CHECKS = 1;