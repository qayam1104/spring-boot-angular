package com.qayam.employeeservice.domain;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.math.BigDecimal;
import java.sql.Date;

@Data
@Entity
@NoArgsConstructor
public class Employees {
    @Id
    @Column(name="EMPLOYEE_ID")
    private Integer epmloyee_id;
    private String first_name;
    private String last_name;
    private String email;
    private String phone_number;
    private Date hire_date;
    private String job_id;
    private BigDecimal salary;
    private BigDecimal COMMISSION_PCT;
    private Integer MANAGER_ID;
    private Integer DEPARTMENT_ID;


}
