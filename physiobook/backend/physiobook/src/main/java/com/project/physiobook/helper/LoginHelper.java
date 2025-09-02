package com.project.physiobook.helper;

import com.project.physiobook.entity.userDetails;
import com.project.physiobook.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LoginHelper {

    @Autowired
    private UserRepository userRepository;

    public String loginCheck(String loginId, String password) {
        Optional<userDetails> user = userRepository.findByLoginIdAndPassword(loginId, password);
        if(user.isPresent()){
            return "user is Present";
        }
        else {
            return "user not present";
        }
    }
}
