package com.example.LqcSpringBoot.controller;

import com.example.LqcSpringBoot.mapper.ClientMapper;
import com.example.LqcSpringBoot.model.Client;
import org.apache.poi.hssf.record.FormatRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import sun.text.resources.FormatData;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.time.temporal.Temporal;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.TimeUnit;

/**
 * 跳转page
 * liuqingchen 2024/02/04
 */
@org.springframework.stereotype.Controller
public class Controller {
    @Autowired
    private ClientMapper clientMapper;

    /**
     * 跳转
     */
    @RequestMapping("/clients")
    public String clients() {
        return "client";
    }

    /**
     * 后台保存
     */
    @RequestMapping("/addhtdata")
    @ResponseBody
    public Integer addhtdata(Client client) {
        SimpleDateFormat  formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        client.setId(UUID.randomUUID().toString());
        client.setDate(formatter.format(new Date()));
        client.setGjdate(formatter.format(new Date()));
        return clientMapper.insert(client);
    }

    /**
     * follow
     */
    @RequestMapping("/follow")
    @ResponseBody
    public Integer follow(Client client) {
        SimpleDateFormat  formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Client cl = clientMapper.selectById(client.getId());
        cl.setBz(client.getBz());
        cl.setGjdate(formatter.format(new Date()));
        cl.setFlag("2");
        return clientMapper.updateById(cl);
    }

    /**
     * 后台查询
     */
    @RequestMapping("/listdata")
    @ResponseBody
    public List<Client> listdata() {
        SimpleDateFormat  formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date date = new Date();
        List<Client> clients = clientMapper.selectList(null);
        clients.forEach(cl->{
            Date parse = null;
            try {
                parse = formatter.parse(cl.getGjdate());
            } catch (ParseException e) {
                throw new RuntimeException(e);
            }
            //long hoursBetween = ChronoUnit.HOURS.between((Temporal) parse,(Temporal)date);
            long time = date.getTime();
            long l = time - parse.getTime();
            long hours = l / 3600000;
            if (hours>72){
                cl.setFlag("1");
            } else {
                cl.setFlag("2");
            }
            clientMapper.updateById(cl);
        });
        return clientMapper.selectList(null);
    }

    /**
     * 后台删除
     */
    @RequestMapping("/delete")
    @ResponseBody
    public Integer delete(Client Client) {
        Integer count = clientMapper.deleteById(Client.getId());
        return count;
    }

    /**
     * 条件搜索
     */
    @RequestMapping("/search")
    @ResponseBody
    public List<Client> seach(Client client) {

        return clientMapper.selectBytj((String) client.getName(), (String) client.getPhone(),(String) client.getXydj(),(String) client.getSsxs());
    }






}
