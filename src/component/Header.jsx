import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <h1 onClick={() => (window.location.href = "/")}>알고 메모</h1>
                <nav className="header-nav">
                    <a href="/">홈</a>
                    <a href="/group/create">그룹 만들기</a>
                    <a href="/group/me">내 그룹</a>
                    <a href="/group/list">그룹 목록</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
