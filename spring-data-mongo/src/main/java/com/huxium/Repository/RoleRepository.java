package com.huxium.Repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.huxium.entity.ERole;
import com.huxium.entity.Role;

public interface RoleRepository extends MongoRepository<Role, String> {
	//optional Accept les null
	 Optional<Role> findByName(ERole name);
}
