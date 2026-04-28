import molisanaLogo from '../assets/img/logo.png'
export default function AppLogo({ slogan }) {
    return (
        <>
            <img src={molisanaLogo} alt="" />
            {slogan && <p>{slogan}</p>}
        </>

    )

}