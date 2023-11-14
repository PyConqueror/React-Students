function Student(students) {
return (
    <div className="student">
    {students.map(student => (
        <p>Name:{student.name}</p>
    ))}
    </div>
)
}

export default Student