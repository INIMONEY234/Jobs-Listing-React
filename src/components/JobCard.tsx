import { useState } from "react";

type JobProps = {
        title: string;
        company: string;
        location: string;
        salary: string;
        description: string;
}


const JobCard = ({title, company, location, salary, description} : JobProps) => {
    const [showDetails, setShowDetails] =useState(false);

    return(
    <div style={{
      border: "1px solid #bbbfc6",
      padding: "20px",
      borderRadius: "12px",
      backgroundColor: "#d0d9e2",
      boxShadow: "0 4px 8px rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      textAlign: "left",
      alignItems: "flex-start",
      color: "#333",
    }}
  >

            <h2>{title}</h2>

            <p>
                <strong>Company:</strong> {company}
            </p>
            
           
        {showDetails && (
            <>
             
             <p>
                <strong>Location:</strong> {location}
            </p>
            <p>
                <strong>Salary:</strong> {salary}
            </p>

            <p>
                <strong>Job Description:</strong> {description}
            </p>
            </>
        )}


        <button onClick={() => setShowDetails(!showDetails)}>
            {showDetails ? "Hide Details" : "Show Details"}
        </button>
        </div>
    );
};

export default JobCard;