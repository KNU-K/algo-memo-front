import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <h1>알고 메모</h1>
                <nav className="header-nav">
                    <a href="#home">홈</a>
                    <a href="#join">그룹 가입</a>
                    <a href="#my-groups">내 그룹</a>
                    <a href="#find-groups">그룹 검색</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
