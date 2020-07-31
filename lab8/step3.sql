CREATE TABLE Student_Info(
	student_ID varchar(30) NOT NULL PRIMARY KEY,
	first_Name varchar(30) NOT NULL,
	middle_Name varchar(30),
	last_Name varchar(30) NOT NULL,
	email varchar(100) NOT NULL
);

CREATE TABLE Courses(	
	course_Name varchar(30) NOT NULL PRIMARY KEY,
	course_Description varchar(255) NOT NULL
);

CREATE TABLE Marks(
	mark_ID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	marks int NOT NULL,
	student_ID varchar(30) NOT NULL,
	course_Name varchar(30) NOT NULL,
	FOREIGN KEY (student_ID) REFERENCES Student_Info(student_ID),
	FOREIGN KEY (course_Name) REFERENCES Courses(course_Name)
);

describe Student_Info;
describe Courses;
describe Marks;