package com.project.physiobook.repository;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Repository
public class LoginRepository {

    public String loginCheck(String loginId,String password){
        if(loginId.equals("admin")&&password.equals("1234")){
            return "login succesful";
        }else {
            return "error";
        }
    }
}
