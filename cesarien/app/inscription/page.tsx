'use client'
import { Input } from "@/src/components/ui/input";
import { useState } from "react";
export default function Inscription(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");

    return (
        <main className="flex gap-1.5 justify-center mx-auto h-screen">
            <form className="flex flex-col gap-2 mt-20 w-1/3">
                <h2 className="text-2xl text-gray-800 font-bold text-center">Inscription</h2>
                <Input
                    type="text"
                    placeholder="Nom"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-gray-300 rounded-md p-2"
                />
                <Input
                    type="text"
                    placeholder="Prénom"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                    className="border border-gray-300 rounded-md p-2"
                />
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-300 rounded-md p-2"
                />
                <Input
                    type="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border border-gray-300 rounded-md p-2"
                />
                <Input
                    type="password"
                    placeholder="Confirmer le mot de passe"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="border border-gray-300 rounded-md p-2"
                />
                <button
                    type="submit"
                    className="bg-gray-800 text-white rounded-md p-2 mt-4 hover:bg-gray-500 transition duration-200"
                >
                    S'inscrire
                </button>
            </form>
        </main>
    );
}