package com.project.physiobook.repository;

import com.project.physiobook.entity.userDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository<userDetails, Long> {
    Optional<userDetails> findByLoginIdAndPassword(String loginId, String password);
}
