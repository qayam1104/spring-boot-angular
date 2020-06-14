package com.qayam.employeeservice.repository;

import com.qayam.employeeservice.domain.Employees;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface EmployeeRepository extends CrudRepository<Employees,Integer> {
    @Query("Select a from Employees as a where Department_id=?1")
    List<Employees> getEmpByDeptId(String id);
}
