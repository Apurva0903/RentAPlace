INSERT INTO member(email, name, password, status, created_at, updated_at) VALUES 
('admin@rentaplace.com', 'Admin', '$2a$10$n32EL8n2AN/L40gbWMl3AOIyQNmXXNcaeqyBFrKnN50itVQNt91DW', 'ACTIVE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('owner@rentaplace.com', 'Owner', '$2a$10$n32EL8n2AN/L40gbWMl3AOIyQNmXXNcaeqyBFrKnN50itVQNt91DW', 'ACTIVE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('customer@rentaplace.com', 'John Doe', '$2a$10$n32EL8n2AN/L40gbWMl3AOIyQNmXXNcaeqyBFrKnN50itVQNt91DW', 'ACTIVE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO role(name, created_at, updated_at) VALUES 
('Admin', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Owner', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Customer', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO member_role(member_id, role_id) VALUES 
(1, 1), (2, 2), (3, 3);

-- Property 1: Luxury Villa in Goa
INSERT INTO property (owner_id, title, description, price, location, latitude, longitude, category, sub_category, type, number_of_room, offer_status, status, created_at, updated_at) VALUES 
(2, 'Seaside Luxury Villa', 'Experience the ultimate luxury in this 5-bedroom beachfront villa with private pool and garden.', 55000000, 'Candolim, Goa', 15.5164, 73.7667, 'House', 'Villa', 'SELL', 5, 'AVAILABLE', 'ACTIVE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Property 2: Penthouse in Mumbai
INSERT INTO property (owner_id, title, description, price, location, latitude, longitude, category, sub_category, type, number_of_room, offer_status, status, created_at, updated_at) VALUES 
(2, 'Skyline Penthouse', 'Breathtaking views of the Mumbai skyline from this 40th-floor penthouse. Ultra-modern amenities.', 85000000, 'Bandra West, Mumbai', 19.0596, 72.8295, 'House', 'Apartment', 'SELL', 4, 'AVAILABLE', 'ACTIVE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Property 3: Apartment in Bangalore (FIXED IMAGE)
INSERT INTO property (owner_id, title, description, price, location, latitude, longitude, category, sub_category, type, number_of_room, offer_status, status, created_at, updated_at) VALUES 
(2, 'Greenfield Apartment', 'Spacious 3BHK apartment in the heart of the IT hub. Walking distance to major tech parks.', 12500000, 'Whitefield, Bangalore', 12.9698, 77.7500, 'House', 'Apartment', 'SELL', 3, 'AVAILABLE', 'ACTIVE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Property 4: Studio in Delhi
INSERT INTO property (owner_id, title, description, price, location, latitude, longitude, category, sub_category, type, number_of_room, offer_status, status, created_at, updated_at) VALUES 
(2, 'Modern Studio Loft', 'Perfect for young professionals. Fully furnished studio with metro connectivity.', 4500000, 'Hauz Khas, New Delhi', 28.5494, 77.2001, 'House', 'Studio', 'RENT', 1, 'AVAILABLE', 'ACTIVE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Property 5: Farmhouse in Lonavala
INSERT INTO property (owner_id, title, description, price, location, latitude, longitude, category, sub_category, type, number_of_room, offer_status, status, created_at, updated_at) VALUES 
(2, 'Serene Farmhouse', 'Escape the city chaos in this peaceful farmhouse surrounded by lush greenery.', 35000000, 'Lonavala, Maharashtra', 18.7548, 73.4056, 'House', 'Farmhouse', 'SELL', 4, 'AVAILABLE', 'ACTIVE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Property 6: Villa in Kerala
INSERT INTO property (owner_id, title, description, price, location, latitude, longitude, category, sub_category, type, number_of_room, offer_status, status, created_at, updated_at) VALUES 
(2, 'Backwater Bliss Villa', 'Traditional Kerala architecture meets modern luxury on the banks of a serene backwater.', 42000000, 'Alleppey, Kerala', 9.4981, 76.3388, 'House', 'Villa', 'SELL', 4, 'AVAILABLE', 'ACTIVE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Property 7: Apartment in Hyderabad
INSERT INTO property (owner_id, title, description, price, location, latitude, longitude, category, sub_category, type, number_of_room, offer_status, status, created_at, updated_at) VALUES 
(2, 'Hitech City Heights', 'Premium 3BHK in Hitech City with club house and swimming pool access.', 15000000, 'Hitech City, Hyderabad', 17.4401, 78.3489, 'House', 'Apartment', 'SELL', 3, 'AVAILABLE', 'ACTIVE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Property 8: Cottage in Manali
INSERT INTO property (owner_id, title, description, price, location, latitude, longitude, category, sub_category, type, number_of_room, offer_status, status, created_at, updated_at) VALUES 
(2, 'Snow View Cottage', 'Charming wooden cottage with panoramic views of the Himalayas. Ideal vacation home.', 28000000, 'Manali, Himachal Pradesh', 32.2396, 77.1887, 'House', 'Cottage', 'SELL', 3, 'AVAILABLE', 'ACTIVE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Property 9: Flat in Pune
INSERT INTO property (owner_id, title, description, price, location, latitude, longitude, category, sub_category, type, number_of_room, offer_status, status, created_at, updated_at) VALUES 
(2, 'Koregaon Park Residence', 'Stylish 2BHK flat in the most happening neighborhood of Pune.', 11000000, 'Koregaon Park, Pune', 18.5362, 73.8940, 'House', 'Apartment', 'RENT', 2, 'AVAILABLE', 'ACTIVE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Property 10: Bungalow in Jaipur
INSERT INTO property (owner_id, title, description, price, location, latitude, longitude, category, sub_category, type, number_of_room, offer_status, status, created_at, updated_at) VALUES 
(2, 'Royal Heritage Bungalow', 'Experience royalty in this heritage-style bungalow with a large courtyard.', 60000000, 'C-Scheme, Jaipur', 26.9124, 75.7873, 'House', 'Bungalow', 'SELL', 6, 'AVAILABLE', 'ACTIVE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Property 11: Sea View Apartment in Chennai
INSERT INTO property (owner_id, title, description, price, location, latitude, longitude, category, sub_category, type, number_of_room, offer_status, status, created_at, updated_at) VALUES 
(2, 'Marina Bay View', 'Stunning sea view apartment on ECR road. Gated community with beach access.', 18000000, 'ECR, Chennai', 12.8996, 80.2520, 'House', 'Apartment', 'SELL', 3, 'AVAILABLE', 'ACTIVE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Property 12: Villa in Udaipur
INSERT INTO property (owner_id, title, description, price, location, latitude, longitude, category, sub_category, type, number_of_room, offer_status, status, created_at, updated_at) VALUES 
(2, 'Lake City Villa', 'Beautiful villa overlooking Lake Pichola. Peaceful and distinct.', 50000000, 'Udaipur, Rajasthan', 24.5854, 73.7125, 'House', 'Villa', 'SELL', 4, 'AVAILABLE', 'ACTIVE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Property 13: Service Apartment in Gurgaon
INSERT INTO property (owner_id, title, description, price, location, latitude, longitude, category, sub_category, type, number_of_room, offer_status, status, created_at, updated_at) VALUES 
(2, 'Cyber City Suites', 'Fully serviced luxury apartment for corporate stays.', 90000, 'Cyber City, Gurgaon', 28.4900, 77.0850, 'House', 'Apartment', 'RENT', 2, 'AVAILABLE', 'ACTIVE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Property 14: Coffee Estate Coorg
INSERT INTO property (owner_id, title, description, price, location, latitude, longitude, category, sub_category, type, number_of_room, offer_status, status, created_at, updated_at) VALUES 
(2, 'Misty Hills Estate', '5-acre coffee estate with a colonial bungalow.', 95000000, 'Madikeri, Coorg', 12.4244, 75.7382, 'House', 'Farmhouse', 'SELL', 5, 'AVAILABLE', 'ACTIVE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Property 15: Beach House in Pondicherry
INSERT INTO property (owner_id, title, description, price, location, latitude, longitude, category, sub_category, type, number_of_room, offer_status, status, created_at, updated_at) VALUES 
(2, 'French Colony House', 'Restored French colonial house in White Town, steps away from the promenade.', 40000000, 'White Town, Pondicherry', 11.9338, 79.8298, 'House', 'Villa', 'SELL', 3, 'AVAILABLE', 'ACTIVE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


-- Pictures (Using reliable Unsplash Image IDs)

-- 1. Goa Villa
INSERT INTO picture (property_id, url, name, size, image_key, created_at, updated_at) VALUES (1, 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80', 'v1.jpg', 100, 'k1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
-- 2. Mumbai Penthouse
INSERT INTO picture (property_id, url, name, size, image_key, created_at, updated_at) VALUES (2, 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80', 'p1.jpg', 100, 'k2', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
-- 3. Bangalore Apt (New Image)
INSERT INTO picture (property_id, url, name, size, image_key, created_at, updated_at) VALUES (3, 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80', 'b1.jpg', 100, 'k3', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
-- 4. Delhi Studio
INSERT INTO picture (property_id, url, name, size, image_key, created_at, updated_at) VALUES (4, 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80', 'd1.jpg', 100, 'k4', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
-- 5. Lonavala Farm
INSERT INTO picture (property_id, url, name, size, image_key, created_at, updated_at) VALUES (5, 'https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?w=800&q=80', 'l1.jpg', 100, 'k5', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
-- 6. Kerala Villa
INSERT INTO picture (property_id, url, name, size, image_key, created_at, updated_at) VALUES (6, 'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=800&q=80', 'k1.jpg', 100, 'k6', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
-- 7. Hyderabad Apt
INSERT INTO picture (property_id, url, name, size, image_key, created_at, updated_at) VALUES (7, 'https://images.unsplash.com/photo-1593696140826-c58b5414509f?w=800&q=80', 'h1.jpg', 100, 'k7', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
-- 8. Manali Cottage
INSERT INTO picture (property_id, url, name, size, image_key, created_at, updated_at) VALUES (8, 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&q=80', 'm1.jpg', 100, 'k8', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
-- 9. Pune Flat
INSERT INTO picture (property_id, url, name, size, image_key, created_at, updated_at) VALUES (9, 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80', 'pn1.jpg', 100, 'k9', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
-- 10. Jaipur Bungalow
INSERT INTO picture (property_id, url, name, size, image_key, created_at, updated_at) VALUES (10, 'https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?w=800&q=80', 'j1.jpg', 100, 'k10', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
-- 11. Chennai Apt
INSERT INTO picture (property_id, url, name, size, image_key, created_at, updated_at) VALUES (11, 'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&q=80', 'c1.jpg', 100, 'k11', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
-- 12. Udaipur Villa
INSERT INTO picture (property_id, url, name, size, image_key, created_at, updated_at) VALUES (12, 'https://images.unsplash.com/photo-1510627489930-0c1b0dc58e85?w=800&q=80', 'u1.jpg', 100, 'k12', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
-- 13. Gurgaon Suite
INSERT INTO picture (property_id, url, name, size, image_key, created_at, updated_at) VALUES (13, 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80', 'g1.jpg', 100, 'k13', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
-- 14. Coorg Estate
INSERT INTO picture (property_id, url, name, size, image_key, created_at, updated_at) VALUES (14, 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&q=80', 'co1.jpg', 100, 'k14', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
-- 15. Pondicherry House
INSERT INTO picture (property_id, url, name, size, image_key, created_at, updated_at) VALUES (15, 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80', 'pd1.jpg', 100, 'k15', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


-- Facilities
INSERT INTO property_facilities (property_id, facilities) VALUES 
(1, 'Pool'), (1, 'Garden'), (1, 'WiFi'),
(2, 'Gym'), (2, 'Pool'), (2, 'Security'),
(3, 'Gym'), (3, 'Parking'),
(4, 'WiFi'), (4, 'Metro'),
(5, 'Garden'), (5, 'Pool'),
(6, 'Garden'), (6, 'Boating'),
(7, 'Pool'), (7, 'Gym'),
(8, 'Heater'), (8, 'View'),
(9, 'Parking'), (9, 'WiFi'),
(10, 'Garden'), (10, 'Courtyard'),
(11, 'Pool'), (11, 'Beach'),
(12, 'Pool'), (12, 'Lake View'),
(13, 'WiFi'), (13, 'Housekeeping'),
(14, 'Garden'), (14, 'Trekking'),
(15, 'Garden'), (15, 'Beach');
