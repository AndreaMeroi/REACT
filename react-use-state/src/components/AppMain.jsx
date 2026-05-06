import Button from "./button";
import Card from "./card";

export default function AppMain({ languages }) {



    return (
        <>

            <main>
                <div className="container">


                    <Button languages={languages} />
                    <Card languages={languages} />


                </div>
            </main>



        </>
    )

}