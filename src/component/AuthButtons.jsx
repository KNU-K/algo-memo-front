import "./AuthButtons.css";

const AuthButtons = () => {
    return (
        <div className="auth-buttons">
            <a href="#login" className="auth-button login">
                로그인
            </a>
            <a href="#signup" className="auth-button signup">
                회원가입
            </a>
        </div>
    );
};

export default AuthButtons;
