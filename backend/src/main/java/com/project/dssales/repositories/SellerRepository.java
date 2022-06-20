package com.project.dssales.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.project.dssales.entities.Seller;



@Repository
public interface SellerRepository extends JpaRepository<Seller, Long> {

}
