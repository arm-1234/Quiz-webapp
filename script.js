const quizData = {
    oops: [
            { question: "What does OOP stand for?", options: ["Object-Oriented Programming", "Operational Output Processing", "Ordered Object Protocol", "Optimal Object Placement"], answer: "Object-Oriented Programming" },
            { question: "Which of the following is a core principle of OOP?", options: ["Procedural Programming", "Functional Programming", "Encapsulation", "Assembly Language"], answer: "Encapsulation" },
            { question: "What is a class in OOP?", options: ["An instance of an object", "A blueprint for creating objects", "A variable type", "A function"], answer: "A blueprint for creating objects" },
            { question: "What is an object in OOP?", options: ["A class", "An instance of a class", "A variable", "A function"], answer: "An instance of a class" },
            { question: "Which OOP principle allows a class to inherit properties from another class?", options: ["Polymorphism", "Encapsulation", "Inheritance", "Abstraction"], answer: "Inheritance" },
            { question: "What is polymorphism?", options: ["One form", "Many forms", "No forms", "Some forms"], answer: "Many forms" },
            { question: "What is abstraction?", options: ["Showing all details", "Hiding unnecessary details", "Changing details", "None"], answer: "Hiding unnecessary details" },
            { question: "What is the primary purpose of a constructor?", options: ["To destroy objects", "To initialize objects", "To print objects", "To delete variables"], answer: "To initialize objects" },
            { question: "Which keyword is used for inheritance in Java?", options: ["extends", "inherits", "super", "public"], answer: "extends" },
            { question: "What is encapsulation?", options: ["Hiding data", "Binding data and methods together", "Inheriting properties", "Creating objects"], answer: "Binding data and methods together" },
            { question: "What are the access modifiers in OOP?", options: ["Public, private, protected", "Read, write, execute", "Open, close, modify", "Add, delete, update"], answer: "Public, private, protected" },
            { question: "Which access modifier allows access from any class?", options: ["Private", "Protected", "Public", "Default"], answer: "Public" },
            { question: "Which access modifier allows access only within the same class?", options: ["Private", "Protected", "Public", "Default"], answer: "Private" },
            { question: "What is method overriding?", options: ["Creating a new method", "Changing a variable", "Providing a different implementation of an inherited method", "Deleting a method"], answer: "Providing a different implementation of an inherited method" },
            { question: "What is method overloading?", options: ["Creating a new method", "Changing a variable", "Defining multiple methods with the same name but different parameters", "Deleting a method"], answer: "Defining multiple methods with the same name but different parameters" },
            { question: "What is a virtual function?", options: ["A function that is always called", "A function that can be overridden in a derived class", "A function that is private", "A function that is public"], answer: "A function that can be overridden in a derived class" },
            { question: "What is an abstract class?", options: ["A class that can be instantiated", "A class that cannot be instantiated and may contain abstract methods", "A class with no methods", "A class with only private methods"], answer: "A class that cannot be instantiated and may contain abstract methods" },
            { question: "What is an interface?", options: ["A class with implementation", "A class with no implementation", "A contract that defines a set of methods that a class must implement", "A variable"], answer: "A contract that defines a set of methods that a class must implement" },
            { question: "What is the 'super' keyword used for?", options: ["To create a new class", "To access members of the superclass", "To delete an object", "To print a variable"], answer: "To access members of the superclass" },
            { question: "What is the 'this' keyword used for?", options: ["To create a new class", "To refer to the current instance of the class", "To delete an object", "To print a variable"], answer: "To refer to the current instance of the class" },
            { question: "What is the difference between a class and an object?", options: ["No difference", "Class is a blueprint, object is an instance", "Object is a blueprint, class is an instance", "Class is a variable, object is a function"], answer: "Class is a blueprint, object is an instance" },
            { question: "What is the purpose of a destructor?", options: ["To initialize objects", "To destroy objects", "To print objects", "To delete variables"], answer: "To destroy objects" },
            { question: "Which of the following is an example of polymorphism?", options: ["Inheritance", "Encapsulation", "Method overloading", "Abstraction"], answer: "Method overloading" },
            { question: "What is a pure virtual function?", options: ["A function with implementation", "A virtual function with no implementation", "A private function", "A public function"], answer: "A virtual function with no implementation" },
            { question: "What is the purpose of the 'final' keyword in Java?", options: ["To create a new class", "To prevent inheritance or method overriding", "To delete an object", "To print a variable"], answer: "To prevent inheritance or method overriding" },
            { question: "Which of the following is not a type of inheritance?", options: ["Single inheritance", "Multiple inheritance", "Multilevel inheritance", "Multi-functional inheritance"], answer: "Multi-functional inheritance" },
            { question: "What is the purpose of garbage collection?", options: ["To delete variables", "To free up memory occupied by unused objects", "To print objects", "To create objects"], answer: "To free up memory occupied by unused objects" },
            { question: "What is a static variable?", options: ["A variable that can be changed", "A variable that belongs to the class rather than an instance", "A variable that is always private", "A variable that is always public"], answer: "A variable that belongs to the class rather than an instance" },
            { question: "What is a static method?", options: ["A method that can be overridden", "A method that belongs to the class rather than an instance", "A method that is always private", "A method that is always public"], answer: "A method that belongs to the class rather than an instance" },
            { question: "What is a friend function?", options: ["A function that belongs to a class", "A function that can access private and protected members of a class", "A function that is always private", "A function that is always public"], answer: "A function that can access private and protected members of a class" },
            { question: "What is composition in OOP?", options: ["Inheritance", "Encapsulation", "A 'has-a' relationship between objects", "Polymorphism"], answer: "A 'has-a' relationship between objects" },
            { question: "What is aggregation in OOP?", options: ["Inheritance", "Encapsulation", "A 'has-a' relationship where the contained object can exist independently", "Polymorphism"], answer: "A 'has-a' relationship where the contained object can exist independently" },
            { question: "What is dynamic binding?", options: ["Binding at compile time", "Binding at runtime", "Binding at load time", "No binding"], answer: "Binding at runtime" },
            { question: "What is static binding?", options: ["Binding at compile time", "Binding at runtime", "Binding at load time", "No binding"], answer: "Binding at compile time" },
            { question: "What is the purpose of a copy constructor?", options: ["To create a new object", "To create a copy of an existing object", "To delete an object", "To print an object"], answer: "To create a copy of an existing object" },
            { question: "What is the purpose of the 'instanceof' operator in Java?", options: ["To create an object", "To check if an object is an instance of a particular class or interface", "To delete an object", "To print an object"], answer: "To check if an object is an instance of a particular class or interface" },
            { question: "What is a namespace?", options: ["A variable", "A container that provides a scope for identifiers", "A function", "A class"], answer: "A container that provides a scope for identifiers" },
            { question: "What is the purpose of exception handling?", options: ["To create objects", "To handle runtime errors", "To print objects", "To delete objects"], answer: "To handle runtime errors" },
            { question: "What is a try-catch block used for?", options: ["To create objects", "To handle exceptions", "To print objects", "To delete objects"], answer: "To handle exceptions" },
                
    ],
    dbms: [
            { question: "What does DBMS stand for?", options: ["Data Base Management System", "Database Managing System", "Data Backup Management System", "Database Manipulation System"], answer: "Data Base Management System" },
            { question: "Which of the following is a primary key?", options: ["A key that links two tables", "A unique identifier for a record", "A key used for sorting data", "A key used for indexing data"], answer: "A unique identifier for a record" },
            { question: "What is SQL?", options: ["Structured Question Language", "Structured Query Language", "Sequential Query Language", "System Query Language"], answer: "Structured Query Language" },
            { question: "Which SQL command is used to retrieve data from a database?", options: ["INSERT", "UPDATE", "SELECT", "DELETE"], answer: "SELECT" },
            { question: "What is a foreign key?", options: ["A primary key in another table", "A key used for sorting data", "A key used for indexing data", "A unique identifier in the same table"], answer: "A primary key in another table" },
            { question: "What is normalization in DBMS?", options: ["Adding redundant data", "Organizing data to reduce redundancy", "Deleting data", "Sorting data"], answer: "Organizing data to reduce redundancy" },
            { question: "Which normalization form eliminates repeating groups?", options: ["1NF", "2NF", "3NF", "BCNF"], answer: "1NF" },
            { question: "What is a transaction in DBMS?", options: ["A single SQL command", "A sequence of operations as a single logical unit of work", "A database backup", "A data deletion"], answer: "A sequence of operations as a single logical unit of work" },
            { question: "What is ACID properties in DBMS?", options: ["Atomicity, Consistency, Isolation, Durability", "Accuracy, Consistency, Integrity, Durability", "Atomicity, Concurrency, Isolation, Deletion", "Accuracy, Concurrency, Integrity, Deletion"], answer: "Atomicity, Consistency, Isolation, Durability" },
            { question: "What is a view in SQL?", options: ["A physical table", "A virtual table based on the result-set of an SQL statement", "A database backup", "A data deletion"], answer: "A virtual table based on the result-set of an SQL statement" },
            { question: "Which SQL command is used to insert new records into a table?", options: ["SELECT", "UPDATE", "INSERT", "DELETE"], answer: "INSERT" },
            { question: "Which SQL command is used to modify existing records in a table?", options: ["SELECT", "UPDATE", "INSERT", "DELETE"], answer: "UPDATE" },
            { question: "Which SQL command is used to delete records from a table?", options: ["SELECT", "UPDATE", "INSERT", "DELETE"], answer: "DELETE" },
            { question: "What is an index in a database?", options: ["A table", "A query", "A data structure to improve data retrieval speed", "A database backup"], answer: "A data structure to improve data retrieval speed" },
            { question: "What is a stored procedure?", options: ["A database table", "A precompiled collection of SQL statements stored in the database", "A database backup", "A data deletion"], answer: "A precompiled collection of SQL statements stored in the database" },
            { question: "What is a trigger in DBMS?", options: ["A database table", "A stored procedure that automatically executes in response to certain events on a particular table or view", "A database backup", "A data deletion"], answer: "A stored procedure that automatically executes in response to certain events on a particular table or view" },
            { question: "What is a data warehouse?", options: ["A database used for transactional processing", "A database used for analytical processing", "A database backup", "A data deletion"], answer: "A database used for analytical processing" },
            { question: "What is data mining?", options: ["Extracting data from a database", "Discovering patterns in large data sets", "Deleting data from a database", "Sorting data in a database"], answer: "Discovering patterns in large data sets" },
            { question: "What is a data dictionary?", options: ["A database backup", "A set of descriptions of the data elements in a database", "A database table", "A data deletion"], answer: "A set of descriptions of the data elements in a database" },
            { question: "What is a schema in a database?", options: ["A backup of the database", "The structure of the database, including tables, columns, and relationships", "A database table", "A data deletion"], answer: "The structure of the database, including tables, columns, and relationships" },
            { question: "What is a relational database?", options: ["A database that stores data in a single table", "A database that stores data in multiple related tables", "A database that stores data in a file system", "A database that stores data in memory"], answer: "A database that stores data in multiple related tables" },
            { question: "What is a NoSQL database?", options: ["A database that uses SQL", "A database that does not use SQL", "A database that stores data in a single table", "A database that stores data in memory"], answer: "A database that does not use SQL" },
            { question: "Which of the following is a NoSQL database?", options: ["MySQL", "PostgreSQL", "Oracle", "MongoDB"], answer: "MongoDB" },
            { question: "What is a database constraint?", options: ["A rule that restricts the data that can be stored in a table", "A database backup", "A database table", "A data deletion"], answer: "A rule that restricts the data that can be stored in a table" },
            { question: "What is the purpose of the WHERE clause in SQL?", options: ["To select columns", "To specify conditions for selecting records", "To sort records", "To group records"], answer: "To specify conditions for selecting records" },
            { question: "What is the purpose of the GROUP BY clause in SQL?", options: ["To select columns", "To specify conditions for selecting records", "To sort records", "To group records"], answer: "To group records" },
            { question: "What is the purpose of the ORDER BY clause in SQL?", options: ["To select columns", "To specify conditions for selecting records", "To sort records", "To group records"], answer: "To sort records" },
            { question: "What is the purpose of the JOIN clause in SQL?", options: ["To select columns", "To combine rows from two or more tables", "To sort records", "To group records"], answer: "To combine rows from two or more tables" },
            { question: "What is data integrity?", options: ["Accuracy and consistency of data", "Speed of data retrieval", "Size of the database", "Complexity of the database"], answer: "Accuracy and consistency of data" },
            { question: "What is data redundancy?", options: ["Storing the same data multiple times", "Deleting data from a database", "Sorting data in a database", "Indexing data in a database"], answer: "Storing the same data multiple times" },
            { question: "What is a data model?", options: ["A database backup", "A graphical representation of the database structure", "A database table", "A data deletion"], answer: "A graphical representation of the database structure" },
            { question: "What is an entity-relationship (ER) diagram?", options: ["A database backup", "A diagram that shows the relationships between entities in a database", "A database table", "A data deletion"], answer: "A diagram that shows the relationships between entities in a database" },
            { question: "What is a data mart?", options: ["A database backup", "A subset of a data warehouse focused on a specific business line", "A database table", "A data deletion"], answer: "A subset of a data warehouse focused on a specific business line" },
            { question: "What is data replication?", options: ["Deleting data from a database", "Copying data from one database to another", "Sorting data in a database", "Indexing data in a database"], answer: "Copying data from one database to another" },
            { question: "What is a distributed database?", options: ["A database stored in a single location", "A database stored in multiple locations", "A database stored in memory", "A database stored in a file system"], answer: "A database stored in multiple locations" },
            { question: "What is a database backup?", options: ["A copy of the database used for recovery", "A database table", "A data deletion", "A database query"], answer: "A copy of the database used for recovery" },
            { question: "What is a database restore?", options: ["Creating a backup of the database", "Recovering the database from a backup", "Deleting data from the database", "Sorting data in the database"], answer: "Recovering the database from a backup" },
            
    ],
    os: [
            { question: "What is the primary function of an operating system?", options: ["Playing games", "Managing hardware and software resources", "Browsing the internet", "Creating documents"], answer: "Managing hardware and software resources" },
            { question: "Which of the following is an example of an operating system?", options: ["Microsoft Word", "Google Chrome", "Linux", "Adobe Photoshop"], answer: "Linux" },
            { question: "What is a process in an operating system?", options: ["A file", "A running program", "A hardware component", "A network connection"], answer: "A running program" },
            { question: "What is a kernel?", options: ["The outer shell of the OS", "The core component of the OS", "A user interface", "An application program"], answer: "The core component of the OS" },
            { question: "What is a file system?", options: ["A hardware component", "A method of organizing files on a storage device", "A programming language", "A network protocol"], answer: "A method of organizing files on a storage device" },
            { question: "What is virtual memory?", options: ["Physical RAM", "Secondary storage used as RAM", "Cache memory", "ROM"], answer: "Secondary storage used as RAM" },
            { question: "What is a deadlock?", options: ["A process in execution", "A situation where two or more processes are blocked indefinitely", "A memory error", "A hardware failure"], answer: "A situation where two or more processes are blocked indefinitely" },
            { question: "Which scheduling algorithm gives each process a fixed time slice?", options: ["FCFS", "SJF", "Round Robin", "Priority Scheduling"], answer: "Round Robin" },
            { question: "What is thrashing?", options: ["Excessive CPU usage", "High memory swapping", "Disk fragmentation", "Network congestion"], answer: "High memory swapping" },
            { question: "What is a device driver?", options: ["A hardware component", "A software program that controls a hardware device", "A network protocol", "A file system"], answer: "A software program that controls a hardware device" },
            { question: "What is a system call?", options: ["A call from one program to another", "A request from a program to the operating system's kernel", "A network request", "A hardware interrupt"], answer: "A request from a program to the operating system's kernel" },
            { question: "What is a context switch?", options: ["Switching between users", "Switching between processes", "Switching between files", "Switching between networks"], answer: "Switching between processes" },
            { question: "What is the purpose of memory management?", options: ["To manage files", "To allocate and deallocate memory to processes", "To manage network connections", "To manage hardware devices"], answer: "To allocate and deallocate memory to processes" },
            { question: "What is paging?", options: ["Dividing memory into fixed-size blocks", "Dividing files into fixed-size blocks", "Dividing network packets into fixed-size blocks", "Dividing hardware devices into fixed-size blocks"], answer: "Dividing memory into fixed-size blocks" },
            { question: "What is segmentation?", options: ["Dividing memory into variable-size blocks", "Dividing files into variable-size blocks", "Dividing network packets into variable-size blocks", "Dividing hardware devices into variable-size blocks"], answer: "Dividing memory into variable-size blocks" },
            { question: "What is a semaphore?", options: ["A hardware device", "A signaling mechanism used for process synchronization", "A network protocol", "A file system"], answer: "A signaling mechanism used for process synchronization" },
            { question: "What is a mutex?", options: ["A hardware device", "A locking mechanism used for mutual exclusion", "A network protocol", "A file system"], answer: "A locking mechanism used for mutual exclusion" },
            { question: "What is a critical section?", options: ["A section of memory", "A section of code that accesses shared resources", "A network connection", "A file system"], answer: "A section of code that accesses shared resources" },
            { question: "What is a thread?", options: ["A process", "A lightweight sub-process", "A file", "A network connection"], answer: "A lightweight sub-process" },
            { question: "What is preemptive scheduling?", options: ["Scheduling without interruption", "Scheduling where a process can be interrupted", "Scheduling based on priority", "Scheduling based on arrival time"], answer: "Scheduling where a process can be interrupted" },
            { question: "What is non-preemptive scheduling?", options: ["Scheduling where a process cannot be interrupted", "Scheduling where a process can be interrupted", "Scheduling based on priority", "Scheduling based on arrival time"], answer: "Scheduling where a process cannot be interrupted" },
            { question: "What is a real-time operating system (RTOS)?", options: ["An OS for gaming", "An OS designed for time-critical applications", "An OS for general-purpose computing", "An OS for network servers"], answer: "An OS designed for time-critical applications" },
            { question: "What is a batch operating system?", options: ["An OS for interactive applications", "An OS that processes jobs in batches", "An OS for real-time applications", "An OS for network servers"], answer: "An OS that processes jobs in batches" },
            { question: "What is time-sharing operating system?", options: ["An OS for batch processing", "An OS that allows multiple users to share the system simultaneously", "An OS for real-time applications", "An OS for network servers"], answer: "An OS that allows multiple users to share the system simultaneously" },
            { question: "What is a distributed operating system?", options: ["An OS for single-user systems", "An OS that manages a group of independent computers", "An OS for real-time applications", "An OS for network servers"], answer: "An OS that manages a group of independent computers" },
            { question: "What is a monolithic kernel?", options: ["A kernel that runs in user space", "A kernel that provides all OS services in the kernel space", "A kernel that runs in a virtual machine", "A kernel that manages network connections"], answer: "A kernel that provides all OS services in the kernel space" },
            { question: "What is a microkernel?", options: ["A kernel that runs in user space", "A kernel that provides minimal services in the kernel space", "A kernel that runs in a virtual machine", "A kernel that manages network connections"], answer: "A kernel that provides minimal services in the kernel space" },
            { question: "What is a hybrid kernel?", options: ["A kernel that runs in user space", "A kernel that combines features of monolithic and microkernels", "A kernel that runs in a virtual machine", "A kernel that manages network connections"], answer: "A kernel that combines features of monolithic and microkernels" },
            { question: "What is a bootloader?", options: ["A program that loads the operating system", "A program that manages files", "A program that manages memory", "A program that manages network connections"], answer: "A program that loads the operating system" },
            { question: "What is a shell?", options: ["The core of the OS", "A user interface for interacting with the OS", "A file system", "A network protocol"], answer: "A user interface for interacting with the OS" },
            { question: "What is a command-line interface (CLI)?", options: ["A graphical user interface", "A text-based interface", "A network interface", "A hardware interface"], answer: "A text-based interface" },
            { question: "What is a graphical user interface (GUI)?", options: ["A text-based interface", "A visual interface", "A network interface", "A hardware interface"], answer: "A visual interface" },
            { question: "What is a file descriptor?", options: ["A file name", "An integer that represents an open file", "A file extension", "A file size"], answer: "An integer that represents an open file" },
            { question: "What is a directory?", options: ["A file", "A container for files and other directories", "A network connection", "A hardware device"], answer: "A container for files and other directories" },
            { question: "What is a hard link?", options: ["A shortcut to a file", "A directory entry that points to the same underlying file", "A network link", "A hardware link"], answer: "A directory entry that points to the same underlying file" },
            { question: "What is a symbolic link?", options: ["A shortcut to a file", "A directory entry that points to another file or directory by name", "A network link", "A hardware link"], answer: "A directory entry that points to another file or directory by name" },
           
    ],
    cn: [
        { question: "What does CN stand for?", options: ["Computer Network", "Central Node", "Connection Node", "Control Network"], answer: "Computer Network" },
  { question: "What is the purpose of a network?", options: ["To store data", "To share resources and information", "To process data", "To display data"], answer: "To share resources and information" },
  { question: "Which layer of the OSI model is responsible for routing?", options: ["Physical", "Data Link", "Network", "Transport"], answer: "Network" },
  { question: "What is the function of the Transport layer?", options: ["Physical transmission of data", "Logical addressing", "End-to-end communication and reliability", "Application interface"], answer: "End-to-end communication and reliability" },
  { question: "What does TCP stand for?", options: ["Transfer Control Protocol", "Transmission Control Protocol", "Text Control Protocol", "Temporary Control Protocol"], answer: "Transmission Control Protocol" },
  { question: "What is the purpose of IP addresses?", options: ["To identify network devices", "To encrypt data", "To compress data", "To filter data"], answer: "To identify network devices" },
  { question: "What is the maximum length of an IPv4 address?", options: ["16 bits", "32 bits", "64 bits", "128 bits"], answer: "32 bits" },
  { question: "What is a subnet mask used for?", options: ["To encrypt data", "To identify the network portion of an IP address", "To compress data", "To filter data"], answer: "To identify the network portion of an IP address" },
  { question: "What is a router?", options: ["A device that connects devices within a LAN", "A device that connects different networks", "A device that amplifies signals", "A device that filters data"], answer: "A device that connects different networks" },
  { question: "What is a switch?", options: ["A device that connects different networks", "A device that connects devices within a LAN", "A device that amplifies signals", "A device that filters data"], answer: "A device that connects devices within a LAN" },
  { question: "What is a hub?", options: ["A device that connects different networks", "A device that connects devices within a LAN by broadcasting signals", "A device that amplifies signals", "A device that filters data"], answer: "A device that connects devices within a LAN by broadcasting signals" },
  { question: "What is a MAC address?", options: ["A logical address", "A physical address assigned to a network interface", "A memory address", "A file address"], answer: "A physical address assigned to a network interface" },
  { question: "What does DNS stand for?", options: ["Domain Network System", "Domain Name System", "Data Network System", "Data Name System"], answer: "Domain Name System" },
  { question: "What is the purpose of DNS?", options: ["To translate domain names to IP addresses", "To encrypt data", "To compress data", "To filter data"], answer: "To translate domain names to IP addresses" },
  { question: "What is HTTP?", options: ["HyperText Transfer Protocol", "Hyper Transfer Text Protocol", "High Tech Transfer Protocol", "None"], answer: "HyperText Transfer Protocol" },
  { question: "What is HTTPS?", options: ["HyperText Transfer Protocol Secure", "Hyper Transfer Text Protocol Secure", "High Tech Transfer Protocol Secure", "None"], answer: "HyperText Transfer Protocol Secure" },
  { question: "What is the purpose of HTTPS?", options: ["To transfer data faster", "To encrypt data for secure communication", "To compress data", "To filter data"], answer: "To encrypt data for secure communication" },
  { question: "What is FTP?", options: ["File Transfer Protocol", "Fast Transfer Protocol", "File Transmission Protocol", "Fast Transmission Protocol"], answer: "File Transfer Protocol" },
  { question: "What is the purpose of FTP?", options: ["To transfer files between computers", "To encrypt data", "To compress data", "To filter data"], answer: "To transfer files between computers" },
  { question: "What is SMTP?", options: ["Simple Mail Transfer Protocol", "Secure Mail Transfer Protocol", "System Mail Transfer Protocol", "Standard Mail Transfer Protocol"], answer: "Simple Mail Transfer Protocol" },
  { question: "What is the purpose of SMTP?", options: ["To send emails", "To encrypt data", "To compress data", "To filter data"], answer: "To send emails" },
  { question: "What is a firewall?", options: ["A device that connects different networks", "A device that filters network traffic", "A device that amplifies signals", "A device that compresses data"], answer: "A device that filters network traffic" },
  { question: "What is a VPN?", options: ["Virtual Private Network", "Very Public Network", "Visual Private Network", "Variable Public Network"], answer: "Virtual Private Network" },
  { question: "What is the purpose of a VPN?", options: ["To transfer data faster", "To create a secure connection over a public network", "To compress data", "To filter data"], answer: "To create a secure connection over a public network" },
  { question: "What is a LAN?", options: ["Local Area Network", "Large Area Network", "Logical Area Network", "Linear Area Network"], answer: "Local Area Network" },
  { question: "What is a WAN?", options: ["Wide Area Network", "Wireless Area Network", "Web Area Network", "Working Area Network"], answer: "Wide Area Network" },
  { question: "What is a MAN?", options: ["Metropolitan Area Network", "Multiple Area Network", "Main Area Network", "Managed Area Network"], answer: "Metropolitan Area Network" },
  { question: "What is a PAN?", options: ["Personal Area Network", "Public Area Network", "Primary Area Network", "Physical Area Network"], answer: "Personal Area Network" },
  { question: "What is a protocol?", options: ["A network device", "A set of rules for communication", "A data storage device", "A data compression technique"], answer: "A set of rules for communication" },
  { question: "What is packet switching?", options: ["Transmitting data as a continuous stream", "Dividing data into packets and transmitting them independently", "Transmitting data in a single burst", "Transmitting data without any division"], answer: "Dividing data into packets and transmitting them independently" },
  { question: "What is circuit switching?", options: ["Dividing data into packets and transmitting them independently", "Establishing a dedicated communication path", "Transmitting data in a single burst", "Transmitting data without any division"], answer: "Establishing a dedicated communication path" },
  { question: "What is bandwidth?", options: ["The speed of data transmission", "The size of data packets", "The security of data transmission", "The compression of data"], answer: "The speed of data transmission" },
  { question: "What is latency?", options: ["The speed of data transmission", "The delay in data transmission", "The security of data transmission", "The compression of data"], answer: "The delay in data transmission" },
  { question: "What is jitter?", options: ["The variation in latency", "The speed of data transmission", "The security of data transmission", "The compression of data"], answer: "The variation in latency" },
  { question: "What is a network topology?", options: ["The physical or logical arrangement of network devices", "The speed of data transmission", "The security of data transmission", "The compression of data"], answer: "The physical or logical arrangement of network devices" },
  { question: "Which topology uses a central hub?", options: ["Bus", "Star", "Ring", "Mesh"], answer: "Star" },
  { question: "Which topology connects all devices in a single line?", options: ["Bus", "Star", "Ring", "Mesh"], answer: "Bus" },
  { question: "Which topology connects devices in a closed loop?", options: ["Bus", "Star", "Ring", "Mesh"], answer: "Ring" },
  { question: "Which topology provides multiple paths between devices?", options: ["Bus", "Star", "Ring", "Mesh"], answer: "Mesh" },
  { question: "What is a collision domain?", options: ["A network segment where data packets can collide", "A network segment with high bandwidth", "A network segment with low latency", "A network segment with high security"], answer: "A network segment where data packets can collide" },
  { question: "What is a broadcast domain?", options: ["A network segment where broadcast messages are sent", "A network segment with high bandwidth", "A network segment with low latency", "A network segment with high security"], answer: "A network segment where broadcast messages are sent" },
  { question: "What is a VLAN?", options: ["Virtual Local Area Network", "Very Large Area Network", "Visual Local Area Network", "Variable Local Area Network"], answer: "Virtual Local Area Network" },
    ],
    coa: [
        { question: "What does COA stand for?", options: ["Computer Organization and Architecture", "Central Operating Algorithm", "Control Output Architecture", "Command Oriented Architecture"], answer: "Computer Organization and Architecture" },
        { question: "What is the function of the ALU?", options: ["Control operations", "Store data", "Perform arithmetic and logical operations", "Manage memory"], answer: "Perform arithmetic and logical operations" },
        { question: "Which memory is volatile?", options: ["RAM", "ROM", "HDD", "SSD"], answer: "RAM" },
        { question: "What is the purpose of the Control Unit?", options: ["To store data", "To perform calculations", "To control the operations of the CPU", "To manage power"], answer: "To control the operations of the CPU" },
        { question: "What does CPU stand for?", options: ["Central Processing Unit", "Computer Processing Unit", "Control Processing Unit", "Central Program Unit"], answer: "Central Processing Unit" },
        { question: "Which register holds the address of the next instruction to be executed?", options: ["MAR", "MDR", "PC", "IR"], answer: "PC" },
        { question: "What is the function of the MAR?", options: ["Stores data", "Stores the address of memory location", "Stores the instruction", "Stores the result"], answer: "Stores the address of memory location" },
        { question: "What is the function of the MDR?", options: ["Stores data", "Stores the address of memory location", "Stores the instruction", "Stores the result"], answer: "Stores data" },
        { question: "What is the function of the IR?", options: ["Stores data", "Stores the address of memory location", "Stores the instruction", "Stores the result"], answer: "Stores the instruction" },
        { question: "Which of the following is an example of secondary memory?", options: ["RAM", "Cache", "Register", "HDD"], answer: "HDD" },
        { question: "What is cache memory?", options: ["A large, slow memory", "A small, fast memory used to store frequently accessed data", "A type of secondary storage", "A type of ROM"], answer: "A small, fast memory used to store frequently accessed data" },
        { question: "What is the purpose of pipelining?", options: ["To reduce memory size", "To increase CPU performance by overlapping instruction execution", "To reduce power consumption", "To increase network speed"], answer: "To increase CPU performance by overlapping instruction execution" },
        { question: "What is instruction cycle?", options: ["The time taken to fetch and execute an instruction", "The time taken to store data", "The time taken to access memory", "The time taken to perform calculations"], answer: "The time taken to fetch and execute an instruction" },
        { question: "What are the basic components of a CPU?", options: ["ALU, Control Unit, Registers", "RAM, ROM, HDD", "Monitor, Keyboard, Mouse", "Printer, Scanner, Speakers"], answer: "ALU, Control Unit, Registers" },
        { question: "What is the purpose of addressing modes?", options: ["To store data", "To specify how operands are accessed", "To control the CPU", "To manage memory"], answer: "To specify how operands are accessed" },
        { question: "Which addressing mode uses the operand itself as the address?", options: ["Immediate", "Direct", "Indirect", "Register"], answer: "Direct" },
        { question: "Which addressing mode uses a register to hold the address of the operand?", options: ["Immediate", "Direct", "Indirect", "Register"], answer: "Register" },
        { question: "What is the function of a bus in a computer system?", options: ["To store data", "To transfer data between components", "To control the CPU", "To manage memory"], answer: "To transfer data between components" },
        { question: "What is the difference between synchronous and asynchronous bus?", options: ["Synchronous uses clock signals, asynchronous does not", "Asynchronous is faster, synchronous is slower", "Synchronous is used for memory, asynchronous for I/O", "No difference"], answer: "Synchronous uses clock signals, asynchronous does not" },
        { question: "What is DMA?", options: ["Direct Memory Access", "Dynamic Memory Allocation", "Data Management Algorithm", "Digital Memory Array"], answer: "Direct Memory Access" },
        { question: "What is the purpose of DMA?", options: ["To allow the CPU to access memory directly", "To allow I/O devices to access memory directly without CPU intervention", "To manage memory allocation", "To perform calculations"], answer: "To allow I/O devices to access memory directly without CPU intervention" },
        { question: "What is an interrupt?", options: ["A signal that stops the CPU", "A signal that interrupts the normal execution of the CPU", "A signal that stores data", "A signal that performs calculations"], answer: "A signal that interrupts the normal execution of the CPU" },
        { question: "What is the purpose of an interrupt?", options: ["To control the CPU", "To handle events that require immediate attention", "To store data", "To perform calculations"], answer: "To handle events that require immediate attention" },
        { question: "What is the difference between hardware and software interrupts?", options: ["Hardware interrupts are generated by hardware, software by programs", "Software interrupts are faster, hardware are slower", "No difference", "Hardware interrupts are used for memory, software for I/O"], answer: "Hardware interrupts are generated by hardware, software by programs" },
        { question: "What is the purpose of input/output (I/O) modules?", options: ["To store data", "To transfer data between the CPU and I/O devices", "To control the CPU", "To manage memory"], answer: "To transfer data between the CPU and I/O devices" },
        { question: "What is programmed I/O?", options: ["I/O controlled by the CPU", "I/O controlled by DMA", "I/O controlled by interrupts", "I/O controlled by memory"], answer: "I/O controlled by the CPU" },
        { question: "What is interrupt-driven I/O?", options: ["I/O controlled by the CPU", "I/O controlled by DMA", "I/O controlled by interrupts", "I/O controlled by memory"], answer: "I/O controlled by interrupts" },
        { question: "What is the purpose of addressing modes?", options: ["To store data", "To specify how operands are accessed", "To control the CPU", "To manage memory"], answer: "To specify how operands are accessed" },
        { question: "What is the purpose of instruction sets?", options: ["To control the CPU", "To define the set of instructions that a CPU can execute", "To store data", "To manage memory"], answer: "To define the set of instructions that a CPU can execute" },
        { question: "What is the difference between RISC and CISC architectures?", options: ["RISC has fewer instructions, CISC has more", "CISC is faster, RISC is slower", "No difference", "RISC is used for memory, CISC for I/O"], answer: "RISC has fewer instructions, CISC has more" },
        { question: "What is the purpose of a memory hierarchy?", options: ["To increase memory size", "To provide faster access to frequently used data", "To reduce power consumption", "To increase network speed"], answer: "To provide faster access to frequently used data" },
        { question: "What is the principle of locality?", options: ["Data is stored locally", "Programs tend to access memory locations that are close to each other", "Memory is allocated locally", "I/O devices are located locally"], answer: "Programs tend to access memory locations that are close to each other" },
        { question: "What is virtual memory?", options: ["Physical RAM", "Secondary storage used as an extension of RAM", "Cache memory", "ROM"], answer: "Secondary storage used as an extension of RAM" },
        { question: "What is the purpose of virtual memory?", options: ["To increase memory size", "To allow programs to use more memory than physically available", "To reduce power consumption", "To increase network speed"], answer: "To allow programs to use more memory than physically available" },
        { question: "What is memory mapping?", options: ["Mapping memory to I/O devices", "Mapping virtual addresses to physical addresses", "Mapping memory to files", "Mapping memory to network connections"], answer: "Mapping virtual addresses to physical addresses" },
        { question: "What is the purpose of memory segmentation?", options: ["To increase memory size", "To divide memory into logical segments", "To reduce power consumption", "To increase network speed"], answer: "To divide memory into logical segments" },
        { question: "What is the purpose of memory paging?", options: ["To increase memory size", "To divide memory into fixed-size pages", "To reduce power consumption", "To increase network speed"], answer: "To divide memory into fixed-size pages" },
    ]
};


// Get elements from the document
const question = document.getElementById("question");
const options = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const quitBtn = document.getElementById("quit-btn");
const result = document.querySelector(".result");
const scoreSpan = document.getElementById("score");
const totalSpan = document.getElementById("total");
const quizContainer = document.getElementById("quiz-container");
const landing = document.getElementById("landing");
const quizTitle = document.getElementById("quiz-title");
const questionCountInput = document.getElementById("question-count");

let score = 0;
let total = 0;
let currentQuestionIndex = 0;
let selectedQuiz = [];
let selectedQuestions = [];
let numberOfQuestions = 5;
let timerInterval;


function startQuiz(topic) {
    const inputValue = parseInt(questionCountInput.value);
    numberOfQuestions = isNaN(inputValue) || inputValue <= 0 ? 5 : inputValue;

    landing.style.display = "none";
    quizContainer.style.display = "block";
    result.style.display = "none"; // Hide result section when starting quiz
    quizTitle.textContent = `${topic.toUpperCase()} Quiz`;

    selectedQuiz = quizData[topic];
    score = 0;
    total = numberOfQuestions;
    scoreSpan.textContent = score;
    totalSpan.textContent = total;

    selectedQuestions = generateRandomQuestions(selectedQuiz, numberOfQuestions);
    currentQuestionIndex = 0;
    clearInterval(timerInterval); // Clear any existing timer
    startTimer();
    loadQuestion();
}


function generateRandomQuestions(questionSet, count) {
    let questions = [];
    let usedIndices = new Set();
    
    count = Math.min(count, questionSet.length);
    
    while (questions.length < count && usedIndices.size < questionSet.length) {
        let randomIndex = Math.floor(Math.random() * questionSet.length);
        if (!usedIndices.has(randomIndex)) {
            usedIndices.add(randomIndex);
            questions.push(questionSet[randomIndex]);
        }
    }
    return questions;
}

function loadQuestion() {
    if (currentQuestionIndex < selectedQuestions.length) {
        let q = selectedQuestions[currentQuestionIndex];
        question.textContent = q.question;
        options.innerHTML = "";
        
        q.options.forEach(option => {
            let li = document.createElement("li");
            li.textContent = option;
            li.dataset.answer = option === q.answer ? "correct" : "wrong";
            li.classList.remove("correct", "wrong");
            li.addEventListener("click", selectOption);
            options.appendChild(li);
        });

        nextBtn.disabled = true;
    } else {
        showResult(); 
    }
}

function selectOption(event) {
    let selected = event.target;
    let correct = selected.dataset.answer === "correct";
    selected.classList.add(correct ? "correct" : "wrong");

    document.querySelectorAll(".options li").forEach(li => li.classList.add("disabled"));

    if (correct) score++;
    scoreSpan.textContent = score;
    nextBtn.disabled = false;
}

// Next button functionality
nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex >= selectedQuestions.length) {
        showResult(); // Show result when all questions are completed
    } else {
        loadQuestion();
        clearInterval(timerInterval); // Reset timer for next question
        startTimer();
    }
});


quitBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    showResult();
});


function showResult() {
    clearInterval(timerInterval);
    question.textContent = ""; // Clear the question
    options.innerHTML = ""; // Clear the options
    nextBtn.style.display = "none"; // Hide next button
    quitBtn.style.display = "none"; // Hide quit button
    
    // Calculate percentage for better messaging
    const percentage = (score / total) * 100;
    
    let message;
    let additionalMsg = "";
    
    // Motivational messages based on score
    if (percentage === 100) {
        message = "Excellent! You got everything right!";
        additionalMsg = "You're a true master of this subject!";
    } else if (percentage >= 70) {
        message = "Great job! Keep practicing to perfect your skills!";
        additionalMsg = "You're on your way to becoming an expert!";
    } else if (percentage >= 40) {
        message = "Good effort! Try again to improve!";
        additionalMsg = "With a bit more study, you'll do even better next time!";
    } else {
        message = "Don't give up! Keep learning and try again!";
        additionalMsg = "Everyone starts somewhere. Regular practice will help you improve!";
    }

    // Display the result section
    quizContainer.style.display = "block";
    result.style.display = "block";
    result.innerHTML = `
        <h2>Your Score: ${score} / ${total}</h2>
        <p>${message}</p>
        <p>${additionalMsg}</p>
        <button class="btn" onclick="restartQuiz()">Try Again</button>
        <button class="btn" onclick="goToLanding()">Choose Another Topic</button>
    `;
}

function restartQuiz() {
    result.style.display = "none";
    nextBtn.style.display = "block";
    quitBtn.style.display = "block";
    startQuiz(selectedQuiz.topic || 'oops'); // Restart with the same topic
}

function goToLanding() {
    result.style.display = "none";
    quizContainer.style.display = "none";
    landing.style.display = "block";
    nextBtn.style.display = "block";
    quitBtn.style.display = "block";
}

function startTimer() {
    let timeLeft = 30;
    document.getElementById("time").textContent = timeLeft;
    
    // Clear any existing timer first
    clearInterval(timerInterval);
    
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("time").textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            currentQuestionIndex++; // Move to next question
            if (currentQuestionIndex >= selectedQuestions.length) {
                showResult();
            } else {
                loadQuestion();
                startTimer();
            }
        }
    }, 1000);
}

// Make sure the quizData object exists
if (typeof quizData === 'undefined') {
    const quizData = {
        oops: [], dbms: [], os: [], cn: [], coa: []
    };
    console.error("Quiz data is not defined. Please define your quiz questions.");
}