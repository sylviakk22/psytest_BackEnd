/*
Navicat MySQL Data Transfer

Source Server         : test
Source Server Version : 50725
Source Host           : localhost:3306
Source Database       : psytest

Target Server Type    : MYSQL
Target Server Version : 50725
File Encoding         : 65001

Date: 2019-06-21 15:37:58
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `password` varchar(20) NOT NULL,
  `authority` int(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES ('1', 'admin', 'admin', '0');
INSERT INTO `admin` VALUES ('2', 'Matin', '123', '1');
INSERT INTO `admin` VALUES ('3', 'Lily', '123', '1');
INSERT INTO `admin` VALUES ('4', 'Jarves', '123', '1');

-- ----------------------------
-- Table structure for dass21
-- ----------------------------
DROP TABLE IF EXISTS `dass21`;
CREATE TABLE `dass21` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '问卷id',
  `userid` int(11) NOT NULL,
  `time` datetime DEFAULT NULL,
  `answer1` int(2) DEFAULT NULL,
  `answer2` int(2) DEFAULT NULL,
  `answer3` int(2) DEFAULT NULL,
  `answer4` int(2) DEFAULT NULL,
  `answer5` int(2) DEFAULT NULL,
  `answer6` int(2) DEFAULT NULL,
  `answer7` int(2) DEFAULT NULL,
  `answer8` int(2) DEFAULT NULL,
  `answer9` int(2) DEFAULT NULL,
  `answer10` int(2) DEFAULT NULL,
  `answer11` int(2) DEFAULT NULL,
  `answer12` int(2) DEFAULT NULL,
  `answer13` int(2) DEFAULT NULL,
  `answer14` int(2) DEFAULT NULL,
  `answer15` int(2) DEFAULT NULL,
  `answer16` int(2) DEFAULT NULL,
  `answer17` int(2) DEFAULT NULL,
  `answer18` int(2) DEFAULT NULL,
  `answer19` int(2) DEFAULT NULL,
  `answer20` int(2) DEFAULT NULL,
  `answer21` int(2) DEFAULT NULL,
  `depression` int(4) DEFAULT NULL,
  `anxiety` int(4) DEFAULT NULL,
  `stress` int(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=508 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for history

-- ----------------------------
DROP TABLE IF EXISTS `history`;
CREATE TABLE `history` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `userid` int(11) DEFAULT NULL,
  `time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of history
-- ----------------------------

-- ----------------------------
-- Table structure for novack
-- ----------------------------
DROP TABLE IF EXISTS `novack`;
CREATE TABLE `novack` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) NOT NULL,
  `time` datetime DEFAULT NULL,
  `answer1` int(2) DEFAULT NULL,
  `answer2` int(2) DEFAULT NULL,
  `answer3` int(2) DEFAULT NULL,
  `answer4` int(2) DEFAULT NULL,
  `answer5` int(2) DEFAULT NULL,
  `answer6` int(2) DEFAULT NULL,
  `answer7` int(2) DEFAULT NULL,
  `answer8` int(2) DEFAULT NULL,
  `answer9` int(2) DEFAULT NULL,
  `answer10` int(2) DEFAULT NULL,
  `answer11` int(2) DEFAULT NULL,
  `answer12` int(2) DEFAULT NULL,
  `answer13` int(2) DEFAULT NULL,
  `answer14` int(2) DEFAULT NULL,
  `answer15` int(2) DEFAULT NULL,
  `answer16` int(2) DEFAULT NULL,
  `answer17` int(2) DEFAULT NULL,
  `answer18` int(2) DEFAULT NULL,
  `answer19` int(2) DEFAULT NULL,
  `answer20` int(2) DEFAULT NULL,
  `answer21` int(2) DEFAULT NULL,
  `answer22` int(2) DEFAULT NULL,
  `answer23` int(2) DEFAULT NULL,
  `answer24` int(2) DEFAULT NULL,
  `answer25` int(2) DEFAULT NULL,
  `sum` int(3) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=505 DEFAULT CHARSET=utf8;

-- ----------------------------


-- ----------------------------
-- Table structure for sas
-- ----------------------------
DROP TABLE IF EXISTS `sas`;
CREATE TABLE `sas` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '问卷id',
  `userid` int(11) NOT NULL,
  `time` datetime DEFAULT NULL,
  `answer1` int(2) DEFAULT NULL,
  `answer2` int(2) DEFAULT NULL,
  `answer3` int(2) DEFAULT NULL,
  `answer4` int(2) DEFAULT NULL,
  `answer5` int(2) DEFAULT NULL,
  `answer6` int(2) DEFAULT NULL,
  `answer7` int(2) DEFAULT NULL,
  `answer8` int(2) DEFAULT NULL,
  `answer9` int(2) DEFAULT NULL,
  `answer10` int(2) DEFAULT NULL,
  `answer11` int(2) DEFAULT NULL,
  `answer12` int(2) DEFAULT NULL,
  `answer13` int(2) DEFAULT NULL,
  `answer14` int(2) DEFAULT NULL,
  `answer15` int(2) DEFAULT NULL,
  `answer16` int(2) DEFAULT NULL,
  `answer17` int(2) DEFAULT NULL,
  `answer18` int(2) DEFAULT NULL,
  `answer19` int(2) DEFAULT NULL,
  `answer20` int(2) DEFAULT NULL,
  `sum` int(2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=604 DEFAULT CHARSET=utf8;

-- ----------------------------


-- ----------------------------
-- Table structure for scl90
-- ----------------------------
DROP TABLE IF EXISTS `scl90`;
CREATE TABLE `scl90` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '问卷id',
  `userid` int(11) NOT NULL,
  `time` datetime DEFAULT NULL,
  `answer1` int(2) DEFAULT NULL,
  `answer2` int(2) DEFAULT NULL,
  `answer3` int(2) DEFAULT NULL,
  `answer4` int(2) DEFAULT NULL,
  `answer5` int(2) DEFAULT NULL,
  `answer6` int(2) DEFAULT NULL,
  `answer7` int(2) DEFAULT NULL,
  `answer8` int(2) DEFAULT NULL,
  `answer9` int(2) DEFAULT NULL,
  `answer10` int(2) DEFAULT NULL,
  `answer11` int(2) DEFAULT NULL,
  `answer12` int(2) DEFAULT NULL,
  `answer13` int(2) DEFAULT NULL,
  `answer14` int(2) DEFAULT NULL,
  `answer15` int(2) DEFAULT NULL,
  `answer16` int(2) DEFAULT NULL,
  `answer17` int(2) DEFAULT NULL,
  `answer18` int(2) DEFAULT NULL,
  `answer19` int(2) DEFAULT NULL,
  `answer20` int(2) DEFAULT NULL,
  `answer21` int(2) DEFAULT NULL,
  `answer22` int(2) DEFAULT NULL,
  `answer23` int(2) DEFAULT NULL,
  `answer24` int(2) DEFAULT NULL,
  `answer25` int(2) DEFAULT NULL,
  `answer26` int(2) DEFAULT NULL,
  `answer27` int(2) DEFAULT NULL,
  `answer28` int(2) DEFAULT NULL,
  `answer29` int(2) DEFAULT NULL,
  `answer30` int(2) DEFAULT NULL,
  `answer31` int(2) DEFAULT NULL,
  `answer32` int(2) DEFAULT NULL,
  `answer33` int(2) DEFAULT NULL,
  `answer34` int(2) DEFAULT NULL,
  `answer35` int(2) DEFAULT NULL,
  `answer36` int(2) DEFAULT NULL,
  `answer37` int(2) DEFAULT NULL,
  `answer38` int(2) DEFAULT NULL,
  `answer39` int(2) DEFAULT NULL,
  `answer40` int(2) DEFAULT NULL,
  `answer41` int(2) DEFAULT NULL,
  `answer42` int(2) DEFAULT NULL,
  `answer43` int(2) DEFAULT NULL,
  `answer44` int(2) DEFAULT NULL,
  `answer45` int(2) DEFAULT NULL,
  `answer46` int(2) DEFAULT NULL,
  `answer47` int(2) DEFAULT NULL,
  `answer48` int(2) DEFAULT NULL,
  `answer49` int(2) DEFAULT NULL,
  `answer50` int(2) DEFAULT NULL,
  `answer51` int(2) DEFAULT NULL,
  `answer52` int(2) DEFAULT NULL,
  `answer53` int(2) DEFAULT NULL,
  `answer54` int(2) DEFAULT NULL,
  `answer55` int(2) DEFAULT NULL,
  `answer56` int(2) DEFAULT NULL,
  `answer57` int(2) DEFAULT NULL,
  `answer58` int(2) DEFAULT NULL,
  `answer59` int(2) DEFAULT NULL,
  `answer60` int(2) DEFAULT NULL,
  `answer61` int(2) DEFAULT NULL,
  `answer62` int(2) DEFAULT NULL,
  `answer63` int(2) DEFAULT NULL,
  `answer64` int(2) DEFAULT NULL,
  `answer65` int(2) DEFAULT NULL,
  `answer66` int(2) DEFAULT NULL,
  `answer67` int(2) DEFAULT NULL,
  `answer68` int(2) DEFAULT NULL,
  `answer69` int(2) DEFAULT NULL,
  `answer70` int(2) DEFAULT NULL,
  `answer71` int(2) DEFAULT NULL,
  `answer72` int(2) DEFAULT NULL,
  `answer73` int(2) DEFAULT NULL,
  `answer74` int(2) DEFAULT NULL,
  `answer75` int(2) DEFAULT NULL,
  `answer76` int(2) DEFAULT NULL,
  `answer77` int(2) DEFAULT NULL,
  `answer78` int(2) DEFAULT NULL,
  `answer79` int(2) DEFAULT NULL,
  `answer80` int(2) DEFAULT NULL,
  `answer81` int(2) DEFAULT NULL,
  `answer82` int(2) DEFAULT NULL,
  `answer83` int(2) DEFAULT NULL,
  `answer84` int(2) DEFAULT NULL,
  `answer85` int(2) DEFAULT NULL,
  `answer86` int(2) DEFAULT NULL,
  `answer87` int(2) DEFAULT NULL,
  `answer88` int(2) DEFAULT NULL,
  `answer89` int(2) DEFAULT NULL,
  `answer90` int(2) DEFAULT NULL,
  `sumscore` int(3) DEFAULT NULL,
  `pos_symptom_count` int(4) DEFAULT NULL,
  `neg_symptom_count` int(4) DEFAULT NULL,
  `pos_symptom_avgscore` float(6,1) DEFAULT NULL,
  `somatization` int(2) DEFAULT NULL,
  `obsessive` int(2) DEFAULT NULL,
  `interpersonal` int(2) DEFAULT NULL,
  `depression` int(2) DEFAULT NULL,
  `anxiety` int(2) DEFAULT NULL,
  `hostility` int(2) DEFAULT NULL,
  `phobic` int(2) DEFAULT NULL,
  `paranoid` int(2) DEFAULT NULL,
  `psychoticism` int(2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=508 DEFAULT CHARSET=utf8;



-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `password` varchar(20) NOT NULL,
  `authority` int(1) NOT NULL DEFAULT '2',
  `age` int(2) DEFAULT NULL,
  `sex` int(1) DEFAULT NULL,
  `work` char(4) DEFAULT NULL,
  `location` varchar(30) DEFAULT '' COMMENT '所在城市',
  `salary` int(2) DEFAULT NULL,
  `marriage` int(2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=522 DEFAULT CHARSET=utf8;

-- ----------------------------
