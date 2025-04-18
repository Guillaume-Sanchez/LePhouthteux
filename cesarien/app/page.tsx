import SignleList from "@/src/components/singleListe";
import { Button } from "@/src/components/ui/button";

export default function Home(){
    return (
        <main className="container mx-auto p-6 rounded-xl border my-10 bg-gray-500 h-">
            <section className=" p-3">
                <div className="flex flex-wrap items-center justify-between mb-4">
                    <h2 className="text-white text-2xl">Vos liste de tâche</h2>
                    <Button className="bg-gray-800">Créer un ticket</Button>
                </div>
                <div className="flex flex-wrap items-center justify-start">
                    <SignleList />
                    <SignleList />
                    <SignleList />
                    <SignleList />
                    <SignleList />
                    <SignleList />
                </div>
            </section>
        </main>
    );
}
