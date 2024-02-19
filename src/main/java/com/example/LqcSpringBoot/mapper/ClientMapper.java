package com.example.LqcSpringBoot.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import com.example.LqcSpringBoot.model.Client;
import org.apache.ibatis.annotations.Param;

import java.util.List;


@Mapper
public interface ClientMapper extends BaseMapper<Client> {

    Integer deleteById();

    List<Client> selectBytj(@Param("name") String name, @Param("phone") String phone, @Param("xydj") String xydj, @Param("ssxs") String ssxs);

}
