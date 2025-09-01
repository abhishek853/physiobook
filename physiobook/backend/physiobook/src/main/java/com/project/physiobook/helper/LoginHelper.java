package com.project.physiobook.helper;

import com.project.physiobook.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class LoginHelper {

    @Autowired
    private LoginRepository loginRepository;

    public String logincheck(String loginId,String password ){
        return loginRepository.loginCheck(loginId,password);
    }
}
