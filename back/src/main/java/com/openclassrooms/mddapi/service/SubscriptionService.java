package com.openclassrooms.mddapi.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.openclassrooms.mddapi.dto.response.TopicResponse;
import com.openclassrooms.mddapi.entity.Topic;
import com.openclassrooms.mddapi.entity.User;
import com.openclassrooms.mddapi.repository.TopicRepository;
import com.openclassrooms.mddapi.repository.UserRepository;

@Service
public class SubscriptionService {

    private UserRepository userRepository;
    private TopicRepository topicRepository;
    
    public SubscriptionService(UserRepository ur, TopicRepository tr){
        this.userRepository = ur;
        this.topicRepository = tr;
    }

    public List<TopicResponse> getSubscriptions(String email){
        Optional<User> foundUser = this.userRepository.findByEmail(email);
        if(foundUser.isPresent()){
            return foundUser.get().getSuscribedTopics().stream().map(topic -> {
                TopicResponse topicResponse = new TopicResponse();
                topicResponse.setTitle(topic.getTitle());
                topicResponse.setDescription(topic.getDescription());
                topicResponse.setId(topic.getId());
                return topicResponse;
            }).collect(Collectors.toList());
        }else{
            throw new RuntimeException("Utilisateur "+email+" non trouvé lors de la récupération des abonnements");
        }
    }

    public String suscribe(String email, Long topicId){
        Optional<User> foundUser = this.userRepository.findByEmail(email);
        if(foundUser.isPresent()){
            Optional<Topic> foundTopic = this.topicRepository.findById(topicId);
            if(foundTopic.isPresent()){
                foundUser.get().getSuscribedTopics().add(foundTopic.get());
                this.userRepository.save(foundUser.get());
                return "Utilisateur "+foundUser.get().getUsername()+" bien abonné au thème "+ foundTopic.get().getTitle();
            }else{
                throw new RuntimeException("Thème "+topicId+" non trouvé lors de l'abonnements");
            }
        }else{
            throw new RuntimeException("Utilisateur "+email+" non trouvé lors de l'abonnements");
        }
    }

    public String unsuscribe(String email, Long topicId){
        Optional<User> foundUser = this.userRepository.findByEmail(email);
        if(foundUser.isPresent()){
            Optional<Topic> foundTopic = this.topicRepository.findById(topicId);
            if(foundTopic.isPresent()){
                foundUser.get().getSuscribedTopics().remove(foundTopic.get());
                this.userRepository.save(foundUser.get());
                return "Utilisateur "+foundUser.get().getUsername()+" bien désabonné au thème "+ foundTopic.get().getTitle();
            }else{
                throw new RuntimeException("Thème "+topicId+" non trouvé lors de l'abonnements");
            }
        }else{
            throw new RuntimeException("Utilisateur "+email+" non trouvé lors de l'abonnements");
        }
    }

}
