INSERT INTO users (name, email, password)
VALUES ('Bita', 'bita@mail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Alex', 'cosmic@mail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Harry', 'hp@mail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');

INSERT INTO properties (owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, city, province, post_code)
VALUES (1, 'Farm House', 'description', 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg', 100, 2, 2, 4, 'Canada', 'Highway 8', 'ORANGEVILLE', 'ON', 'L3F T7T'),
(2, 'CN Tower Inn', 'description', 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg', 950, 2, 2, 4, 'Canada', 'Bremner Blvd', 'TORONTO', 'ON', 'M5V 3L9'),
(3, 'Grand Georgian', 'description', 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg', 100, 3, 3, 5, 'Canada', '156 Jozo Weider Blvd,', 'ORANGEVILLE', 'ON', 'L9Y 0V2');

INSERT INTO reservations (start_date, end_date, property_id, guest_id)
VALUES ('2018-09-15', '2018-09-26', 3, 3),
('2018-09-15', '2018-09-26', 2, 1),
('2018-09-15', '2018-09-26', 1, 2);

INSERT INTO property_reviews (guest_id, property_id, reservation_id, rating, message)
VALUES (1, 2, 10, 3, 'messages'), 
(2, 2, 5, 4, 'messages'),
(3, 1, 7, 5, 'messages');