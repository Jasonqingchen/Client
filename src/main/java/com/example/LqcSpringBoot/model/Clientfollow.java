package com.example.LqcSpringBoot.model;

import java.io.Serializable;

public class Clientfollow implements Serializable {
    private String id;

    private String name;

    private String email;

    private String ed;

    private String sex;

    private String gjdate;

    private String date;

    private String xydj;

    private String address;

    private String phone;

    private String balance;
    private String flag;
    private String zq;
    private String bz;

    private String ssxs;
    private String cid;




    private static final long serialVersionUID = 1L;

    public String getCid() {
        return cid;
    }

    public void setCid(String cid) {
        this.cid = cid;
    }

    public String getSsxs() {
        return ssxs;
    }

    public void setSsxs(String ssxs) {
        this.ssxs = ssxs;
    }

    public String getBz() {
        return bz;
    }

    public void setBz(String bz) {
        this.bz = bz;
    }

    public String getZq() {
        return zq;
    }

    public void setZq(String zq) {
        this.zq = zq;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id == null ? null : id.trim();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFlag() {
        return flag;
    }

    public void setFlag(String flag) {
        this.flag = flag;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getEd() {
        return ed;
    }

    public void setEd(String ed) {
        this.ed = ed;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getGjdate() {
        return gjdate;
    }

    public void setGjdate(String gjdate) {
        this.gjdate = gjdate;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getXydj() {
        return xydj;
    }

    public void setXydj(String xydj) {
        this.xydj = xydj;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getBalance() {
        return balance;
    }

    public void setBalance(String balance) {
        this.balance = balance;
    }
}