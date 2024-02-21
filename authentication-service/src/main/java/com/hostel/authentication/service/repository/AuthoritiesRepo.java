package com.hostel.authentication.service.repository;

import com.hostel.authentication.service.entity.Authorities;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthoritiesRepo extends JpaRepository<Authorities,String> {
}
