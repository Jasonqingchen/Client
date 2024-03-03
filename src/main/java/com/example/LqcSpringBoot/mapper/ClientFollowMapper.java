package com.example.LqcSpringBoot.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.LqcSpringBoot.model.Clientfollow;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ClientFollowMapper extends BaseMapper<Clientfollow> {
    List<Clientfollow> selectByCid(String id);

}
