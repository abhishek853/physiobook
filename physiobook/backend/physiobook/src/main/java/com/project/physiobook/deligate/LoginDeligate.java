package com.project.physiobook.deligate;

import com.project.physiobook.helper.LoginHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
public class LoginDeligate {

    @Autowired
    private LoginHelper loginHelper;

    public String loginValidCheck(String loginId,String password){
        return loginHelper.logincheck(loginId,password);
    }
}
