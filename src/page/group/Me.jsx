import React from "react";
import { Link } from "react-router-dom";
import "./Me.css";

const groups = [
    { id: 1, name: "그룹 A", joinDate: "2024-01-15", memberCount: 10 },
    { id: 2, name: "그룹 B", joinDate: "2024-03-22", memberCount: 8 },
    { id: 3, name: "그룹 C", joinDate: "2024-05-10", memberCount: 15 },
    { id: 4, name: "그룹 D", joinDate: "2024-06-12", memberCount: 5 },
    { id: 5, name: "그룹 E", joinDate: "2024-07-20", memberCount: 20 },
    { id: 6, name: "그룹 F", joinDate: "2024-07-20", memberCount: 2 },
];

const Me = () => {
    return (
        <div className="main-container">
            <h1 className="me-title">내가 속한 그룹</h1>
            <p className="me-description">여기에서 내가 속한 그룹들을 확인할 수 있습니다.</p>
            <div className="groups-grid">
                {groups.map((group, index) => (
                    <Link to={`/groups/${group.id}`} key={group.id} className="group-card">
                        <div className="group-header">
                            <span className="group-number">{index + 1}</span>
                        </div>
                        <div className="group-body">
                            <h2 className="group-name">{group.name}</h2>
                            <p>
                                <strong>가입 일자:</strong> {group.joinDate}
                            </p>
                            <p>
                                <strong>포함된 인원수:</strong> {group.memberCount}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Me;
