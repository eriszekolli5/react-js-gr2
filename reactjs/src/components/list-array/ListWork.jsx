import React, { useState } from 'react';
import "./ListWork.css";


function ListWork() {
    const [students, setStudents] = useState([
        {
            id: 1,
            firstName: "eris",
            lastName: "zekolli"
        },
        {
            id: 2,
            firstName: "eri",
            lastName: "zekolli"
        },
        {
            id: 3,
            firstName: "er",
            lastName: "zekolli"
        },
        {
            id: 4,
            firstName: "eris",
            lastName: "zekolli"
        },
        {
            id: 5,
            firstName: "eri",
            lastName: "zekolli"
        },
        {
            id: 6,
            firstName: "er",
            lastName: "zekolli"
        }
    ]);

    console.log(students);
    const [favorites, setFavorites] = useState([]);
    const toggleFavorite = (student) => {
        const exists = favorites.find((fav) => fav.id === student.id);

        if (exists) {
            setFavorites(favorites.filter((fav) => fav.id !== student.id));
        } else {
            setFavorites([...favorites, student]);
        }
    };

    return (
        <div className="container">
            <ul className="student-list">
                {students.map((student) => (
                    <li key={student.id} className="student-card">
                        <p>id: {student.id}</p>
                        <h3>{student.firstName}</h3>
                        <h3>{student.lastName}</h3>

                        <button
                            className="favorite-btn add-btn"
                            onClick={() => toggleFavorite(student)}
                        >
                            add to favorites
                        </button>
                    </li>
                ))}
            </ul>
            <hr />
            <div className="favorites">
                <h1>Favorites</h1>

                <ul className="student-list">
                    {favorites.map((student) => (
                        <li key={student.id} className="student-card">
                            <p>id: {student.id}</p>
                            <h3>{student.firstName}</h3>
                            <h3>{student.lastName}</h3>

                            <button onClick={() => toggleFavorite(student)}>
                                remove from favorite
                            </button>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    );
}

export default ListWork;