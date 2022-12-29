create database firm;
use firm;

create table dev_teams (
team_id int primary key auto_increment,
team_name varchar(50) not null
);

create table meetings (
meeting_id int primary key auto_increment,
team_id int not null,
start_time varchar(100),
end_time varchar(100),
meeting_description varchar(255),
room varchar(100)
);

INSERT INTO dev_teams(team_name)
VALUES
('react team'),
('mobile team'),
('UI team'),
('Fullstack team'),
('C team'),
('engineering team')

insert into meetings(team_id, start_time, end_time, meeting_description, room)
values
(4, '1/1/2023 16:25', '1/1/2023 17:25', 'learning fullstack', 'blue room'),
(6, '2/1/2023 13:30', '2/1/2023 14:30', 'discussion', 'computer room'),
(1, '3/1/2023 12:00', '3/1/2023 13:00', 'debugging', 'green room'),
(5, '4/1/2023 08:00', '4/1/2023 09:00', 'software dev', 'board room'),
(3, '5/1/2023 10:25', '5/1/2023 12:25', 'problem solving', 'new york room'),
(2, '6/1/2023 18:05', '6/1/2023 18:35', 'introduction', 'blue room')
(4, '7/1/2023 16:25', '7/1/2023 17:25', 'learning SQL', 'green room'),
(6, '8/1/2023 13:30', '8/1/2023 14:30', 'party', 'new york room'),
(1, '9/1/2023 12:00', '9/1/2023 13:00', 'watching game', 'blue room'),
(5, '10/1/2023 08:00', '10/1/2023 09:00', 'hardware dev', 'computer room'),
(3, '11/1/2023 10:25', '11/1/2023 12:25', 'internet security', 'white room'),
(2, '12/1/2023 18:05', '12/1/2023 18:35', 'discussion', 'yellow room')