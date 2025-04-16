import {Card, CardTitle, CardHeader} from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";

const Connexion = () => {

    return (
        <main className="flex gap-1.5 justify-center mx-auto">
            <form action="">
                <Card className="align-middle flex justify-center w-full gap-4 p-10">
                    <CardHeader className="align-middle flex justify-center">
                        <CardTitle className="">Connexion</CardTitle>
                    </CardHeader>
                    
                        <label htmlFor="email">Email</label>
                        <Input id="email" type="email" />
                        <label htmlFor="password">Mot de passe</label>
                        <Input id="password" type="password" />
                        <Input id="submit" type="submit" value='Connexion' />
                </Card>
            </form>
        </main>
    );

}
export default Connexion;