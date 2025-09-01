package com.project.physiobook.repository;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

@Component
public class LoginRepository {

    public String loginCheck(String loginId,String password){
        if(loginId.equals("admin")&&password.equals("1234")){
            return "login successful";
        }else {
            return "error";
        }
    }
}
