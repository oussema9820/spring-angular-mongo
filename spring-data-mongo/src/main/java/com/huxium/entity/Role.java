package com.huxium.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.Objects;
import java.util.Set;



import org.apache.catalina.User;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Document(collection = "roles")
public class Role {
  @Id
  private String id;

  private ERole name;



  }
