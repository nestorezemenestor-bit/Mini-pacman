function StudentCard(props) {
    return (
        <>
        <div>
            <h2>{props.name}</h2>
            <p>
                Age: {props.age}
            </p>
            <p>
                Department: {props.department}
            </p>
                <p>
                    Level: {props.level}
                </p>
              </div>
          </>
    );
}




export default StudentCard;