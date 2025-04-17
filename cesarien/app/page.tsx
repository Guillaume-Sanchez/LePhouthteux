import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import SignleList from "@/src/components/singleListe";

export default function Home() {
    return (
        <main className="container mx-auto p-6 rounded-xl border my-10 bg-gray-500 h-">
            <section className="flex flex-wrap items-center justify-start p-3">
                <SignleList />
                <SignleList />
                <SignleList />
                <SignleList />
                <SignleList />
                <SignleList />
            </section>
        </main>
    );
}