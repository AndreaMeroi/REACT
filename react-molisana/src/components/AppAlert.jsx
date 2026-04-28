export default function AppAlert({ type, children }) {
    console.log(type);

    return (
        <div className={`alert bg-${type}`}>

            {children}

        </div>
    )
}