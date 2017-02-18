SELECT * FROM users;
select * FROM friendships;

INSERT INTO users(id, first_name, last_name, created_at, updated_at)
VALUE (1, "Chris", "Baker", NOW(), NOW());
INSERT INTO users(id, first_name, last_name, created_at, updated_at)
VALUE (2, "Diana", "Smith", NOW(), NOW());
INSERT INTO users(id, first_name, last_name, created_at, updated_at)
VALUE (3, "James", "Johnson", NOW(), NOW());
INSERT INTO users(id, first_name, last_name, created_at, updated_at)
VALUE (4, "Jessica", "Davidson", NOW(), NOW());

INSERT INTO friendships(id, user_id, friend_id, created_at, updated_at)
Value(1,1,4,NOW(),NOW());
INSERT INTO friendships(id, user_id, friend_id, created_at, updated_at)
Value(2,1,3,NOW(),NOW());
INSERT INTO friendships(id, user_id, friend_id, created_at, updated_at)
Value(3,1,2,NOW(),NOW());
INSERT INTO friendships(id, user_id, friend_id, created_at, updated_at)
Value(4,2,1,NOW(),NOW());
INSERT INTO friendships(id, user_id, friend_id, created_at, updated_at)
Value(5,3,1,NOW(),NOW());
INSERT INTO friendships(id, user_id, friend_id, created_at, updated_at)
Value(6,4,1,NOW(),NOW());

SELECT users.first_name, users.last_name, users2.first_name AS friend_first_name, users2.last_name AS friend_last_name
FROM users
LEFT JOIN friendships ON users.id = friendships.user_id
LEFT JOIN users AS users2 ON users2.id = friendships.friend_id
ORDER BY users.first_name ASC, friend_first_name DESC;

