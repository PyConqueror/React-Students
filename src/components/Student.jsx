import Score from "./Score"

function Student({ students }) {
    return (
      <>
        {students.map(student => (
          <div className="student"> 
            <h2>{student.name}</h2>
            <p>{student.bio}</p>
            {student.scores.map((score) => (
              <Score key={score.id} score={score} /> 
            ))}
          </div>
        ))}
      </>
    );
  }
  

export default Student