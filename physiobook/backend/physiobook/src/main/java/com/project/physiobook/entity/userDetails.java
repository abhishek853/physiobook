package com.project.physiobook.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table
@Data
public class userDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "LOGINID")
    private String loginId;

    @Column(name = "PASSWORD")
    private String password;
}
