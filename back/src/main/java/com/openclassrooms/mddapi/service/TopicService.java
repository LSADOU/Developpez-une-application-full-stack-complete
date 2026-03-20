package com.openclassrooms.mddapi.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.openclassrooms.mddapi.dto.response.TopicResponse;
import com.openclassrooms.mddapi.entity.Topic;
import com.openclassrooms.mddapi.repository.TopicRepository;

@Service
public class TopicService {

    private TopicRepository topicRepository;

    public TopicService(TopicRepository tr){
        this.topicRepository = tr;
    }

    public List<TopicResponse> allTopics(){
        List<Topic> allTopics = this.topicRepository.findAll();
        return allTopics.stream().map(topic -> {
            TopicResponse topicResponse = new TopicResponse();
            topicResponse.setTitle(topic.getTitle());
            topicResponse.setDescription(topic.getDescription());
            topicResponse.setId(topic.getId());
            return topicResponse;
        }).collect(Collectors.toList());
    }
}
