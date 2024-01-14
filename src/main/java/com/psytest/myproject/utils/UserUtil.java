package com.psytest.myproject.utils;


import com.psytest.myproject.bean.User;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.util.*;

/**
 * 生成用户工具类
 */
public class UserUtil {
    private static final String DEFAULT_LOCATION = "北京 大兴";
    private static void createUser(int count) throws Exception {
        List<User> users=new ArrayList<>();
        for(int i=0;i<count;i++){
            User user=new User();
            user.setUsername("testuser"+i);
            user.setPassword("testuser"+i);

            Random random = new Random();
            user.setAuthority(random.nextInt(3));
            user.setAge(random.nextInt(43) + 18);//生成 18 到 60 之间的年龄
            user.setGender(random.nextInt(2)+1);//1 表示男性，2 表示女性
            user.setLocation(DEFAULT_LOCATION);
            user.setSalary(random.nextInt(100000));
            user.setIsCitizen(random.nextInt(2));//1 表示是城镇，0 表示不是
            char randomLetter = (char) ('A' + random.nextInt(26));
            user.setMajor(String.valueOf(randomLetter));

            users.add(user);
        }
        Connection connection=getCon();
        String sql1="insert into user(username,password,authority,age,gender,major,location,salary,isCitizen) values(?,?,?,?,?,?,?,?,?)";
//        String sql2="insert into user_role(user_id,role_id) values(?,?)";
        PreparedStatement pst1=connection.prepareStatement(sql1);
//        PreparedStatement pst2=connection.prepareStatement(sql2);
        for(int i=0;i<users.size();i++){
            User user=users.get(i);
            pst1.setString(1,user.getUsername());
            pst1.setString(2,user.getPassword());
            pst1.setInt(3,user.getAuthority());
            pst1.setInt(4,user.getAge());
            pst1.setInt(5,user.getGender());
            pst1.setString(6,user.getMajor());
            pst1.setString(7, user.getLocation());
            pst1.setInt(8,user.getSalary());
            pst1.setInt(9,user.getIsCitizen());
            pst1.addBatch();
        }
        pst1.executeBatch();
        pst1.clearParameters();
        connection.close();
        System.out.println("insert to db");

    }



    private static Connection getCon() throws Exception{
        String url ="jdbc:mysql://localhost:3306/psytest";
        String username ="psytest";
        String password ="Psytest123";
        String driver="com.mysql.cj.jdbc.Driver";
        Class.forName(driver);
        return DriverManager.getConnection(url,username,password);
    }



    public static void main(String[] args) throws Exception {
        createUser(1000);

    }

}

