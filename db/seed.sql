USE content_management;

INSERT INTO department
    (name)
VALUES 
    ('Engineering'),
    ('Sales'),
    ('Clinical')
    ('Marketing'),
    ('Corporate');
    

INSERT INTO role 
    (title, salary, department_id)
VALUES 
    ('manager', 60000, 1),
    ('sales person', 50000, 2),
    ('doctor', 80000, 3),
    ('IT Specialist', 65000, 4),
    ('CIO', 120000, 5);

INSERT INTO employee 
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Hunter', 'Johnson', 1, 1)
    ('Jennifer', 'Smith', 2, 2)
    ('Beyonce', 'Knowles', 3, 3)
    ('Camille', 'Farmer', 4, 4)
    ('Linda', 'Johnson', 5, 5)


