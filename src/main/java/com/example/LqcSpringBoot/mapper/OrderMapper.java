package com.example.LqcSpringBoot.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.LqcSpringBoot.model.Orders;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface OrderMapper extends BaseMapper<Orders> {
    List selectDataByDateAndSsxs(String month, String ssxs);
    List selectDataByDateAndSsxssales(String month, String ssxs);
    List selectDataByDateAndSsxsbalance(String month, String ssxs);
    List selectDataByDateAndSsxsnumorder(String month, String ssxs);

    List<Map<String,Object>> selectxsblance(String month, String ssxs);
    Integer selectTjdataB();
    List<Orders> selectOrderByCid(String id);
}
