package com.openclassrooms.mddapi.dto.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TopicResponse {
    private Long id;
    private String title;
    private String description;
}
