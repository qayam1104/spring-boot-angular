package com.qayam.employeeservice.web;


import com.qayam.employeeservice.domain.Employees;
import com.qayam.employeeservice.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/employees")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @RequestMapping("/all")
    public List<Employees> getEmployees() {
        List<Employees> employeeDetailList = new ArrayList<>();
        for (Employees emp : employeeRepository.findAll()) {
            employeeDetailList.add(emp);
        }
        return employeeDetailList;
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping("/dept/{id}")
    public List<Employees> getEmployeesByDeptId(@PathVariable("id") String id) {
        List<Employees> employeeDetailList = new ArrayList<>();
        for (Employees emp : employeeRepository.getEmpByDeptId(id)) {
            employeeDetailList.add(emp);
        }
        return employeeDetailList;
    }
}
