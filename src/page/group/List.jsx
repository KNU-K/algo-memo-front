import React, { useState } from "react";
import "./List.css"; // CSS 파일을 생성하여 스타일링

const groupsData = [
    { id: 1, name: "그룹 A", description: "그룹 A에 대한 설명입니다.", memberCount: 10 },
    { id: 2, name: "그룹 B", description: "그룹 B에 대한 설명입니다.", memberCount: 8 },
    { id: 3, name: "그룹 C", description: "그룹 C에 대한 설명입니다.", memberCount: 15 },
    { id: 4, name: "그룹 D", description: "그룹 D에 대한 설명입니다.", memberCount: 5 },
    { id: 5, name: "그룹 E", description: "그룹 E에 대한 설명입니다.", memberCount: 20 },
    { id: 6, name: "그룹 F", description: "그룹 F에 대한 설명입니다.", memberCount: 3 },
    { id: 7, name: "그룹 G", description: "그룹 G에 대한 설명입니다.", memberCount: 12 },
    { id: 8, name: "그룹 H", description: "그룹 H에 대한 설명입니다.", memberCount: 7 },
    { id: 9, name: "그룹 I", description: "그룹 I에 대한 설명입니다.", memberCount: 14 },
    { id: 10, name: "그룹 J", description: "그룹 J에 대한 설명입니다.", memberCount: 6 },
];

const List = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4; // 한 페이지에 보여줄 그룹 수

    // 페이지에 보여줄 그룹을 계산
    const indexOfLastGroup = currentPage * itemsPerPage;
    const indexOfFirstGroup = indexOfLastGroup - itemsPerPage;
    const currentGroups = groupsData.slice(indexOfFirstGroup, indexOfLastGroup);

    const totalPages = Math.ceil(groupsData.length / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleJoinGroup = (groupId) => {
        alert(`그룹 ${groupId}에 참여하였습니다!`);
    };

    return (
        <div className="main-container">
            <div className="list-main-container">
                <h1>그룹 리스트</h1>
                <ul className="list-group-list">
                    <li className="list-group-header">
                        <span>그룹 이름</span>
                        <span>설명</span>
                        <span>멤버 수</span>
                    </li>
                    {currentGroups.map((group) => (
                        <li key={group.id} className="list-group-item">
                            <span className="list-group-name">{group.name}</span>
                            <span className="list-group-description">{group.description}</span>
                            <span className="list-group-member-count">{group.memberCount}</span>
                        </li>
                    ))}
                </ul>
                <div className="list-pagination">
                    <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                        이전
                    </button>
                    <span>{`페이지 ${currentPage} / ${totalPages}`}</span>
                    <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                        다음
                    </button>
                </div>
            </div>
        </div>
    );
};

export default List;
