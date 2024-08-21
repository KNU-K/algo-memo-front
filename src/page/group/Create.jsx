import React, { useState } from "react";
import "./Create.css";

const Create = () => {
    const [groupName, setGroupName] = useState("");
    const [description, setDescription] = useState("");
    const [maxMembers, setMaxMembers] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ groupName, description, maxMembers });
        alert("그룹이 생성되었습니다!"); // 그룹 생성 후 알림 추가
    };

    return (
        <div className="main-container">
            <h1>그룹 가입</h1>
            <div className="form-container">
                <form onSubmit={handleSubmit} className="group-form">
                    <div className="form-group">
                        <label htmlFor="groupName">그룹 이름:</label>
                        <input type="text" id="groupName" value={groupName} onChange={(e) => setGroupName(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">설명:</label>
                        <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="maxMembers">최대 멤버 수:</label>
                        <input type="number" id="maxMembers" value={maxMembers} onChange={(e) => setMaxMembers(e.target.value)} required min="1" />
                    </div>
                    <button type="submit" className="submit-button">
                        그룹 생성
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Create;
