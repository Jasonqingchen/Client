package com.example.LqcSpringBoot.model;

import java.io.Serializable;

public class Orders implements Serializable {
    private String id;

    private String name;

    private String cid;

    private String date;

    private String bz;
    private String money;
    private String balance;
    private String ssxs;

    private String month;
    private String pay;

    private static final long serialVersionUID = 1L;

    public String getPay() {
        return pay;
    }

    public void setPay(String pay) {
        this.pay = pay;
    }

    public String getMonth() {
        return month;
    }

    public void setMonth(String month) {
        this.month = month;
    }

    public String getBalance() {
        return balance;
    }

    public void setBalance(String balance) {
        this.balance = balance;
    }

    public String getBz() {
        return bz;
    }

    public void setBz(String bz) {
        this.bz = bz;
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


    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getCid() {
        return cid;
    }

    public void setCid(String cid) {
        this.cid = cid;
    }


    public String getMoney() {
        return money;
    }

    public void setMoney(String money) {
        this.money = money;
    }

    public String getSsxs() {
        return ssxs;
    }

    public void setSsxs(String ssxs) {
        this.ssxs = ssxs;
    }
}