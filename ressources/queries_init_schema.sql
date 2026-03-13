CREATE TABLE IF NOT EXISTS users(
	id BIGINT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at timestamp,
    updated_at timestamp
);

CREATE TABLE IF NOT EXISTS topics(
	id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS posts(
	id BIGINT AUTO_INCREMENT PRIMARY KEY,
    author_id BIGINT NOT NULL,
    FOREIGN KEY (author_id) REFERENCES users(id),
    topic_id BIGINT NOT NULL,
    FOREIGN KEY (topic_id) REFERENCES topics(id),
    title VARCHAR(255) NOT NULL,
	content TEXT NOT NULL,
    created_at timestamp
);

CREATE TABLE IF NOT EXISTS subscriptions(
	user_id BIGINT NOT NULL,
	topic_id BIGINT NOT NULL,
	PRIMARY KEY (user_id, topic_id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (topic_id) REFERENCES topics(id)
);

CREATE TABLE IF NOT EXISTS comments(
	id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    post_id BIGINT NOT NULL,
    FOREIGN KEY (post_id) REFERENCES posts(id),
    content TEXT NOT NULL
);