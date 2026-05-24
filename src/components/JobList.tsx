import JobCard from "./JobCard";

type Job = {
    id: number;
    title: string;
    company: string;
    location: string;
    salary: string;
    description: string;
};


const JobList = () => {
    const jobs: Job[] = [
        {
            id: 1,
            title: "Frontend Developer",
            company: "Genesys Tech Hub",
            location: "Remote",
            salary: "$10,000",
            description: "We are looking for a skilled Frontend Developer to join our team. The ideal candidate will have experience with React, JavaScript, and CSS. You will be responsible for building and maintaining the user interface of our web applications.",    
        },

        {
            id: 2,
            title: "Backend Engineer",
            company: "Ini TechHub",
            location: "Remote",
            salary: "$10,000",
            description: "We are seeking a talented Backend Engineer to join our team. The ideal candidate will have experience with Node.js, Express, and MongoDB. You will be responsible for designing and implementing the server-side logic of our web applications.",
        },

        {
            id: 3,
            title: "UI/UX",
            company: "Michael Tech Hub",
            location: "Enugu",
            salary: "$1,000",
            description: "We are looking for a creative UI/UX Designer to join our team. The ideal candidate will have experience with design tools and a strong portfolio.",
        },

        {
            id: 4,
            title: "Full Stack Developer",
            company: "Code Master",
            location: "Remote",
            salary: "$10,000",
            description: "We are seeking a skilled Full Stack Developer to join our team. The ideal candidate will have experience with both frontend and backend technologies, including React, Node.js, and MongoDB. You will be responsible for developing and maintaining our web applications.",
        },

        {
            id: 5,
            title: "Devops",
            company: "CloudNet",
            location: "Onsite",
            salary: "$20,000",
            description: "We are looking for a talented DevOps Engineer to join our team. The ideal candidate will have experience with cloud platforms, automation tools, and CI/CD pipelines. You will be responsible for managing our infrastructure and ensuring the reliability of our applications.",
        },

        {
            id: 6,
            title: "Mobile Development",
            company: "SecureTy",
            location: "Remote",
            salary: "$10,000",
            description: "We are seeking a skilled Mobile Developer to join our team. The ideal candidate will have experience with mobile app development, including iOS and Android platforms. You will be responsible for designing and implementing mobile applications that provide a seamless user experience.",
        },

        {
            id: 7,
            title: "Network Engineer",
            company: "Maxtech",
            location: "Remote",
            salary: "$10,000",
            description: "We are looking for a talented Network Engineer to join our team. The ideal candidate will have experience with network infrastructure, security, and troubleshooting. You will be responsible for designing and maintaining our network systems to ensure optimal performance and security.",
        },

        {
            id: 8,
            title: "Cloud Engineer",
            company: "Tinubu APC",
            location: "Remote",
            salary: "$11",
            description: "We are seeking a skilled Cloud Engineer to join our team. The ideal candidate will have experience with cloud platforms, infrastructure as code, and automation. You will be responsible for designing and implementing cloud solutions that meet our business needs.",
        },

        {
            id: 9,
            title: "Data Scientist",
            company: "DataTech",
            location: "Remote",
            salary: "$15,000",
            description: "We are looking for a talented Data Scientist to join our team. The ideal candidate will have experience with data analysis, machine learning, and statistical modeling. You will be responsible for extracting insights from large datasets and building predictive models.",
        },

        {
            id: 10,
            title: "Cybersecurity Analyst",
            company: "SecureNet", 
            location: "Remote", 
            salary: "$12,000",
            description: "We are seeking a skilled Cybersecurity Analyst to join our team. The ideal candidate will have experience with threat detection, incident response, and security best practices. You will be responsible for monitoring our systems for security threats and implementing measures to protect our data and infrastructure.",
        },

        {
            id: 11,
            title: "AI Engineer",
            company: "Tech Innovators",
            location: "Remote",
            salary: "$18,000",
            description: "We are seeking a skilled AI Engineer to join our team. The ideal candidate will have experience with machine learning, deep learning, and natural language processing. You will be responsible for developing and deploying AI models that drive innovation and value for our customers.",
        },

        {
            id: 12,
            title: "Software Tester",
            company: "Quality Assurance Inc.",
            location: "Remote",
            salary: "$10,000",
            description: "We are looking for a talented Software Tester to join our team. The ideal candidate will have experience with test planning, test case development, and bug reporting. You will be responsible for ensuring the quality and reliability of our software products.",
        }

    ];

   return (
  <div style={{ padding: "26px" }}>
    <h1 style={{ marginBottom: "68px", textDecoration: "underline" }}>Job Listings</h1>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "36px",
      }}
    >
      {jobs.length > 0 ? (
        jobs.map((job) => (
          <JobCard
            key={job.id}
            title={job.title}
            company={job.company}
            location={job.location}
            salary={job.salary}
            description={job.description}
          />
        ))
      ) : (
        <p style={{ gridColumn: "1 / -1" }}>
          No jobs at the moment.
        </p>
      )}
    </div>
  </div>
);
};


export default JobList;